import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, User, Star, Heart, Leaf, Sparkles, Sun, Flower2 } from 'lucide-react'

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
    title: 'Derma Restructuring Therapy',
    icon: <Sun size={20} fill="currentColor" />,
    desc: "Advanced skin restructuring for deep rejuvenation and a healthier skin barrier.",
    learnMoreHref: '/derma-restructuring',
  },
  {
    title: 'Signature Precision Skin Renewal',
    icon: <Star size={20} fill="currentColor" />,
    desc: "This program is not just about removal; it supports skin renewal and recovery after treatment.",
    learnMoreHref: '/skin-treatments',
  },
  {
    title: 'Glass Skin Therapy',
    icon: <Heart size={20} fill="currentColor" />,
    desc: "This is the choice for skin that wants to look smoother, brighter, and luminous.",
    learnMoreHref: '/glass-skin',
  },
  {
    title: 'Skin Rebirth Therapy',
    icon: <User size={20} fill="currentColor" />,
    desc: "This therapy supports repair, regeneration, and a healthier skin appearance.",
    learnMoreHref: '/skin-rebirth',
  },
  {
    title: 'Skin Bright Therapy',
    icon: <Sparkles size={20} fill="currentColor" />,
    desc: "This therapy controls pigmentation and reveals a brighter, more even skin tone.",
    learnMoreHref: '/skin-bright',
  },
  {
    title: 'Acne Recovery Therapy',
    icon: <Leaf size={20} fill="currentColor" />,
    desc: "This treatment helps soothe, clear, and heal acne-prone skin.",
    learnMoreHref: '/acne',
  },
  {
    title: 'Body Wellness',
    icon: <Flower2 size={20} fill="currentColor" />,
    desc: "Restore your body, renew your mind through personalised therapeutic treatments.",
    learnMoreHref: '/body-wellness',
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
          className="py-20 lg:py-32 lg:pr-20 relative"
        >
          {/* Giant decorative quote mark */}
          <div className="absolute -top-4 -left-4 lg:-top-8 lg:left-0 text-[12rem] lg:text-[16rem] leading-none font-serif text-[#C18C74]/10 select-none pointer-events-none z-0">
            “
          </div>
          
          <div className="relative z-10 space-y-8">
          <motion.p
            variants={fadeUp}
            className="font-body text-xs sm:text-[13px] tracking-[0.2em] uppercase text-[#c9866b] flex items-center gap-3 font-bold"
          >
            <span className="inline-block w-8 sm:w-12 h-[1px] bg-[#c9866b]" />
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
          className="py-20 lg:py-32 lg:pl-16 space-y-8"
        >
          <motion.p
            variants={fadeUp}
            className="font-body text-xs sm:text-[13px] tracking-[0.2em] uppercase text-[#c9866b] font-bold"
          >
            Signature Treatments
          </motion.p>

          <div className="space-y-3">
            {categories.map((cat, idx) => (
              <Link 
                to={cat.learnMoreHref}
                key={idx}
                className="block select-none"
              >
                <motion.div 
                  variants={fadeUp}
                  className="bg-white rounded-xl p-4 lg:p-5 shadow-sm border border-black/[0.04] flex gap-4 items-start hover:shadow-md transition-shadow group cursor-pointer"
                >
                  <div 
                    className="w-11 h-11 rounded-full text-white flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: 'linear-gradient(to bottom right, #329194, #369598, #3b9b9e, #40a0a3, #44a5a8)' }}
                  >
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-[#3d2b1f] text-[15px] leading-tight mb-1">{cat.title}</h3>
                    <p className="font-body text-[13px] text-[#9e7d6f] font-normal mb-2 leading-[1.6]">
                      {cat.desc}
                    </p>
                    <span 
                      className="text-[#398880] font-body text-[13px] font-medium inline-flex items-center gap-1 group-hover:text-[#2a6660] transition-colors"
                    >
                      Learn more &rarr;
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

