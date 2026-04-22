import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const reasons = [
  {
    num: '01',
    title: '20+ Years of Clinical Experience',
    body: "We've seen every skin type, every concern. Nothing surprises us.",
  },
  {
    num: '02',
    title: '10,000+ Customers Served',
    body: 'Our results speak louder than our marketing.',
  },
  {
    num: '03',
    title: 'Certified Therapists',
    body: 'Every treatment is performed by trained, certified professionals.',
  },
  {
    num: '04',
    title: 'Treatments Tailored to You',
    body: "No one-size-fits-all. Your skin is unique.",
  },
  {
    num: '05',
    title: '3 Convenient Branches',
    body: 'Cheras, Bangi Seksyen 7 & 9. Always close to you.',
  },
]

const floatingStats = [
  { num: '20+', label: 'Years' },
  { num: '10K', label: 'Clients' },
  { num: '3',   label: 'Branches' },
]

export default function WhyAnanaz() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="why" ref={ref} className="bg-cream py-28 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="font-body text-xs tracking-[0.25em] uppercase text-gold flex items-center gap-3 mb-4"
        >
          <span className="inline-block w-8 h-px bg-gold" />
          Why Choose Us
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl lg:text-5xl font-semibold text-dark mb-16 lg:mb-20 max-w-lg"
        >
          Five Reasons Thousands Trust Ananaz.
        </motion.h2>

        {/* Two-column on desktop, single column on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left: Staircase items */}
          <div className="flex flex-col gap-8">
            {reasons.map((r, i) => (
              <motion.div
                key={r.num}
                initial={{ opacity: 0, x: -32 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="why-item relative flex items-start gap-8 max-w-xl"
              >
                {/* Faded number behind */}
                <span
                  className="absolute -left-10 top-1/2 -translate-y-1/2 font-display text-[6rem] font-semibold text-gold/8 leading-none select-none pointer-events-none"
                  aria-hidden
                >
                  {r.num}
                </span>

                {/* Gold left border */}
                <div className="flex-shrink-0 w-px self-stretch bg-gold/40 ml-2" />

                <div className="pl-4 py-2">
                  <div className="font-body text-[10px] tracking-[0.22em] uppercase text-gold mb-2">{r.num}</div>
                  <h3 className="font-display text-xl lg:text-2xl font-semibold text-dark mb-2">{r.title}</h3>
                  <p className="font-body text-muted text-sm leading-relaxed">{r.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Visual panel — desktop only */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            {/* Main tall image */}
            <div className="img-placeholder w-full h-[560px] relative overflow-hidden">
              {/* Gold corner accent top-right */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold/70 pointer-events-none z-10" />
              {/* Gold corner accent bottom-left */}
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-gold/70 pointer-events-none z-10" />
            </div>

            {/* Floating pull quote — overlaps top-left of image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="absolute -left-10 top-10 bg-cream shadow-2xl border-l-2 border-gold px-6 py-5 max-w-[220px] z-20"
            >
              <p className="font-display text-base italic text-dark leading-snug">
                "The skin you deserve is within reach."
              </p>
              <div className="mt-3 font-body text-[10px] tracking-widest uppercase text-gold">— Pn Samsinar</div>
            </motion.div>

            {/* Floating stats row — overlaps bottom of image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -bottom-6 left-8 right-0 bg-dark flex z-20"
            >
              {floatingStats.map(({ num, label }, i) => (
                <div
                  key={label}
                  className={`flex-1 px-5 py-5 text-center ${i < floatingStats.length - 1 ? 'border-r border-white/10' : ''}`}
                >
                  <div className="font-display text-2xl font-semibold text-gold leading-none">{num}</div>
                  <div className="font-body text-[10px] tracking-widest uppercase text-white/40 mt-1">{label}</div>
                </div>
              ))}
            </motion.div>

            {/* Vertical gold accent line — far right */}
            <div className="absolute -right-6 top-16 bottom-16 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
