import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Infinity, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react'

const reasons = [
  {
    id: 1,
    highlight: '25+',
    title: 'Years of Expertise',
    body: 'Founded in 2000. The deepest skin expertise in this market.',
    icon: null,
  },
  {
    id: 2,
    highlight: '4.9',
    title: 'Star Rating',
    body: 'Verified by thousands of real clients across Malaysia.',
    icon: Star,
  },
  {
    id: 3,
    highlight: '01',
    title: 'Founder-Led Care',
    body: 'Sam built this from her own skin struggle. She knows your pain personally.',
    icon: null,
  },
  {
    id: 4,
    highlight: null,
    title: 'No Hard Selling',
    body: 'We tell you what your skin needs - not what earns us the most.',
    icon: Infinity,
  },
  {
    id: 5,
    highlight: null,
    title: 'Post-Visit Follow-Up',
    body: "We check in on WhatsApp after every treatment. Because your skin doesn't stop.",
    icon: MessageCircle,
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
            <span className="w-12 h-px bg-gold/50" />
            <h2 className="font-body text-[10px] tracking-[0.3em] uppercase text-gold font-bold">Why Ananaz</h2>
            <span className="w-12 h-px bg-gold/50" />
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl lg:text-5xl font-semibold text-white"
          >
            5 reasons women choose <span className="italic text-gold font-light">Ananaz</span>
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
              className="w-[75vw] sm:w-[280px] md:w-auto flex-shrink-0 snap-center bg-white/5 border border-white/5 rounded-2xl p-8 lg:p-10 flex flex-col items-center text-center hover:bg-white/10 hover:border-gold/30 hover:-translate-y-2 transition-all duration-500 group"
            >
              {/* Highlight / Icon Area */}
              <div className="h-20 flex items-center justify-center mb-6 text-gold">
                {r.highlight && r.icon === Star ? (
                  <div className="flex items-start gap-1">
                    <span className="font-display text-5xl font-medium tracking-tight leading-none">{r.highlight}</span>
                    <r.icon size={24} className="fill-gold mt-1" />
                  </div>
                ) : r.highlight ? (
                  <span className="font-display text-5xl font-medium tracking-tight leading-none">{r.highlight}</span>
                ) : r.icon ? (
                  <r.icon size={56} strokeWidth={1.5} className="group-hover:scale-110 transition-transform duration-500" />
                ) : null}
              </div>

              {/* Title & Body */}
              <h4 className="font-body text-sm font-bold text-white uppercase tracking-wider mb-4 group-hover:text-gold transition-colors duration-300">
                {r.title}
              </h4>
              
              <p className="font-body text-[13px] text-white leading-relaxed">
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
