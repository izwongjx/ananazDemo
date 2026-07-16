import { Droplets, Sparkles, FlaskConical, LucideIcon, Leaf, Sun, Moon, Wind, Heart, Shield } from 'lucide-react'

export interface ProductItem {
  id: string
  name: string
  brand: string
  category: string
  size: string
  price: string
  icon: LucideIcon
  tagColor: string
  tag: string
  shortDesc: string
  description: string
  keyBenefits: string[]
  howToUse: string[]
  heroIngredients: string[]
  shopeeLink: string
  filterCategory: string
}

export const productsData: ProductItem[] = [
  {
    id: 'la-rose',
    name: 'SINA LA ROSE CREAM',
    brand: 'Sina Botanical',
    category: 'Moisturiser',
    size: '50 g',
    price: 'RM TBD',
    icon: Heart,
    tagColor: 'bg-[#C18C74] text-white',
    tag: 'Universal Barrier Recovery Moisturiser',
    shortDesc: 'Healthy skin begins with a healthy barrier.',
    description: 'Sina La Rose Cream is a lightweight botanical moisturiser designed to replenish hydration, strengthen the skin barrier and deliver lasting comfort without heaviness. Suitable for daily use, it leaves skin feeling soft, balanced and naturally radiant while supporting long-term skin health.',
    keyBenefits: [
      'Deep hydration',
      'Strengthens skin barrier',
      'Soothes sensitive skin',
      'Lightweight, non-greasy finish',
      'Supports healthier-looking skin',
      'Suitable for Malaysia’s humid climate'
    ],
    howToUse: [
      'Apply morning and evening after serum.',
      'Massage gently until fully absorbed.',
      'Use daily.'
    ],
    heroIngredients: [
      'Rose Hydrosol',
      'Chamomile Hydrosol',
      'Niacinamide',
      'Panthenol',
      'Ceramide Complex',
      'Cupuaçu Butter',
      'Squalane',
      'Acai Extract'
    ],
    shopeeLink: 'https://shopee.com.my/ananaz_medispa',
    filterCategory: 'Moisturising'
  },
  {
    id: 'embun-seri',
    name: 'SINA EMBUN SERI',
    brand: 'Sina Botanical',
    category: 'Recovery Cream',
    size: '50 g',
    price: 'RM TBD',
    icon: Droplets,
    tagColor: 'bg-[#398880] text-white',
    tag: 'Intense Barrier Recovery Cream',
    shortDesc: 'Comfort for mature, dry and menopausal skin.',
    description: 'Created for skin experiencing dryness, hormonal changes and reduced elasticity, Embun Seri provides long-lasting hydration while restoring softness, suppleness and everyday comfort.',
    keyBenefits: [
      'Intensive hydration',
      'Barrier recovery',
      'Comforts dry skin',
      'Improves skin suppleness',
      'Supports mature skin',
      'Healthy natural radiance'
    ],
    howToUse: [
      'Apply morning and evening after serum.',
      'May be layered with Black Gold Botanical Elixir for extra nourishment.'
    ],
    heroIngredients: [
      'Multi-Molecular Hyaluronic Acid',
      'Cupuaçu Butter',
      'Mango Butter',
      'Hydrolysed Soy Protein',
      'Ceramide',
      'Squalane'
    ],
    shopeeLink: 'https://shopee.com.my/ananaz_medispa',
    filterCategory: 'Moisturising'
  },
  {
    id: 'licorice-cleanser',
    name: 'SINA LICORICE ROOT CLEANSING GEL',
    brand: 'Sina Botanical',
    category: 'Cleanser',
    size: '100 ml',
    price: 'RM TBD',
    icon: Leaf,
    tagColor: 'bg-dark text-white',
    tag: 'Gentle Botanical Facial Cleanser',
    shortDesc: 'Cleanse without compromising your skin barrier.',
    description: 'A gentle cleansing gel formulated to remove daily impurities while maintaining skin hydration and comfort.',
    keyBenefits: [
      'Removes impurities',
      'Removes excess oil',
      'Maintains skin hydration',
      'Brightening support',
      'Gentle for daily use'
    ],
    howToUse: [
      'Massage onto damp skin.',
      'Rinse thoroughly.',
      'Use morning and evening.'
    ],
    heroIngredients: [
      'Licorice Root Extract',
      'Chamomile Extract',
      'Panthenol',
      'Glycerin'
    ],
    shopeeLink: 'https://shopee.com.my/ananaz_medispa',
    filterCategory: 'Cleansing'
  },
  {
    id: 'bakuchiol-serum',
    name: 'SINA BAKUCHIOL BI-PHASE SERUM',
    brand: 'Sina Botanical',
    category: 'Serum',
    size: '30 ml',
    price: 'RM TBD',
    icon: Sparkles,
    tagColor: 'bg-gold text-white',
    tag: 'Botanical Age-Well Recovery Serum',
    shortDesc: 'Graceful ageing begins with healthy skin.',
    description: 'A luxurious bi-phase serum combining botanical oils and hydration to improve skin comfort, firmness and barrier resilience.',
    keyBenefits: [
      'Improves skin firmness',
      'Supports collagen appearance',
      'Deep nourishment',
      'Smooth skin texture',
      'Healthy glow'
    ],
    howToUse: [
      'Shake well before use.',
      'Apply 2–3 drops after toner.',
      'Follow with moisturiser.'
    ],
    heroIngredients: [
      'Bakuchiol',
      'Coenzyme Q10',
      'Ceramide',
      'Hexapeptide-8',
      'Niacinamide',
      'Hyaluronic Acid'
    ],
    shopeeLink: 'https://shopee.com.my/ananaz_medispa',
    filterCategory: 'Serum'
  },
  {
    id: 'rice-rose-serum',
    name: 'SINA RICE & ROSE RECOVERY SERUM',
    brand: 'Sina Botanical',
    category: 'Serum',
    size: '30 ml',
    price: 'RM TBD',
    icon: Shield,
    tagColor: 'bg-[#C18C74] text-white',
    tag: 'Strengthen • Brighten • Recover',
    shortDesc: 'A lightweight botanical serum developed to restore hydration, strengthen the skin barrier and improve skin resilience.',
    description: 'A lightweight botanical serum developed to restore hydration, strengthen the skin barrier and improve skin resilience.',
    keyBenefits: [
      'Barrier recovery',
      'Lightweight hydration',
      'Improves skin comfort',
      'Supports healthy glow',
      'Suitable after aesthetic treatments'
    ],
    howToUse: [
      'Apply 2–3 pumps after cleansing.',
      'Follow with moisturiser.'
    ],
    heroIngredients: [
      'Hydrolysed Rice Protein',
      'Rose Hydrosol',
      'Panthenol',
      'Ceramide',
      'CICA Extract',
      'Pomegranate Extract'
    ],
    shopeeLink: 'https://shopee.com.my/ananaz_medispa',
    filterCategory: 'Serum'
  },
  {
    id: 'lunelle-night',
    name: 'SINA LUNELLE NIGHT CREAM',
    brand: 'Sina Botanical',
    category: 'Night Cream',
    size: '50 g',
    price: 'RM TBD',
    icon: Moon,
    tagColor: 'bg-[#2b2b2b] text-white',
    tag: 'Brightening & Age-Well Night Cream',
    shortDesc: 'Wake up to healthier-looking skin.',
    description: 'A nourishing overnight cream developed to improve skin tone, hydration and barrier strength while supporting graceful ageing.',
    keyBenefits: [
      'Brightens uneven skin tone',
      'Overnight hydration',
      'Supports skin elasticity',
      'Healthy ageing',
      'Barrier recovery'
    ],
    howToUse: [
      'Apply every evening as the final skincare step.'
    ],
    heroIngredients: [
      'N-Acetyl Glucosamine',
      'Tranexamic Acid',
      'Alpha Arbutin',
      'Coenzyme Q10',
      'Peptides',
      'Botanical Oils'
    ],
    shopeeLink: 'https://shopee.com.my/ananaz_medispa',
    filterCategory: 'Moisturising'
  },
  {
    id: 'seabuckthorn-mask',
    name: 'SINA SEABUCKTHORN PUDDING SLEEPING MASK',
    brand: 'Sina Botanical',
    category: 'Sleeping Mask',
    size: '50 g',
    price: 'RM TBD',
    icon: FlaskConical,
    tagColor: 'bg-[#D4A373] text-white',
    tag: 'Overnight Botanical Recovery Mask',
    shortDesc: 'Wake up with deeply nourished skin.',
    description: 'A rich pudding-textured sleeping mask that seals in moisture overnight while helping restore softness and comfort.',
    keyBenefits: [
      'Overnight nourishment',
      'Long-lasting hydration',
      'Healthy glow',
      'Barrier support',
      'Soft supple skin'
    ],
    howToUse: [
      'Apply generously as the final step of your evening routine.',
      'Leave overnight.',
      'Use 2–3 times weekly.'
    ],
    heroIngredients: [
      'Sea Buckthorn Oil',
      'Hyaluronic Acid',
      'Botanical Oils',
      'Vitamin E'
    ],
    shopeeLink: 'https://shopee.com.my/ananaz_medispa',
    filterCategory: 'Moisturising'
  },
  {
    id: 'black-gold-elixir',
    name: 'SINA BLACK GOLD BOTANICAL ELIXIR',
    brand: 'Sina Botanical',
    category: 'Face Oils',
    size: '30 ml',
    price: 'RM TBD',
    icon: Sun,
    tagColor: 'bg-dark text-gold',
    tag: 'Botanical Lipid Recovery Elixir',
    shortDesc: 'Luxury nourishment for healthy skin.',
    description: 'A luxurious blend of premium botanical oils designed to replenish essential lipids, strengthen the skin barrier and restore a healthy natural glow.',
    keyBenefits: [
      'Deep nourishment',
      'Strengthens skin barrier',
      'Healthy radiant glow',
      'Supports mature skin',
      'Soft silky finish',
      'Multi-purpose facial oil'
    ],
    howToUse: [
      'Apply 2–3 drops after moisturiser or mix with La Rose or Embun Seri for enhanced nourishment.',
      'May also be used as the final step in your night routine.'
    ],
    heroIngredients: [
      'Jojoba Oil',
      'Argan Oil',
      'Evening Primrose Oil',
      'Rosehip Oil',
      'Carrot Seed Oil',
      'Sea Buckthorn Oil',
      'Japanese Camellia Oil',
      'Tamanu Oil',
      'Squalane',
      'Avocado Oil'
    ],
    shopeeLink: 'https://shopee.com.my/ananaz_medispa',
    filterCategory: 'Protection'
  },
  {
    id: 'rose-hydra-mist',
    name: 'SINA ROSE HYDRA MIST',
    brand: 'Sina Botanical',
    category: 'Hydration Mist',
    size: '50 ml',
    price: 'RM TBD',
    icon: Wind,
    tagColor: 'bg-[#E8C98A] text-dark',
    tag: 'Botanical Hydration Mist',
    shortDesc: 'Instant hydration. Anytime. Anywhere.',
    description: 'A refreshing botanical mist that hydrates, comforts and prepares the skin for better absorption of serums and moisturisers.',
    keyBenefits: [
      'Instant hydration',
      'Refreshes tired skin',
      'Soothes sensitivity',
      'Prepares skin for serum',
      'Supports skin barrier'
    ],
    howToUse: [
      'Mist onto clean skin after cleansing or throughout the day whenever hydration is needed.'
    ],
    heroIngredients: [
      'Rose Hydrosol',
      'Chamomile Hydrosol',
      'Dipotassium Glycyrrhizate',
      'Sodium Hyaluronate',
      'Panthenol',
      'Licorice Root Extract'
    ],
    shopeeLink: 'https://shopee.com.my/ananaz_medispa',
    filterCategory: 'Toning'
  },
  {
    id: 'tamanu-cream',
    name: 'SINA TAMANU CREAM',
    brand: 'Sina Botanical',
    category: 'Moisturiser',
    size: '30 g',
    price: 'RM TBD',
    icon: Leaf,
    tagColor: 'bg-[#5B8266] text-white',
    tag: 'Botanical Blemish Recovery Cream',
    shortDesc: 'Balance the skin. Don’t fight it.',
    description: 'A lightweight moisturiser designed for oily, combination and blemish-prone skin, helping to maintain hydration while supporting a balanced, comfortable complexion.',
    keyBenefits: [
      'Lightweight hydration',
      'Helps comfort blemish-prone skin',
      'Supports skin barrier',
      'Balances oil without dryness',
      'Fresh, non-greasy finish'
    ],
    howToUse: [
      'Apply morning and evening after serum.',
      'Suitable for daily use.'
    ],
    heroIngredients: [
      'Tamanu Oil',
      'Niacinamide',
      'Panthenol',
      'Ceramide Complex',
      'Squalane',
      'Botanical Antioxidants'
    ],
    shopeeLink: 'https://shopee.com.my/ananaz_medispa',
    filterCategory: 'Moisturising'
  },
  {
    id: 'moroccan-clay-balm',
    name: 'SINA MOROCCAN CLAY DOUBLE CLEANSING BALM',
    brand: 'Sina Botanical',
    category: 'Cleansing Balm',
    size: '50 gm',
    price: 'RM TBD',
    icon: Droplets,
    tagColor: 'bg-[#C18C74] text-white',
    tag: 'Luxurious Balm-to-Milk Cleanser',
    shortDesc: 'Healthy skin begins with a truly clean canvas.',
    description: 'Sina Moroccan Clay Double Cleansing Balm is a luxurious balm-to-milk cleanser that effortlessly melts away makeup, sunscreen, excess sebum and daily impurities without stripping the skin’s natural moisture. Infused with nourishing botanical oils and Moroccan Clay, it gently purifies while leaving the skin feeling soft, comfortable and perfectly prepared for the second cleanse.',
    keyBenefits: [
      'Dissolves waterproof makeup',
      'Removes sunscreen thoroughly',
      'Lifts excess sebum',
      'Supports skin barrier',
      'Leaves skin soft and comfortable',
      'No tight after-feel'
    ],
    howToUse: [
      'Massage onto dry skin using dry hands.',
      'Massage gently for 1–2 minutes.',
      'Add a little water to emulsify into a milky texture.',
      'Rinse thoroughly.',
      'Follow with Sina Licorice Root Cleansing Gel for the perfect double cleanse.'
    ],
    heroIngredients: [
      'Moroccan Rhassoul Clay',
      'Botanical Cleansing Oils',
      'Sunflower Oil',
      'Jojoba Oil',
      'Vitamin E'
    ],
    shopeeLink: 'https://shopee.com.my/ananaz_medispa',
    filterCategory: 'Cleansing'
  }
]
