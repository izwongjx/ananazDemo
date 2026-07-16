import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowLeft, ArrowRight, X, Check, Droplets, FlaskConical, Sparkles, CheckCircle2, ShoppingBag, ExternalLink, Leaf
} from 'lucide-react'
import { waProduct, waGeneral } from '../lib/whatsapp'
import { useCart } from '../context/CartContext'
import { productsData, ProductItem } from '../data/products'

export default function ProductsPage() {
  const { addItem, setIsCartOpen, totalItems } = useCart()
  const [selected, setSelected] = useState<ProductItem | null>(null)
  const [activeTab, setActiveTab] = useState<'benefits' | 'usage' | 'ingredients'>('benefits')
  const [currentFilter, setCurrentFilter] = useState<string>('All')

  const filterCategories = ['All', 'Cleansing', 'Moisturising', 'Toning', 'Serum', 'Protection']
  const filteredProducts = currentFilter === 'All' 
    ? productsData 
    : productsData.filter(p => p.filterCategory === currentFilter)

  const openDrawer = (p: ProductItem) => {
    setSelected(p)
    setActiveTab('benefits')
    document.body.style.overflow = 'hidden'
  }
  const closeDrawer = () => {
    setSelected(null)
    document.body.style.overflow = ''
  }

  return (
    <div className="bg-cream min-h-screen">
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-36 pb-24" style={{ background: 'linear-gradient(145deg, #1A5F62 0%, #2D8B8E 40%, #3D6060 70%, #2C2621 100%)' }}>
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#E8C98A 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-body text-xs tracking-[0.25em] uppercase text-gold flex items-center gap-3 mb-5 font-bold"
          >
            <span className="w-8 h-px bg-gold inline-block" />
            Sinarosa by Ananaz
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl lg:text-7xl font-semibold text-off-white leading-[1.08] max-w-3xl mb-6"
          >
            Skincare Built on<br />
            <span className="text-gold italic">Real Ingredients.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-white text-base leading-relaxed max-w-lg"
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
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-dark">Signature Formulas</h2>
        </motion.div>

        {/* Desktop Tabs (hidden on small screens) */}
        <div className="hidden lg:block relative mb-12 w-[98vw] left-1/2 -translate-x-1/2">
          <div className="flex items-center justify-center gap-3 xl:gap-4 overflow-hidden px-4 pb-0 w-full">
            {filterCategories.map((cat) => {
              const isActive = cat === currentFilter
              return (
                <button
                  key={cat}
                  onClick={() => setCurrentFilter(cat)}
                  className={`whitespace-nowrap flex-shrink-0 flex justify-center items-center px-6 py-3 rounded-full font-body text-[11px] xl:text-xs tracking-widest uppercase font-bold transition-all duration-300 text-center leading-tight ${
                    isActive 
                      ? 'bg-gold text-white shadow-md' 
                      : 'bg-white text-dark/70 hover:text-gold border border-divider hover:border-gold shadow-sm'
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </div>

        {/* Mobile Dropdown (visible only on small screens) */}
        <div className="block lg:hidden mb-8 relative w-full">
          <select 
            value={currentFilter}
            onChange={(e) => setCurrentFilter(e.target.value)}
            className="w-full appearance-none bg-white border border-divider text-dark/80 font-body text-[10px] sm:text-xs tracking-widest uppercase font-bold py-3.5 pl-6 pr-12 rounded-full shadow-sm focus:outline-none focus:border-gold transition-colors"
          >
            {filterCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5">
            <svg className="h-4 w-4 text-dark/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={p.id}
                className="group flex flex-col bg-cream border border-divider hover:border-gold hover:shadow-lg transition-all overflow-hidden h-full"
              >
                {/* Image */}
                <div className="relative w-full aspect-square overflow-hidden flex-shrink-0">
                  <div className="img-placeholder w-full h-full bg-divider group-hover:scale-105 transition-transform duration-700" />
                  <span className={`absolute top-3 left-3 lg:top-5 lg:left-5 ${p.tagColor} font-body text-[8px] lg:text-[10px] font-bold tracking-[0.2em] uppercase px-2 py-1 lg:px-3 lg:py-1.5`}>
                    {p.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-4 lg:p-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 lg:gap-3 mb-2 lg:mb-4">
                      <div className="hidden lg:flex w-7 h-7 bg-gold/10 items-center justify-center">
                        <Icon size={13} className="text-gold" />
                      </div>
                      <span className="font-body text-[9px] lg:text-[10px] tracking-widest uppercase text-muted">
                        <span className="hidden lg:inline">{p.brand} · </span>{p.size}
                      </span>
                    </div>
                    <h3 className="font-display text-sm sm:text-base lg:text-2xl font-semibold text-dark leading-tight mb-2 lg:mb-3 group-hover:text-gold transition-colors duration-300 line-clamp-2">
                      {p.name}
                    </h3>
                  </div>

                  <div className="mt-auto pt-3 lg:pt-6 border-t border-divider">
                    <div className="mb-3 lg:mb-6 flex justify-between items-end">
                      <div>
                        <p className="hidden lg:block font-body text-[10px] uppercase tracking-widest text-muted mb-1">Price</p>
                        <p className="font-display text-lg lg:text-3xl font-semibold text-gold leading-none">{p.price}</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 lg:gap-3">
                      <button
                        onClick={() => openDrawer(p)}
                        className="w-full btn-premium btn-premium-outline py-2 lg:py-3 text-[10px] lg:text-xs tracking-widest uppercase font-bold"
                      >
                        Details
                      </button>
                      <button
                        onClick={() => {
                          addItem({ id: p.id, name: p.name, price: p.price })
                          setIsCartOpen(true)
                        }}
                        className="w-full btn-premium btn-premium-solid shimmer py-2 lg:py-3 text-[10px] lg:text-xs font-bold flex items-center justify-center gap-2"
                      >
                        <span className="hidden sm:inline">Add to Cart</span>
                        <span className="sm:hidden">Add</span>
                        <ShoppingBag size={12} className="lg:w-[13px] lg:h-[13px]" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
          </AnimatePresence>
        </div>
      </section>

      {/* ── BOTTOM NOTE ───────────────────────────────────────────────── */}
      <section className="py-20 text-center" style={{ background: 'linear-gradient(145deg, #1A5F62 0%, #2D8B8E 40%, #3D6060 70%, #2C2621 100%)' }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-4">Distributed by Ananaz MediSpa</p>
          <p className="font-body text-off-white/40 text-sm max-w-md mx-auto leading-relaxed">
            All Sinarosa products are available for order via WhatsApp. We'll confirm stock and arrange delivery or branch pickup.
          </p>
          <p className="font-body text-off-white/25 text-xs mt-4">www.ananaz.my</p>
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
              className="fixed top-0 right-0 h-full w-full max-w-xl bg-cream z-50 overflow-y-auto shadow-2xl"
            >
              {/* Drawer header */}
              <div className="sticky top-0 bg-cream border-b border-divider px-8 py-6 flex items-start justify-between gap-4 z-10">
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
                <div className="aspect-video bg-divider rounded-xl overflow-hidden">
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
                <div>
                  <h4 className="font-display text-lg font-semibold text-dark mb-2">{selected.shortDesc}</h4>
                  <p className="font-body text-sm text-muted leading-relaxed">{selected.description}</p>
                </div>

                {/* Tabs */}
                <div>
                  <div className="flex gap-0 border-b border-divider mb-8">
                    {(['benefits', 'usage', 'ingredients'] as const).map(tab => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-5 py-3 font-body text-[10px] tracking-widest uppercase font-bold border-b-2 transition-all ${
                          activeTab === tab
                            ? 'border-gold text-gold'
                            : 'border-transparent text-muted hover:text-dark'
                        }`}
                      >
                        {tab === 'benefits' ? 'Key Benefits' : tab === 'usage' ? 'How to Use' : 'Hero Ingredients'}
                      </button>
                    ))}
                  </div>

                  {activeTab === 'benefits' && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                      {selected.keyBenefits.map((benefit, i) => (
                        <div key={i} className="flex gap-4 items-center">
                          <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                          <span className="font-body text-sm font-semibold text-dark">{benefit}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {activeTab === 'usage' && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                      {selected.howToUse.map((step, i) => (
                        <div key={i} className="flex gap-4 items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center mt-0.5">
                            <span className="font-body text-xs font-bold text-gold">{i + 1}</span>
                          </div>
                          <div>
                            <span className="font-body text-sm text-dark">{step}</span>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {activeTab === 'ingredients' && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-2 gap-4">
                      {selected.heroIngredients.map((ing, i) => (
                        <div key={i} className="flex items-center gap-3 bg-cream border border-divider px-4 py-3 rounded-xl">
                           <Leaf size={14} className="text-gold flex-shrink-0" />
                           <span className="font-body text-sm font-medium text-dark">{ing}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>

                {/* CTA */}
                <div className="border-t border-divider pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    onClick={() => {
                      addItem({ id: selected.id, name: selected.name, price: selected.price })
                      setIsCartOpen(true)
                    }}
                    className="w-full btn-premium btn-premium-solid py-4 text-xs tracking-widest uppercase font-bold flex items-center justify-center gap-2"
                  >
                    Add to Cart <ShoppingBag size={14} />
                  </button>
                  <a
                    href={selected.shopeeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-premium btn-premium-outline py-4 text-xs tracking-widest uppercase font-bold flex items-center justify-center gap-2"
                  >
                    View on Shopee <ExternalLink size={14} />
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
