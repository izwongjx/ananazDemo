import { Link } from 'react-router-dom'
import { ArrowRight, Instagram, Facebook, Youtube, MapPin, MessageCircle, Phone } from 'lucide-react'
import { waGeneral, waBranch } from '../lib/whatsapp'

const quickLinks = [
  { label: 'Home',       href: '/#home' },
  { label: 'Services',   href: '/#services' },
  { label: 'Products',   href: '/products' },
  { label: 'Branches',   href: '/branches' },
  { label: 'Booking',    href: '/booking' },
]

const branches = [
  { name: 'Bandar Tun Hussein Onn (BTHO)', address: 'No. 26B, Lake Valley, Town Park 1, Jalan Suarasa 8/4, Batu 9, 43200 Cheras' },
  { name: 'Bangi', address: 'Bangi Section 9, 43650 Bandar Baru Bangi' },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1A5F62] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Col 1: Logo + tagline + socials */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-5">
              <div className="font-display text-2xl font-semibold tracking-wide text-white">ANANAZ</div>
              <div className="font-body text-[10px] tracking-[0.2em] uppercase text-white">MediSpa</div>
            </div>
            <p className="font-body text-sm text-white leading-relaxed mb-8 max-w-xs">
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
                  className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold text-white transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(l => (
                <li key={l.label}>
                  <Link to={l.href} className="font-body text-sm text-white hover:text-white transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Branch addresses */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-white mb-6">Our Branches</h4>
            <div className="space-y-6">
              {branches.map(b => (
                <div key={b.name} className="flex gap-3">
                  <MapPin size={13} className="text-white flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-body text-xs font-medium text-white mb-1">{b.name}</div>
                    <div className="font-body text-xs text-white leading-relaxed">{b.address}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Col 4: WhatsApp per branch */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-white mb-6">Enquire via WhatsApp</h4>
            <div className="space-y-3">
              {([ ['btho', 'BTHO (+6014 332 2893)'], ['bangi', 'Bangi (+603 8920 8872)'] ] as const).map(
                ([branch, label]) => (
                  <a
                    key={branch}
                    href={waBranch(branch as any)}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`footer-wa-${branch}`}
                    className="flex items-center justify-between border border-white/15 px-4 py-3 hover:border-gold group transition-all duration-300"
                  >
                    <span className="font-body text-xs text-white group-hover:text-white transition-colors duration-200 leading-snug">{label}</span>
                    <ArrowRight size={12} className="text-white/30 group-hover:text-gold transition-colors duration-200 flex-shrink-0 ml-2" />
                  </a>
                )
              )}
            </div>

            <Link
              to="/booking"
              className="btn-premium btn-premium-solid shimmer w-full mt-6 flex items-center justify-center gap-2 bg-gold text-off-white font-body text-xs font-semibold px-5 py-3 tracking-widest uppercase cursor-pointer"
            >
              Book Appointment
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>

        {/* Contact CTA Strip */}
        <div className="border-t border-white/10 pt-8 pb-4 flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          {/* WhatsApp button — brand green */}
          <a
            href={waGeneral()}
            target="_blank"
            rel="noopener noreferrer"
            id="footer-wa-general"
            className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-7 py-3.5 rounded-full font-body text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            {/* WhatsApp SVG logo */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="white">
              <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.74 5.494 2.035 7.8L0 32l8.432-2.007A15.934 15.934 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.267 13.267 0 01-6.769-1.851l-.485-.288-5.007 1.193 1.22-4.875-.317-.5A13.267 13.267 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.933c-.398-.199-2.354-1.162-2.72-1.294-.365-.133-.63-.199-.895.2-.264.397-1.026 1.293-1.258 1.559-.232.265-.464.298-.862.1-.398-.2-1.68-.619-3.2-1.976-1.183-1.055-1.982-2.358-2.214-2.756-.232-.398-.025-.613.174-.811.18-.179.398-.465.597-.697.2-.232.265-.398.398-.663.133-.265.066-.497-.033-.696-.1-.2-.895-2.158-1.227-2.955-.322-.775-.65-.669-.895-.681-.232-.011-.497-.013-.762-.013-.265 0-.696.1-1.06.497-.365.398-1.393 1.361-1.393 3.319 0 1.957 1.427 3.847 1.626 4.113.2.265 2.808 4.285 6.802 6.01.951.41 1.693.656 2.271.839.954.303 1.823.26 2.51.158.765-.114 2.354-.963 2.687-1.892.332-.93.332-1.727.232-1.893-.099-.166-.364-.265-.762-.464z"/>
            </svg>
            WhatsApp Us
          </a>
          {/* Call button */}
          <a
            href="tel:+60143322893"
            id="footer-call-btho"
            className="flex items-center gap-3 bg-white/15 hover:bg-white/25 border border-white/25 text-white px-7 py-3.5 rounded-full font-body text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            {/* Phone SVG logo */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="white">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.59.57 1 1 0 011 1V21a1 1 0 01-1 1A18 18 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.59 1 1 0 01-.24 1.01l-2.21 2.19z"/>
            </svg>
            Call Us
          </a>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white">
            © 2025 Ananaz MediSpa · All Rights Reserved · ananaz.my
          </p>
          <p className="font-body text-xs text-white">
            Tue–Sun · 9:00am – 6:00pm · Closed Monday
          </p>
        </div>
      </div>
    </footer>
  )
}
