import { useRef, type ReactNode } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, MessageCircle, ExternalLink } from 'lucide-react'
import { waGeneral } from '../lib/whatsapp'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// ─── Data ─────────────────────────────────────────────────────────────────────

const timeline = [
  {
    year: '2000',
    title: 'The Beginning',
    body: 'Pn Samsinar opens the first Ananaz outlet in Cheras with nothing but skill, conviction, and a few loyal regulars who kept coming back.',
  },
  {
    year: '2005',
    title: 'Word Spreads',
    body: 'Through word of mouth alone, Ananaz grows to 500+ regular clients. The Cheras branch expands to accommodate demand for facial and body treatments.',
  },
  {
    year: '2012',
    title: 'Ananaz Beauty Academy',
    body: 'Driven by requests from aspiring professionals, the Academy is born — to train the next generation of certified beauticians the Ananaz way.',
  },
  {
    year: '2018',
    title: 'Bangi Seksyen 9 Opens',
    body: "The second branch opens in Bangi, bringing Ananaz's trusted treatments closer to clients in the southern Selangor corridor.",
  },
  {
    year: '2022',
    title: 'Bangi Seksyen 7',
    body: 'Third branch opens, completing a network of three locations across Selangor — each staffed by therapists trained in-house.',
  },
  {
    year: 'Today',
    title: '10,000+ Customers & Counting',
    body: 'Over two decades in, Ananaz remains privately owned, community-rooted, and committed to one thing: helping every woman walk out feeling like herself.',
  },
]

const team = [
  {
    name: 'Pn Samsinar',
    role: 'Founder & Principal',
    bio: 'With over 20 years in aesthetic skin care, Pn Samsinar built Ananaz from a single room into Selangor\'s most trusted medispa — on results alone.',
  },
  {
    name: 'Ms Fyka',
    role: 'Senior Skin Therapist, Cheras HQ',
    bio: 'Specialising in skin tag removal and melasma treatment, Ms Fyka is known for her meticulous technique and warm approach. A client favourite for years.',
  },
  {
    name: 'Ananaz Academy Team',
    role: 'Certified Educators',
    bio: 'Our academy educators are working therapists first — every lesson comes from real experience on real clients, not just theory.',
  },
]

const baGallery = [
  { title: 'Pro Series Skin Tag', category: 'Skin Treatment', desc: 'Complete removal of persistent skin tags in a single targeted session.' },
  { title: 'Advanced Melasma', category: 'Skin Treatment', desc: 'Significant reduction in deep pigmentation through consistent clinical care.' },
  { title: 'Milia / Oil Cysts', category: 'Skin Treatment', desc: 'Clear skin surface restoration through professional extraction techniques.' },
  { title: 'Body Contouring', category: 'Body Spa', desc: 'Firming and detoxification results following our heritage jamu programme.' },
  { title: 'Bridal Preparation', category: 'Wedding', desc: 'Luminous skin radiance achieved over a 4-week bridal preparation timeline.' },
  { title: 'Acne Reconstruction', category: 'Therapy', desc: 'Texture refinement and active acne suppression for long-term skin health.' },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="font-body text-xs tracking-[0.25em] uppercase text-gold flex items-center gap-3 mb-4">
      <span className="inline-block w-8 h-px bg-gold" />
      {children}
    </p>
  )
}

