import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Is skin tag removal painful?',
    a: 'Most clients describe the sensation as a brief stinging or warmth rather than pain. We work carefully and explain every step so you are not caught off guard. The vast majority of clients tell us it was far less uncomfortable than they had expected. For particularly sensitive areas, we discuss comfort measures during your consultation.',
  },
  {
    q: 'Will it leave a scar?',
    a: 'When performed correctly with appropriate technique and depth, the risk of permanent scarring is very low. During healing, there may be a small pink or slightly darker mark that fades over weeks. This is why proper technique and correct aftercare matter so much — both work together to produce a clean result. We discuss this honestly before any procedure begins.',
  },
  {
    q: 'Will the skin tag come back after removal?',
    a: 'Once a skin tag is properly removed, it does not grow back in the same spot. However, new skin tags may form over time in the same general area — because the underlying tendency (genetics, friction, hormonal changes) remains. This is not a failure of treatment; it is simply how skin ages. We explain this clearly so your expectations are realistic from the beginning.',
  },
  {
    q: 'How many sessions will I need?',
    a: 'This depends entirely on the number, type, and location of your growths. Many clients achieve excellent results in a single session. Others with multiple or clustered growths benefit from treating in stages to allow the skin time to heal properly between sessions. We will give you a clear, honest recommendation at your consultation — with no pressure to do more than is genuinely right for you.',
  },
  {
    q: 'Is this suitable for darker skin tones?',
    a: 'Yes — and this is an area where our 25 years of experience in Malaysia is genuinely important. Darker skin tones require careful consideration of technique and depth to minimise the risk of post-inflammatory hyperpigmentation (PIH). We understand Malaysian skin across all tones and ethnicities, and adjust our approach accordingly. This is not guesswork — it is practised experience.',
  },
  {
    q: 'What is the recovery time?',
    a: 'For most clients, the treated area heals within 1 to 3 weeks, depending on the number and type of growths removed. You may notice small scabs or redness initially — this is a normal part of healing. Most clients return to their normal routine, including wearing makeup and hijab, within a few days with some precautions. Full aftercare guidance is provided at your session.',
  },
  {
    q: 'Can I wear my hijab or sunscreen during recovery?',
    a: 'Yes, with some care. We provide specific aftercare guidance for clients who wear hijab — including fabric choices and cleaning routine during healing. Sun protection is especially important after removal, particularly in Malaysia\'s climate. We will advise you on which sunscreen is suitable and how to apply it without disturbing the healing skin.',
  },
  {
    q: 'I\'m not sure if what I have is a skin tag. Can you help identify it?',
    a: 'Absolutely. You can send us a clear photo via WhatsApp and we will let you know what we think it is, whether it is something we treat, and whether a consultation is recommended. You are never expected to diagnose your own skin. That is our role — and we take it seriously.',
  },
  {
    q: 'I\'m scared. Is this the right decision for me?',
    a: 'Being nervous is completely understandable — and we have heard this from many of our most satisfied clients. Our role is never to push you into a decision. We will talk through everything at your consultation: what the procedure involves, what to expect, what the realistic outcome is, and what your alternatives are. You decide, in your own time. If after the consultation you want to wait, that is absolutely fine. We will still be here.',
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
            className="font-display text-4xl lg:text-5xl font-light text-dark leading-tight"
          >
            Every question<br />
            a hesitant visitor<br />
            <span className="text-gold font-semibold italic">thinks about.</span>
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
                <span className="font-body text-base font-semibold text-dark/90 group-hover:text-gold transition-colors duration-200">
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
                    <p className="font-body text-sm lg:text-base text-dark/60 leading-relaxed px-6 lg:px-8 pb-6 lg:pb-8">
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
