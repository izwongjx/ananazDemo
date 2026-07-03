// ─── Shared data for Skin Treatments ─────────────────────────────────────────

export interface SkinTreatment {
  id: string
  num: string
  name: string
  tag: string
  tagColor: string
  price: string
  original: string | null
  duration: string
  sessions: string
  shortDesc: string
  overview: string
  benefits: { title: string; desc: string }[]
  tags?: string[]
  processDesc?: string
  process: { step: string; title: string; desc: string }[]
  aftercare: string[]
  clientExperiencesTitle?: string
  clientExperiences?: { emoji: string; title: string; desc: string }[]
  /** Optional before image path */
  beforeImage?: string
  /** Optional after image path */
  afterImage?: string
}

export const skinTreatments: SkinTreatment[] = [
  {
    id: 'skin-tag',
    num: '01',
    name: 'Pro Series Skin Tag Removal',
    tag: 'Most Popular',
    tagColor: 'bg-gold text-off-white',
    price: 'RM 199',
    original: 'RM 330',
    duration: '30–60 min',
    sessions: '1 session',
    shortDesc: 'Soft, flesh-coloured growths that appear in skin folds — neck, underarms, eyelids. Very common after 40.',
    beforeImage: '/images/skin-tag-before.jpg',
    afterImage: '/images/skin-tag-after.jpg',
    overview: 'A clinical-grade procedure that uses targeted radiofrequency or plasma energy to safely remove skin tags at the root — leaving skin smooth, clear, and healed within days. Performed by certified therapists with 20+ years of expertise.',
    tags: ['all skin tones', 'laser free', 'minimal downtime', 'proven results', 'smooth recovery'],
    benefits: [
      { title: 'Instant Results', desc: 'Visible results immediately — the tag is fully removed post-treatment.' },
      { title: 'Minimal Downtime', desc: 'Resume your normal daily schedule immediately after treatment with simple, stress-free aftercare.' },
      { title: 'Smooth Recovery', desc: 'Clean, uniform healing that leaves skin smooth and restored to its natural appearance.' },
    ],
    clientExperiencesTitle: 'How our clients feel after treatment',
    clientExperiences: [
      {
        emoji: '✨',
        title: 'Skin That Looks Like You',
        desc: "Not dramatically different. Not overdone. Just cleaner, smoother, and more like how you feel on the inside — without the distraction of something you didn't choose."
      },
      {
        emoji: '🧕',
        title: 'Comfortable in Your Hijab Again',
        desc: "Many of our clients have skin tags along their neckline or jawline — exactly where their hijab sits every day. Once removed, they describe a small but meaningful sense of ease that they hadn't expected."
      },
      {
        emoji: '📸',
        title: 'Present in Every Photo',
        desc: "When you stop looking for your own flaws in every image, something shifts. You look at the people you're with instead of at yourself. That is the kind of confidence we mean."
      },
      {
        emoji: '💆‍♀️',
        title: 'Skin That Feels Healthier',
        desc: "The goal of the Sam Precision Signature™ is not just clear skin — it is skin that feels stronger, better cared for, and healthier in its environment. Removal is part of that. Care is the rest."
      }
    ],
    processDesc: 'Every step is thoughtfully designed to prepare, treat, soothe, and protect your skin — because precision does not stop at the procedure.',
    process: [
      { step: '01', title: 'Skin Consultation', desc: 'A professional assessment is conducted to evaluate your skin concern, treatment suitability, and desired outcome.' },
      { step: '02', title: 'Double Cleansing & Skin Preparation', desc: 'The skin is thoroughly cleansed to remove impurities, excess oil, and surface residue, creating the ideal foundation for treatment.' },
      { step: '03', title: 'Precision Skin Preparation', desc: 'The targeted area is carefully conditioned and prepared to optimise treatment comfort and effectiveness.' },
      { step: '04', title: 'Precision Procedure', desc: 'Using the Sam Precision Signature™ technique, each skin concern is treated with meticulous attention to detail, accuracy, and client comfort.' },
      { step: '05', title: 'Cold Compress', desc: 'A cooling therapy is performed to calm the skin, minimise discomfort, and promote post-treatment comfort.' },
      { step: '06', title: 'Recovery Mask', desc: 'A soothing mask is applied to comfort the skin and help reduce visible redness following the procedure.' },
      { step: '07', title: 'EO Renewal & Recovery', desc: 'Specialised post-treatment care is applied to support the skin\'s natural recovery process while restoring comfort and balance.' },
      { step: '08', title: 'Sun Protection', desc: 'The treatment concludes with protective sun care to help safeguard the skin and support optimal recovery.' },
    ],
    aftercare: [
      'Keep the area clean and dry for 48 hours',
      'Apply the provided healing ointment twice daily',
      'Avoid direct sun exposure — use SPF 50+ for 2 weeks',
      'Do not apply makeup over the treated area for 24 hours',
      'A small scab may form naturally — do not pick or scratch it',
    ],
  },
  {
    id: 'sebhorreic-keratosis',
    num: '02',
    name: 'Sebhorreic Keratosis',
    tag: 'Highly Effective',
    tagColor: 'bg-gold text-off-white',
    price: 'RM 199',
    original: 'RM 330',
    duration: '30–60 min',
    sessions: '1 session',
    shortDesc: 'Waxy, stuck-on looking brown or black growths that often appear on the face, chest, or back. Completely benign.',
    overview: 'A specialized procedure using precise energy to safely dry and remove Seborrheic Keratosis growths at the base. Performed with advanced technique to ensure minimal discomfort and clean skin recovery.',
    benefits: [
      { title: 'Complete Removal', desc: 'Each keratosis growth is fully removed in a single session with no recurrence at the site.' },
      { title: 'No Scarring', desc: 'Skin heals cleanly and restores its natural texture with proper aftercare.' },
      { title: 'Precise Technique', desc: 'Targeted removal that protects the surrounding healthy skin layers.' },
      { title: 'Minimal Downtime', desc: 'Fast, hassle-free healing process that lets you return to daily routines immediately.' },
      { title: 'All Areas', desc: 'Safe for face, scalp, neck, back, chest, and other body areas.' },
      { title: 'Certified Experts', desc: 'Performed by experienced therapists utilizing clinical-grade signature protocols.' },
    ],
    processDesc: 'Every step is thoughtfully designed to prepare, treat, soothe, and protect your skin — because precision does not stop at the procedure.',
    process: [
      { step: '01', title: 'Skin Consultation', desc: 'A professional assessment is conducted to evaluate your skin concern, treatment suitability, and desired outcome.' },
      { step: '02', title: 'Double Cleansing & Skin Preparation', desc: 'The skin is thoroughly cleansed to remove impurities, excess oil, and surface residue, creating the ideal foundation for treatment.' },
      { step: '03', title: 'Precision Skin Preparation', desc: 'The targeted area is carefully conditioned and prepared to optimise treatment comfort and effectiveness.' },
      { step: '04', title: 'Precision Procedure', desc: 'Using the Sam Precision Signature™ technique, each skin concern is treated with meticulous attention to detail, accuracy, and client comfort.' },
      { step: '05', title: 'Cold Compress', desc: 'A cooling therapy is performed to calm the skin, minimise discomfort, and promote post-treatment comfort.' },
      { step: '06', title: 'Recovery Mask', desc: 'A soothing mask is applied to comfort the skin and help reduce visible redness following the procedure.' },
      { step: '07', title: 'EO Renewal & Recovery', desc: 'Specialised post-treatment care is applied to support the skin\'s natural recovery process while restoring comfort and balance.' },
      { step: '08', title: 'Sun Protection', desc: 'The treatment concludes with protective sun care to help safeguard the skin and support optimal recovery.' },
    ],
    aftercare: [
      'Keep the treated area clean and dry for 48 hours',
      'Apply the provided healing ointment twice daily',
      'Avoid direct sun exposure — use SPF 50+ daily for 2 weeks',
      'Do not pick or scratch any naturally forming scabs',
      'Avoid harsh exfoliants or scrub products on the area for 2 weeks',
    ],
  },
  {
    id: 'milia',
    num: '03',
    name: 'Oil Cysts / Milia Treatment',
    tag: 'Quick Results',
    tagColor: 'bg-[#5C7C5C] text-off-white',
    price: 'RM 199',
    original: 'RM 288',
    duration: '45–75 min',
    sessions: '1–2 sessions',
    shortDesc: 'Tiny white cysts formed when keratin becomes trapped beneath the skin. Often appear around the eye area and cheeks.',
    overview: 'Precision treatment that clears stubborn milia and blocked oil cysts through professional extraction and deep pore cleansing. Skin is left completely smooth, congestion-free, and visibly clearer — often in a single session.',
    benefits: [
      { title: 'Instant Clarity', desc: 'Visible reduction in milia bumps immediately after the extraction session.' },
      { title: 'Zero Damage', desc: 'Deep pore clearing without scarring or damage to surrounding skin.' },
      { title: 'Prevents Recurrence', desc: 'Post-treatment protocol actively prevents future congestion.' },
      { title: 'Comfortable', desc: 'Virtually painless when performed by certified therapists.' },
      { title: 'Delicate Areas', desc: 'Safe for use around the delicate eye, cheek, and nose areas.' },
      { title: 'Quick Results', desc: 'Most clients need only 1–2 sessions to fully clear existing milia.' },
    ],
    process: [
      { step: '01', title: 'Cleansing & Softening', desc: 'Enzyme cleanse followed by therapeutic steam to open pores and soften milia walls for easier, more comfortable extraction.' },
      { step: '02', title: 'Professional Extraction', desc: 'Expert manual extraction using sterile lancets and comedone tools — virtually painless by certified therapists.' },
      { step: '03', title: 'Antibacterial Treatment', desc: 'High-frequency therapy applied to eliminate bacteria, tighten skin, and prevent immediate re-infection.' },
      { step: '04', title: 'Hydration & Calming', desc: 'Barrier-repair serum and soothing mask applied to reduce redness and lock in hydration for faster healing.' },
    ],
    aftercare: [
      'Do not touch or pick the treated area for 72 hours',
      'Apply the provided soothing gel morning and night for 3 days',
      'Avoid heavy creams or occlusive products for 48 hours',
      'Switch to a gentle, non-comedogenic moisturiser going forward',
      'Avoid steam rooms and saunas for 48 hours post-treatment',
    ],
  },
]
