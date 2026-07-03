import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Calendar, ChevronDown, Microscope, Waves, Heart, ShoppingBag } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import CartDrawer from './CartDrawer'

const serviceItems = [
  { label: 'Skin Treatments', href: '/skin-treatments', icon: Microscope, desc: 'Skin tags, keratosis, milia' },
  { label: 'Body Spa', href: '/body-spa', icon: Waves, desc: 'Aromatherapy & traditional' },
  { label: 'Wedding & Bridal', href: '/wedding-bridal', icon: Heart, desc: 'Bridal packages' },
]

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: null, dropdown: true },
  { label: 'Products', href: '/products' },
  { label: 'Branches', href: '/branches' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const { totalItems, setIsCartOpen } = useCart()
  const dropdownRef = useRef<HTMLLIElement>(null)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setServicesOpen(false)
    setOpen(false)
  }, [location])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const navBg = 'bg-white shadow-sm border-b border-dark/5'
  const navTextColor = 'text-dark'
  const logoColor = 'text-dark'

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-24 flex items-center ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none">
            <span className={`font-display text-2xl font-bold tracking-[0.3em] uppercase ${logoColor}`}>ANANAZ</span>
            <span className={`font-body text-[10px] tracking-[0.4em] uppercase opacity-50 ${logoColor}`}>MediSpa</span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-14 h-full">
            {links.map(l => (
              <li key={l.label} ref={l.dropdown ? dropdownRef : undefined} className="relative h-full flex items-center">
                {l.dropdown ? (
                  <button
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    className={`nav-link font-body text-[13px] tracking-[0.15em] font-medium uppercase ${navTextColor} opacity-90 hover:opacity-100 transition-all flex items-center gap-2.5 leading-none`}
                  >
                    {l.label}
                    <motion.div 
                      animate={{ rotate: servicesOpen ? 180 : 0 }} 
                      transition={{ duration: 0.2 }}
                      className="flex items-center"
                    >
                      <ChevronDown size={14} className="translate-y-[0.5px]" />
                    </motion.div>
                  </button>
                ) : (
                  <Link
                    to={l.href!}
                    className={`nav-link font-body text-[13px] tracking-[0.15em] font-medium uppercase ${navTextColor} opacity-90 hover:opacity-100 transition-all flex items-center leading-none`}
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
                          className="bg-white border border-divider shadow-2xl w-64 overflow-hidden rounded-b-xl"
                        >
                          {serviceItems.map((item, i) => (
                            <Link
                              key={item.href}
                              to={item.href}
                              className={`flex items-start gap-4 px-5 py-4 hover:bg-black/[0.02] group transition-colors duration-150 ${i !== serviceItems.length - 1 ? 'border-b border-divider' : ''
                                }`}
                            >
                              <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                                <item.icon size={14} className="text-gold" />
                              </div>
                              <div>
                                <p className="font-body text-xs font-semibold text-dark group-hover:text-gold transition-colors">{item.label}</p>
                                <p className="font-body text-[9px] text-muted mt-0.5 uppercase tracking-wider">{item.desc}</p>
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

          {/* Actions */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => setIsCartOpen(true)}
              className={`relative p-2 transition-colors ${navTextColor} hover:text-gold`}
              aria-label="View Cart"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-cream">
                  {totalItems}
                </span>
              )}
            </button>
            <Link
              to="/booking"
              className="flex items-center gap-2 border px-7 py-3 text-[11px] font-body font-bold tracking-[0.2em] uppercase transition-all duration-300 bg-gold border-gold text-white hover:brightness-110"
            >
              Book Now
            </Link>
          </div>

          {/* Hamburger & Mobile Actions */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className={`relative p-2 ${navTextColor}`}
              aria-label="View Cart"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-cream">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              id="navbar-hamburger"
              onClick={() => setOpen(v => !v)}
              className={`p-1 ${navTextColor}`}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
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
            className="fixed top-24 left-0 right-0 z-40 bg-white border-t border-divider shadow-lg md:hidden"
          >
            <ul className="flex flex-col py-4">
              {links.map(l => (
                <li key={l.label}>
                  {l.dropdown ? (
                    <>
                      <button
                        onClick={() => setMobileServicesOpen(v => !v)}
                        className="w-full flex items-center justify-between px-8 py-4 font-body text-[10px] tracking-[0.25em] font-medium text-dark uppercase hover:text-gold transition-colors"
                      >
                        {l.label}
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
                            className="overflow-hidden bg-black/[0.02] border-y border-divider/50"
                          >
                            {serviceItems.map((item) => (
                              <Link
                                key={item.href}
                                to={item.href}
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-3 pl-12 pr-8 py-4 font-body text-[10px] tracking-[0.25em] text-muted hover:text-dark transition-colors uppercase"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={l.href!}
                      onClick={() => setOpen(false)}
                      className="block px-8 py-4 font-body text-[10px] tracking-[0.25em] font-medium text-dark uppercase hover:text-gold transition-colors"
                    >
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
              <li className="px-8 pt-6 pb-4">
                <Link
                  to="/booking"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 bg-gold border border-gold text-white px-4 py-4 text-[9px] font-body font-medium tracking-[0.2em] uppercase active:scale-95 transition-all duration-300"
                >
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
