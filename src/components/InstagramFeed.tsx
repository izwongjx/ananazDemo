import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const posts = [
  { id: 1, caption: 'That glow after a Pro Series Skin Tag session ✨ #ananaz #skincare' },
  { id: 2, caption: 'Meet our certified therapists — your skin is in safe hands 💛 #medispa' },
  { id: 3, caption: 'Our Bangi Seksyen 9 branch is ready to welcome you! #ananazbangi' },
  { id: 4, caption: 'Bridal prep starts here 👰 Pakej Bridal from RM350 #ananazbridal' },
  { id: 5, caption: 'Real results from real clients 🌿 #skintagremoval #ananaz' },
  { id: 6, caption: 'Beauty Academy graduates 2024 — so proud of each one 💪 #ananazacademy' },
]

export default function InstagramFeed() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="instagram" ref={ref} className="bg-cream py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <p className="font-body text-xs tracking-[0.25em] uppercase text-gold flex items-center gap-3 mb-2">
              <span className="inline-block w-8 h-px bg-gold" />
              Instagram
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-dark">@ananaz.official</h2>
          </motion.div>

          <motion.a
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            href="https://www.instagram.com/ananaz.official"
            target="_blank"
            rel="noopener noreferrer"
            id="instagram-follow"
            className="inline-flex items-center gap-2 font-body text-xs font-medium text-dark border-b border-dark/40 pb-0.5 hover:text-gold hover:border-gold transition-all"
          >
            Follow Us
            <ArrowRight size={12} />
          </motion.a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="overflow-x-auto hide-scrollbar pb-4">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex gap-3 px-6 lg:px-10"
          style={{ width: 'max-content' }}
        >
          {posts.map(post => (
            <a
              key={post.id}
              href="https://www.instagram.com/ananaz.official"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-52 lg:w-64 group relative overflow-hidden"
            >
              <div className="img-placeholder w-full h-52 lg:h-64 bg-[#F0EBE3] transition-transform duration-500 group-hover:scale-105" />

              {/* Caption overlay on hover */}
              <div className="absolute inset-0 bg-dark/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="font-body text-xs text-white/90 leading-relaxed line-clamp-3">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}

          {/* End: Follow card */}
          <a
            href="https://www.instagram.com/ananaz.official"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-52 lg:w-64 h-52 lg:h-64 border border-dashed border-divider flex flex-col items-center justify-center gap-3 hover:border-gold transition-colors duration-300"
          >
            <span className="font-display text-3xl text-gold/60">+</span>
            <span className="font-body text-xs tracking-wide uppercase text-muted">See More on IG</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