function FadeUp({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroImageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <div className="bg-cream min-h-screen">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-end overflow-hidden bg-dark">
        <motion.div style={{ y: heroImageY }} className="absolute inset-0">
          <div className="img-placeholder w-full h-full opacity-40" />
        </motion.div>
        <div className="absolute inset-0 bg-dark/70 pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#B8963E 1px, transparent 1px)', backgroundSize: '36px 36px' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-24 pt-40">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs tracking-[0.25em] uppercase text-gold flex items-center gap-3 mb-6"
          >
            <span className="inline-block w-8 h-px bg-gold" />
            Est. 2000 · Cheras, Selangor
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl lg:text-7xl xl:text-8xl font-semibold text-white leading-[1.05] max-w-4xl mb-6"
          >
            Two Decades of Trust.<br />
            <span className="text-gold italic">One Unwavering Mission.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-white/60 text-lg leading-relaxed max-w-xl"
          >
            The story of Ananaz MediSpa — built on expertise, grown through community, and driven by results that speak for themselves.
          </motion.p>
        </div>
      </section>

      {/* ── FOUNDER STORY ─────────────────────────────────────────── */}
      <section className="py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeUp>
            <div className="relative">
              <div className="img-placeholder w-full h-[540px]" />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-gold/30 pointer-events-none hidden lg:block" />
              <div className="absolute -top-4 -left-4 w-24 h-px bg-gold/50 hidden lg:block" />
              <div className="absolute -top-4 -left-4 w-px h-24 bg-gold/50 hidden lg:block" />
            </div>
          </FadeUp>
          <div>
            <FadeUp delay={0.1}>
              <SectionLabel>The Founder</SectionLabel>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold text-dark leading-tight mb-8">
                Born from a belief that every woman deserves great skin.
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="space-y-5 font-body text-muted text-base leading-relaxed">
                <p>Ananaz was built on results first. No gimmicks, no aggressive upselling — just 20 years of clinical skin expertise delivered by therapists who actually care.</p>
                <p>Pn Samsinar set out to create a sanctuary where Malaysian women could access high-grade treatments at fair pricing. That mission remains the heartbeat of every Ananaz branch today.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.3} className="mt-8">
              <blockquote className="border-l-2 border-gold pl-6 py-2">
                <p className="font-display text-2xl italic font-semibold text-gold leading-snug">
                  "I didn't build a business. I built a community — one face at a time."
                </p>
                <footer className="font-body text-xs text-muted mt-3 tracking-wide">— Pn Samsinar, Founder</footer>
              </blockquote>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ──────────────────────────────────────────────── */}
      <section className="py-28 lg:py-36 bg-dark relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#B8963E 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <FadeUp>
            <SectionLabel>Our Journey</SectionLabel>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-white mb-20 max-w-xl">
              25 Years in the Making.
            </h2>
          </FadeUp>
          <div className="relative">
            <div className="absolute left-[7.5rem] lg:left-1/2 top-0 bottom-0 w-px bg-gold/20 hidden sm:block" />
            <div className="flex flex-col gap-0">
              {timeline.map((item, i) => (
                <TimelineItem key={item.year} item={item} isLeft={i % 2 === 0} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RESULTS PORTFOLIO ───────────────────────────────────────── */}
      <section className="py-28 lg:py-36 bg-cream border-t border-divider">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp className="text-center mb-20 flex flex-col items-center">
            <SectionLabel>Our Portfolio</SectionLabel>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-dark max-w-2xl">
              Real Stories.<br /><span className="text-gold italic">Real Results.</span>
            </h2>
            <p className="mt-6 font-body text-muted text-base max-w-lg leading-relaxed">
              Experience the visual proof of our 25-year commitment to clinical excellence and genuine skin restoration.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {baGallery.map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.08} className="group">
                <div className="relative bg-white border border-divider overflow-hidden flex flex-col h-full">
                  <div className="flex h-64 border-b border-divider overflow-hidden">
                    <div className="flex-1 relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
                      <div className="img-placeholder w-full h-full bg-[#E8E2D9]" />
                      <span className="absolute bottom-3 left-3 bg-dark/70 text-white text-[9px] uppercase tracking-widest px-2 py-1 backdrop-blur-sm">Before</span>
                    </div>
                    <div className="w-px bg-divider z-10" />
                    <div className="flex-1 relative overflow-hidden group-hover:scale-105 transition-transform duration-700 delay-[50ms]">
                      <div className="img-placeholder w-full h-full bg-[#F3F1ED]" />
                      <span className="absolute bottom-3 right-3 bg-gold/90 text-white text-[9px] uppercase tracking-widest px-2 py-1 backdrop-blur-sm">After</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="font-body text-[9px] font-bold tracking-[0.2em] uppercase text-gold mb-2 block">{item.category}</span>
                    <h3 className="font-display text-xl font-semibold text-dark mb-2 group-hover:text-gold transition-colors duration-300">{item.title}</h3>
                    <p className="font-body text-xs text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp className="mt-20 text-center" delay={0.4}>
            <p className="font-body text-sm text-muted mb-8 italic">
              *All photos displayed are of actual Ananaz clients. Your results may vary based on skin type and condition.
            </p>
            <a href="https://www.google.com/search?q=ananaz+medispa" target="_blank" rel="noopener noreferrer"
              className="btn-premium px-10 py-5 text-[11px] font-bold tracking-[0.2em] uppercase inline-flex items-center gap-3">
               View Proof on Google <ExternalLink size={12} />
            </a>
          </FadeUp>
        </div>
      </section>

      {/* ── MEET THE TEAM ─────────────────────────────────────────── */}
      <section className="py-28 lg:py-36 bg-[#F3EFE8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp>
            <SectionLabel>Meet the Team</SectionLabel>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-dark mb-4 max-w-xl">
              The People Behind Your Results.
            </h2>
            <p className="font-body text-muted text-base leading-relaxed max-w-lg mb-16">
              Every therapist at Ananaz is trained in-house, certified, and held to the standard Pn Samsinar set in 2000 — care first, results always.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <FadeUp key={member.name} delay={i * 0.12}>
                <div className="group flex flex-col">
                  <div className="relative overflow-hidden">
                    <div className="img-placeholder w-full h-80 lg:h-96 transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 border border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                  <div className="pt-6 border-b border-divider pb-6">
                    <h3 className="font-display text-2xl font-semibold text-dark">{member.name}</h3>
                    <p className="font-body text-xs tracking-wide uppercase text-gold mt-1">{member.role}</p>
                  </div>
                  <p className="font-body text-sm text-muted leading-relaxed pt-5">{member.bio}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="py-28 bg-dark text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#B8963E 1px, transparent 1px)', backgroundSize: '36px 36px' }}
        />
        <FadeUp className="relative z-10">
          <SectionLabel>Ready to Begin?</SectionLabel>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold text-white mb-6 max-w-lg mx-auto leading-tight">
            Confidence starts with a single message.
          </h2>
          <p className="font-body text-white/50 text-base mb-10 max-w-md mx-auto leading-relaxed">
            WhatsApp us to book a consultation, enquire about a treatment, or simply ask — we're always here.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={waGeneral()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium px-10 py-5 text-[11px] font-bold tracking-[0.2em] uppercase inline-flex items-center gap-3"
            >
              <MessageCircle size={15} />
              WhatsApp Us
            </a>
          </div>
        </FadeUp>
      </section>

      <Footer />
    </div>
  )
}

function TimelineItem({ item, isLeft, index }: { item: typeof timeline[0]; isLeft: boolean; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -32 : 32 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.05 * index, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex gap-8 py-12 items-start ${isLeft ? 'lg:flex-row lg:pr-[calc(50%+2rem)]' : 'lg:flex-row-reverse lg:pl-[calc(50%+2rem)]'}`}
    >
      <div className="flex-shrink-0 w-24 lg:w-auto">
        <span className="font-display text-4xl font-semibold text-gold/60">{item.year}</span>
      </div>
      <div className="hidden lg:flex absolute left-1/2 top-[3.5rem] -translate-x-1/2 w-3 h-3 rounded-full bg-gold border-4 border-dark z-10" />
      <div className="flex-1">
        <h3 className="font-display text-xl font-semibold text-white mb-2">{item.title}</h3>
        <p className="font-body text-sm text-white/50 leading-relaxed max-w-sm">{item.body}</p>
      </div>
    </motion.div>
  )
}
