import { ArrowRight, Instagram, Facebook, Youtube, MapPin } from 'lucide-react'
import { waGeneral, waBranch } from '../lib/whatsapp'

const quickLinks = [
  { label: 'Home',       href: '#home' },
  { label: 'Services',   href: '#services' },
  { label: 'Products',   href: '#products' },
  { label: 'Branches',   href: '#branches' },
  { label: 'Academy',    href: '#academy' },
  { label: 'Contact',    href: '#contact' },
]

const branches = [
  { name: 'Cheras HQ', address: 'No. 26B, Lake Valley, Town Park 1, Jalan Suarasa 8/4, Batu 9, 43200 Cheras' },
  { name: 'Bangi Section 9', address: '3B, Curve Business Park, 36A, Jalan Medan Pusat 2c, Section 9, 43650 Bandar Baru Bangi' },
  { name: 'Bangi Section 7', address: '42A, 1, Jalan 7/7b, Section 7, 43650 Bandar Baru Bangi' },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Col 1: Logo + tagline + socials */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-5">
              <div className="font-display text-2xl font-semibold tracking-wide text-white">ANANAZ</div>
              <div className="font-body text-[10px] tracking-[0.2em] uppercase text-gold/70">MediSpa</div>
            </div>
            <p className="font-body text-sm text-white/50 leading-relaxed mb-8 max-w-xs">
              Malaysia's most trusted medispa since 2000. Helping women discover the skin they deserve — across three branches in Selangor.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: 'https://www.instagram.com/ananaz.official', label: 'Instagram' },
                { icon: Facebook,  href: 'https://www.facebook.com/ananazmedispa', label: 'Facebook' },
                { icon: Youtube,   href: 'https://www.youtube.com/@ananaz', label: 'YouTube' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold text-white/50 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(l => (
                <li key={l.label}>
                  <a href={l.href} className="font-body text-sm text-white/50 hover:text-white transition-colors duration-200">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Branch addresses */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-6">Our Branches</h4>
            <div className="space-y-6">
              {branches.map(b => (
                <div key={b.name} className="flex gap-3">
                  <MapPin size={13} className="text-gold flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-body text-xs font-medium text-white/80 mb-1">{b.name}</div>
                    <div className="font-body text-xs text-white/40 leading-relaxed">{b.address}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Col 4: WhatsApp per branch */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-6">Enquire via WhatsApp</h4>
            <div className="space-y-3">
              {([ ['cheras', 'Cheras HQ (+6016 329 8780)'], ['bangiS9', 'Bangi Section 9 (+6013 764 1998)'], ['bangiS7', 'Bangi Section 7 (+6016 330 4373)'] ] as const).map(
                ([branch, label]) => (
                  <a
                    key={branch}
                    href={waBranch(branch)}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`footer-wa-${branch}`}
                    className="flex items-center justify-between border border-white/15 px-4 py-3 hover:border-gold group transition-all duration-300"
                  >
                    <span className="font-body text-xs text-white/50 group-hover:text-white transition-colors duration-200 leading-snug">{label}</span>
                    <ArrowRight size={12} className="text-white/30 group-hover:text-gold transition-colors duration-200 flex-shrink-0 ml-2" />
                  </a>
                )
              )}
            </div>

            <a
              href={waGeneral()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium btn-premium-solid shimmer w-full mt-6 flex items-center justify-center gap-2 bg-gold text-dark font-body text-xs font-semibold px-5 py-3 tracking-widest uppercase cursor-pointer"
            >
              General Enquiry
              <ArrowRight size={12} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/30">
            © 2025 Ananaz MediSpa · All Rights Reserved · ananaz.my
          </p>
          <p className="font-body text-xs text-white/20">
            Tue–Sun · 9:00am – 6:00pm · Closed Monday
          </p>
        </div>
      </div>
    </footer>
  )
}
