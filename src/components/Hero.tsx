import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    { id: 'quote' },
    { id: 'promo-1', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1000' },
    { id: 'promo-2', image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=1000' }
  ]

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col lg:flex-row overflow-hidden"
    >
      {/* ── LEFT SIDE ─────────────────────────────────────────────── */}
      <div className="w-full lg:w-1/2 bg-[#faf6f2] flex flex-col justify-center px-6 lg:px-20 pt-32 lg:pt-40 pb-16 lg:pb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl mx-auto lg:mx-0 mt-4 lg:mt-8"
        >
          {/* Top Label */}
          <div className="flex items-center gap-4 mb-8">
            <span className="w-8 sm:w-12 h-[1px] bg-[#c9866b]" />
            <span className="font-body text-xs sm:text-[13px] tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[#c9866b] font-bold">
              25 Years of Skin Expertise · Kuala Lumpur
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-6xl lg:text-[5rem] xl:text-[5.5rem] font-light text-app-text leading-[1.1] mb-6">
            Lived it.<br />
            <span className="text-[#c5876a] italic">Mastered it.</span>
          </h1>

          {/* Subheading */}
          <p className="font-display text-xl lg:text-[22px] italic text-[#9E7D6F] mb-10">
            Dah rasa. Dah kuasai.
          </p>

          {/* Description */}
          <p className="font-body text-base lg:text-[17px] text-[#6b4c3b] leading-[1.8] mb-12 max-w-xl pr-4">
            Sam knows exactly what it feels like to try everything and still wake up 
            disappointed. <strong className="font-semibold text-[#6b4c3b]">She found the answers the hard way</strong> — and has spent <strong className="font-semibold text-[#6b4c3b]">25 years making sure you don't have to.</strong>
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
            <Link 
              to="/booking"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#c9856a] text-white font-body text-[15px] font-semibold hover:opacity-90 transition-opacity text-center rounded-full shadow-sm"
            >
              Book Your Consultation
            </Link>
            <Link 
              to="/about"
              className="w-full sm:w-auto px-8 py-3.5 border border-[#2d8b8e] text-[#2d8b8e] font-body text-[15px] font-semibold hover:bg-[#2d8b8e] hover:text-white transition-colors text-center rounded-full"
            >
              Our Story &rarr;
            </Link>
          </div>

        </motion.div>
      </div>

      {/* ── RIGHT SIDE ────────────────────────────────────────────── */}
      <div className="w-full lg:w-1/2 relative flex flex-col justify-end px-8 lg:px-16 py-20 lg:pb-16 lg:pt-0 overflow-hidden bg-dark group">
        
        {/* Background Layer */}
        <AnimatePresence mode="wait">
          {currentSlide === 0 && (
            <motion.div 
              key="slide-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 z-0"
              style={{ background: 'linear-gradient(145deg, #1A5F62 0%, #2D8B8E 40%, #3D6060 70%, #2C2621 100%)' }}
            >
              <div className="absolute top-0 right-0 w-[500px] h-[500px] border border-white/10 rounded-full translate-x-1/4 -translate-y-1/4 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] border border-white/10 rounded-full -translate-x-1/4 translate-y-1/4 pointer-events-none" />
            </motion.div>
          )}

          {currentSlide > 0 && (
            <motion.div
              key={`slide-${currentSlide}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 z-0"
            >
              <img 
                src={slides[currentSlide].image} 
                alt="Campaign Placeholder" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content Layer */}
        <AnimatePresence mode="wait">
          {currentSlide === 0 ? (
            <motion.div 
              key="content-0"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 max-w-sm mx-auto lg:mx-0 lg:ml-0 lg:mt-auto"
            >
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158]" />
                <span className="font-body text-[8px] tracking-[0.2em] uppercase text-cream">
                  Trusted by thousands of Malaysian women
                </span>
              </div>

              {/* Quote */}
              <blockquote className="font-display text-2xl lg:text-3xl italic text-white leading-snug mb-6">
                "I didn't come into beauty to build a business. I came to find the answer my own skin was begging for — then share it with every woman who felt the same."
              </blockquote>

              {/* Author */}
              <p className="font-body text-[9px] tracking-[0.25em] uppercase text-cream/70">
                — Sam, Founder · Ananaz Medispa
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 max-w-sm mx-auto lg:mx-0 lg:ml-0 lg:mt-auto"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/20 bg-black/20 backdrop-blur-sm rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-peach" />
                <span className="font-body text-[8px] tracking-[0.2em] uppercase text-white">
                  Latest Updates
                </span>
              </div>
              <h3 className="font-display text-3xl lg:text-4xl text-white mb-4">
                Special Event & Campaign Placeholder
              </h3>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 flex justify-between z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors pointer-events-auto"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors pointer-events-auto"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 right-8 z-20 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'bg-white w-6' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
