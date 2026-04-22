import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Calendar, ChevronDown, Microscope, Waves, Heart } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const serviceItems = [
  { label: 'Skin Treatments', href: '/skin-treatments', icon: Microscope, desc: 'Skin tags, melasma, milia' },
  { label: 'Body Spa',        href: '/body-spa',        icon: Waves,      desc: 'Aromatherapy & traditional' },
  { label: 'Wedding & Bridal', href: '/wedding-bridal', icon: Heart,      desc: 'Bridal packages' },
]

const links = [
  { label: 'Home',     href: '/#home' },
  { label: 'About',   href: '/about' },
  { label: 'Services', href: null, dropdown: true },
  { label: 'Products', href: '/products' },
  { label: 'Branches', href: '/#branches' },
  { label: 'Booking',  href: '/booking' },
]

export default function Navbar() {
  const [scrolled, setScrolled]       = useState(false)
  const [open, setOpen]               = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLLIElement>(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close dropdown on route change
  useEffect(() => {
    setServicesOpen(false)
    setOpen(false)
  }, [location])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
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
              <li key={l.label} ref={l.dropdown ? dropdownRef : undefined} className="relative">
                {l.dropdown ? (
                  /* ── Services dropdown trigger ── */
                  <button
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    className="nav-link font-body text-sm font-medium text-dark/80 hover:text-dark transition-colors flex items-center gap-1"
                  >
                    {l.label}
                    <motion.div animate={{ rotate: servicesOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown size={14} />
                    </motion.div>
                  </button>
                ) : l.href!.startsWith('/#') ? (
                  <a
                    href={l.href!}
                    className="nav-link font-body text-sm font-medium text-dark/80 hover:text-dark transition-colors"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    to={l.href!}
                    className="nav-link font-body text-sm font-medium text-dark/80 hover:text-dark transition-colors"
                  >
                    {l.label}
                  </Link>
                )}

                {/* Dropdown panel */}
                {l.dropdown && (
                  <div
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    className="absolute top-full -left-4 pt-3"
                  >
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -8, scale: 0.97 }}
                          transition={{ duration: 0.2 }}
                          className="bg-white border border-divider shadow-xl w-64 overflow-hidden"
                        >
                          {serviceItems.map((item, i) => (
                            <Link
                              key={item.href}
                              to={item.href}
                              className={`flex items-start gap-4 px-5 py-4 hover:bg-cream group transition-colors duration-150 ${
                                i !== serviceItems.length - 1 ? 'border-b border-divider' : ''
                              }`}
                            >
                              <div className="w-8 h-8 bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                                <item.icon size={14} className="text-gold" />
                              </div>
                              <div>
                                <p className="font-body text-sm font-semibold text-dark group-hover:text-gold transition-colors">{item.label}</p>
                                <p className="font-body text-[10px] text-muted mt-0.5">{item.desc}</p>
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Book Now CTA */}
          <Link
            to="/booking"
            className="hidden md:flex items-center gap-2 border border-gold text-gold px-4 py-2 text-xs font-body font-medium tracking-wide uppercase hover:bg-gold hover:text-white transition-all duration-300"
          >
            <Calendar size={14} />
            Book Now
          </Link>

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
                  {l.dropdown ? (
                    <>
                      <button
                        onClick={() => setMobileServicesOpen(v => !v)}
                        className="w-full flex items-center justify-between px-8 py-3 font-body text-sm font-medium text-dark hover:text-gold transition-colors"
                      >
                        Services
                        <motion.div animate={{ rotate: mobileServicesOpen ? 180 : 0 }}>
                          <ChevronDown size={14} />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-white/60"
                          >
                            {serviceItems.map((item) => (
                              <Link
                                key={item.href}
                                to={item.href}
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-3 pl-12 pr-8 py-3 font-body text-sm text-dark hover:text-gold transition-colors"
                              >
                                <item.icon size={13} className="text-gold" />
                                {item.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : l.href!.startsWith('/#') ? (
                    <a
                      href={l.href!}
                      onClick={() => setOpen(false)}
                      className="block px-8 py-3 font-body text-sm font-medium text-dark hover:text-gold transition-colors"
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link
                      to={l.href!}
                      onClick={() => setOpen(false)}
                      className="block px-8 py-3 font-body text-sm font-medium text-dark hover:text-gold transition-colors"
                    >
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
              <li className="px-8 pt-4 pb-2">
                <Link
                  to="/booking"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 border border-gold text-gold px-4 py-3 text-xs font-body font-medium tracking-wide uppercase hover:bg-gold hover:text-white transition-all duration-300"
                >
                  <Calendar size={14} />
                  Book Now
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
