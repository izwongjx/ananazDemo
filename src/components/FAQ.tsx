import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'How do I make an appointment?',
    a: 'The easiest way is via WhatsApp — just tap any "Book Appointment" button on this page and you\'ll be connected directly to our team. We typically respond within minutes during operating hours.',
  },
  {
    q: 'Which branch should I go to?',
    a: 'We have three branches — Cheras (HQ), Bangi Seksyen 7, and Bangi Seksyen 9. Choose whichever is most convenient for you. All branches offer the full range of services.',
  },
  {
    q: 'Is the Skin Tag removal painful?',
    a: 'Not at all. Our Pro Series Skin Tag removal uses non-invasive techniques with a topical numbing agent where needed. Most clients describe minimal to zero discomfort.',
  },
  {
    q: 'How many sessions do I need?',
    a: 'It depends on your skin concern. For Skin Tag removal, most clients see visible results after a single session. For melasma or more complex concerns, our therapists will recommend a personalised plan during your first visit.',
  },
  {
    q: 'Do you sell products online?',
    a: 'Yes! Our skincare products can be ordered directly via WhatsApp. Simply click "Order via WhatsApp" on any product in our catalog and we\'ll arrange delivery or branch pickup for you.',
  },
  {
    q: 'Can I enroll in the Beauty Academy?',
    a: 'Absolutely. Ananaz Beauty Academy accepts students year-round for our Facial, Body Spa, and Entrepreneurship programmes. WhatsApp us at the Cheras HQ number to get course schedules and intake dates.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="faq" ref={ref} className="bg-cream py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left: header + decoration */}
          <div className="lg:col-span-2">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="font-body text-xs tracking-[0.25em] uppercase text-gold flex items-center gap-3 mb-4"
            >
              <span className="inline-block w-8 h-px bg-gold" />
              FAQ
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl lg:text-5xl font-semibold text-dark mb-8 leading-tight"
            >
              Questions We Hear Often.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-body text-muted text-sm leading-relaxed"
            >
              Can't find what you're looking for? WhatsApp us directly — we're happy to help.
            </motion.p>
            {/* Decorative element */}
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              animate={inView ? { opacity: 1, scaleY: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8, transformOrigin: 'top' }}
              className="mt-16 hidden lg:block"
            >
              <div className="w-px h-40 bg-gradient-to-b from-gold/60 to-transparent ml-1" />
              <div className="w-2 h-2 rounded-full bg-gold/40 -ml-0.5 mt-1" />
            </motion.div>
          </div>

          {/* Right: accordion */}
          <div className="lg:col-span-3 flex flex-col gap-0 divide-y divide-divider">
            {faqs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
              >
                <button
                  id={`faq-item-${i}`}
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                  aria-expanded={open === i}
                >
                  <span className="font-display text-lg font-semibold text-dark group-hover:text-gold transition-colors duration-200">
                    {item.q}
                  </span>
                  <span className="flex-shrink-0 mt-1">
                    {open === i
                      ? <Minus size={16} className="text-gold" />
                      : <Plus size={16} className="text-muted group-hover:text-gold transition-colors" />
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
                      className="overflow-hidden"
                    >
                      <p className="font-body text-sm text-muted leading-relaxed pb-6 max-w-lg">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
