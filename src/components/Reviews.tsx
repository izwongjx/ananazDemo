import { useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Star, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'

const smallReviews = [
  {
    id: 'r1',
    text: "Dah 3 tahun jadi client Ananaz. Kulit saya jauh lebih baik. Sam faham apa yang kulit saya perlukan.",
    author: 'NUR A., 42 · PETALING JAYA',
    stars: 5,
  },
  {
    id: 'r2',
    text: "I've tried so many clinics. Ananaz is the first place where I felt genuinely listened to. No hard sell, just honest advice.",
    author: 'PRIYA M., 38 · BANGSAR',
    stars: 5,
  },
  {
    id: 'r3',
    text: "Sam's story resonated with me deeply. She really has lived through what I was going through. That trust made all the difference.",
    author: 'LINDA T., 51 · DAMANSARA',
    stars: 5,
  },
  {
    id: 'r4',
    text: "My acne scars have faded significantly. Sam's personalized approach is truly life-changing. Highly recommend to anyone struggling with their skin.",
    author: 'AMINA S., 29 · SUBANG JAYA',
    stars: 5,
  },
  {
    id: 'r5',
    text: "The atmosphere is so relaxing, and the treatments actually work. I've been a regular for 5 years now and my skin has never looked better.",
    author: 'CHLOE W., 34 · MONT KIARA',
    stars: 5,
  },
  {
    id: 'r6',
    text: "Finally, someone who understands sensitive skin. The products they use are top-notch and the results are visible after just one session.",
    author: 'SYLVIA K., 45 · TTDI',
    stars: 5,
  },
]

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-1 justify-center">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-gold fill-gold" />
      ))}
    </div>
  )
}

function SmallStarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-gold fill-gold" />
      ))}
    </div>
  )
}

export default function Reviews() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [currentPage, setCurrentPage] = useState(0)

  const itemsPerPage = 3
  const totalPages = Math.ceil(smallReviews.length / itemsPerPage)

  const nextPage = () => setCurrentPage((p) => (p + 1) % totalPages)
  const prevPage = () => setCurrentPage((p) => (p - 1 + totalPages) % totalPages)

  const currentReviews = smallReviews.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  return (
    <section id="reviews" ref={ref} className="bg-gradient-to-br from-[#398880] via-[#35615d] to-[#43443e] py-24 lg:py-32 overflow-hidden text-center flex flex-col items-center">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 flex flex-col items-center w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <span className="w-8 h-px bg-gold" />
          <p className="font-body text-[10px] tracking-[0.25em] uppercase text-gold font-bold">
            What Our Clients Say
          </p>
          <span className="w-8 h-px bg-gold hidden sm:block" />
        </motion.div>

        {/* Main Hero Quote */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="max-w-4xl mx-auto mb-6"
        >
          <div className="mb-8">
            <StarRow count={5} />
          </div>
          <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl italic text-white leading-relaxed mb-8">
            "The thing about Ananaz is — they told me the truth. They didn't just sell me a package. Sam looked at my skin and told me exactly what it needed. First time in 10 years I actually trusted someone with my face."
          </blockquote>
          <p className="font-body text-[10px] tracking-[0.2em] uppercase text-gold">
            — CLIENT, 47 · KUALA LUMPUR · VERIFIED REVIEW
          </p>
        </motion.div>

        {/* Small Review Cards Slider */}
        <div className="w-full mt-16 lg:mt-24 relative flex items-center justify-center">
          {/* Left Arrow */}
          <button 
            onClick={prevPage}
            className="absolute -left-4 lg:-left-12 z-20 w-12 h-12 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-white transition-colors flex items-center justify-center bg-[#35615d]/80 backdrop-blur-sm"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="w-full overflow-hidden px-4 py-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {currentReviews.map((r) => (
                  <div
                    key={r.id}
                    className="border border-white/20 bg-white/5 rounded-xl p-8 flex flex-col text-left gap-6 hover:bg-white/10 transition-colors duration-300 min-h-[260px]"
                  >
                    <SmallStarRow count={r.stars} />
                    <p className="font-display italic text-white leading-relaxed text-lg lg:text-xl flex-grow">
                      "{r.text}"
                    </p>
                    <div className="pt-2">
                      <div className="font-body text-[10px] font-bold uppercase tracking-widest text-gold/80">{r.author}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={nextPage}
            className="absolute -right-4 lg:-right-12 z-20 w-12 h-12 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-white transition-colors flex items-center justify-center bg-[#35615d]/80 backdrop-blur-sm"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Google View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <a 
            href="https://www.google.com/search?q=ananaz+medispa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 border border-gold text-gold font-body text-xs tracking-widest uppercase font-bold hover:bg-gold hover:text-white transition-colors rounded-full"
          >
            View more on Google <ExternalLink size={14} />
          </a>
        </motion.div>

      </div>
    </section>
  )
}
