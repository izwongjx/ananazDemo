import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TreatmentGrid from '../components/TreatmentGrid'
import { skinRebirthTreatments } from '../data/skinRebirth'

export default function SkinRebirthPage() {
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
              <span className="w-8 h-px bg-gold inline-block" /> Clinical Excellence · 04
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl lg:text-7xl font-semibold text-off-white leading-[1.08] max-w-3xl mb-6">
              Skin Rebirth<br /><span className="text-white italic">Therapy.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="font-body text-white text-base leading-relaxed max-w-lg">
              This therapy supports repair, regeneration, and a healthier skin appearance.
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
              “Powered by<br />
              <span className="text-gold italic font-normal">Precision Dermapen Technology™</span>”
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ── TREATMENT LISTING ─────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <TreatmentGrid currentCategory="skin-rebirth" items={skinRebirthTreatments} />
      </section>


    </div>
  )
}
