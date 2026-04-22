import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ChevronDown, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'
import { waBook } from '../lib/whatsapp'

const words = ["Malaysia's", 'Most', 'Trusted', 'MediSpa.']
const words2 = ['Over', '20 Years', 'of', 'Real', 'Results.']

const wordVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const letterVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen bg-cream overflow-hidden flex items-center"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#B8963E 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-0 pt-24 pb-16 min-h-screen items-center">
        {/* Left: Editorial Text */}
        <div className="relative z-10 lg:pr-8">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-xs tracking-[0.25em] uppercase text-gold mb-8 flex items-center gap-3"
          >
            <span className="inline-block w-8 h-px bg-gold" />
            Est. 2000 · Selangor, Malaysia
          </motion.p>

          {/* Line 1 */}
          <motion.h1
            variants={wordVariants}
            initial="hidden"
            animate="visible"
            className="font-display text-5xl lg:text-7xl xl:text-8xl font-semibold leading-[1.0] text-dark mb-0"
          >
            {words.map((w, i) => (
              <span key={i} style={{ display: 'inline-block', marginRight: w === 'MediSpa.' ? 0 : '0.25em' }}>
                <motion.span variants={letterVariant} style={{ display: 'inline-block' }}>{w}</motion.span>
              </span>
            ))}
          </motion.h1>

          {/* Line 2 with gold underline on "20 Years" */}
          <motion.div
            variants={wordVariants}
            initial="hidden"
            animate="visible"
            className="font-display text-5xl lg:text-7xl xl:text-8xl font-semibold leading-[1.0] text-dark mt-1 mb-8"
          >
            {words2.map((w, i) => (
              <span key={i} style={{ display: 'inline-block', marginRight: i < words2.length - 1 ? '0.25em' : 0 }}>
                {w === '20 Years' ? (
                  <span className="relative">
                    <motion.span variants={letterVariant} style={{ display: 'inline-block' }} className="text-dark">
                      {w}
                    </motion.span>
                    {/* SVG gold underline draw */}
                    <motion.svg
                      className="absolute -bottom-2 left-0 w-full"
                      height="6"
                      viewBox="0 0 160 6"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <motion.path
                        d="M 0 4 Q 80 1 160 4"
                        stroke="#B8963E"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.9, delay: 1.2, ease: 'easeOut' }}
                      />
                    </motion.svg>
                  </span>
                ) : (
                  <motion.span variants={letterVariant} style={{ display: 'inline-block' }}>{w}</motion.span>
                )}
              </span>
            ))}
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="font-body text-muted text-base lg:text-lg leading-relaxed max-w-md mb-10"
          >
            From skin tag removal to full-body spa — we've helped over{' '}
            <strong className="text-dark font-medium">10,000 customers</strong> discover the skin they deserve.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              id="hero-cta-booking"
              to="/booking"
              className="inline-flex items-center gap-2 bg-dark text-cream font-body text-sm font-medium px-7 py-4 hover:bg-gold transition-colors duration-300"
            >
              Book Appointment
              <ArrowRight size={16} />
            </Link>
            <a
              id="hero-cta-services"
              href="#services"
              className="inline-flex items-center gap-2 font-body text-sm font-medium text-dark border-b border-dark/40 pb-0.5 hover:border-gold hover:text-gold transition-all duration-300"
            >
              Explore Services
              <ChevronDown size={16} />
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex items-center gap-8 mt-14 pt-8 border-t border-divider"
          >
            {[['10,000+', 'Customers Served'], ['20+', 'Years Experience'], ['3', 'Branches']].map(([num, label]) => (
              <div key={label} className="text-center">
                <div className="font-display text-2xl font-semibold text-dark">{num}</div>
                <div className="font-body text-[10px] tracking-widest uppercase text-muted mt-0.5">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Portrait Image */}
        <div className="relative lg:-mr-10 mt-10 lg:mt-0">
          <motion.div
            initial={{ scale: 1.12, opacity: 0 }}
            animate={{ scale: 1.0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: imageY }}
            className="relative h-[55vh] lg:h-[88vh] overflow-hidden"
          >
            <div className="img-placeholder w-full h-full" />

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="absolute bottom-8 -left-6 bg-cream shadow-xl px-5 py-4 border-l-2 border-gold"
            >
              <div className="font-display text-2xl font-semibold text-dark leading-none">5★</div>
              <div className="font-body text-[11px] text-muted mt-1 tracking-wide">Rated on Google</div>
            </motion.div>
          </motion.div>

          {/* Gold accent line */}
          <div className="absolute top-12 -right-4 w-px h-32 bg-gradient-to-b from-transparent via-gold to-transparent opacity-60 hidden lg:block" />
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-[10px] tracking-[0.2em] uppercase text-muted">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-muted to-transparent"
        />
      </motion.div>
    </section>
  )
}
