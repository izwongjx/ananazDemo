import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'
import { Calendar, Clock, MapPin, ArrowRight, ChevronDown } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { WA_NUMBERS, Branch, BRANCH_LABELS } from '../lib/whatsapp'

const services = [
  'Skin Tag Removal',
  'Melasma Treatment',
  'Oil Cysts / Milia Treatment',
  'Aroma Therapy',
  'Traditional Therapy',
  'Face & Shoulder Therapy',
  'Body Lulur',
  'Ananaz Signature Special Scrub',
  'Aromatherapy Sauna',
  'Aura Herbal Hydrotherapy Bath',
  'Hydrotherapy Bath',
  'Milk / Flower Bath',
  'Body Mask',
  'Nerve Treatment',
  'Bridal Package',
  'Academy Inquiry',
  'General Consultation'
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
}

export default function BookingPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    branch: 'btho' as Branch,
  })

  // Pre-fill service from URL if present
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const serviceParam = params.get('service')
    if (serviceParam) {
      setFormData(prev => ({ ...prev, service: serviceParam }))
    }
  }, [location])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const getWaLink = () => {
    const text = `Hi Ananaz, I'd like to book a free consultation.\n\nName: ${formData.name}\nService Interested: ${formData.service || 'Not specified'}\nPreferred Branch: ${BRANCH_LABELS[formData.branch]}`
    return `https://wa.me/${WA_NUMBERS[formData.branch].replace(/[^0-9]/g, '')}?text=${encodeURIComponent(text)}`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('submitting')
    const waLink = getWaLink()
    window.open(waLink, '_blank')
    setTimeout(() => setFormStatus('idle'), 1000)
  }

  return (
    <div className="bg-cream min-h-screen">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 lg:items-center">
          
          {/* Left Column: Info */}
          <div className="lg:col-span-5">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <p className="font-body text-xs tracking-[0.25em] uppercase text-gold flex items-center gap-3 mb-6">
                <span className="inline-block w-8 h-px bg-gold" />
                Availability
              </p>
              <h1 className="font-display text-5xl lg:text-6xl font-semibold text-dark leading-[1.1] mb-8">
                Reserve Your <br />
                <span className="italic text-gold">Transformation.</span>
              </h1>
              <p className="font-body text-muted text-lg leading-relaxed mb-12 max-w-md">
                Every appointment begins with a curated consultation. Please select your preferred treatment area and we will reach out to finalize the details of your visit.
              </p>

              <div className="space-y-10">
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center flex-shrink-0 text-gold">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-dark mb-1">Timing</h3>
                    <p className="font-body text-sm text-muted">Tuesday – Saturday: 10:00 – 19:00</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center flex-shrink-0 text-gold">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-dark mb-1">Duration</h3>
                    <p className="font-body text-sm text-muted">Consultations typically range from 15–30 minutes before service begins.</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center flex-shrink-0 text-gold">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-dark mb-1">Location</h3>
                    <p className="font-body text-sm text-muted">
                      Cheras HQ · Bangi S9 · Bangi S7 <br />
                      <span className="text-[10px] tracking-wider uppercase opacity-60">Specific address provided upon confirmation</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-20 p-8 bg-white/50 border border-gold/10 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-gold/20 group-hover:bg-gold transition-colors duration-500" />
                <p className="font-display text-2xl italic text-gold leading-snug mb-4">
                  "Beauty is an inquiry, not a destination."
                </p>
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted">— Studio Philosophy</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 lg:p-12 shadow-sm border border-divider rounded-2xl relative overflow-hidden"
            >
              {/* Subtle background glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
              
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div className="space-y-2">
                  <label className="block font-body text-[10px] tracking-widest uppercase text-muted font-bold">Name *</label>
                  <input 
                    required
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-divider py-3 focus:outline-none focus:border-gold transition-colors font-body text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block font-body text-[10px] tracking-widest uppercase text-muted font-bold">Service Selected *</label>
                  <div className="relative">
                    <select 
                      required
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-divider py-3 appearance-none focus:outline-none focus:border-gold transition-colors font-body text-sm pr-8"
                    >
                      <option value="" disabled>Choose a service</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-muted pointer-events-none" size={14} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block font-body text-[10px] tracking-widest uppercase text-muted font-bold">Preferred Branch *</label>
                  <div className="relative">
                    <select 
                      required
                      name="branch"
                      value={formData.branch}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-divider py-3 appearance-none focus:outline-none focus:border-gold transition-colors font-body text-sm pr-8"
                    >
                      <option value="" disabled>Select branch</option>
                      {Object.keys(WA_NUMBERS).map((b) => (
                        <option key={b} value={b}>{BRANCH_LABELS[b as Branch]}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-muted pointer-events-none" size={14} />
                  </div>
                </div>

                <div className="pt-8">
                  <button 
                    disabled={formStatus === 'submitting'}
                    type="submit"
                    className="w-full btn-premium btn-premium-solid py-5 text-[11px] sm:text-xs tracking-[0.2em] font-bold uppercase flex items-center justify-center gap-3 disabled:opacity-70 group"
                  >
                    {formStatus === 'submitting' ? 'Processing...' : 'Book Your Free Consultation'}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-center font-body text-[10px] text-muted/70 mt-6 pt-2">
                    We'll reply on WhatsApp within 24 hours. No spam, ever.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
          
        </div>
      </main>

      <Footer />
    </div>
  )
}
