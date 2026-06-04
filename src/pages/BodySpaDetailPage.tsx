import { useRef, useState, type ReactNode } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check, ShieldCheck, MessageCircle, ChevronDown } from 'lucide-react'
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
  const [openPricingIdx, setOpenPricingIdx] = useState<number | null>(null)
  const treatment = bodySpaTreatments.find(t => t.id === id)

  if (!treatment) return <Navigate to="/services/body-spa" replace />

  const t = treatment
  const currentIndex = bodySpaTreatments.indexOf(t)
  const next = bodySpaTreatments[(currentIndex + 1) % bodySpaTreatments.length]
  const prev = bodySpaTreatments[(currentIndex - 1 + bodySpaTreatments.length) % bodySpaTreatments.length]

  return (
    <div className="bg-cream min-h-screen">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-dark relative overflow-hidden pt-36 pb-28">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#E8C98A 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <span className="absolute right-10 bottom-0 font-display text-[20vw] font-bold text-off-white/[0.03] leading-none select-none pointer-events-none">
          {t.num}
        </span>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <Link to="/services/body-spa"
            className="inline-flex items-center gap-2 text-off-white/40 hover:text-gold font-body text-xs font-medium transition-colors mb-10 group">
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
                className="font-display text-4xl lg:text-5xl font-semibold text-off-white leading-[1.1] max-w-2xl">
                {t.name}
              </motion.h1>
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
              className="flex gap-3 flex-wrap">
              <div className="border border-white/15 px-6 py-4">
                <p className="font-body text-[10px] uppercase tracking-widest text-off-white/40 mb-1">Price</p>
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
              <div className="img-placeholder w-full aspect-[4/5] bg-divider" />
            </div>
          </FadeUp>
          <div className="lg:pt-6">
            <FadeUp delay={0.15}>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-gold font-bold mb-4">Overview</p>
              <p className="font-body text-lg text-dark/70 leading-relaxed mb-10">
                {t.overview}
              </p>
              <button 
                onClick={() => document.getElementById('detailed-menu')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 bg-gold text-off-white font-body text-[11px] font-bold px-8 py-4 tracking-[0.2em] uppercase hover:bg-peach transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/20"
              >
                View Detailed Catalogue <ChevronDown size={14} />
              </button>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── PACKAGES & PRICING ───────────────────────────────────────── */}
      <section id="detailed-menu" className="bg-white border-y border-divider py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp className="mb-12 text-center lg:text-left">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-gold font-bold mb-2">Detailed Menu</p>
            <h2 className="font-display text-3xl font-semibold text-dark">Available Options & Pricing</h2>
          </FadeUp>
          {/* @ts-ignore */}
          {t.pricingOptions && t.pricingOptions.length > 0 && (
            <div className="flex flex-col gap-4">
              {/* @ts-ignore */}
              {t.pricingOptions.map((opt, i) => {
                const isOpen = openPricingIdx === i
                return (
                  <FadeUp key={i} delay={i * 0.05}>
                    <div className={`transition-all duration-300 rounded-2xl overflow-hidden group ${isOpen ? 'bg-white border-2 border-[#C18C74] shadow-md' : 'bg-white border-2 border-[#398880]/20 hover:border-[#398880]/50 hover:shadow-md'}`}>
                      <button 
                        onClick={() => setOpenPricingIdx(isOpen ? null : i)}
                        className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 lg:p-6 lg:px-8 text-left focus:outline-none bg-gradient-to-r from-[#EEF7F6]/40 to-transparent"
                      >
                        <h4 className="font-display text-xl lg:text-2xl font-semibold text-[#1A3C3A] group-hover:text-[#398880] transition-colors">
                          {opt.name}
                        </h4>
                        
                        <div className="flex items-center gap-3">
                          {/* Independent booking button */}
                          <a 
                            href={waBook(`Free Consultation for ${opt.name}`)} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 bg-[#C18C74] text-white font-body text-[10px] font-bold px-4 py-2 rounded-full tracking-widest uppercase hover:bg-[#A87964] transition-colors shadow-sm"
                          >
                            <MessageCircle size={14} />
                            { 'Book a Free Consultation' }
                          </a>

                          {/* Accordion toggle */}
                          <div className={`flex items-center gap-2 lg:gap-3 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full border-2 transition-colors ${isOpen ? 'bg-[#C18C74] border-[#C18C74] text-white' : 'bg-white border-[#398880]/20 text-[#398880] group-hover:border-[#398880]/50'}`}>
                            <span className="font-body text-[10px] font-bold tracking-widest uppercase mt-px hidden md:block">
                              {isOpen ? 'Close' : 'View Options'}
                            </span>
                            <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                          </div>
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-5 lg:px-8 pb-6 pt-2 border-t border-[#398880]/10 mx-5 lg:mx-8">
                              <p className="font-body text-xs text-muted mb-4 uppercase tracking-widest font-bold text-[#398880]">Select Duration</p>
                              <div className="flex flex-col gap-3">
                                {/* @ts-ignore */}
                                {opt.variants.map((v, idx) => (
                                  <div key={idx} className="flex items-center justify-between p-3 lg:p-4 bg-white border border-divider rounded-xl hover:border-[#C18C74]/40 transition-colors">
                                    <div className="flex items-center gap-3">
                                      <div className="w-2 h-2 rounded-full bg-[#398880]/40" />
                                      <span className="font-body text-[11px] lg:text-xs text-dark font-medium tracking-widest uppercase">
                                        {v.duration}
                                      </span>
                                    </div>
                                    <p className="font-display text-lg lg:text-xl font-medium text-[#C18C74] min-w-[100px] text-right">
                                      {v.price}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </FadeUp>
                )
              })}
            </div>
          )}
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
              <div className="img-placeholder w-full aspect-[3/4] bg-divider" />
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
              className="inline-flex items-center justify-center gap-2 bg-gold text-off-white font-body text-[11px] font-bold px-20 py-5 tracking-[0.2em] uppercase hover:bg-peach transition-colors w-full sm:w-auto shadow-lg shadow-gold/20">
              Schedule Online <ArrowRight size={14} />
            </Link>
          </div>
        </FadeUp>
      </section>

      {/* ── NEXT / PREV NAVIGATION ───────────────────────────────────── */}
      {bodySpaTreatments.length > 1 && (
        <section className="border-t border-divider grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-divider">
          <Link to={`/services/body-spa/${prev.id}`}
            className="group flex items-center gap-6 p-8 hover:bg-white transition-colors duration-300">
            <ArrowLeft size={18} className="flex-shrink-0 text-muted group-hover:-translate-x-1 transition-transform group-hover:text-gold" />
            <div>
              <p className="font-body text-[9px] uppercase tracking-widest text-muted mb-1">Previous Experience</p>
              <p className="font-display text-base font-semibold text-dark group-hover:text-gold transition-colors">{prev.name}</p>
            </div>
          </Link>
          <Link to={`/services/body-spa/${next.id}`}
            className="group flex items-center justify-end gap-6 p-8 hover:bg-white transition-colors duration-300">
            <div className="text-right">
              <p className="font-body text-[9px] uppercase tracking-widest text-muted mb-1">Next Experience</p>
              <p className="font-display text-base font-semibold text-dark group-hover:text-gold transition-colors">{next.name}</p>
            </div>
            <ArrowRight size={18} className="flex-shrink-0 text-muted group-hover:translate-x-1 transition-transform group-hover:text-gold" />
          </Link>
        </section>
      )}

      <Footer />
    </div>
  )
}
