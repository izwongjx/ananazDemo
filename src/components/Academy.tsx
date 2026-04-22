import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { waAcademy } from '../lib/whatsapp'

const courses = [
  {
    title: 'Facial & Skincare Treatment Certification',
    desc: 'Master clinical facial techniques, skin analysis, and professional treatment protocols.',
  },
  {
    title: 'Body Spa & Reflexology Training',
    desc: 'Full-body therapy skills including aromatherapy, traditional massage, and body wraps.',
  },
  {
    title: 'Beauty Business & Entrepreneurship',
    desc: 'Launch and grow your own beauty business — linked to Koperasi Ananaz.',
  },
]

export default function Academy() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="academy" ref={ref} className="overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[540px]">
        {/* Left: Dark panel */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 bg-dark relative flex items-center p-12 lg:p-20 overflow-hidden"
        >
          {/* BG image placeholder */}
          <div className="absolute inset-0 img-placeholder opacity-20" />

          {/* Dot pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage: 'radial-gradient(#B8963E 1px, transparent 1px)', backgroundSize: '28px 28px' }}
          />

          <div className="relative z-10">
            <p className="font-body text-xs tracking-[0.25em] uppercase text-gold flex items-center gap-3 mb-6">
              <span className="inline-block w-8 h-px bg-gold" />
              Beauty Academy
            </p>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-[1.15] mb-6">
              Train With the Best.<br />
              <span className="text-gold italic">Build a Career</span><br />
              in Beauty.
            </h2>
            <p className="font-body text-white/50 text-base leading-relaxed max-w-sm">
              Ananaz Beauty Academy has trained hundreds of professional therapists and beauticians since our founding. Whether you're starting fresh or upgrading your skills — our courses are designed by industry veterans with 20+ years on the ground.
            </p>
          </div>
        </motion.div>

        {/* Right: Light panel */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="lg:w-1/2 bg-cream flex items-center p-12 lg:p-20"
        >
          <div className="w-full">
            <h3 className="font-display text-2xl font-semibold text-dark mb-2">Our Programmes</h3>
            <div className="w-8 h-px bg-gold mb-10" />

            <div className="space-y-8 mb-12">
              {courses.map((course, i) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.3 + i * 0.1 }}
                  className="flex gap-4"
                >
                  <CheckCircle2 size={18} className="text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-body text-sm font-semibold text-dark mb-1">{course.title}</div>
                    <div className="font-body text-xs text-muted leading-relaxed">{course.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.6 }}
              href={waAcademy()}
              target="_blank"
              rel="noopener noreferrer"
              id="academy-enroll-cta"
              className="inline-flex items-center gap-2 bg-dark text-cream font-body text-xs font-medium px-7 py-4 tracking-wide uppercase hover:bg-gold transition-colors duration-300"
            >
              Enquire About Courses
              <ArrowRight size={14} />
            </motion.a>

            <p className="font-body text-xs text-muted mt-4 leading-relaxed">
              Linked to <strong>Koperasi Ananaz</strong>. Flexible schedules available.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
