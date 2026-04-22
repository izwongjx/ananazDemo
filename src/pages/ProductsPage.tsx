import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowLeft, ArrowRight, X, Check, Droplets, FlaskConical, Sparkles, CheckCircle2,
} from 'lucide-react'
import { waProduct, waGeneral } from '../lib/whatsapp'

// ─── Data ─────────────────────────────────────────────────────────────────────

const products = [
  {
    id: 'mawar',
    name: 'Mawar Lourve Serum',
    brand: 'Sinarosa',
    category: 'For All Skin Type',
    size: '10ml',
    price: 'RM45',
    icon: Droplets,
    tagColor: 'bg-gold text-white',
    shortDesc: 'A lightweight face serum with high concentrations of active ingredients targeting specific skin concerns — hydration, ageing, acne, or pigmentation.',
    description: 'Face serum is a lightweight skin care product containing high concentrations of active ingredients to target specific skin concerns such as hydration, ageing, acne, or pigmentation. The light texture is easily absorbed by the skin for faster results.',
    descriptionEn: 'A lightweight face serum with high concentrations of active ingredients targeting specific skin concerns — hydration, ageing, acne, or pigmentation. The light texture is easily absorbed for faster visible results.',
    keyIngredients: [
      { name: 'Castor Oil', role: 'The Moisture Lock', benefit: 'Deeply moisturizes and helps prevent moisture loss. Anti-inflammatory and anti-bacterial, promoting rapid skin healing.' },
      { name: 'Tamanu Oil', role: 'The Skin Renewer', benefit: 'Promotes the production of new cells. Effective for healing wounds, scars, and burns.' },
      { name: 'Jojoba', role: 'The Gentle Hydrator', benefit: 'Softens and moisturizes without clogging pores. Draws moisture into the skin and maintains hydration.' },
      { name: 'Rose Geranium Essential Oil', role: 'The Pore Balancer', benefit: 'Balances skin oil production and helps refine the appearance of open pores.' },
    ],
    usage: [
      { step: 'Cleanse Face', detail: 'Ensure your face is clean and dry.' },
      { step: 'Apply Toner', detail: 'Use toner to balance the skin\'s pH level.' },
      { step: 'Apply Serum', detail: 'Take a few drops and apply evenly onto the face and neck.' },
      { step: 'Moisturize', detail: 'Follow with moisturizer to lock in hydration.' },
    ],
  },
  {
    id: 'bakuchiol',
    name: 'Bakuchiol + Vit C Serum',
    brand: 'Sinarosa',
    category: 'Vegan & Antioxidants',
    size: '10ml',
    price: 'RM59',
    icon: Sparkles,
    tagColor: 'bg-dark text-white',
    shortDesc: 'A powerful antioxidant serum that combats signs of ageing, minimises sensitivity, and brightens over time — vegan-certified and gentle on reactive skin.',
    description: 'Bakuchiol has soothing properties that help calm the skin and minimize issues related to sensitivity and reactivity. It is also a powerful antioxidant that helps fight signs of ageing.',
    descriptionEn: 'Bakuchiol has calming properties that soothe the skin and minimise sensitivity. A powerful antioxidant that combats signs of ageing — fine lines and loss of firmness — by targeting free radicals.',
    keyIngredients: [
      { name: 'Meadowfoam Seed', role: 'The Fast Absorber', benefit: 'Fast-absorbing moisture without a greasy residue. Smoothes skin texture and is non-comedogenic.' },
      { name: 'Vitamin C', role: 'The Brightener', benefit: 'Brightens skin and helps treat pigmentation. Stimulates collagen production and provides anti-ageing benefits.' },
      { name: 'Squalane', role: 'The Protector', benefit: 'Anti-inflammatory and skin-soothing. Strengthens the outer skin barrier and prevents moisture loss.' },
    ],
    usage: [
      { step: 'Cleanse Face', detail: 'Ensure your face is clean and dry.' },
      { step: 'Apply Toner', detail: 'Use toner to balance the skin\'s pH level.' },
      { step: 'Apply Serum', detail: 'Take a few drops and apply evenly onto the face and neck.' },
      { step: 'Moisturize', detail: 'Follow with moisturizer to lock in hydration.' },
    ],
  },
  {
    id: 'royal',
    name: 'Royal Pudding Sleeping Mask',
    brand: 'Sinarosa',
    category: 'For All Skin Type',
    size: '50gm',
    price: 'RM65',
    icon: FlaskConical,
    tagColor: 'bg-[#5C5C5C] text-white',
    shortDesc: 'An overnight sleeping mask that works while you sleep — maintaining skin moisture, supporting the repair process, and leaving skin softer and more radiant by morning.',
    description: 'A sleeping mask used at night before sleep. Helps maintain moisture throughout the night, making skin softer and more hydrated while aiding the skin\'s natural repair process.',
    descriptionEn: 'A nighttime skincare product applied before sleep. Maintains skin moisture throughout the night and supports the skin repair process by delivering nutrients and active ingredients while you sleep.',
    keyIngredients: [
      { name: 'Jojoba', role: 'The Hydrator', benefit: 'Maintains skin moisture with anti-inflammatory and antioxidant properties. Enriched with vitamins E & B.' },
      { name: 'Aloe Vera', role: 'The Soother', benefit: 'Accelerates wound healing and treats scars. Relieves skin irritation with anti-inflammatory benefits.' },
      { name: 'Rice Brown Oil', role: 'The Age-Defier', benefit: 'Anti-ageing and intensively moisturizing. Reduces dark spots and pigmentation over time.' },
      { name: 'Lavender Oil', role: 'The Relaxer', benefit: 'Enriched with vitamin E to soften the skin. Acts as a protective barrier against dehydration.' },
      { name: 'Sweet Almond', role: 'The Skin Repairer', benefit: 'Antioxidant that prevents damage from UV rays and evens out skin tone.' },
      { name: 'Olive Oil', role: 'The Barrier Boost', benefit: 'Enriched with vitamin E. Creates a protective layer to prevent core hydration loss overnight.' },
    ],
    usage: [
      { step: 'Step 1', detail: 'Cleanse your face.' },
      { step: 'Step 2', detail: 'Apply toner, then serum.' },
      { step: 'Step 3', detail: 'Use your regular moisturizer.' },
      { step: 'Step 4', detail: 'Apply the sleeping mask as the final step.' },
      { step: 'Step 5', detail: 'Leave on overnight and rinse off in the morning.' },
    ],
  },
]

