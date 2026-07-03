import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Clock, ExternalLink, ArrowRight, Image as ImageIcon } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
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
    id: 'btho',
    num: '01',
    name: 'Bandar Tun Hussein Onn',
    tag: 'Headquarters',
    address: 'No. 26B, Lake Valley, Town Park 1, Jalan Suarasa 8/4, Batu 9, 43200 Cheras, Selangor',
    phone: '+60143322893',
    hours: 'Tue – Sun, 9:00am – 6:00pm\nClosed Monday',
    mapsUrl: 'https://maps.google.com/?q=Ananaz+MediSpa+Cheras+Selangor',
  },
  {
    id: 'bangi',
    num: '02',
    name: 'Bangi',
    tag: 'Branch',
    address: 'Bangi Section 9, 43650 Bandar Baru Bangi, Selangor',
    phone: '+60389208872',
    hours: 'Tue – Sun, 9:00am – 6:00pm\nClosed Monday',
    mapsUrl: 'https://maps.google.com/?q=Ananaz+MediSpa+Bangi',
  },
]

export default function BranchesPage() {
  const [activeGallery, setActiveGallery] = useState<Branch>('btho')

  // Dummy gallery data based on branch
  const galleryImages = {
    btho: [1, 2, 3, 4, 5, 6],
    bangi: [1, 2, 3, 4, 5, 6]
  }

  return (
    <div className="bg-cream min-h-screen">
            
      {/* ── HERO SECTION ──────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 lg:px-10 bg-dark text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#E8C98A 1px, transparent 1px)', backgroundSize: '36px 36px' }}
        />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6 font-bold flex justify-center items-center gap-3"
          >
            <span className="w-8 h-px bg-gold" />
            Our Locations
            <span className="w-8 h-px bg-gold" />
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl lg:text-6xl font-semibold mb-6"
          >
            Always Close to You
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-white/60 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Discover your nearest Ananaz MediSpa sanctuary in Selangor. 
            Step into a world of transformation and premium care.
          </motion.p>
        </div>
      </section>

      {/* ── BRANCHES CARDS ────────────────────────────────────────────── */}
      <section className="pt-20 pb-10 lg:pt-32 lg:pb-16 px-6 lg:px-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {branches.map((branch, i) => (
            <motion.div 
              key={branch.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="flex flex-col group"
            >
              
              {/* Image Top */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-[#398880] to-[#1A3C3A] rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-500 mb-5 lg:mb-6">
                {/* Decorative number behind image */}
                <div className="absolute -bottom-4 lg:-bottom-6 -right-4 font-display text-[6rem] lg:text-[8rem] font-bold text-white/5 select-none leading-none z-0">
                  {branch.num}
                </div>
                
                {/* Placeholder for real interior image */}
                <div className="absolute inset-0 img-placeholder opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-700 z-10" />
                
                <div className="absolute top-4 left-4 lg:top-5 lg:left-5 z-20">
                  {branch.tag === 'Headquarters' && (
                    <span className="font-body text-[9px] tracking-[0.2em] uppercase text-white bg-dark/40 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full">
                      HQ
                    </span>
                  )}
                </div>
              </div>

              {/* Content Bottom */}
              <div className="flex flex-col flex-grow">
                <h2 className="font-display text-2xl lg:text-3xl font-semibold text-dark mb-3 lg:mb-5 leading-tight group-hover:text-gold transition-colors duration-300">
                  {branch.name}
                </h2>

                <div className="space-y-2.5 lg:space-y-3 mb-6 lg:mb-8 flex-grow">
                  <div className="flex gap-3 items-start">
                    <MapPin size={16} className="text-gold flex-shrink-0 mt-0.5 lg:w-[16px] lg:h-[16px]" />
                    <span className="font-body text-xs lg:text-sm text-muted leading-relaxed line-clamp-2 lg:line-clamp-none">{branch.address}</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Phone size={16} className="text-gold flex-shrink-0 lg:w-[16px] lg:h-[16px]" />
                    <span className="font-body text-xs lg:text-sm font-medium text-dark">{branch.phone}</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Clock size={16} className="text-gold flex-shrink-0 mt-0.5 lg:w-[16px] lg:h-[16px]" />
                    <div className="font-body text-xs lg:text-sm text-muted whitespace-pre-line leading-relaxed">{branch.hours}</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 lg:gap-3">
                  <a
                    href={waBranch(branch.id)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-premium btn-premium-solid py-3 text-[9px] lg:text-[10px] font-bold tracking-widest uppercase flex items-center justify-center gap-2 group"
                  >
                    WhatsApp Branch
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href={branch.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 border border-divider text-dark font-body text-[9px] lg:text-[10px] px-4 py-3 tracking-widest uppercase font-bold hover:bg-white hover:shadow-sm hover:border-dark/20 transition-all duration-300 group"
                  >
                    <ExternalLink size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    Get Directions
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── GALLERY SECTION ───────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 px-6 lg:px-10 max-w-7xl mx-auto border-t border-divider">
        {/* Gallery Header & Filters */}
        <div className="flex flex-col mb-12">
          {/* Centered Large Header */}
          <div className="text-center mb-10 lg:mb-16">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-gold mb-2 font-bold">Discover The Environment</p>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-dark">Our Branches Gallery</h2>
          </div>

          {/* Left-Aligned Filter Tabs */}
          <div className="flex justify-start items-center gap-2 sm:gap-3 w-full">
            {branches.map((branch) => {
              const isActive = branch.id === activeGallery
              return (
                <button
                  key={branch.id}
                  onClick={() => setActiveGallery(branch.id)}
                  className={`px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-body text-[9px] sm:text-xs tracking-wider sm:tracking-widest uppercase font-bold transition-all duration-300 text-center leading-tight ${
                    isActive 
                      ? 'bg-dark text-white shadow-md' 
                      : 'bg-transparent text-dark/60 hover:bg-white hover:text-dark border border-divider shadow-sm'
                  }`}
                >
                  {branch.name}
                </button>
              )
            })}
          </div>
        </div>

        {/* Dynamic Image Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeGallery}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="columns-2 md:columns-2 lg:columns-3 gap-3 md:gap-4 lg:gap-6"
          >
            {galleryImages[activeGallery].map((imgItem, i) => {
              // Simulate varying heights for the placeholders to show the masonry effect (responsive for mobile vs desktop)
              const heights = [
                'h-40 md:h-[28rem]', 
                'h-32 md:h-64', 
                'h-48 md:h-96', 
                'h-36 md:h-80', 
                'h-44 md:h-72', 
                'h-32 md:h-[22rem]'
              ]
              return (
                <div 
                  key={i} 
                  className={`relative overflow-hidden rounded-2xl bg-divider group break-inside-avoid mb-3 md:mb-4 lg:mb-6 ${heights[i % heights.length]} hover:shadow-lg transition-shadow duration-300`}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-dark/10">
                    <ImageIcon size={32} />
                  </div>
                  <div className="absolute inset-0 img-placeholder opacity-50 mix-blend-multiply group-hover:scale-105 transition-transform duration-700" />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="font-body text-white text-xs tracking-widest uppercase font-bold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100">
                      {branches.find(b => b.id === activeGallery)?.name} Environment
                    </p>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </section>
      
          </div>
  )
}
