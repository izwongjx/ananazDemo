import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Flower2, Check } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TreatmentGrid from '../components/TreatmentGrid'
import { bodyWellnessTreatments } from '../data/bodyWellness'

export default function BodyWellnessPage() {
  return (
    <div className="bg-cream min-h-screen pt-24">


      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-12 lg:pt-36 lg:pb-24" style={{ background: 'linear-gradient(145deg, #1A5F62 0%, #2D8B8E 40%, #3D6060 70%, #2C2621 100%)' }}>
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#E8C98A 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="font-body text-xs tracking-[0.25em] uppercase text-gold flex items-center gap-3 mb-5 font-bold">
              <span className="w-8 h-px bg-gold inline-block" /> Signature Collection
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl lg:text-7xl font-semibold text-off-white leading-[1.08] max-w-3xl mb-6">
              Body Wellness<br /><span className="text-white italic">Collection.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="font-body text-white text-base leading-relaxed max-w-lg">
              Restore your body, renew your mind. Thoughtfully designed to help you relax, restore comfort and support your overall wellbeing.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex relative lg:pl-12 items-center justify-start lg:justify-end"
          >
            {/* Giant decorative quote mark */}
            <div className="absolute -top-20 -left-6 lg:left-24 text-[15rem] leading-none font-serif text-white/[0.04] select-none pointer-events-none">
              “
            </div>
            
            <blockquote className="font-display text-4xl lg:text-5xl xl:text-6xl font-light text-off-white leading-[1.25] relative z-10">
              “Wellness<br />
              isn’t a luxury. It’s part of <br />
              <span className="text-gold italic font-normal">caring for yourself.</span>”
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ── TREATMENT LISTING ─────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <TreatmentGrid currentCategory="body-wellness" items={bodyWellnessTreatments} />
      </section>

      {/* ── BRIDAL SPA PACKAGES ───────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-20 lg:pb-32">
        <div className="text-center mb-12 lg:mb-16">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-gold font-bold mb-4">Special Packages</p>
          <h2 className="font-display text-4xl lg:text-5xl text-dark font-semibold tracking-wide">
            BRIDAL SPA
          </h2>
          <div className="h-px w-24 bg-gold/40 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {/* Package 1: Mini Puteri */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-divider h-full"
          >
            {/* Card Top */}
            <div className="relative aspect-[2/1] lg:aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-[#398880] to-[#1A3C3A]">
              <div className="absolute inset-0 img-placeholder opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 lg:px-4 lg:py-2 rounded-full border border-white/50 shadow-sm">
                <span className="font-body text-[9px] lg:text-[10px] uppercase tracking-widest text-[#C18C74] font-bold">
                  RM 229
                </span>
              </div>
            </div>
            
            {/* Card Bottom */}
            <div className="flex flex-col flex-1 p-5 lg:p-8">
              <h3 className="font-display text-xl lg:text-2xl font-semibold text-dark mb-1 lg:mb-3 group-hover:text-[#C18C74] transition-colors duration-300">
                Mini Puteri
              </h3>
              <div className="mb-3 lg:mb-4">
                <span className="font-display text-base lg:text-lg font-medium text-[#C18C74]">RM 229 </span>
                <span className="font-body text-xs text-muted line-through ml-2">RM 310</span>
              </div>
              
              <div className="flex flex-wrap gap-2 lg:gap-3 mb-8 mt-2">
                {['Mandi Susu', 'Aura Bunga', 'Body Massage', 'Face Massage', 'Body Scrub'].map((tagText, i) => (
                  <span 
                    key={i} 
                    className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#EEF7F6] text-[#2b7a71] font-body text-[9px] lg:text-[10px] font-bold tracking-widest uppercase border border-[#486A68]/10 shadow-sm"
                  >
                    {tagText}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-2">
                <a 
                  href="https://wa.me/60143322893?text=Hi%20Ananaz,%20I'm%20interested%20in%20the%20Mini%20Puteri%20Bridal%20Spa"
                  target="_blank" rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-transparent border border-dark text-dark px-4 py-2.5 lg:px-6 lg:py-3.5 rounded-full font-body text-[10px] lg:text-xs tracking-widest uppercase font-bold group-hover:bg-dark group-hover:text-white transition-all duration-300"
                >
                  Explore Details
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Package 2: Mini Ratu */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-divider h-full"
          >
            {/* Card Top */}
            <div className="relative aspect-[2/1] lg:aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-[#398880] to-[#1A3C3A]">
              <div className="absolute inset-0 img-placeholder opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 lg:px-4 lg:py-2 rounded-full border border-white/50 shadow-sm">
                <span className="font-body text-[9px] lg:text-[10px] uppercase tracking-widest text-[#C18C74] font-bold">
                  RM 299
                </span>
              </div>
            </div>
            
            {/* Card Bottom */}
            <div className="flex flex-col flex-1 p-5 lg:p-8">
              <h3 className="font-display text-xl lg:text-2xl font-semibold text-dark mb-1 lg:mb-3 group-hover:text-[#C18C74] transition-colors duration-300">
                Mini Ratu
              </h3>
              <div className="mb-3 lg:mb-4">
                <span className="font-display text-base lg:text-lg font-medium text-[#C18C74]">RM 299 </span>
                <span className="font-body text-xs text-muted line-through ml-2">RM 398</span>
              </div>
              
              <div className="flex flex-wrap gap-2 lg:gap-3 mb-8 mt-2">
                {['Mandi Susu', 'Aura Bunga', 'Body Massage', 'Face Massage', 'Body Scrub', 'Aura Facial'].map((tagText, i) => (
                  <span 
                    key={i} 
                    className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#EEF7F6] text-[#2b7a71] font-body text-[9px] lg:text-[10px] font-bold tracking-widest uppercase border border-[#486A68]/10 shadow-sm"
                  >
                    {tagText}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-2">
                <a 
                  href="https://wa.me/60143322893?text=Hi%20Ananaz,%20I'm%20interested%20in%20the%20Mini%20Ratu%20Bridal%20Spa"
                  target="_blank" rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-transparent border border-dark text-dark px-4 py-2.5 lg:px-6 lg:py-3.5 rounded-full font-body text-[10px] lg:text-xs tracking-widest uppercase font-bold group-hover:bg-dark group-hover:text-white transition-all duration-300"
                >
                  Explore Details
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Package 3: Mega Ratu */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-divider h-full"
          >
            {/* Card Top */}
            <div className="relative aspect-[2/1] lg:aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-[#398880] to-[#1A3C3A]">
              <div className="absolute inset-0 img-placeholder opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 lg:px-4 lg:py-2 rounded-full border border-white/50 shadow-sm">
                <span className="font-body text-[9px] lg:text-[10px] uppercase tracking-widest text-[#C18C74] font-bold">
                  RM 399
                </span>
              </div>
            </div>
            
            {/* Card Bottom */}
            <div className="flex flex-col flex-1 p-5 lg:p-8">
              <h3 className="font-display text-xl lg:text-2xl font-semibold text-dark mb-1 lg:mb-3 group-hover:text-[#C18C74] transition-colors duration-300">
                Mega Ratu
              </h3>
              <div className="mb-3 lg:mb-4">
                <span className="font-display text-base lg:text-lg font-medium text-[#C18C74]">RM 399 </span>
                <span className="font-body text-xs text-muted line-through ml-2">RM 526</span>
              </div>
              
              <div className="flex flex-wrap gap-2 lg:gap-3 mb-8 mt-2">
                {['Mandi Susu', 'Aura Bunga', 'Body Massage', 'Face Massage', 'Body Scrub', 'Aura Facial', 'Minty Hair Spa'].map((tagText, i) => (
                  <span 
                    key={i} 
                    className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#EEF7F6] text-[#2b7a71] font-body text-[9px] lg:text-[10px] font-bold tracking-widest uppercase border border-[#486A68]/10 shadow-sm"
                  >
                    {tagText}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-2">
                <a 
                  href="https://wa.me/60143322893?text=Hi%20Ananaz,%20I'm%20interested%20in%20the%20Mega%20Ratu%20Bridal%20Spa"
                  target="_blank" rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-transparent border border-dark text-dark px-4 py-2.5 lg:px-6 lg:py-3.5 rounded-full font-body text-[10px] lg:text-xs tracking-widest uppercase font-bold group-hover:bg-dark group-hover:text-white transition-all duration-300"
                >
                  Explore Details
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


    </div>
  )
}
