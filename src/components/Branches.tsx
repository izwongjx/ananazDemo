import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, Clock, ArrowRight, ExternalLink } from 'lucide-react'
import { waBranch, type Branch } from '../lib/whatsapp'

const branches: {
  id: Branch
  num: string
  name: string
  tag: string
  address: string
  phone: string
  hours: string
  mapsUrl: string
}[] = [
  {
    id: 'cheras',
    num: '01',
    name: 'Bandar Tun Hussein Onn',
    tag: 'Headquarters',
    address: 'No. 26B, Lake Valley, Town Park 1, Jalan Suarasa 8/4, Batu 9, 43200 Cheras, Selangor',
    phone: '+60163298780',
    hours: 'Tue – Sun, 9:00am – 6:00pm\nClosed Monday',
    mapsUrl: 'https://maps.google.com/?q=Ananaz+MediSpa+Cheras+Selangor',
  },
  {
    id: 'bangiS9',
    num: '02',
    name: 'Bangi Section 9',
    tag: 'Branch',
    address: '3B, Curve Business Park, 36A, Jalan Medan Pusat 2c, Section 9, 43650 Bandar Baru Bangi, Selangor',
    phone: '+60137641998',
    hours: 'Tue – Sun, 9:00am – 6:00pm\nClosed Monday',
    mapsUrl: 'https://maps.google.com/?q=Ananaz+MediSpa+Bangi+Section+9',
  },
  {
    id: 'bangiS7',
    num: '03',
    name: 'Bangi Section 7',
    tag: 'Branch',
    address: '42A, 1, Jalan 7/7b, Section 7, 43650 Bandar Baru Bangi, Selangor',
    phone: '+60163304373',
    hours: 'Tue – Sun, 9:00am – 6:00pm\nClosed Monday',
    mapsUrl: 'https://maps.google.com/?q=Ananaz+MediSpa+Bangi+Section+7',
  },
]

export default function Branches() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="branches" ref={ref} className="bg-dark py-28 lg:py-36 overflow-hidden relative">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#B8963E 1px, transparent 1px)', backgroundSize: '36px 36px' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="font-body text-xs tracking-[0.25em] uppercase text-gold flex items-center gap-3 mb-4"
        >
          <span className="inline-block w-8 h-px bg-gold" />
          Find Us
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl lg:text-5xl font-semibold text-white mb-16 max-w-xl"
        >
          Three Branches. Always Close to You.
        </motion.h2>

        {/* Branch panels — staggered heights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 items-start">
          {branches.map((branch, i) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 48 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.14 }}
              style={{ marginTop: i === 1 ? '2rem' : 0 }}
              className="group relative border border-white/10 hover:border-gold transition-colors duration-500 p-8 flex flex-col gap-5"
            >
              {/* Number */}
              <div className="absolute top-6 right-8 font-display text-5xl font-semibold text-white/5 select-none">
                {branch.num}
              </div>

              {/* Badge */}
              {branch.tag === 'Headquarters' && (
                <span className="self-start font-body text-[10px] tracking-[0.2em] uppercase text-gold border border-gold/40 px-3 py-1">
                  HQ
                </span>
              )}

              <h3 className="font-display text-2xl font-semibold text-white leading-tight">{branch.name}</h3>

              {/* Info rows */}
              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin size={15} className="text-gold flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-white/60 leading-relaxed">{branch.address}</span>
                </div>
                <div className="flex gap-3">
                  <Phone size={15} className="text-gold flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-white/60">{branch.phone}</span>
                </div>
                <div className="flex gap-3">
                  <Clock size={15} className="text-gold flex-shrink-0 mt-0.5" />
                  <div className="font-body text-sm text-white/60 whitespace-pre-line">{branch.hours}</div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/10" />

              {/* Actions */}
              <div className="flex flex-col gap-3">
                <a
                  href={waBranch(branch.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`branch-whatsapp-${branch.id}`}
                  className="inline-flex items-center justify-center gap-2 bg-gold text-dark font-body text-xs font-semibold px-5 py-3 tracking-wide uppercase hover:bg-gold-light transition-colors duration-300"
                >
                  WhatsApp This Branch
                  <ArrowRight size={12} />
                </a>
                <a
                  href={branch.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/60 font-body text-xs px-5 py-3 tracking-wide uppercase hover:border-gold hover:text-gold transition-all duration-300"
                >
                  <ExternalLink size={12} />
                  Get Directions
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
