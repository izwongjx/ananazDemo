import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="py-28 lg:py-36 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section label */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="font-body text-xs tracking-[0.25em] uppercase text-gold mb-16 flex items-center gap-3"
        >
          <span className="inline-block w-8 h-px bg-gold" />
          Our Story
        </motion.p>

        {/* Main two-column */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start"
        >
          {/* Left: Pull quote */}
          <motion.div variants={fadeUp} className="relative">
            <div className="absolute -top-6 -left-4 font-display text-[8rem] leading-none text-gold/10 select-none pointer-events-none">
              "
            </div>
            <blockquote className="font-display text-3xl lg:text-4xl xl:text-5xl italic font-semibold text-gold leading-[1.25] relative z-10">
              "We don't just treat skin. We restore confidence."
            </blockquote>
            <div className="mt-6 w-12 h-px bg-gold opacity-60" />
            <p className="mt-4 font-body text-sm text-muted tracking-wide">— Pn Samsinar, Founder</p>
          </motion.div>

          {/* Right: Body paragraphs + CTA */}
          <motion.div variants={stagger} className="space-y-6">
            {[
              'Ananaz was founded in 2000 by Pn Samsinar with one mission — to bring effective, trustworthy beauty treatments to Malaysian women. Over two decades later, we operate three branches across Selangor, serve thousands of loyal customers, and train the next generation of beauty professionals through Ananaz Beauty Academy.',
              'We believe great skin isn\'t a luxury. It\'s something every woman deserves access to — with the right treatment, the right hands, and 20 years of expertise behind it.',
              'From clinical skin procedures to indulgent body treatments and bridal packages, Ananaz has grown into the most trusted name in Malaysian medispa care — not through marketing, but through results.',
            ].map((para, i) => (
              <motion.p key={i} variants={fadeUp} className="font-body text-muted leading-relaxed text-base">
                {para}
              </motion.p>
            ))}
            <motion.div variants={fadeUp} className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-body text-sm font-medium text-dark border-b border-dark/40 pb-0.5 hover:text-gold hover:border-gold transition-all duration-300"
              >
                Read Our Full Story
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-24 pt-16 border-t border-divider grid grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {[
            { num: '20+', label: 'Years of Excellence' },
            { num: '10K+', label: 'Customers Served' },
            { num: '3', label: 'Branches in Selangor' },
            { num: '100%', label: 'Certified Therapists' },
          ].map(({ num, label }) => (
            <motion.div key={label} variants={fadeUp} className="text-center">
              <div className="font-display text-5xl lg:text-6xl xl:text-7xl font-semibold text-dark/10 leading-none mb-2">
                {num}
              </div>
              <div className="font-display text-2xl lg:text-3xl font-semibold text-dark -mt-10 relative">
                {num}
              </div>
              <div className="font-body text-xs tracking-[0.15em] uppercase text-muted mt-3">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
