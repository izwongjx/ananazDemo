import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Heart } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TreatmentGrid from '../components/TreatmentGrid'
import { weddingBridalPackages } from '../data/weddingBridal'

export default function WeddingBridalPage() {
  return (
    <div className="bg-cream min-h-screen">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-dark relative overflow-hidden pt-36 pb-24">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#E8C98A 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-off-white/40 hover:text-gold font-body text-xs font-medium transition-colors mb-10 group">
            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="font-body text-xs tracking-[0.25em] uppercase text-gold flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-gold inline-block" /> Bridal Radiance · 03
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl lg:text-7xl font-semibold text-off-white leading-[1.08] max-w-3xl mb-6">
            Wedding &<br /><span className="text-gold italic">Bridal.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-off-white/55 text-base leading-relaxed max-w-lg">
            Your wedding day is the one occasion where every detail matters — especially how you feel.
            Crafted to ensure you radiate confidence and total grace.
          </motion.p>
        </div>
      </section>

      {/* ── TREATMENT LISTING ─────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <TreatmentGrid currentCategory="wedding-bridal" items={weddingBridalPackages} />
      </section>

      {/* ── CTA BAND ─────────────────────────────────────────────────── */}
      <section className="bg-dark py-24 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="max-w-2xl mx-auto px-6">
          <Heart className="text-gold mx-auto mb-6" size={24} />
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-off-white mb-4">
            Your wedding is once. Your glow should be unforgettable.
          </h2>
          <p className="font-body text-off-white/50 text-sm mb-10 leading-relaxed">
            Book a bridal consultation and we'll build your perfect package around your timeline and goals.
          </p>
          <Link to="/booking"
            className="btn-premium btn-premium-solid shimmer px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase inline-flex items-center gap-2">
            Book Bridal Consultation <ArrowRight size={14} />
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
