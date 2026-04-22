import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { waBook } from '../lib/whatsapp'

const categories = [
  {
    num: '01',
    title: 'Skin Treatments',
    tagline: 'Targeted solutions for stubborn skin concerns — backed by clinical expertise.',
    services: [
      { name: 'Pro Series Skin Tag', price: 'RM199', original: 'RM330' },
      { name: 'Melasma Treatment', price: 'Upon consultation' },
      { name: 'Oil Cysts / Milia Treatment', price: 'RM199', original: 'RM288' },
    ],
    waMsg: 'Skin Treatments',
    learnMoreHref: '/skin-treatments',
  },
  {
    num: '02',
    title: 'Body Spa',
    tagline: 'From tension to tranquility. Full-body treatments designed to restore.',
    services: [
      { name: '4-in-1 Aromatherapy Package', price: 'RM199' },
      { name: '4-in-1 Traditional Package', price: 'RM249' },
    ],
    waMsg: 'Body Spa',
    learnMoreHref: '/body-spa',
  },
  {
    num: '03',
    title: 'Wedding & Bridal',
    tagline: 'Glow on your biggest day. Bridal packages crafted for the bride-to-be.',
    services: [
      { name: 'Mini Puteri', price: 'RM229', original: 'RM250' },
      { name: 'Mini Ratu', price: 'RM299', original: 'RM350' },
      { name: 'Bridal Package', price: 'RM350' },
    ],
    waMsg: 'Wedding & Bridal Package',
    learnMoreHref: '/wedding-bridal',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Services() {
  return (
    <section id="services" className="bg-cream py-10">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-16">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-body text-xs tracking-[0.25em] uppercase text-gold flex items-center gap-3 mb-4"
        >
          <span className="inline-block w-8 h-px bg-gold" />
          Our Services
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl lg:text-5xl font-semibold text-dark max-w-lg"
        >
          Treatments for Every Skin Story.
        </motion.h2>
      </div>

      {/* Alternating bands */}
      {categories.map((cat, idx) => (
        <ServiceBand key={cat.num} cat={cat} reversed={idx % 2 === 1} />
      ))}
    </section>
  )
}

function ServiceBand({ cat, reversed }: { cat: typeof categories[0]; reversed: boolean }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={`relative flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} min-h-[420px] border-t border-divider`}
    >
      {/* Faded category number */}
      <span
        className="absolute inset-0 flex items-center justify-center font-display font-semibold text-[18vw] lg:text-[12vw] text-gold/5 select-none pointer-events-none leading-none z-0"
        aria-hidden
      >
        {cat.num}
      </span>

      {/* Image column */}
      <div className="lg:w-1/2 h-64 lg:h-auto relative overflow-hidden">
        <div className="img-placeholder w-full h-full min-h-[260px]" />
      </div>

      {/* Text column */}
      <div className={`lg:w-1/2 flex flex-col justify-center p-10 lg:p-16 relative z-10 ${reversed ? 'lg:pr-20' : 'lg:pl-20'}`}>
        <span className="font-body text-xs tracking-[0.3em] text-gold uppercase mb-2">{cat.num}</span>
        <h3 className="font-display text-3xl lg:text-4xl font-semibold text-dark mb-3">{cat.title}</h3>
        <p className="font-body text-muted text-sm leading-relaxed mb-8 max-w-sm">{cat.tagline}</p>

        {/* Service list */}
        <ul className="space-y-3 mb-10">
          {cat.services.map(s => (
            <li key={s.name} className="flex items-center justify-between border-b border-divider pb-3 last:border-0">
              <span className="font-body text-sm font-medium text-dark">{s.name}</span>
              <span className="flex items-center gap-2 font-body text-sm">
                <strong className="text-dark font-semibold">{s.price}</strong>
                {s.original && <span className="text-muted line-through text-xs">{s.original}</span>}
              </span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-4">
          <Link
            to={cat.learnMoreHref}
            className="btn-premium btn-premium-outline px-7 py-3 text-xs tracking-widest uppercase font-bold cursor-pointer"
          >
            Learn More
          </Link>
          <Link
            to="/booking"
            id={`services-cta-${cat.num}`}
            className="btn-premium btn-premium-solid shimmer px-7 py-3 text-xs tracking-widest uppercase font-bold cursor-pointer flex items-center gap-2 self-start"
          >
            Book Now
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
