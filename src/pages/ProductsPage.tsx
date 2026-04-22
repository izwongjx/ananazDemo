import { useRef, useEffect, type ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle2, Droplets, FlaskConical, Sparkles } from 'lucide-react'
import { waProduct, waGeneral } from '../lib/whatsapp'

// ─── Exact product data from official product sheets ─────────────────────────

const products = [
  {
    id: 'mawar',
    name: 'Mawar Lourve Serum',
    brand: 'Sinarosa',
    category: 'For All Skin Type',
    size: '10ml',
    price: 'RM45',
    icon: Droplets,
    description:
      'Face serum is a lightweight skin care product containing high concentrations of active ingredients to target specific skin concerns such as hydration, ageing, acne, or pigmentation. The light texture is easily absorbed by the skin for faster results.',
    descriptionEn:
      'A lightweight face serum with high concentrations of active ingredients targeting specific skin concerns — hydration, ageing, acne, or pigmentation. The light texture is easily absorbed for faster visible results.',
    keyIngredients: [
      {
        name: 'Castor Oil',
        role: 'The Moisture Lock',
        benefit:
          'Deeply moisturizes and helps prevent moisture loss (locks moisture). Anti-inflammatory and anti-bacterial, it promotes rapid skin healing and strengthens the outer layer of the skin.',
      },
      {
        name: 'Tamanu Oil',
        role: 'The Skin Renewer',
        benefit:
          'Promotes the production of new cells. Effective for healing wounds, scars, and burns.',
      },
      {
        name: 'Jojoba',
        role: 'The Gentle Hydrator',
        benefit:
          'Softens and moisturizes without clogging pores. Draws moisture into the skin and maintains hydration.',
      },
      {
        name: 'Rose Geranium Essential Oil',
        role: 'The Pore Balancer',
        benefit:
          'Balances skin oil production and helps refine the appearance of open pores.',
      },
    ],
    ingredients: ['Castor Oil', 'Tamanu Oil', 'Jojoba', 'Rose Geranium Essential Oil'],
    usage: [
      { step: 'Cleanse Face', detail: 'Ensure your face is clean and dry.' },
      { step: 'Apply Toner', detail: 'Use toner to balance the skin\'s pH level.' },
      { step: 'Apply Serum', detail: 'Take a few drops of serum and apply evenly onto the face and neck.' },
      { step: 'Moisturize', detail: 'Follow with moisturizer to lock in hydration.' },
    ],
    accentColor: 'from-[#F5EDE0] to-cream',
  },
  {
    id: 'bakuchiol',
    name: 'Bakuchiol + Vit C Serum',
    brand: 'Sinarosa',
    category: 'Vegan & Antioxidants',
    size: '10ml',
    price: 'RM59',
    icon: Sparkles,
    description:
      'Bakuchiol has soothing properties that help calm the skin and minimize issues related to sensitivity and reactivity. It is also a powerful antioxidant that helps fight signs of ageing, such as fine lines and loss of firmness, by targeting free radicals.',
    descriptionEn:
      'Bakuchiol has calming properties that help soothe the skin and minimise sensitivity and reactivity. It is a powerful antioxidant that combats signs of ageing — fine lines and loss of firmness — by targeting free radicals.',
    keyIngredients: [
      {
        name: 'Meadowfoam Seed',
        role: 'The Fast Absorber',
        benefit:
          'Provides fast-absorbing moisture without a greasy residue. Smoothes and softens skin texture; non-comedogenic and will not clog pores.',
      },
      {
        name: 'Vitamin C',
        role: 'The Brightener',
        benefit:
          'Brightens and helps treat skin tags, pigmentation, and uneven skin tone. Stimulates collagen production and provides anti-ageing benefits.',
      },
      {
        name: 'Squalane',
        role: 'The Protector',
        benefit:
          'Anti-inflammatory and skin-soothing. Strengthens the outer skin barrier and prevents loss of moisture.',
      },
    ],
    ingredients: ['Meadowfoam Seed', 'Vitamin C', 'Squalane'],
    usage: [
      { step: 'Cleanse Face', detail: 'Ensure your face is clean and dry.' },
      { step: 'Apply Toner', detail: 'Use toner to balance the skin\'s pH level.' },
      { step: 'Apply Serum', detail: 'Take a few drops of serum and apply evenly onto the face and neck.' },
      { step: 'Moisturize', detail: 'Follow with moisturizer to lock in hydration.' },
    ],
    accentColor: 'from-[#FFF3E0] to-cream',
  },
  {
    id: 'royal',
    name: 'Royal Pudding Sleeping Mask',
    brand: 'Sinarosa',
    category: 'For All Skin Type',
    size: '50gm',
    price: 'RM65',
    icon: FlaskConical,
    description:
      'A sleeping mask is a skin care product used at night before sleep. It helps maintain skin moisture throughout the night, making the skin softer and more hydrated. It also aids in the skin\'s repair process by providing nutrients and active ingredients that work while you sleep.',
    descriptionEn:
      'A nighttime skincare product applied before sleep. The sleeping mask maintains skin moisture throughout the night, making skin softer and more hydrated. It supports the skin repair process by delivering nutrients and active ingredients that work while you sleep.',
    keyIngredients: [
      {
        name: 'Jojoba',
        role: 'The Hydrator',
        benefit:
          'Maintains skin moisture, anti-inflammatory, and antioxidant. Enriched with vitamins E & B.',
      },
      {
        name: 'Aloe Vera',
        role: 'The Soother',
        benefit:
          'Accelerates wound healing and treats scars. Relieves skin irritation and provides anti-inflammatory benefits.',
      },
      {
        name: 'Rice Brown Oil',
        role: 'The Age-Defier',
        benefit:
          'Anti-ageing and intensively moisturizing. Reduces dark spots and pigmentation.',
      },
      {
        name: 'Palma Rose Esst. Oil',
        role: 'The Acne Fighter',
        benefit:
          'Anti-bacterial and hydrates the skin. Excellent for treating acne.',
      },
      {
        name: 'Lavender Oil',
        role: 'The Relaxer',
        benefit:
          'Enriched with vitamin E to soften the skin. Acts as a protective barrier against dehydration.',
      },
      {
        name: 'Sweet Almond',
        role: 'The Skin Repairer',
        benefit:
          'Antioxidant that prevents damage from UV rays and evens out skin tone.',
      },
      {
        name: 'Olive Oil',
        role: 'The Barrier Boost',
        benefit:
          'Enriched with vitamin E to soften the skin. Creates a protective layer to prevent core hydration loss.',
      },
    ],
    ingredients: ['Jojoba', 'Aloe Vera', 'Rice Brown Oil', 'Palma Rose Esst. Oil', 'Lavender Oil', 'Sweet Almond', 'Olive Oil'],
    usage: [
      { step: 'Step 1', detail: 'Cleanse your face.' },
      { step: 'Step 2', detail: 'Apply toner.' },
      { step: 'Step 3', detail: 'Apply serum.' },
      { step: 'Step 4', detail: 'Use moisturizer.' },
      { step: 'Step 5', detail: 'Apply the sleeping mask.' },
      { step: 'Step 6', detail: 'Leave on overnight.' },
      { step: 'Step 7', detail: 'Rinse off in the morning.' },
    ],
    accentColor: 'from-[#F0EDE5] to-cream',
  },
]

