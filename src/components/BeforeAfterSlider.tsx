import { useState, useRef, useCallback, useEffect } from 'react'

interface BeforeAfterSliderProps {
  /** Separate before image */
  beforeSrc: string
  /** Separate after image */
  afterSrc: string
  /** Optional class for the outer container */
  className?: string
  /** Aspect ratio of the panel, e.g. "4/5". Defaults to "4/5" */
  aspectRatio?: string
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  className = '',
  aspectRatio = '4/5',
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50) // 0–100
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(98, Math.max(2, x)))
  }, [])

  // ── Mouse events ──────────────────────────────────────────────────────────
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true
    e.preventDefault()
  }, [])

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging.current) updatePosition(e.clientX)
  }, [updatePosition])

  const onMouseUp = useCallback(() => { isDragging.current = false }, [])

  // ── Touch events ──────────────────────────────────────────────────────────
  const onTouchStart = useCallback(() => { isDragging.current = true }, [])
  const onTouchMove = useCallback((e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX)
  }, [updatePosition])
  const onTouchEnd = useCallback(() => { isDragging.current = false }, [])

  // Attach global mousemove/mouseup so drag continues outside container
  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [onMouseMove, onMouseUp])

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden select-none rounded-2xl shadow-xl cursor-ew-resize ${className}`}
      style={{ aspectRatio }}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* ── BEFORE layer (full image) ─────────────────────────────────── */}
      <div className="absolute inset-0">
        <img
          src={beforeSrc}
          alt="Before treatment"
          draggable={false}
          className="w-full h-full object-cover object-center"
        />
        {/* Before label */}
        <span className="absolute bottom-4 left-4 bg-dark/70 backdrop-blur-sm text-white font-body text-[9px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full pointer-events-none z-10">
          Before
        </span>
      </div>

      {/* ── AFTER layer (full image) — clipped from the left ────────────── */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={afterSrc}
          alt="After treatment"
          draggable={false}
          className="w-full h-full object-cover object-center"
        />
        {/* After label */}
        <span className="absolute bottom-4 right-4 bg-[#1A5F62]/90 backdrop-blur-sm text-white font-body text-[9px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full pointer-events-none">
          After
        </span>
      </div>

      {/* ── Slider divider ────────────────────────────────────────────── */}
      <div
        className="absolute top-0 bottom-0 z-20 pointer-events-none"
        style={{ left: `${position}%` }}
      >
        {/* Vertical line */}
        <div className="absolute inset-y-0 left-0 w-px bg-white/80 shadow-[0_0_8px_rgba(0,0,0,0.4)]" />

        {/* Drag handle */}
        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-xl flex items-center justify-center gap-0.5">
          {/* Left chevron */}
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#1A5F62" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          {/* Right chevron */}
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#1A5F62" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      </div>

      {/* Hint — fades away once user drags */}
      <div
        className="absolute inset-x-0 top-4 flex justify-center pointer-events-none z-10 transition-opacity duration-500"
        style={{ opacity: position === 50 ? 1 : 0 }}
      >
        <span className="bg-black/40 backdrop-blur-sm text-white font-body text-[9px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">
          ← Drag to reveal →
        </span>
      </div>
    </div>
  )
}
