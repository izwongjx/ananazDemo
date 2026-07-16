import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageSquareHeart, ClipboardList, Sparkles, HeartHandshake } from 'lucide-react'

const steps = [
  {
    num: '💬',
    title: 'Share Your Concern',
    desc: "Tell us what’s worrying you. A WhatsApp message or photo is enough to get started.",
    tag: 'WHATSAPP',
  },
  {
    num: '🔍',
    title: 'Personal Skin Assessment',
    desc: "We carefully examine your skin and identify exactly what you’re dealing with.",
    tag: 'IN-CLINIC',
  },
  {
    num: '📋',
    title: 'Your Personalised Plan',
    desc: "Together, we discuss the most suitable treatment options. You decide what feels right for you.",
    tag: 'YOUR DECISION',
  },
  {
    num: '✨',
    title: 'Sam Precision Signature',
    desc: "Every skin growth is treated with precision, care and attention to healthy healing.",
    tag: 'SAM PRECISION',
  },
  {
    num: '🌿',
    title: 'Aftercare & Recovery',
    desc: (
      <>
        Your journey doesn’t end after treatment.
        <br />
        <br />
        We’re here to support your recovery and answer your questions every step of the way.
      </>
    ),
    tag: 'FULL SUPPORT',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-32 lg:py-48 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="w-12 h-px bg-[#c9866b]" />
            <h2 className="font-body text-xs sm:text-[13px] tracking-[0.2em] uppercase text-[#c9866b] font-bold">How It Works</h2>
            <span className="w-12 h-px bg-[#c9866b]" />
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-2xl md:text-3xl lg:text-4xl xl:text-[2.75rem] lg:whitespace-nowrap tracking-tight font-light text-dark mb-6"
          >
            Your journey to healthier skin begins with understanding - <span className="italic text-gold font-light">not assumptions.</span>
          </motion.h3>

          <motion.p 
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-body text-base lg:text-lg text-dark/70"
          >
            No packages. No pressure. Just honest expertise from day one.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative mt-16 lg:mt-24">
          
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-[#DD9474]/20 -translate-y-1/2 z-0" />
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
            className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-[#DD9474]/50 -translate-y-1/2 z-0 origin-left"
          />

          {/* Steps Layout */}
          <div className="flex flex-col lg:grid lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className="
                  relative group transition-all duration-500
                  flex items-start gap-6
                  lg:flex-col lg:items-center lg:text-center lg:bg-transparent
                "
              >
                {/* Mobile Vertical Line */}
                {i !== steps.length - 1 && (
                  <div className="lg:hidden absolute left-8 top-16 bottom-[-3rem] w-px bg-gold/20 z-0" />
                )}
                {/* Mobile Animated Vertical Line */}
                {i !== steps.length - 1 && (
                  <motion.div 
                    initial={{ scaleY: 0 }}
                    animate={inView ? { scaleY: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + i * 0.2, ease: 'linear' }}
                    className="lg:hidden absolute left-8 top-16 bottom-[-3rem] w-px bg-gold/50 z-0 origin-top"
                  />
                )}

                {/* Node Circle (Desktop & Mobile) */}
                <div className="w-16 h-16 rounded-full bg-[#FDF6F2] border border-gold/20 flex items-center justify-center flex-shrink-0 z-10 relative lg:mb-6 shadow-sm group-hover:border-gold/40 transition-colors duration-300">
                  <span className="font-display text-2xl font-light text-gold">{step.num}</span>
                </div>

                {/* Content */}
                <div className="pt-2 lg:pt-0 relative z-10 px-2 flex flex-col lg:items-center">
                  <h4 className="font-display text-xl font-medium text-dark mb-3 lg:mb-4">
                    {step.title}
                  </h4>
                  <p className="font-body text-xs lg:text-sm text-dark/60 leading-relaxed max-w-sm lg:max-w-[200px] mx-auto">
                    {step.desc}
                  </p>
                  
                  {/* Tag badge pill at the bottom */}
                  {step.tag && (
                    <div className="mt-4">
                      <span className="inline-block bg-[#FDF6F2] border border-gold/10 text-gold font-body text-[9px] font-bold tracking-[0.2em] uppercase px-3.5 py-1.5 rounded">
                        {step.tag}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
