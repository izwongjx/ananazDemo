import { useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Star, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'

// ─── Review Data ───────────────────────────────────────────────────────────────

type FilterTag = 'All' | 'Skin Tags' | 'Milia' | 'Face & Neck' | 'First Visit'

const allReviews = [
  {
    id: 'r1',
    tags: ['Skin Tags', 'Face & Neck'] as FilterTag[],
    concern: 'SKIN TAGS · NECK',
    text: '"I had skin tags along my neckline for years and was embarrassed every time I wore baju kurung. After my visit with Kak Sam, they were gone. My neck looks so clean now. I wish I had done this sooner."',
    name: 'Norsyafikah A.',
    meta: 'Age 43 · Petaling Jaya',
    stars: 5,
  },
  {
    id: 'r2',
    tags: ['Milia'] as FilterTag[],
    concern: 'MILIA · UNDER-EYE',
    text: '"I had those tiny white bumps under my eyes for so long. I was scared it would hurt or leave marks. Kak Sam explained everything before she started. It was comfortable and my skin healed beautifully. Very professional."',
    name: 'Linda C.',
    meta: 'Age 51 · Shah Alam',
    stars: 5,
  },
  {
    id: 'r3',
    tags: ['First Visit'] as FilterTag[],
    concern: 'FIRST VISIT · NERVOUS',
    text: '"I was so nervous before coming. I had searched online for months and couldn\'t decide where to go. Kak Sam made me feel so calm from the moment I arrived. She didn\'t push anything. She just explained honestly and let me decide."',
    name: 'Roslinda H.',
    meta: 'Age 38 · Kajang',
    stars: 5,
  },
  {
    id: 'r4',
    tags: ['Face & Neck'] as FilterTag[],
    concern: 'SEBORRHOEIC KERATOSIS',
    text: '"I had rough, dark patches on my face that appeared after menopause. I thought I had to live with them. Kak Sam identified them immediately and explained my options clearly. The result after one session was amazing."',
    name: 'Hajjah Rosnah M.',
    meta: 'Age 62 · Bangi',
    stars: 5,
  },
  {
    id: 'r5',
    tags: ['Skin Tags'] as FilterTag[],
    concern: 'SKIN TAGS · UNDERARMS',
    text: '"I had skin tags in my underarms that caught on my clothing and were painful sometimes. Kak Sam was efficient, gentle, and professional. Healed in about 2 weeks. I\'ve since referred my sister and my colleague."',
    name: 'Faridah Z.',
    meta: 'Age 45 · Cheras',
    stars: 5,
  },
  {
    id: 'r6',
    tags: ['Skin Tags', 'First Visit'] as FilterTag[],
    concern: 'CONFIDENCE · OVERALL',
    text: '"I honestly didn\'t realise how much those skin tags were affecting me until they were gone. I stopped touching my neck all the time. I made eye contact more easily. Small thing — big difference. Thank you Kak Sam."',
    name: 'Zuraidah K.',
    meta: 'Age 49 · Ampang',
    stars: 5,
  },
]

const filters: FilterTag[] = ['All', 'Skin Tags', 'Milia', 'Face & Neck', 'First Visit']

// ─── Helpers ──────────────────────────────────────────────────────────────────

function SmallStarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-gold fill-gold" />
      ))}
    </div>
  )
}

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-1 justify-center">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-gold fill-gold" />
      ))}
    </div>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Reviews() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeFilter, setActiveFilter] = useState<FilterTag>('All')
  const [mobileIndex, setMobileIndex] = useState(0)
  const [desktopPage, setDesktopPage] = useState(0)

  const filtered = activeFilter === 'All'
    ? allReviews
    : allReviews.filter(r => r.tags.includes(activeFilter))

  const desktopPerPage = 3
  const desktopTotalPages = Math.ceil(filtered.length / desktopPerPage)
  const desktopSlice = filtered.slice(desktopPage * desktopPerPage, (desktopPage + 1) * desktopPerPage)

  const handleFilterChange = (f: FilterTag) => {
    setActiveFilter(f)
    setMobileIndex(0)
    setDesktopPage(0)
  }

  const prevMobile = () => setMobileIndex(i => (i - 1 + filtered.length) % filtered.length)
  const nextMobile = () => setMobileIndex(i => (i + 1) % filtered.length)
  const prevDesktop = () => setDesktopPage(p => (p - 1 + desktopTotalPages) % desktopTotalPages)
  const nextDesktop = () => setDesktopPage(p => (p + 1) % desktopTotalPages)

  return (
    <section id="reviews" ref={ref} className="py-24 lg:py-32 overflow-hidden relative">
      <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(145deg, #1A5F62 0%, #2D8B8E 40%, #3D6060 70%, #2C2621 100%)' }} />
      <div className="max-w-6xl mx-auto px-6 lg:px-10 flex flex-col items-center w-full relative z-10">

        {/* ── Header ───────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <span className="w-8 h-px bg-[#c9866b]" />
          <p className="font-body text-xs tracking-[0.2em] uppercase text-[#c9866b] font-bold">In Their Own Words</p>
          <span className="w-8 h-px bg-[#c9866b]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-center mb-4"
        >
          <h2 className="font-display text-4xl lg:text-5xl text-white font-light leading-tight">
            What our clients<br />
            <span className="italic text-gold font-semibold">actually say.</span>
          </h2>
          <div className="w-12 h-px bg-gold/50 mx-auto my-6" />
          <p className="font-body text-white/70 text-sm lg:text-base max-w-lg mx-auto leading-relaxed">
            Organised by concern — because we know you're reading to find someone who felt what you're feeling now.
          </p>
        </motion.div>

        {/* ── Filter Tabs ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          {filters.map(f => (
            <button
              key={f}
              onClick={() => handleFilterChange(f)}
              className={`font-body text-[11px] font-bold tracking-[0.15em] uppercase px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeFilter === f
                  ? 'bg-white text-dark shadow-md'
                  : 'border border-white/25 text-white/70 hover:border-white/50 hover:text-white'
              }`}
            >
              {f === 'All' ? 'All Concerns' : f}
            </button>
          ))}
        </motion.div>

        {/* ── MOBILE: single-card carousel ──────────────────────────── */}
        <div className="w-full md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeFilter}-${mobileIndex}`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              className="border border-white/10 bg-white/5 rounded-2xl p-7 flex flex-col gap-5 text-left"
            >
              {filtered[mobileIndex] && (() => {
                const r = filtered[mobileIndex]
                return (
                  <>
                    <span className="inline-block self-start border border-gold/40 text-gold font-body text-[9px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full">
                      {r.concern}
                    </span>
                    <SmallStarRow count={r.stars} />
                    <p className="font-display italic text-white/90 leading-relaxed text-base flex-grow">{r.text}</p>
                    <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                      <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-body text-xs font-bold text-gold flex-shrink-0">
                        {r.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-body text-sm font-bold text-white">{r.name}</div>
                        <div className="font-body text-[11px] text-white/50">{r.meta}</div>
                      </div>
                    </div>
                  </>
                )
              })()}
            </motion.div>
          </AnimatePresence>

          {/* Mobile arrows + counter */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <button
              onClick={prevMobile}
              className="w-11 h-11 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-white transition-colors flex items-center justify-center bg-white/5 cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="font-body text-white/50 text-xs tracking-widest">
              {mobileIndex + 1} / {filtered.length}
            </span>
            <button
              onClick={nextMobile}
              className="w-11 h-11 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-white transition-colors flex items-center justify-center bg-white/5 cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* ── DESKTOP: 3-card paginated slider ─────────────────────────── */}
        <div className="hidden md:block w-full">
          <div className="relative flex items-center justify-center">
            {/* Left arrow */}
            <button
              onClick={prevDesktop}
              className="absolute -left-6 lg:-left-14 z-20 w-11 h-11 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-white transition-colors flex items-center justify-center bg-white/5 cursor-pointer flex-shrink-0"
              aria-label="Previous reviews"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="w-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeFilter}-${desktopPage}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.35 }}
                  className="grid grid-cols-2 lg:grid-cols-3 gap-5"
                >
                  {desktopSlice.map((r, i) => (
                    <div
                      key={r.id}
                      className="border border-white/10 bg-white/5 rounded-2xl p-7 flex flex-col gap-5 hover:bg-white/10 transition-colors duration-300 text-left"
                    >
                      <span className="inline-block self-start border border-gold/40 text-gold font-body text-[9px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full">
                        {r.concern}
                      </span>
                      <SmallStarRow count={r.stars} />
                      <p className="font-display italic text-white/90 leading-relaxed text-base lg:text-lg flex-grow">{r.text}</p>
                      <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                        <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-body text-xs font-bold text-gold flex-shrink-0">
                          {r.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-body text-sm font-bold text-white">{r.name}</div>
                          <div className="font-body text-[11px] text-white/50">{r.meta}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right arrow */}
            <button
              onClick={nextDesktop}
              className="absolute -right-6 lg:-right-14 z-20 w-11 h-11 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-white transition-colors flex items-center justify-center bg-white/5 cursor-pointer flex-shrink-0"
              aria-label="Next reviews"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Desktop page counter */}
          <div className="flex justify-center mt-6">
            <span className="font-body text-white/40 text-xs tracking-widest">
              {desktopPage + 1} / {desktopTotalPages}
            </span>
          </div>
        </div>

        {/* ── Google CTA ───────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-14"
        >
          <a
            href="https://www.google.com/search?q=ananaz+medispa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 border border-gold text-gold font-body text-xs tracking-widest uppercase font-bold hover:bg-gold hover:text-white transition-colors rounded-full"
          >
            View more on Google <ExternalLink size={14} />
          </a>
        </motion.div>

      </div>
    </section>
  )
}
