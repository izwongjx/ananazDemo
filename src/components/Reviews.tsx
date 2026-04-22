import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star } from 'lucide-react'

const reviews = [
  {
    id: 'r1',
    text: 'I noticed huge improvement in my skin texture especially for the skin tag... I\'m so glad to have Ms Fyka as my beautician. She\'s very thorough and professional. Highly recommended!',
    author: 'Nur Raihani',
    source: 'Google Reviews',
    stars: 5,
    featured: true,
  },
  {
    id: 'r2',
    text: 'Been coming here for 3 years. The staff are so warm and genuinely care about your skin. My melasma has improved dramatically. Worth every ringgit!',
    author: 'Suraya Ahmad',
    source: 'Google Reviews',
    stars: 5,
    featured: false,
  },
  {
    id: 'r3',
    text: 'The bridal package was amazing — my skin glowed on my wedding day. All my relatives asked what I did! Thank you Ananaz!',
    author: 'Farah Nadia',
    source: 'Facebook',
    stars: 5,
    featured: false,
  },
]

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} className="text-gold fill-gold" />
      ))}
    </div>
  )
}

export default function Reviews() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const featured = reviews.find(r => r.featured)!
  const stacked = reviews.filter(r => !r.featured)

  return (
    <section id="reviews" ref={ref} className="bg-cream py-28 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="font-body text-xs tracking-[0.25em] uppercase text-gold flex items-center gap-3 mb-4"
        >
          <span className="inline-block w-8 h-px bg-gold" />
          What Our Clients Say
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl lg:text-5xl font-semibold text-dark mb-16 max-w-lg"
        >
          Results That Speak for Themselves.
        </motion.h2>

        {/* Asymmetric masonry grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
          {/* Featured: tall left card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-1 lg:row-span-2 bg-white border border-divider p-8 flex flex-col justify-between relative"
          >
            {/* Oversized quotation mark */}
            <div className="absolute top-4 right-6 font-display text-[7rem] text-gold/10 leading-none select-none pointer-events-none">
              "
            </div>

            <div>
              <StarRow count={featured.stars} />
              <p className="font-display text-xl font-semibold italic text-dark leading-relaxed mt-6 mb-8 relative z-10">
                "{featured.text}"
              </p>
            </div>

            <div className="border-t border-divider pt-6">
              <div className="font-body text-sm font-medium text-dark">{featured.author}</div>
              <div className="font-body text-xs text-muted mt-0.5">{featured.source}</div>
            </div>
          </motion.div>

          {/* Right stacked cards */}
          <div className="lg:col-span-2 flex flex-col gap-5 lg:gap-6">
            {stacked.map((r, i) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
                className="bg-white border border-divider p-8 flex flex-col gap-4 relative"
              >
                <div className="absolute top-4 right-6 font-display text-[5rem] text-gold/8 leading-none select-none pointer-events-none">
                  "
                </div>
                <StarRow count={r.stars} />
                <p className="font-body text-muted leading-relaxed text-sm">"{r.text}"</p>
                <div className="border-t border-divider pt-4">
                  <div className="font-body text-sm font-medium text-dark">{r.author}</div>
                  <div className="font-body text-xs text-muted mt-0.5">{r.source}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Rating row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 flex items-center justify-center gap-4 flex-wrap"
        >
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} className="text-gold fill-gold" />
            ))}
          </div>
          <span className="font-body text-sm text-muted">
            Rated <strong className="text-dark">5★</strong> on Google & Facebook
          </span>
        </motion.div>
      </div>
    </section>
  )
}
