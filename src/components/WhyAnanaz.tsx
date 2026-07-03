import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight, Target, MessageSquare, RefreshCw, Globe, Handshake } from 'lucide-react'

const reasons = [
  {
    id: 1,
    highlight: '01',
    title: 'We Specialise, Not Generalise',
    body: 'Skin tag and benign growth removal is not a side service for us. It is our core expertise. Depth of focus produces consistently better outcomes than trying to do everything for everyone.',
    icon: Target,
  },
  {
    id: 2,
    highlight: '02',
    title: 'We Communicate Honestly',
    body: 'If a result cannot be guaranteed, we say so. If your expectation needs adjusting, we address it kindly but directly. Clients trust us because they know we tell them the truth.',
    icon: MessageSquare,
  },
  {
    id: 3,
    highlight: '03',
    title: 'Clients Return for Years',
    body: 'Our most loyal clients have been with us for 10, 15, even 20 years. That kind of long-term trust is the measure we care about most — not social media metrics or monthly promotions.',
    icon: RefreshCw,
  },
  {
    id: 4,
    highlight: '04',
    title: 'We Know Malaysian Skin',
    body: 'Experience in Malaysia means understanding how Malay, Chinese, Indian, and mixed-heritage skin responds — to treatment, to aftercare, and to our climate. This is knowledge that textbooks cannot replace.',
    icon: Globe,
  },
  {
    id: 5,
    highlight: '05',
    title: 'Personal, Consistent Care',
    body: 'You will not be handed between staff members each time you visit. You build a relationship with someone who knows your skin\'s history — and who adjusts your care as your skin changes over time.',
    icon: Handshake,
  },
]

export default function WhyAnanaz() {
  const ref = useRef(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef
      const scrollAmount = current.clientWidth * 0.8
      current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section id="why" ref={ref} className="bg-[#386F70] py-24 lg:py-32 overflow-x-clip relative">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="w-12 h-px bg-[#c9866b]" />
            <h2 className="font-body text-xs sm:text-[13px] tracking-[0.2em] uppercase text-[#c9866b] font-bold">Why Ananaz</h2>
            <span className="w-12 h-px bg-[#c9866b]" />
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl lg:text-5xl font-semibold text-white"
          >
            5 reasons women choose <span className="italic text-gold font-bold">Ananaz</span>
          </motion.h3>
        </div>

        {/* 5-Column Grid Layout Desktop / Horizontal Scroll Mobile */}
        <div ref={scrollRef} className="flex overflow-x-auto md:grid md:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6 pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 snap-x snap-mandatory hide-scrollbar scroll-smooth">
          {reasons.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="w-[75vw] sm:w-[280px] md:w-auto flex-shrink-0 snap-center bg-white/5 border border-white/5 rounded-2xl p-8 lg:p-10 flex flex-col items-start text-left hover:bg-white/10 hover:border-gold/30 hover:-translate-y-2 transition-all duration-500 group relative"
            >
              {/* Top row: Icon on left, Highlight number on right */}
              <div className="w-full flex items-center justify-between mb-8 text-gold">
                {r.icon ? (
                  <r.icon size={32} strokeWidth={1.5} className="group-hover:scale-110 transition-transform duration-500" />
                ) : (
                  <div className="h-8 w-8" />
                )}
                {r.highlight && (
                  <span className="font-display text-4xl font-light tracking-tight leading-none text-white/20 group-hover:text-gold/20 transition-colors duration-500">
                    {r.highlight}
                  </span>
                )}
              </div>

              {/* Title & Body */}
              <h4 className="font-body text-sm font-bold text-white uppercase tracking-wider mb-4 group-hover:text-gold transition-colors duration-300">
                {r.title}
              </h4>
              
              <p className="font-body text-[13px] text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                {r.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mt-2 md:hidden">
          <button 
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>

      </div>

      {/* Decorative Divider seamlessly between sections */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 flex items-center justify-center w-[300px]">
        <div className="flex-1 h-px bg-gold"></div>
        <div className="px-4 text-gold text-xs leading-none">◆</div>
        <div className="flex-1 h-px bg-gold"></div>
      </div>
    </section>
  )
}
