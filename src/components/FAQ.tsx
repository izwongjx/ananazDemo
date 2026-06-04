import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Is skin tag removal painful?',
    a: 'Not at all. Our Pro Series Skin Tag removal uses non-invasive techniques with a topical numbing agent where needed. Most clients describe minimal to zero discomfort.',
  },
  {
    q: 'How many sessions will I need?',
    a: 'It depends on your skin concern. For Skin Tag removal, most clients see visible results after a single session. For melasma or more complex concerns, our therapists will recommend a personalised plan during your first visit.',
  },
  {
    q: 'Are your treatments suitable for sensitive skin?',
    a: 'Yes, absolutely. Since Sam herself struggled with highly sensitive, acne-prone skin, our entire approach is built around barrier repair and gentle, effective treatments.',
  },
  {
    q: 'Do you offer bridal packages?',
    a: 'Yes, we have specialized bridal programs designed to give you radiant, glowing skin for your big day. We recommend starting at least 3 months in advance.',
  },
  {
    q: 'How do I book a consultation?',
    a: 'The easiest way is via WhatsApp — just tap any "Book Consultation" button on this page and you\'ll be connected directly to our team.',
  },
  {
    q: 'Do you sell skincare products?',
    a: 'Yes! Our curated skincare products can be ordered directly via WhatsApp or purchased at any of our branches after a skin assessment.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="faq" ref={ref} className="bg-[#FAF9F7] py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="w-12 h-px bg-gold/50" />
            <h2 className="font-body text-[10px] tracking-[0.25em] uppercase text-gold font-bold">Common Questions</h2>
            <span className="w-12 h-px bg-gold/50" />
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl font-light text-dark"
          >
            Frequently asked
          </motion.h3>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 items-start">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
              className="bg-white rounded-3xl border border-black/[0.04] shadow-[0_2px_10px_rgba(0,0,0,0.02)] overflow-hidden"
            >
              <button
                id={`faq-item-${i}`}
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-6 px-6 lg:px-8 py-6 lg:py-7 text-left group"
                aria-expanded={open === i}
              >
                <span className="font-body text-[13px] font-semibold text-dark/90 group-hover:text-gold transition-colors duration-200">
                  {item.q}
                </span>
                <span className="flex-shrink-0 text-[#C18C74]">
                  {open === i 
                    ? <Minus size={18} strokeWidth={1.5} /> 
                    : <Plus size={18} strokeWidth={1.5} />
                  }
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="font-body text-[13px] text-dark/60 leading-relaxed px-6 lg:px-8 pb-6 lg:pb-8">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
