import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { waGeneral } from '../lib/whatsapp'

const links = [
  { label: 'Home',     href: '/#home' },
  { label: 'Services', href: '/#services' },
  { label: 'Treatments', href: '/treatments' },
  { label: 'Products', href: '/products' },
  { label: 'Branches', href: '/#branches' },
  { label: 'Contact',  href: '/#footer' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-cream/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none">
            <span className="font-display text-2xl font-semibold tracking-wide text-dark">ANANAZ</span>
            <span className="font-body text-[10px] font-medium tracking-[0.2em] uppercase text-muted">MediSpa</span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <li key={l.label}>
                {l.href.startsWith('/#') ? (
                  <a
                    href={l.href}
                    className="nav-link font-body text-sm font-medium text-dark/80 hover:text-dark transition-colors"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    to={l.href}
                    className="nav-link font-body text-sm font-medium text-dark/80 hover:text-dark transition-colors"
                  >
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* WhatsApp CTA */}
          <a
            href={waGeneral()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 border border-gold text-gold px-4 py-2 text-xs font-body font-medium tracking-wide uppercase hover:bg-gold hover:text-white transition-all duration-300"
          >
            <MessageCircle size={14} />
            WhatsApp Us
          </a>

          {/* Hamburger */}
          <button
            id="navbar-hamburger"
            onClick={() => setOpen(v => !v)}
            className="md:hidden text-dark p-1"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-0 right-0 z-40 bg-cream border-t border-divider shadow-lg md:hidden"
          >
            <ul className="flex flex-col py-4">
              {links.map(l => (
                <li key={l.label}>
                  {l.href.startsWith('/#') ? (
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block px-8 py-3 font-body text-sm font-medium text-dark hover:text-gold transition-colors"
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link
                      to={l.href}
                      onClick={() => setOpen(false)}
                      className="block px-8 py-3 font-body text-sm font-medium text-dark hover:text-gold transition-colors"
                    >
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
              <li className="px-8 pt-4 pb-2">
                <a
                  href={waGeneral()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-gold text-gold px-4 py-3 text-xs font-body font-medium tracking-wide uppercase hover:bg-gold hover:text-white transition-all duration-300"
                >
                  <MessageCircle size={14} />
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
