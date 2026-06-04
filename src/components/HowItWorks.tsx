import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageSquareHeart, ClipboardList, Sparkles, HeartHandshake } from 'lucide-react'

const steps = [
  {
    num: '01',
    title: 'Honest consultation',
    desc: 'We listen first. Assess your skin with 25 years of expertise. No upselling.',
    icon: MessageSquareHeart,
  },
  {
    num: '02',
    title: 'Personalised plan',
    desc: 'A treatment plan built around what your skin actually needs — not a standard menu.',
    icon: ClipboardList,
  },
  {
    num: '03',
    title: 'Expert treatment',
    desc: 'Performed by our trained team — every technique refined over 25 years of practice.',
    icon: Sparkles,
  },
  {
    num: '04',
    title: 'Follow-up care',
    desc: "We check in after every visit. Your skin journey doesn't end when you leave.",
    icon: HeartHandshake,
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
            <span className="w-12 h-px bg-gold" />
            <h2 className="font-body text-[10px] tracking-[0.3em] uppercase text-gold font-bold">How It Works</h2>
            <span className="w-12 h-px bg-gold" />
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl font-light text-dark mb-6"
          >
            Your skin journey starts with <br className="hidden sm:block" />
            <span className="italic text-gold font-light">a conversation.</span>
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
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-[#DD9474]/20 -translate-y-1/2 z-0" />
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
            className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-[#DD9474]/50 -translate-y-1/2 z-0 origin-left"
          />

          {/* Steps Layout */}
          <div className="flex flex-col lg:grid lg:grid-cols-4 gap-12 lg:gap-6 relative z-10">
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
                <div className="w-16 h-16 rounded-full bg-[#FDF6F2] border border-gold/30 flex items-center justify-center flex-shrink-0 z-10 relative lg:mb-6">
                  <span className="font-display text-2xl font-bold text-gold">{step.num}</span>
                </div>

                {/* Content */}
                <div className="pt-2 lg:pt-0 relative z-10 px-2">
                  <h4 className="font-display text-xl font-medium text-dark mb-3 lg:mb-4">
                    {step.title}
                  </h4>
                  <p className="font-body text-xs lg:text-sm text-dark/60 leading-relaxed max-w-sm lg:max-w-[200px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
