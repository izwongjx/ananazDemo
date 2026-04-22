import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Calendar, Clock, MapPin, ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const services = [
  'Skin Tag Removal',
  'Melasma Treatment',
  'Oil Cysts / Milia Treatment',
  'Aromatherapy Spa',
  'Traditional Body Massage',
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
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('submitting')
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success')
    }, 1500)
  }

  if (formStatus === 'success') {
    return (
      <div className="bg-cream min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md w-full bg-white p-12 text-center shadow-sm border border-gold/10"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                <CheckCircle2 size={40} />
              </div>
            </div>
            <h2 className="font-display text-3xl font-semibold text-dark mb-4">Request Received.</h2>
            <p className="font-body text-muted leading-relaxed mb-8">
              Thank you for choosing Ananaz. Our team will review your preferred timing and reach out via WhatsApp or email within 24 hours to confirm your appointment.
            </p>
            <button 
              onClick={() => navigate('/')}
              className="btn-premium btn-premium-solid px-8 py-3 text-xs tracking-widest uppercase font-bold"
            >
              Back to Home
            </button>
          </motion.div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="bg-cream min-h-screen">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
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
              
              <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="block font-body text-[10px] tracking-widest uppercase text-muted font-bold">Name *</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Name"
                      className="w-full bg-transparent border-b border-divider py-3 focus:outline-none focus:border-gold transition-colors font-body text-sm"
                    />
                  </div>
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="block font-body text-[10px] tracking-widest uppercase text-muted font-bold">Email *</label>
                    <input 
                      required
                      type="email" 
                      placeholder="e.g., example@mail.com"
                      className="w-full bg-transparent border-b border-divider py-3 focus:outline-none focus:border-gold transition-colors font-body text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Country Code */}
                  <div className="space-y-2">
                    <label className="block font-body text-[10px] tracking-widest uppercase text-muted font-bold">Code</label>
                    <div className="relative">
                      <select className="w-full bg-transparent border-b border-divider py-3 appearance-none focus:outline-none focus:border-gold transition-colors font-body text-sm pr-8">
                        <option>MY +60</option>
                        <option>SG +65</option>
                        <option>ID +62</option>
                      </select>
                      <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-muted" size={14} />
                    </div>
                  </div>
                  {/* Phone */}
                  <div className="md:col-span-2 space-y-2">
                    <label className="block font-body text-[10px] tracking-widest uppercase text-muted font-bold">Phone *</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="Phone"
                      className="w-full bg-transparent border-b border-divider py-3 focus:outline-none focus:border-gold transition-colors font-body text-sm"
                    />
                  </div>
                </div>

                {/* Services */}
                <div className="space-y-2">
                  <label className="block font-body text-[10px] tracking-widest uppercase text-muted font-bold">Services *</label>
                  <div className="relative">
                    <select 
                      required
                      className="w-full bg-transparent border-b border-divider py-3 appearance-none focus:outline-none focus:border-gold transition-colors font-body text-sm pr-8"
                    >
                      <option value="" disabled selected>Choose a service</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-muted" size={14} />
                  </div>
                </div>

                {/* Preferred Date & Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="block font-body text-[10px] tracking-widest uppercase text-muted font-bold">Preferred Date *</label>
                    <input 
                      required
                      type="date"
                      className="w-full bg-transparent border-b border-divider py-3 focus:outline-none focus:border-gold transition-colors font-body text-sm appearance-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block font-body text-[10px] tracking-widest uppercase text-muted font-bold">Time</label>
                    <div className="relative">
                      <select className="w-full bg-transparent border-b border-divider py-3 appearance-none focus:outline-none focus:border-gold transition-colors font-body text-sm pr-8">
                        <option>Morning (10:00 – 13:00)</option>
                        <option>Afternoon (13:00 – 17:00)</option>
                        <option>Evening (17:00 – 19:00)</option>
                      </select>
                      <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-muted" size={14} />
                    </div>
                  </div>
                </div>

                {/* Alt Date 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="block font-body text-[10px] tracking-widest uppercase text-muted font-bold">Alternative Date 1</label>
                    <input 
                      type="date"
                      className="w-full bg-transparent border-b border-divider py-3 focus:outline-none focus:border-gold transition-colors font-body text-sm appearance-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block font-body text-[10px] tracking-widest uppercase text-muted font-bold">Time</label>
                    <div className="relative">
                      <select className="w-full bg-transparent border-b border-divider py-3 appearance-none focus:outline-none focus:border-gold transition-colors font-body text-sm pr-8">
                        <option>Morning (10:00 – 13:00)</option>
                        <option>Afternoon (13:00 – 17:00)</option>
                        <option>Evening (17:00 – 19:00)</option>
                      </select>
                      <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-muted" size={14} />
                    </div>
                  </div>
                </div>

                {/* Alt Date 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="block font-body text-[10px] tracking-widest uppercase text-muted font-bold">Alternative Date 2</label>
                    <input 
                      type="date"
                      className="w-full bg-transparent border-b border-divider py-3 focus:outline-none focus:border-gold transition-colors font-body text-sm appearance-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block font-body text-[10px] tracking-widest uppercase text-muted font-bold">Time</label>
                    <div className="relative">
                      <select className="w-full bg-transparent border-b border-divider py-3 appearance-none focus:outline-none focus:border-gold transition-colors font-body text-sm pr-8">
                        <option>Morning (10:00 – 13:00)</option>
                        <option>Afternoon (13:00 – 17:00)</option>
                        <option>Evening (17:00 – 19:00)</option>
                      </select>
                      <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-muted" size={14} />
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="font-body text-[10px] text-muted leading-relaxed uppercase tracking-wider mb-8">
                    Terms & Conditions <br />
                    <span className="opacity-60 normal-case tracking-normal">By submitting this form, you acknowledge and agree to our booking policies. Our team will contact you to confirm the final slot based on availability.</span>
                  </p>
                  
                  <button 
                    disabled={formStatus === 'submitting'}
                    type="submit"
                    className="w-full btn-premium btn-premium-solid py-5 text-xs tracking-[0.2em] font-bold uppercase flex items-center justify-center gap-3 disabled:opacity-70 group"
                  >
                    {formStatus === 'submitting' ? 'Processing...' : (
                      <>
                        Book Now
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
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
