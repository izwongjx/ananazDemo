import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, ShieldCheck, Zap, Star, Clock } from 'lucide-react'
import { waBook } from '../lib/whatsapp'

const trustSignals = [
  { icon: Zap, label: 'Zero Downtime' },
  { icon: ShieldCheck, label: 'Clinically Safe' },
  { icon: Star, label: 'Visible After 1st Session' },
  { icon: Clock, label: 'Quick 30-min Procedure' },
]

export default function SpotlightTreatment() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="spotlight"
      ref={ref}
      className="bg-dark py-28 lg:py-36 overflow-hidden relative"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#B8963E 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-body text-xs tracking-[0.25em] uppercase text-gold flex items-center gap-3 mb-8"
        >
          <span className="inline-block w-8 h-px bg-gold" />
          Signature Treatment
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-[1.15] mb-4"
            >
              The Treatment<br />
              <span className="text-gold italic">Everyone's</span><br />
              Talking About.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-body text-gold/80 text-sm tracking-wide mb-6"
            >
              Pro Series Skin Tag Removal — <strong className="text-gold">RM199</strong>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="font-body text-white/60 text-base leading-relaxed max-w-md mb-10"
            >
              Our 13-in-1 Skin Tag treatment is Ananaz's most sought-after procedure. Using advanced non-invasive techniques, we remove skin tags safely, with zero downtime and visible results after the first session.
            </motion.p>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="grid grid-cols-2 gap-4 mb-10"
            >
              {trustSignals.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <Icon size={14} className="text-gold" />
                  </div>
                  <span className="font-body text-xs text-white/70 tracking-wide">{label}</span>
                </div>
              ))}
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
              whileTap={{ scale: 0.96 }}
              href={waBook('Skin Tag Removal (Pro Series)')}
              target="_blank"
              rel="noopener noreferrer"
              id="spotlight-cta"
              className="btn-premium btn-premium-solid shimmer px-8 py-4 text-xs tracking-widest uppercase font-bold cursor-pointer flex items-center gap-2"
            >
              Enquire More
              <ArrowRight size={14} />
            </motion.a>
          </div>

          {/* Right: Before/After Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            <div className="img-placeholder w-full h-[460px] lg:h-[560px]" />

            {/* Before/After label */}
            <div className="absolute bottom-0 left-0 right-0 flex">
              <div className="flex-1 bg-dark/80 backdrop-blur-sm text-center py-3">
                <span className="font-body text-xs tracking-widest uppercase text-white/50">Before</span>
              </div>
              <div className="w-px bg-gold/50" />
              <div className="flex-1 bg-gold/20 backdrop-blur-sm text-center py-3">
                <span className="font-body text-xs tracking-widest uppercase text-gold">After</span>
              </div>
            </div>

            {/* Price badge */}
            <div className="absolute top-6 right-6 bg-gold/95 text-dark px-4 py-3 text-center">
              <div className="font-display text-2xl font-semibold">RM199</div>
              <div className="font-body text-[10px] tracking-wide line-through opacity-60">was RM330</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
