import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

type TreatmentItem = {
  id: string
  name: string
  price: string
  shortDesc: string
  benefits?: { title: string }[]
  tags?: string[]
  tag?: string
  tagColor?: string
}

type Props = {
  currentCategory: 'skin-treatments' | 'body-spa' | 'wedding-bridal'
  items: TreatmentItem[]
}

const tabs = [
  { id: 'skin-treatments', label: 'Skin Treatments', path: '/skin-treatments' },
  { id: 'body-spa', label: 'Body Spa', path: '/body-spa' },
  { id: 'wedding-bridal', label: 'Wedding & Bridal', path: '/wedding-bridal' },
]

export default function TreatmentGrid({ currentCategory, items }: Props) {
  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex justify-between lg:justify-center items-center gap-1.5 sm:gap-3 mb-8 lg:mb-12 w-full">
        {tabs.map((tab) => {
          const isActive = tab.id === currentCategory
          return (
            <Link
              key={tab.id}
              to={tab.path}
              className={`flex-1 lg:flex-none flex justify-center items-center px-1 py-2 sm:px-6 sm:py-2.5 rounded-full font-body text-[9px] sm:text-xs tracking-wider sm:tracking-widest uppercase font-bold transition-all duration-300 text-center leading-tight ${
                isActive 
                  ? 'bg-[#C18C74] text-white shadow-md' 
                  : 'bg-white text-dark/60 hover:bg-white hover:text-dark border border-divider shadow-sm'
              }`}
            >
              {tab.label}
            </Link>
          )
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {items.map((item, index) => (
          <Link 
            key={item.id}
            to={`/${currentCategory}/${item.id}`}
            className="block hover:no-underline group select-none"
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-divider h-full"
            >
               {/* Card Top: Image Area */}
              <div className="relative aspect-[2/1] lg:aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-[#398880] to-[#1A3C3A]">
                {/* Optional Placeholder Image */}
                <div className="absolute inset-0 img-placeholder opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
                
                {/* Floating Price Pill */}
                {currentCategory !== 'skin-treatments' && (
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 lg:px-4 lg:py-2 rounded-full border border-white/50 shadow-sm">
                    <span className="font-body text-[9px] lg:text-[10px] uppercase tracking-widest text-[#C18C74] font-bold">
                      From {item.price}
                    </span>
                  </div>
                )}
              </div>

              {/* Card Bottom: Content Area */}
              <div className="flex flex-col flex-1 p-5 lg:p-8">
                <h3 className="font-display text-xl lg:text-2xl font-semibold text-dark mb-1 lg:mb-3 group-hover:text-[#C18C74] transition-colors duration-300 line-clamp-1 lg:line-clamp-none">
                  {item.name}
                </h3>
                
                {currentCategory !== 'skin-treatments' ? (
                  <div className="mb-3 lg:mb-4">
                    <span className="font-display text-base lg:text-lg font-medium text-[#C18C74]">
                      {item.price}
                    </span>
                  </div>
                ) : (
                  <p className="font-body text-xs lg:text-sm text-muted leading-relaxed mb-6 mt-1">
                    {item.shortDesc}
                  </p>
                )}
                
                {/* Benefits / Tags Pills - Always visible now to make up for removed description */}
                {((item.tags && item.tags.length > 0) || (item.benefits && item.benefits.length > 0)) && (
                  <div className="flex flex-wrap gap-2 lg:gap-3 mb-8 mt-auto">
                    {(item.tags || item.benefits!.map(b => b.title)).map((tagText, i) => (
                      <span 
                        key={i} 
                        className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#EEF7F6] text-[#2b7a71] font-body text-[9px] lg:text-[10px] font-bold tracking-widest uppercase border border-[#486A68]/10 shadow-sm"
                      >
                        {tagText}
                      </span>
                    ))}
                  </div>
                )}

                {/* Action */}
                <div className="mt-auto pt-2">
                  <div 
                    className="w-full flex items-center justify-center gap-2 bg-transparent border border-dark text-dark px-4 py-2.5 lg:px-6 lg:py-3.5 rounded-full font-body text-[10px] lg:text-xs tracking-widest uppercase font-bold group-hover:bg-dark group-hover:text-white transition-all duration-300"
                  >
                    Explore Details
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  )
}
