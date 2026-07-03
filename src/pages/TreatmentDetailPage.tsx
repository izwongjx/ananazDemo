import { useRef, useState, type ReactNode } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check, ShieldCheck, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { skinTreatments } from '../data/skinTreatments'
import { waBook, waGeneral } from '../lib/whatsapp'
import BeforeAfterSlider from '../components/BeforeAfterSlider'

// ─── Fade helper ───────────────────────────────────────────────────────────────

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

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function TreatmentDetailPage() {
  const { id } = useParams<{ id: string }>()
  const treatment = skinTreatments.find(t => t.id === id)

  if (!treatment) return <Navigate to="/skin-treatments" replace />

  const t = treatment
  const currentIndex = skinTreatments.indexOf(t)
  const next = skinTreatments[(currentIndex + 1) % skinTreatments.length]
  const prev = skinTreatments[(currentIndex - 1 + skinTreatments.length) % skinTreatments.length]

  const [currentExpPage, setCurrentExpPage] = useState(0)
  const expsPerPage = 2
  const totalExpPages = t.clientExperiences ? Math.ceil(t.clientExperiences.length / expsPerPage) : 0
  const nextExpPage = () => setCurrentExpPage((p) => (p + 1) % totalExpPages)
  const prevExpPage = () => setCurrentExpPage((p) => (p - 1 + totalExpPages) % totalExpPages)
  const currentExps = t.clientExperiences ? t.clientExperiences.slice(currentExpPage * expsPerPage, (currentExpPage + 1) * expsPerPage) : []

  return (
    <div className="bg-cream min-h-screen">

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-36 pb-28 text-white" style={{ background: 'linear-gradient(145deg, #1A5F62 0%, #2D8B8E 40%, #3D6060 70%, #2C2621 100%)' }}>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#E8C98A 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        {/* Watermark number */}
        <span className="absolute right-10 bottom-0 font-display text-[20vw] font-bold text-white/[0.03] leading-none select-none pointer-events-none">
          {t.num}
        </span>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <Link to="/skin-treatments"
            className="inline-flex items-center gap-2 text-white/50 hover:text-gold font-body text-xs font-medium transition-colors mb-10 group">
            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
            All Skin Treatments
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
                className="font-display text-4xl lg:text-6xl font-semibold text-white leading-[1.1] max-w-2xl">
                {t.name}
              </motion.h1>
            </div>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ─────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Before / After Image */}
          <FadeUp>
            {t.beforeImage && t.afterImage ? (
              <BeforeAfterSlider
                beforeSrc={t.beforeImage}
                afterSrc={t.afterImage}
                aspectRatio="4/5"
                className="w-full"
              />
            ) : (
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              {/* Split panel */}
              <div className="flex w-full aspect-[4/5]">
                {/* Before */}
                <div className="relative flex-1 overflow-hidden">
                  <div className="img-placeholder w-full h-full bg-divider" />
                  <div className="absolute inset-0 bg-dark/20" />
                  <span className="absolute bottom-4 left-4 bg-dark/70 backdrop-blur-sm text-white font-body text-[9px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">
                    Before
                  </span>
                </div>

                {/* Divider line */}
                <div className="relative z-10 flex items-center justify-center w-0">
                  <div className="absolute w-px h-full bg-white/60" />
                  <div className="absolute w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center z-20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1A5F62" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6" />
                      <polyline points="9 18 3 12 9 6" transform="translate(12 0)" />
                    </svg>
                  </div>
                </div>

                {/* After */}
                <div className="relative flex-1 overflow-hidden">
                  <div className="img-placeholder w-full h-full bg-[#d4ede9]" />
                  <span className="absolute bottom-4 right-4 bg-[#1A5F62]/90 backdrop-blur-sm text-white font-body text-[9px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">
                    After
                  </span>
                </div>
              </div>

              {/* Tag badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className={`${t.tagColor} font-body text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full shadow-sm`}>{t.tag}</span>
              </div>
            </div>
            )}
          </FadeUp>

          {/* Overview text */}
          <div className="lg:pt-6">
            <FadeUp delay={0.15}>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-gold font-bold mb-4">Overview</p>
              <p className="font-body text-lg text-dark/70 leading-relaxed mb-10">
                {t.overview}
              </p>
            </FadeUp>
            <FadeUp delay={0.25}>
              <div className="flex flex-col gap-6">
                <div className="bg-gold/10 border border-gold/30 p-5 lg:p-6 max-w-lg relative overflow-hidden mb-2">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                  <p className="font-body text-[10px] text-gold tracking-[0.25em] uppercase font-bold mb-2 flex items-center gap-2 relative z-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" /> Full Package Available
                  </p>
                  <p className="font-body text-sm text-dark/80 leading-relaxed relative z-10">
                    For an even deeper transformation, we offer full-on custom packages that include more treatments at better pricing.
                    An initial in-centre consultation is required to tailor the perfect plan for your skin.
                  </p>
                </div>

                <div className="flex gap-3 flex-wrap">
                  <a href={waBook(`Free Consultation for ${t.name}`)} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gold text-off-white font-body text-xs font-medium px-7 py-4 tracking-wide uppercase hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/20 hover:bg-peach transition-all duration-300">
                    <MessageCircle size={14} /> Book A Free Consultation
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────────────────────── */}
      <section className="bg-white border-y border-divider py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp className="mb-12">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-gold font-bold mb-2">Why Choose This</p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-dark">Key Benefits</h2>
          </FadeUp>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
            {t.benefits.map((b, i) => (
              <FadeUp key={b.title} delay={i * 0.07}>
                <div className="bg-white p-6 lg:p-10 h-full border border-divider hover:border-gold transition-colors duration-300 group">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gold/10 flex items-center justify-center mb-5 lg:mb-7 group-hover:bg-gold/20 transition-colors">
                    <Check size={18} className="text-gold" />
                  </div>
                  <h4 className="font-display text-lg lg:text-xl font-semibold text-dark mb-2.5 lg:mb-4 group-hover:text-gold transition-colors duration-300">
                    {b.title}
                  </h4>
                  <p className="font-body text-sm lg:text-base text-muted leading-relaxed">{b.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENT FEELINGS / EXPERIENCES (TEAL GRADIENT) ───────────────── */}
      {t.clientExperiences && t.clientExperiences.length > 0 && (
        <section className="py-24 overflow-hidden relative text-white flex flex-col items-center" style={{ background: 'linear-gradient(145deg, #1A5F62 0%, #2D8B8E 40%, #3D6060 70%, #2C2621 100%)' }}>
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(#E8C98A 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

          <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col items-center w-full relative z-10">
            {/* Slider Heading */}
            <FadeUp className="mb-10 text-center">
              <h3 className="font-display text-3xl lg:text-4xl font-semibold text-white">
                {t.clientExperiencesTitle || 'How Our Clients Feel'}
              </h3>
            </FadeUp>

            {/* Quote Block */}
            <FadeUp delay={0.15} className="max-w-4xl mx-auto mb-16 text-center">
              <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl italic text-white/90 leading-relaxed mb-6">
                "Healthy skin is not simply about removing imperfections. It's about creating an environment where skin feels healthier, stronger, and beautifully cared for."
              </blockquote>
              <p className="font-body text-[10px] tracking-[0.25em] uppercase text-gold font-bold">
                — The Ananaz Philosophy
              </p>
            </FadeUp>

            {/* Slider Wrapper */}
            <div className="w-full max-w-5xl relative flex items-center justify-center">
              {/* Left Arrow */}
              <button
                onClick={prevExpPage}
                className="absolute -left-4 lg:-left-16 z-20 w-12 h-12 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-white transition-colors flex items-center justify-center bg-[#1A5F62]/85 backdrop-blur-sm shadow-md cursor-pointer"
                aria-label="Previous Page"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="w-full overflow-hidden px-2 py-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentExpPage}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    {currentExps.map((exp) => (
                      <div
                        key={exp.title}
                        className="border border-white/10 bg-white/5 rounded-2xl p-7 lg:p-10 hover:bg-white/10 transition-all duration-300 flex gap-6 items-start h-full text-left min-h-[240px]"
                      >
                        <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0 text-3xl select-none">
                          {exp.emoji}
                        </div>
                        <div>
                          <h4 className="font-display text-lg lg:text-xl font-semibold text-white mb-2.5">
                            {exp.title}
                          </h4>
                          <p className="font-body text-sm lg:text-base text-white/70 leading-relaxed">
                            {exp.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Arrow */}
              <button
                onClick={nextExpPage}
                className="absolute -right-4 lg:-right-16 z-20 w-12 h-12 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-white transition-colors flex items-center justify-center bg-[#1A5F62]/85 backdrop-blur-sm shadow-md cursor-pointer"
                aria-label="Next Page"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ── PROCESS ──────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 border-t border-divider">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <FadeUp className="mb-20">
              <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold font-bold mb-4">The Ritual</p>
              <h2 className="font-display text-4xl font-semibold text-dark leading-tight">
                Your journey,<br />
                <span className="text-gold font-bold">step by step.</span>
              </h2>
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
              <div className="absolute top-1/2 -right-10 -translate-y-1/2 font-display text-[12rem] text-dark/[0.03] select-none pointer-events-none rotate-90">
                Process
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── AFTERCARE ────────────────────────────────────────────────── */}
      <section className="bg-white border-y border-divider py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <FadeUp>
              <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold font-bold mb-4">Post-Treatment</p>
              <h2 className="font-display text-4xl font-semibold text-dark mb-6">Aftercare Guide</h2>
              <p className="font-body text-base text-muted leading-relaxed">
                Following these steps ensures the best possible healing outcome and long-lasting results.
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

      {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
      <section className="py-28 lg:py-36 text-white relative overflow-hidden" style={{ background: 'linear-gradient(145deg, #1A5F62 0%, #2D8B8E 40%, #3D6060 70%, #2C2621 100%)' }}>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#E8C98A 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <FadeUp className="max-w-2xl mx-auto px-6 lg:px-10 text-center relative z-10">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-gold font-bold mb-6">Your First Step</p>
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-[1.1] mb-6">
            You've been thinking<br />
            about this{' '}
            <span className="text-gold italic font-semibold">long enough.</span>
          </h2>
          <p className="font-body text-white/80 text-base leading-relaxed mb-4 max-w-lg mx-auto">
            No pressure. No commitment. Just an honest conversation with someone who has helped thousands of women feel comfortable, confident, and like themselves again.
          </p>
          <p className="font-body text-white/60 text-sm mb-10">One message is all it takes to get started.</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            {/* WhatsApp — brand green */}
            <a
              href={waBook(`Free Consultation for ${t.name}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-8 py-4 rounded-full font-body text-sm font-bold tracking-wide uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="18" height="18" fill="white">
                <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.74 5.494 2.035 7.8L0 32l8.432-2.007A15.934 15.934 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.267 13.267 0 01-6.769-1.851l-.485-.288-5.007 1.193 1.22-4.875-.317-.5A13.267 13.267 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.933c-.398-.199-2.354-1.162-2.72-1.294-.365-.133-.63-.199-.895.2-.264.397-1.026 1.293-1.258 1.559-.232.265-.464.298-.862.1-.398-.2-1.68-.619-3.2-1.976-1.183-1.055-1.982-2.358-2.214-2.756-.232-.398-.025-.613.174-.811.18-.179.398-.465.597-.697.2-.232.265-.398.398-.663.133-.265.066-.497-.033-.696-.1-.2-.895-2.158-1.227-2.955-.322-.775-.65-.669-.895-.681-.232-.011-.497-.013-.762-.013-.265 0-.696.1-1.06.497-.365.398-1.393 1.361-1.393 3.319 0 1.957 1.427 3.847 1.626 4.113.2.265 2.808 4.285 6.802 6.01.951.41 1.693.656 2.271.839.954.303 1.823.26 2.51.158.765-.114 2.354-.963 2.687-1.892.332-.93.332-1.727.232-1.893-.099-.166-.364-.265-.762-.464z"/>
              </svg>
              WhatsApp Us Now — It's Free
            </a>
            {/* Call Instead */}
            <a
              href="tel:+60143322893"
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/25 text-white px-8 py-4 rounded-full font-body text-sm font-bold tracking-wide uppercase transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="white">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.59.57 1 1 0 011 1V21a1 1 0 01-1 1A18 18 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.59 1 1 0 01-.24 1.01l-2.21 2.19z"/>
              </svg>
              Call Instead
            </a>
          </div>

          <p className="font-body text-white/40 text-xs tracking-wide">
            Response within 1 business hour · Private consultation · No obligation
          </p>
        </FadeUp>
      </section>

      {/* ── NEXT / PREV NAVIGATION ───────────────────────────────────── */}
      <section className="border-t border-divider grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-divider">
        <Link to={`/skin-treatments/${prev.id}`}
          className="group flex items-center gap-6 p-8 hover:bg-white transition-colors duration-300">
          <ArrowLeft size={18} className="flex-shrink-0 text-muted group-hover:-translate-x-1 transition-transform group-hover:text-gold" />
          <div>
            <p className="font-body text-[9px] uppercase tracking-widest text-muted mb-1">Previous Treatment</p>
            <p className="font-display text-base font-semibold text-dark group-hover:text-gold transition-colors">{prev.name}</p>
          </div>
        </Link>
        <Link to={`/skin-treatments/${next.id}`}
          className="group flex items-center justify-end gap-6 p-8 hover:bg-white transition-colors duration-300">
          <div className="text-right">
            <p className="font-body text-[9px] uppercase tracking-widest text-muted mb-1">Next Treatment</p>
            <p className="font-display text-base font-semibold text-dark group-hover:text-gold transition-colors">{next.name}</p>
          </div>
          <ArrowRight size={18} className="flex-shrink-0 text-muted group-hover:translate-x-1 transition-transform group-hover:text-gold" />
        </Link>
      </section>
    </div>
  )
}
