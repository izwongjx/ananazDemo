import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check, Sparkles, Clock, ShieldCheck, Heart, User } from 'lucide-react'
import { waBook, waGeneral } from '../lib/whatsapp'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function TreatmentsPage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        const offset = 80
        const bodyRect = document.body.getBoundingClientRect().top
        const elementRect = el.getBoundingClientRect().top
        const elementPosition = elementRect - bodyRect
        const offsetPosition = elementPosition - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [hash])

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-dark selection:bg-gold/20">
      {/* Navigation */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-divider px-5 py-2.5 font-body text-xs font-semibold tracking-wider text-dark hover:border-gold hover:text-gold transition-all duration-300 shadow-sm"
        >
          <ArrowLeft size={14} />
          BACK TO HOME
        </Link>
      </div>

      {/* ── SECTION 01: HERO / INTRO ──────────────────────────────── */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="font-body text-[10px] tracking-[0.3em] uppercase text-gold mb-6 block font-bold">
              CLINICAL EXCELLENCE
            </span>
            <h1 className="font-display text-5xl lg:text-7xl font-semibold leading-[1.1] mb-8">
              Skin Treatments <br />
              <span className="italic text-gold">& Formulations.</span>
            </h1>
            <p className="font-body text-muted text-base lg:text-lg leading-relaxed max-w-md mb-10">
              Targeted solutions for stubborn skin concerns, backed by a clinical approach and years of aesthetic expertise. We don't just treat skin; we rebuild confidence.
            </p>
            <div className="flex gap-4">
              <a
                href={waBook('General Treatment Consultation')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium btn-premium-solid px-8 py-4 text-xs font-bold tracking-widest uppercase"
              >
                Book Consultation
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* The generated hero image would go here */}
            <div className="aspect-[4/5] bg-[#E8E2D9] rounded-2xl overflow-hidden shadow-2xl relative group">
              <div className="img-placeholder w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            {/* Floating pill */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-[200px] border border-divider">
              <Sparkles className="text-gold mb-2" size={20} />
              <p className="font-body text-xs font-bold text-dark leading-tight uppercase tracking-wider">
                98% Client Satisfaction Rate
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 02: HOW DOES IT WORK? ─────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-20">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl lg:text-5xl font-semibold mb-6">How Does It Work?</h2>
              <p className="font-body text-muted text-base max-w-2xl mx-auto leading-relaxed">
                Our approach combines clinical precision with personalized care. Each treatment is tailored to your unique skin biology, ensuring results that are both visible and sustainable.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { icon: User, title: 'Consultation', desc: 'Detailed skin analysis to identify core concerns and triggers.' },
              { icon: ShieldCheck, title: 'Treatment', desc: 'Applying clinical-grade formulations with expert precision.' },
              { icon: Clock, title: 'Aftercare', desc: 'A dedicated routine to maintain and amplify your clinical results.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-cream border border-gold/20 flex items-center justify-center text-gold mb-6">
                  <item.icon size={28} />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="font-body text-sm text-muted leading-relaxed px-4">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 03: BENEFITS ──────────────────────────────────── */}
      <section className="py-24 lg:py-36 bg-[#F5F2EA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row gap-20 items-start">
          <div className="lg:w-1/2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="font-body text-[10px] tracking-[0.3em] uppercase text-gold mb-4 block font-bold">WHY IT MATTERS</span>
              <h2 className="font-display text-4xl lg:text-6xl font-semibold mb-8">Results that you can <br /><span className="italic text-gold">actually feel.</span></h2>
              <p className="font-body text-muted text-base mb-12 leading-relaxed max-w-lg">
                Skincare isn't just about looking good; it's about how your skin functions day-to-day. Our treatments are designed to restore health, vibrancy, and comfort to your complexion.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
                {[
                  { title: 'Deep Cell Repair', desc: 'Working at the cellular level to fix damage and speed up natural healing.' },
                  { title: 'Tone Correction', desc: 'Gently fading dark spots and redness for a balanced, glass-skin glow.' },
                  { title: 'Luxury Comfort', desc: 'Immediate relief from irritation, dryness, and that "tight" skin feeling.' },
                  { title: 'Lasting Barrier', desc: 'Building a stronger shield against urban dust and environmental stress.' },
                ].map((benefit, i) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col gap-3"
                  >
                    <div className="w-8 h-px bg-gold/40" />
                    <h4 className="font-display text-xl font-semibold text-dark">{benefit.title}</h4>
                    <p className="font-body text-sm text-muted leading-relaxed">{benefit.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Works Great For Box */}
              <div className="mt-16 bg-white border border-gold/10 p-8 lg:p-10 rounded-3xl shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700" />
                <p className="font-body text-[10px] tracking-widest uppercase font-bold text-gold mb-6 relative z-10">BEST FOR THOSE EXPERIENCING</p>
                <div className="flex flex-wrap gap-3 relative z-10">
                  {['Hyperpigmentation', 'Dull Skin', 'Stubborn Redness', 'Fine Lines', 'Severe Dehydration'].map(tag => (
                    <span key={tag} className="bg-cream/50 px-4 py-2 rounded-full font-body text-[11px] font-medium text-dark/70 border border-divider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 lg:sticky lg:top-32">
             <motion.div
               initial={{ opacity: 0, scale: 0.98 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
               className="relative"
             >
                <div className="aspect-[3/4] lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <div className="img-placeholder w-full h-full" />
                </div>
                {/* Floating detail */}
                <div className="absolute -bottom-10 right-10 bg-dark text-white p-6 rounded-2xl shadow-2xl max-w-[180px] text-center border border-white/10">
                   <p className="font-display text-2xl font-bold text-gold mb-1">100%</p>
                   <p className="font-body text-[10px] uppercase tracking-widest opacity-60 leading-tight">Biocompatible Formulations</p>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 04: THE PROCESS (DARK) ────────────────────────── */}
      <section className="bg-dark py-24 lg:py-36 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 -skew-x-12 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="mb-20">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 flex items-center gap-3"
            >
              <span className="w-8 h-px bg-gold" />
              THE JOURNEY
            </motion.p>
            <h2 className="font-display text-4xl lg:text-6xl font-semibold mb-6">What Does The Treatment Involve?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Deep Cleansing', desc: 'Removal of impurities and surface toxins to prep the canvas.' },
              { num: '02', title: 'Extraction', desc: 'Gentle congestion removal and deep pore refinement.' },
              { num: '03', title: 'Active Infusion', desc: 'Delivery of targeted serums deep into the epidermal layers.' },
              { num: '04', title: 'Serum Sealing', desc: 'Bio-active masks to lock in moisture and soothe the skin.' },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group"
              >
                <span className="font-display text-5xl font-bold text-gold/20 group-hover:text-gold transition-colors duration-500 block mb-6">
                  {step.num}
                </span>
                <h3 className="font-display text-2xl font-semibold mb-4 text-white group-hover:translate-x-2 transition-transform duration-300">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-white/50 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  {step.desc}
                </p>
                <div className="w-0 group-hover:w-full h-px bg-gold mt-6 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 05: THE RESULTS (BEFORE/AFTER) ───────────────── */}
      <section className="py-24 lg:py-36 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-20">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-display text-4xl lg:text-5xl font-semibold text-dark"
            >
              The Results.
            </motion.h2>
            <p className="font-body text-muted text-sm mt-4">Actual results from our studio. Individual experiences may vary.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Comparison 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex bg-cream rounded-2xl overflow-hidden shadow-lg border border-divider">
                <div className="w-1/2 relative">
                   <div className="img-placeholder w-full h-[400px]" />
                   <span className="absolute top-4 left-4 bg-dark/70 text-white font-body text-[10px] px-3 py-1 rounded backdrop-blur-sm">BEFORE</span>
                </div>
                <div className="w-1/2 relative border-l border-white/20">
                   <div className="img-placeholder w-full h-[400px]" />
                   <span className="absolute top-4 left-4 bg-gold/80 text-white font-body text-[10px] px-3 py-1 rounded backdrop-blur-sm uppercase">After 1 Session</span>
                </div>
              </div>
              <div className="mt-6 flex justify-between items-center px-2">
                <div>
                   <h4 className="font-display text-xl font-semibold text-dark">Skin Tag Removal</h4>
                   <p className="font-body text-xs text-muted">Clear visible removal and smooth healing.</p>
                </div>
                <Sparkles className="text-gold opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>

            {/* Comparison 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <div className="flex bg-cream rounded-2xl overflow-hidden shadow-lg border border-divider">
                <div className="w-1/2 relative">
                   <div className="img-placeholder w-full h-[400px]" />
                   <span className="absolute top-4 left-4 bg-dark/70 text-white font-body text-[10px] px-3 py-1 rounded backdrop-blur-sm">BEFORE</span>
                </div>
                <div className="w-1/2 relative border-l border-white/20">
                   <div className="img-placeholder w-full h-[400px]" />
                   <span className="absolute top-4 left-4 bg-gold/80 text-white font-body text-[10px] px-3 py-1 rounded backdrop-blur-sm uppercase">After 3 Sessions</span>
                </div>
              </div>
              <div className="mt-6 flex justify-between items-center px-2">
                <div>
                   <h4 className="font-display text-xl font-semibold text-dark">Melasma Correction</h4>
                   <p className="font-body text-xs text-muted">Vastly improved skin tone and reduced pigmentation.</p>
                </div>
                <Sparkles className="text-gold opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          </div>

          {/* Book CTA bottom */}
          <div className="mt-20 text-center">
             <Link
               to="/"
               className="inline-flex items-center gap-2 font-body text-sm font-semibold text-dark border-b-2 border-gold/40 pb-1 hover:border-gold transition-all duration-300"
             >
               View All Services
               <ArrowRight size={16} />
             </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER STYLE BAND ───────────────────────────────────── */}
      <section className="py-20 bg-dark text-center border-t border-white/5">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="max-w-2xl mx-auto px-6"
        >
          <Heart className="text-gold mx-auto mb-6" size={24} />
          <h2 className="font-display text-3xl font-semibold text-white mb-6">Experience the transformation.</h2>
          <p className="font-body text-white/50 text-sm mb-10 leading-relaxed">
            Ready to start your skin journey? Connect with our skin specialists today for a professional consultation.
          </p>
          <a
            href={waGeneral('Treatments Consultation')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium btn-premium-solid shimmer px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase"
          >
            Schedules appointment
          </a>
        </motion.div>
      </section>
    </div>
  )
}
