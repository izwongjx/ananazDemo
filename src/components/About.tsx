import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, User, Star, Heart, Leaf } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const categories = [
  {
    title: 'Skin Restoration Programme',
    icon: <Star size={16} fill="currentColor" />,
    desc: "Pro Series Skin Tag Removal, Melasma Treatment, Oil Cysts / Milia Extraction",
    learnMoreHref: '/skin-treatments',
  },
  {
    title: 'Body Spa',
    icon: <Leaf size={16} fill="currentColor" />,
    desc: "4-in-1 Aromatherapy Massage, 4-in-1 Traditional Urut",
    learnMoreHref: '/body-spa',
  },
  {
    title: 'Wedding & Bridal',
    icon: <Heart size={16} fill="currentColor" />,
    desc: "Mini Puteri Package, Mini Ratu Package, Full Bridal Programme",
    learnMoreHref: '/wedding-bridal',
  },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="relative overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-[#F3F0EA]" />
      <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 bg-[#F9F5F0]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left: Our Story */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="py-20 lg:py-32 lg:pr-20 space-y-8 relative"
        >
          {/* Giant decorative quote mark */}
          <div className="absolute -top-4 -left-4 lg:-top-8 lg:left-0 text-[12rem] lg:text-[16rem] leading-none font-serif text-[#C18C74]/10 select-none pointer-events-none z-0">
            “
          </div>
          
          <div className="relative z-10 space-y-8">
          <motion.p
            variants={fadeUp}
            className="font-body text-[10px] tracking-[0.25em] uppercase text-gold flex items-center gap-3 font-semibold"
          >
            <span className="inline-block w-8 h-px bg-gold" />
            The Founder Story
          </motion.p>
          
          <motion.h2 variants={fadeUp} className="font-display text-4xl lg:text-5xl text-dark leading-[1.2] font-light">
            From banker<br />to skin expert —<br />for a reason.
          </motion.h2>

          <motion.div variants={fadeUp} className="space-y-6 font-body text-sm text-dark/70 leading-relaxed max-w-md">
            <p>
              Sam spent years in finance. She also spent years battling acne — trying everything the market offered, spending the money she earned, and still waking up disappointed. So she changed careers. Not for the industry. For her skin. Then for yours.
            </p>
            <p>
              That personal experience is baked into every treatment at Ananaz. Sam knows what it feels like to sit in front of a mirror and feel defeated by your own skin. She made it her life's work to make sure her clients never feel that way again.
            </p>
            <p className="font-medium text-dark/90">
              25 years later — 4.9 stars. Thousands of women. One mission, unchanged.
            </p>
          </motion.div>

          <div className="h-px w-full max-w-md bg-[#C18C74]/20 mt-8 mb-6" />

          <motion.p variants={fadeUp} className="font-display italic text-[#C18C74] text-lg">
            "Your skin is in expert hands — because these hands have been exactly where yours are now."
          </motion.p>
          </div>
        </motion.div>

        {/* Right: Services List */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="py-20 lg:py-32 lg:pl-16 space-y-6"
        >
          <motion.p
            variants={fadeUp}
            className="font-body text-[10px] tracking-[0.25em] uppercase text-muted font-semibold mb-8"
          >
            Signature Treatments
          </motion.p>

          <div className="space-y-4">
            {categories.map((cat, idx) => (
              <motion.div 
                variants={fadeUp}
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-sm border border-black/[0.04] flex gap-5 items-start hover:shadow-md transition-shadow group"
              >
                <div className="w-10 h-10 rounded-full bg-[#398880] text-white flex items-center justify-center shrink-0">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-dark text-lg mb-1.5">{cat.title}</h3>
                  <p className="font-body text-xs text-muted mb-4 leading-relaxed">
                    {cat.desc}
                  </p>
                  <Link 
                    to={cat.learnMoreHref} 
                    className="text-[#398880] font-body text-[10px] tracking-widest uppercase font-semibold inline-flex items-center gap-1.5 hover:text-[#2a6660] transition-colors mt-1"
                  >
                    Learn more <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

