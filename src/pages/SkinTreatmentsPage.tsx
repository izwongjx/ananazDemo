import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TreatmentGrid from '../components/TreatmentGrid'
import { skinTreatments } from '../data/skinTreatments'

export default function SkinTreatmentsPage() {
  return (
    <div className="bg-cream min-h-screen pt-24">


      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-dark relative overflow-hidden pt-36 pb-24">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#E8C98A 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="font-body text-xs tracking-[0.25em] uppercase text-gold flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-gold inline-block" /> Clinical Excellence · 01
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl lg:text-7xl font-semibold text-off-white leading-[1.08] max-w-3xl mb-6">
            Skin<br /><span className="text-gold italic">Treatments.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-off-white/55 text-base leading-relaxed max-w-lg">
            Targeted clinical solutions for skin concerns that won't respond to creams alone.
            Certified therapists · 20+ years of expertise.
          </motion.p>
        </div>
      </section>

      {/* ── TREATMENT LISTING ─────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <TreatmentGrid currentCategory="skin-treatments" items={skinTreatments} />
      </section>

      {/* ── CTA BAND ─────────────────────────────────────────────────── */}
      <section className="bg-dark py-24 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="max-w-2xl mx-auto px-6">
          <Sparkles className="text-gold mx-auto mb-6" size={24} />
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-off-white mb-4">
            Every treatment. Every result. Backed by expertise.
          </h2>
          <p className="font-body text-off-white/50 text-sm mb-10 leading-relaxed">
            20+ years of skin expertise · 10,000+ clients · Results that speak for themselves.
          </p>
          <Link to="/booking"
            className="btn-premium btn-premium-solid shimmer px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase inline-flex items-center gap-2">
            Book Your Consultation <ArrowRight size={14} />
          </Link>
        </motion.div>
      </section>

    </div>
  )
}