const routines = [
  { title: 'Morning Glow', products: ['Mawar Lourve Serum'], benefit: 'Deep hydration and barrier protection for the day ahead.' },
  { title: 'Advanced Anti-Ageing', products: ['Bakuchiol + Vit C Serum', 'Royal Pudding Sleeping Mask'], benefit: 'Target fine lines and overnight recovery with potent antioxidants.' },
  { title: 'The Full Ritual', products: ['Mawar Lourve Serum', 'Bakuchiol + Vit C Serum', 'Royal Pudding Sleeping Mask'], benefit: 'Complete skin transformation — hydration, brightening, and repair.' },
]

type Product = typeof products[0]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProductsPage() {
  const [selected, setSelected] = useState<Product | null>(null)
  const [activeTab, setActiveTab] = useState<'ingredients' | 'usage'>('ingredients')

  const openDrawer = (p: Product) => {
    setSelected(p)
    setActiveTab('ingredients')
    document.body.style.overflow = 'hidden'
  }
  const closeDrawer = () => {
    setSelected(null)
    document.body.style.overflow = ''
  }

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

      {/* ── HERO ─────────────────────────────────────────────────────── */}
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
            className="font-body text-white/55 text-base leading-relaxed max-w-lg"
          >
            Each Sinarosa product is formulated with clinically chosen ingredients — verified, transparent, and results-focused. No fillers. No guesswork.
          </motion.p>
        </div>
      </section>

      {/* ── PRODUCT CARDS ─────────────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-b border-divider pb-10"
        >
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-gold mb-3 font-bold">Our Products</p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-dark">3 Signature Formulas</h2>
        </motion.div>

        <div className="space-y-8">
          {products.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className={`group flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} bg-white border border-divider hover:border-gold transition-colors duration-300 overflow-hidden min-h-[300px]`}
              >
                {/* Image */}
                <div className="relative lg:w-[38%] h-56 lg:h-auto overflow-hidden flex-shrink-0">
                  <div className="img-placeholder w-full h-full bg-[#E8E2D9] group-hover:scale-105 transition-transform duration-700" />
                  <span className={`absolute top-5 left-5 ${p.tagColor} font-body text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5`}>
                    {p.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-10 lg:p-12 flex-1">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-7 h-7 bg-gold/10 flex items-center justify-center">
                        <Icon size={13} className="text-gold" />
                      </div>
                      <span className="font-body text-[10px] tracking-widest uppercase text-muted">{p.brand} · {p.size}</span>
                    </div>
                    <h3 className="font-display text-2xl lg:text-3xl font-semibold text-dark leading-tight mb-3">
                      {p.name}
                    </h3>
                    <p className="font-body text-sm text-muted leading-relaxed max-w-sm">
                      {p.shortDesc}
                    </p>
                  </div>

                  <div className="mt-8 flex items-end justify-between gap-6 flex-wrap">
                    <div>
                      <p className="font-body text-[10px] uppercase tracking-widest text-muted mb-1">Price</p>
                      <p className="font-display text-3xl font-semibold text-gold leading-none">{p.price}</p>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => openDrawer(p)}
                        className="btn-premium btn-premium-outline px-7 py-3 text-xs tracking-widest uppercase font-bold"
                      >
                        Details
                      </button>
                      <a
                        href={waProduct(p.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-premium btn-premium-solid shimmer px-7 py-3 text-xs font-bold flex items-center gap-2"
                      >
                        Order <ArrowRight size={13} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ── ROUTINES ──────────────────────────────────────────────────── */}
      <section className="py-28 lg:py-36 bg-white border-t border-divider">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="font-body text-xs tracking-[0.25em] uppercase text-gold flex items-center justify-center gap-3 mb-5">
              <span className="w-8 h-px bg-gold inline-block" />
              Better Together
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-dark mb-4">Rituals for Results.</h2>
            <p className="font-body text-muted text-base max-w-lg mx-auto">
              Our products are designed to work in synergy. Pair them correctly to amplify their clinical benefits.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {routines.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <div className="bg-cream p-10 border border-divider h-full flex flex-col">
                  <h3 className="font-display text-2xl font-semibold text-dark mb-4">{r.title}</h3>
                  <div className="flex-1">
                    <ul className="mb-8 space-y-3">
                      {r.products.map(rp => (
                        <li key={rp} className="flex items-center gap-2 font-body text-sm text-dark font-medium">
                          <CheckCircle2 size={14} className="text-gold" />
                          {rp}
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
                      Consult with us <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM NOTE ───────────────────────────────────────────────── */}
      <section className="py-20 bg-dark text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-4">Distributed by Ananaz MediSpa</p>
          <p className="font-body text-white/40 text-sm max-w-md mx-auto leading-relaxed">
            All Sinarosa products are available for order via WhatsApp. We'll confirm stock and arrange delivery or branch pickup.
          </p>
          <p className="font-body text-white/25 text-xs mt-4">www.ananaz.my</p>
        </motion.div>
      </section>

      {/* ── PRODUCT DETAIL DRAWER ─────────────────────────────────────── */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeDrawer}
              className="fixed inset-0 bg-dark/60 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full max-w-xl bg-white z-50 overflow-y-auto shadow-2xl"
            >
              {/* Drawer header */}
              <div className="sticky top-0 bg-white border-b border-divider px-8 py-6 flex items-start justify-between gap-4 z-10">
                <div className="flex-1">
                  <p className="font-body text-[10px] tracking-[0.3em] uppercase text-gold font-bold mb-1">{selected.brand} · {selected.size}</p>
                  <h2 className="font-display text-xl font-semibold text-dark leading-tight">{selected.name}</h2>
                </div>
                <button
                  onClick={closeDrawer}
                  className="w-10 h-10 border border-divider flex items-center justify-center hover:border-gold hover:text-gold transition-all flex-shrink-0"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-8 space-y-8">
                {/* Image */}
                <div className="aspect-video bg-[#E8E2D9] rounded-xl overflow-hidden">
                  <div className="img-placeholder w-full h-full" />
                </div>

                {/* Price */}
                <div className="flex items-center gap-6">
                  <div className="bg-cream border border-divider px-6 py-3">
                    <p className="font-body text-[10px] uppercase tracking-widest text-muted mb-1">Price</p>
                    <p className="font-display text-2xl font-semibold text-gold">{selected.price}</p>
                  </div>
                  <div className="bg-cream border border-divider px-6 py-3">
                    <p className="font-body text-[10px] uppercase tracking-widest text-muted mb-1">Size</p>
                    <p className="font-body text-sm font-semibold text-dark">{selected.size}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="font-body text-sm text-muted leading-relaxed">{selected.descriptionEn}</p>

                {/* Tabs */}
                <div>
                  <div className="flex gap-0 border-b border-divider mb-8">
                    {(['ingredients', 'usage'] as const).map(tab => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-5 py-3 font-body text-xs tracking-widest uppercase font-bold border-b-2 transition-all ${
                          activeTab === tab
                            ? 'border-gold text-gold'
                            : 'border-transparent text-muted hover:text-dark'
                        }`}
                      >
                        {tab === 'ingredients' ? 'Key Ingredients' : 'How to Use'}
                      </button>
                    ))}
                  </div>

                  {activeTab === 'ingredients' && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                      {selected.keyIngredients.map((ing, i) => (
                        <div key={i} className="border border-divider p-5 hover:border-gold/50 transition-colors">
                          <span className="font-body text-[9px] tracking-widest uppercase text-gold/60 mb-1 block">{ing.role}</span>
                          <h4 className="font-display text-base font-semibold text-dark mb-2">{ing.name}</h4>
                          <p className="font-body text-xs text-muted leading-relaxed">{ing.benefit}</p>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {activeTab === 'usage' && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                      {selected.usage.map((step, i) => (
                        <div key={i} className="flex gap-4 items-start">
                          <div className="flex-shrink-0 w-7 h-7 rounded-full border border-gold/40 flex items-center justify-center mt-0.5">
                            <Check size={12} className="text-gold" />
                          </div>
                          <div>
                            <span className="font-body text-xs font-semibold text-dark">{step.step}: </span>
                            <span className="font-body text-xs text-muted">{step.detail}</span>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>

                {/* CTA */}
                <div className="border-t border-divider pt-8">
                  <a
                    href={waProduct(selected.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-premium btn-premium-solid py-4 text-xs tracking-widest uppercase font-bold flex items-center justify-center gap-2"
                  >
                    Order via WhatsApp — {selected.price} <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
