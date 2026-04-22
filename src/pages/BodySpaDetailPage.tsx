import { useRef, type ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check, ShieldCheck, MessageCircle } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { bodySpaTreatments } from '../data/bodySpa'
import { waBook } from '../lib/whatsapp'

function FadeUp({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}>
      {children}
    </motion.div>
  )
}

export default function BodySpaDetailPage() {
  const { id } = useParams<{ id: string }>()
  const treatment = bodySpaTreatments.find(t => t.id === id)

  if (!treatment) return <Navigate to="/services/body-spa" replace />

  const t = treatment
  const currentIndex = bodySpaTreatments.indexOf(t)
  const next = bodySpaTreatments[(currentIndex + 1) % bodySpaTreatments.length]
  const prev = bodySpaTreatments[(currentIndex - 1 + bodySpaTreatments.length) % bodySpaTreatments.length]

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-dark relative overflow-hidden pt-36 pb-28">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#B8963E 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <span className="absolute right-10 bottom-0 font-display text-[20vw] font-bold text-white/[0.03] leading-none select-none pointer-events-none">
          {t.num}
        </span>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <Link to="/services/body-spa"
            className="inline-flex items-center gap-2 text-white/40 hover:text-gold font-body text-xs font-medium transition-colors mb-10 group">
            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
            All Spa Packages
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-5">
                <span className="font-body text-xs tracking-[0.25em] uppercase text-gold">{t.num}</span>
                <span className="w-8 h-px bg-gold/40" />
                <span className={`${t.tagColor} font-body text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1`}>{t.tag}</span>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-4xl lg:text-5xl font-semibold text-white leading-[1.1] max-w-2xl">
                {t.name}
              </motion.h1>
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
              className="flex gap-3 flex-wrap">
              <div className="border border-white/15 px-6 py-4">
                <p className="font-body text-[10px] uppercase tracking-widest text-white/40 mb-1">Price</p>
                <p className="font-display text-2xl font-semibold text-gold leading-none">{t.price}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ─────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeUp>
            <div className="relative">
              <div className="img-placeholder w-full aspect-[4/5] bg-[#E8E2D9]" />
            </div>
          </FadeUp>
          <div className="lg:pt-6">
            <FadeUp delay={0.15}>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-gold font-bold mb-4">Overview</p>
              <p className="font-body text-lg text-dark/70 leading-relaxed mb-10">
                {t.overview}
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────────────────────── */}
      <section className="bg-white border-y border-divider py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp className="mb-12">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-gold font-bold mb-2">Why Choose This</p>
            <h2 className="font-display text-3xl font-semibold text-dark">Therapeutic Benefits</h2>
          </FadeUp>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
            {t.benefits.map((b, i) => (
              <FadeUp key={b.title} delay={i * 0.07}>
                <div className="bg-white p-4 lg:p-8 h-full border border-divider hover:border-gold transition-colors duration-300 group">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gold/10 flex items-center justify-center mb-3 lg:mb-5 group-hover:bg-gold/20 transition-colors">
                    <Check size={11} className="text-gold" />
                  </div>
                  <h4 className="font-display text-sm lg:text-base font-semibold text-dark mb-1 lg:mb-2 group-hover:text-gold transition-colors duration-300">
                    {b.title}
                  </h4>
                  <p className="font-body text-[10px] lg:text-xs text-muted leading-relaxed hidden lg:block">{b.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 border-t border-divider">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <FadeUp className="mb-20">
              <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold font-bold mb-4">The Ritual</p>
              <h2 className="font-display text-4xl font-semibold text-dark leading-tight">Step-by-Step Experience</h2>
            </FadeUp>

            <div className="space-y-0 relative">
              <div className="absolute left-[23px] top-10 bottom-10 w-px bg-divider lg:left-[31px]" />

              {t.process.map((step, i) => (
                <FadeUp key={step.step} delay={i * 0.1}>
                  <div className="flex gap-8 lg:gap-12 pb-16 last:pb-0 relative group">
                    <div className="relative z-10 flex-shrink-0 w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white border border-divider flex items-center justify-center font-display text-lg lg:text-xl font-bold text-gold group-hover:border-gold group-hover:scale-110 transition-all duration-500 shadow-sm">
                      {step.step}
                    </div>
                    <div className="pt-2 lg:pt-4">
                      <h3 className="font-display text-xl lg:text-2xl font-semibold text-dark mb-3 group-hover:text-gold transition-colors">
                        {step.title}
                      </h3>
                      <p className="font-body text-base text-muted leading-relaxed max-w-lg">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          <FadeUp delay={0.3} className="hidden lg:block sticky top-32">
            <div className="relative">
              <div className="img-placeholder w-full aspect-[3/4] bg-[#E8E2D9]" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-gold/20 -z-10" />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── AFTERCARE ────────────────────────────────────────────────── */}
      <section className="bg-white border-y border-divider py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <FadeUp>
              <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold font-bold mb-4">Post-Session</p>
              <h2 className="font-display text-4xl font-semibold text-dark mb-6">Aftercare Guide</h2>
              <p className="font-body text-base text-muted leading-relaxed">
                Extend the benefits of your therapy by following these simple restorative guidelines.
              </p>
            </FadeUp>
            <div className="lg:col-span-2 space-y-3">
              {t.aftercare.map((a, i) => (
                <FadeUp key={i} delay={i * 0.07}>
                  <div className="flex gap-5 items-start p-6 border border-divider hover:border-gold transition-all duration-300">
                    <div className="w-8 h-8 border border-gold/30 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck size={14} className="text-gold" />
                    </div>
                    <p className="font-body text-sm text-dark/70 leading-relaxed font-light">{a}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BOOK CTA ─────────────────────────────────────────────────── */}
      <section className="py-24">
        <FadeUp className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col items-center justify-center text-center">
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href={waBook(t.name)} target="_blank" rel="noopener noreferrer"
              className="btn-premium btn-premium-solid shimmer px-20 py-5 text-[11px] font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-3 w-full sm:w-auto">
              <MessageCircle size={15} /> Book via WhatsApp
            </a>
            <Link to="/booking"
              className="inline-flex items-center justify-center gap-2 border border-dark/10 text-dark font-body text-[11px] font-bold px-20 py-5 tracking-[0.2em] uppercase hover:border-gold hover:text-gold transition-colors w-full sm:w-auto">
              Schedule Online <ArrowRight size={14} />
            </Link>
          </div>
        </FadeUp>
      </section>

      {/* ── NEXT / PREV NAVIGATION ───────────────────────────────────── */}
      <section className="border-t border-divider grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-divider">
        <Link to={`/body-spa/${prev.id}`}
          className="group flex items-center gap-6 p-8 hover:bg-white transition-colors duration-300">
          <ArrowLeft size={18} className="flex-shrink-0 text-muted group-hover:-translate-x-1 transition-transform group-hover:text-gold" />
          <div>
            <p className="font-body text-[9px] uppercase tracking-widest text-muted mb-1">Previous Experience</p>
            <p className="font-display text-base font-semibold text-dark group-hover:text-gold transition-colors">{prev.name}</p>
          </div>
        </Link>
        <Link to={`/body-spa/${next.id}`}
          className="group flex items-center justify-end gap-6 p-8 hover:bg-white transition-colors duration-300">
          <div className="text-right">
            <p className="font-body text-[9px] uppercase tracking-widest text-muted mb-1">Next Experience</p>
            <p className="font-display text-base font-semibold text-dark group-hover:text-gold transition-colors">{next.name}</p>
          </div>
          <ArrowRight size={18} className="flex-shrink-0 text-muted group-hover:translate-x-1 transition-transform group-hover:text-gold" />
        </Link>
      </section>

      <Footer />
    </div>
  )
}
