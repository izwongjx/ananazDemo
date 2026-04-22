import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { waProduct } from '../lib/whatsapp'

const products = [
  { id: 'mawar', name: 'Mawar Lourve Serum', price: 'RM45', tag: 'For All Skin Types' },
  { id: 'bakuchiol', name: 'Bakuchiol + Vit C Serum', price: 'RM59', tag: 'Vegan & Antioxidants' },
  { id: 'royal', name: 'Royal Pudding Sleeping Mask', price: 'RM65', tag: 'For All Skin Types' },
]

export default function Products() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="products" ref={ref} className="bg-cream py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="font-body text-xs tracking-[0.25em] uppercase text-gold flex items-center gap-3 mb-4"
            >
              <span className="inline-block w-8 h-px bg-gold" />
              Our Products
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl lg:text-5xl font-semibold text-dark"
            >
              Skincare You Can Trust.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-2 font-body text-sm font-medium text-dark border-b border-dark/40 pb-0.5 hover:text-gold hover:border-gold transition-all duration-300"
            >
              View All Products & Details
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* Product strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="product-card bg-white group border border-divider"
            >
              <div className="img-placeholder w-full h-52 bg-[#F0EBE3]" />
              <div className="p-5 border-t border-divider group-hover:border-gold transition-colors duration-300">
                <span className="font-body text-[10px] tracking-[0.18em] uppercase text-gold">{p.tag}</span>
                <h3 className="font-display text-xl font-semibold text-dark mt-1 mb-3">{p.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl font-semibold text-gold">{p.price}</span>
                  <div className="flex items-center gap-2">
                    <Link
                      to={`/products#${p.id}`}
                    >
                      <motion.span
                        whileTap={{ scale: 0.96 }}
                        className="btn-premium btn-premium-outline px-4 py-2 text-[10px] tracking-widest uppercase font-bold cursor-pointer"
                      >
                        Details
                      </motion.span>
                    </Link>

                    <a
                      href={waProduct(p.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.span
                        whileTap={{ scale: 0.96 }}
                        className="btn-premium btn-premium-solid shimmer px-4 py-2 text-[10px] tracking-widest uppercase font-bold cursor-pointer flex items-center gap-2"
                      >
                        Enquire More
                        <ArrowRight size={12} />
                      </motion.span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