const routines = [
  {
    title: 'Morning Glow',
    products: ['Mawar Lourve Serum'],
    benefit: 'Deep hydration and barrier protection for the day ahead.',
  },
  {
    title: 'Advanced Anti-Ageing',
    products: ['Bakuchiol + Vit C Serum', 'Royal Pudding Sleeping Mask'],
    benefit: 'Target fine lines and overnight recovery with potent antioxidants.',
  },
  {
    title: 'The Full Ritual',
    products: ['Mawar Lourve Serum', 'Bakuchiol + Vit C Serum', 'Royal Pudding Sleeping Mask'],
    benefit: 'Complete skin transformation — hydration, brightening, and repair.',
  },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

function FadeUp({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProductsPage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        const offset = 80 // Navbar height
        const bodyRect = document.body.getBoundingClientRect().top
        const elementRect = el.getBoundingClientRect().top
        const elementPosition = elementRect - bodyRect
        const offsetPosition = elementPosition - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    }
  }, [hash])

  return (
    <div className="bg-cream min-h-screen">

      {/* Back nav */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-cream/90 backdrop-blur-sm border border-divider px-4 py-2 font-body text-xs font-medium text-dark hover:border-gold hover:text-gold transition-all duration-300"
        >
          <ArrowLeft size={13} />
          Back to Home
        </Link>
      </div>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="bg-dark relative overflow-hidden pt-36 pb-24">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#B8963E 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-body text-xs tracking-[0.25em] uppercase text-gold flex items-center gap-3 mb-5"
          >
            <span className="w-8 h-px bg-gold inline-block" />
            Sinarosa by Ananaz
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl lg:text-7xl font-semibold text-white leading-[1.08] max-w-3xl mb-6"
          >
            Skincare Built on<br />
            <span className="text-gold italic">Real Ingredients.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-white/55 text-base leading-relaxed max-w-lg mb-10"
          >
            Each Sinarosa product is formulated with clinically chosen ingredients — verified, transparent, and results-focused. No fillers. No guesswork.
          </motion.p>

          {/* Jump links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="flex flex-wrap gap-3"
          >
            {products.map(p => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="font-body text-xs tracking-wide border border-white/20 px-4 py-2 text-white/60 hover:border-gold hover:text-gold transition-all duration-300"
              >
                {p.name}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PRODUCT SECTIONS ────────────────────────────────────── */}
      {products.map((product, idx) => (
        <ProductSection key={product.id} product={product} reversed={idx % 2 === 1} />
      ))}

      {/* ── ROUTINES ─────────────────────────────────────────────── */}
      <section className="py-28 lg:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp className="text-center mb-20">
            <p className="font-body text-xs tracking-[0.25em] uppercase text-gold flex items-center justify-center gap-3 mb-5">
              <span className="w-8 h-px bg-gold inline-block" />
              Better Together
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-dark mb-4">
              Rituals for Results.
            </h2>
            <p className="font-body text-muted text-base max-w-lg mx-auto">
              Our products are designed to work in synergy. Pair them correctly to amplify their clinical benefits.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {routines.map((r, i) => (
              <FadeUp key={r.title} delay={i * 0.12}>
                <div className="bg-cream p-10 border border-divider h-full flex flex-col">
                  <h3 className="font-display text-2xl font-semibold text-dark mb-4">{r.title}</h3>
                  <div className="flex-1">
                    <ul className="mb-8 space-y-3">
                      {r.products.map(p => (
                        <li key={p} className="flex items-center gap-2 font-body text-sm text-dark font-medium">
                          <CheckCircle2 size={14} className="text-gold" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <p className="font-body text-xs text-muted leading-relaxed italic border-l-2 border-gold/30 pl-4">
                      {r.benefit}
                    </p>
                  </div>
                  <div className="mt-8 pt-8 border-t border-divider/50">
                    <a
                      href={waGeneral()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-body text-xs font-semibold tracking-widest uppercase text-dark hover:text-gold transition-colors"
                    >
                      Consult with us
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM NOTE ─────────────────────────────────────────── */}
      <section className="py-20 bg-dark text-center">
        <FadeUp>
          <p className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-4">Distributed by Ananaz MediSpa</p>
          <p className="font-body text-white/40 text-sm max-w-md mx-auto leading-relaxed">
            All Sinarosa products are available for order via WhatsApp. We'll confirm stock and arrange delivery or branch pickup.
          </p>
          <p className="font-body text-white/25 text-xs mt-4">www.ananaz.my</p>
        </FadeUp>
      </section>
    </div>
  )
}

// ─── Per-product section ──────────────────────────────────────────────────────

function ProductSection({
  product,
  reversed,
}: {
  product: typeof products[0]
  reversed: boolean
}) {
  const Icon = product.icon

  return (
    <section id={product.id} className="border-t border-divider">
      {/* Product header band */}
      <div className={`bg-gradient-to-b ${product.accentColor} py-20 lg:py-28`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-14 lg:gap-20 items-start`}>

            {/* Image placeholder */}
            <FadeUp className="lg:w-2/5 w-full flex-shrink-0">
              <div className="relative">
                <div className="img-placeholder w-full h-80 lg:h-[480px] bg-white/60" />
                {/* Price badge */}
                <div className="absolute top-5 right-5 bg-dark text-cream px-4 py-3 text-center">
                  <div className="font-display text-2xl font-semibold text-gold">{product.price}</div>
                  <div className="font-body text-[10px] text-white/50 tracking-wide mt-0.5">{product.size}</div>
                </div>
              </div>
            </FadeUp>

            {/* Product info */}
            <div className="flex-1">
              <FadeUp delay={0.1}>
                <span className="font-body text-[10px] tracking-[0.22em] uppercase text-gold border border-gold/40 px-3 py-1 inline-flex items-center gap-2">
                  <Icon size={11} />
                  {product.category}
                </span>
                <h2 className="font-display text-4xl lg:text-5xl font-semibold text-dark leading-tight mt-4 mb-2">
                  {product.name}
                </h2>
                <p className="font-body text-xs tracking-wide text-muted mb-6">{product.brand} · {product.size}</p>
              </FadeUp>

              {/* Description */}
              <FadeUp delay={0.2} className="mb-8">
                <p className="font-body text-muted text-sm leading-relaxed mb-3">{product.description}</p>
                <p className="font-body text-dark/60 text-sm leading-relaxed italic border-l-2 border-gold/40 pl-4">
                  {product.descriptionEn}
                </p>
              </FadeUp>

              {/* Order CTA */}
              <FadeUp delay={0.3}>
                <a
                  href={waProduct(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`products-order-${product.id}`}
                  className="inline-flex items-center gap-2 bg-dark text-cream font-body text-xs font-medium px-6 py-3.5 tracking-wide uppercase hover:bg-gold transition-colors duration-300"
                >
                  Order via WhatsApp — {product.price}
                  <ArrowRight size={13} />
                </a>
              </FadeUp>
            </div>
          </div>
        </div>
      </div>

      {/* Ingredients + Usage */}
      <div className="bg-cream py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

            {/* Key Ingredients */}
            <div className="lg:col-span-2">
              <FadeUp>
                <h3 className="font-display text-2xl font-semibold text-dark mb-1">Key Ingredients</h3>
                <div className="w-8 h-px bg-gold mb-8" />
              </FadeUp>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {product.keyIngredients.map((ing, i) => (
                  <FadeUp key={ing.name} delay={i * 0.07}>
                    <div className="border border-divider p-5 hover:border-gold transition-colors duration-300 group h-full">
                      <span className="font-body text-[9px] tracking-widest uppercase text-gold/60 mb-2 block">{ing.role}</span>
                      <h4 className="font-display text-lg font-semibold text-dark mb-2 group-hover:text-gold transition-colors duration-300">
                        {ing.name}
                      </h4>
                      <p className="font-body text-xs text-muted leading-relaxed">{ing.benefit}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>

              {/* Full ingredients list */}
              <FadeUp delay={0.2} className="mt-8 pt-8 border-t border-divider">
                <p className="font-body text-[10px] tracking-[0.22em] uppercase text-gold mb-3">Full Ingredients</p>
                <p className="font-body text-sm text-muted leading-relaxed">
                  {product.ingredients.join(' · ')}
                </p>
              </FadeUp>
            </div>

            {/* Usage Instructions */}
            <div>
              <FadeUp>
                <h3 className="font-display text-2xl font-semibold text-dark mb-1">How to Use</h3>
                <div className="w-8 h-px bg-gold mb-8" />
              </FadeUp>
              <div className="flex flex-col gap-4">
                {product.usage.map((step, i) => (
                  <FadeUp key={i} delay={i * 0.06}>
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full border border-gold/40 flex items-center justify-center mt-0.5">
                        <CheckCircle2 size={13} className="text-gold" />
                      </div>
                      <div>
                        <span className="font-body text-xs font-semibold text-dark">{step.step}: </span>
                        <span className="font-body text-xs text-muted">{step.detail}</span>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>

              {/* Re-order CTA */}
              <FadeUp delay={0.4} className="mt-8 pt-6 border-t border-divider">
                <a
                  href={waProduct(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-xs font-medium text-dark border-b border-dark/40 pb-0.5 hover:text-gold hover:border-gold transition-all duration-300"
                >
                  Order {product.name}
                  <ArrowRight size={12} />
                </a>
              </FadeUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
