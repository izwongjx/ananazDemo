import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { skinTreatments } from '../data/skinTreatments'

export default function SkinTreatmentsPage() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-dark relative overflow-hidden pt-36 pb-24">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#B8963E 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-white/40 hover:text-gold font-body text-xs font-medium transition-colors mb-10 group">
            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="font-body text-xs tracking-[0.25em] uppercase text-gold flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-gold inline-block" /> Clinical Excellence · 01
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl lg:text-7xl font-semibold text-white leading-[1.08] max-w-3xl mb-6">
            Skin<br /><span className="text-gold italic">Treatments.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-white/55 text-base leading-relaxed max-w-lg">
            Targeted clinical solutions for skin concerns that won't respond to creams alone.
            Certified therapists · 20+ years of expertise.
          </motion.p>
        </div>
      </section>

      {/* ── TREATMENT LISTING ─────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex items-end justify-between mb-16 pb-8 border-b border-divider">
          <div>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-gold mb-2 font-bold">Our Treatments</p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-dark">3 Specialist Types</h2>
          </div>
          <p className="font-body text-xs text-muted hidden lg:block max-w-xs text-right leading-relaxed">
            Select any treatment to explore the full process, benefits, and pricing.
          </p>
        </motion.div>

        <div className="divide-y divide-divider">
          {skinTreatments.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Link
                to={`/skin-treatments/${t.id}`}
                className="group flex flex-col lg:flex-row items-start lg:items-center gap-6 py-8 lg:py-10 hover:bg-white transition-colors duration-300 px-6 -mx-6 lg:px-8 lg:-mx-8 border-divider"
              >
                {/* Mobile Top Row: Number + Landscape Image */}
                <div className="flex items-center gap-4 w-full lg:contents">
                  <span className="font-display text-4xl lg:text-8xl font-bold text-dark/8 flex-shrink-0 w-12 lg:w-28 leading-none select-none group-hover:text-gold/15 transition-colors duration-500">
                    {t.num}
                  </span>

                  <div className="flex-1 lg:flex-initial lg:w-32 aspect-[21/9] lg:aspect-square flex-shrink-0 overflow-hidden bg-[#E8E2D9]">
                    <div className="img-placeholder w-full h-full group-hover:scale-110 transition-transform duration-700" />
                  </div>
                </div>

                {/* Info Block */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`${t.tagColor} font-body text-[9px] font-bold tracking-[0.2em] uppercase px-2.5 py-1`}>
                      {t.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl lg:text-3xl font-semibold text-dark mb-2 leading-tight group-hover:text-gold transition-colors duration-300">
                    {t.name}
                  </h3>
                  <p className="font-body text-sm text-muted leading-relaxed max-w-md">{t.shortDesc}</p>
                </div>

                {/* Action Block: Split layout on mobile, End align on desktop */}
                <div className="flex w-full lg:w-auto items-end justify-between lg:flex-col lg:items-end gap-3 flex-shrink-0 pt-4 lg:pt-0 border-t border-divider/50 lg:border-t-0 mt-2 lg:mt-0">
                  <div className="text-left lg:text-right">
                    <p className="font-body text-[9px] uppercase tracking-widest text-muted mb-0.5">Starting from</p>
                    <p className="font-display text-2xl font-semibold text-gold leading-none">{t.price}</p>
                  </div>
                  <div className="flex items-center gap-2 font-body text-[10px] font-bold tracking-[0.25em] uppercase text-dark group-hover:text-gold transition-colors duration-300">
                    Explore <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA BAND ─────────────────────────────────────────────────── */}
      <section className="bg-dark py-24 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="max-w-2xl mx-auto px-6">
          <Sparkles className="text-gold mx-auto mb-6" size={24} />
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white mb-4">
            Every treatment. Every result. Backed by expertise.
          </h2>
          <p className="font-body text-white/50 text-sm mb-10 leading-relaxed">
            20+ years of skin expertise · 10,000+ clients · Results that speak for themselves.
          </p>
          <Link to="/booking"
            className="btn-premium btn-premium-solid shimmer px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase inline-flex items-center gap-2">
            Book Your Consultation <ArrowRight size={14} />
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
