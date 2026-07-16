import { SkinTreatment } from './skinTreatments'

export const skinRebirthTreatments: SkinTreatment[] = [
  {
    id: 'exosome-pdrn',
    num: '01',
    name: 'Exosome + PDRN',
    tag: 'Signature',
    tagColor: 'bg-gold text-off-white',
    price: 'RM 399',
    original: 'RM 600',
    duration: '60–90 min',
    sessions: '1 session',
    shortDesc: 'Following Derma Restructuring Therapy™, this advanced regenerative treatment helps activate the skin’s natural repair process.',
    overview: 'Following Derma Restructuring Therapy™, this advanced regenerative treatment helps activate the skin’s natural repair process, stimulate collagen production and restore a healthier, stronger skin barrier. Designed to support long-term skin renewal, it enhances the skin’s ability to heal, regenerate and maintain a youthful, radiant complexion.',
    tags: ['Stimulates collagen', 'Accelerates skin regeneration', 'Post-treatment recovery', 'Softens fine lines', 'Improves firmness', 'Radiant complexion'],
    benefits: [
      { title: 'Stimulates collagen & elastin production', desc: 'Promotes the structural proteins essential for youthful skin.' },
      { title: 'Accelerates skin regeneration', desc: 'Speeds up the skin’s natural renewal cycle.' },
      { title: 'Supports post-treatment skin recovery', desc: 'Ideal for soothing and repairing after more intensive treatments.' },
      { title: 'Softens the appearance of fine lines', desc: 'Plumps the skin to diminish visible signs of aging.' },
      { title: 'Improves skin firmness & elasticity', desc: 'Restores a tighter, more resilient feel to your skin.' },
      { title: 'Restores a healthier, naturally radiant complexion', desc: 'Revives dull skin for a luminous, healthy glow.' },
    ],
    processDesc: 'Every step is thoughtfully designed to prepare, treat, soothe, and protect your skin — because precision does not stop at the procedure.',
    process: [
      { step: '01', title: 'Skin Consultation', desc: 'A professional assessment is conducted to evaluate your skin concern, treatment suitability, and desired outcome.' },
      { step: '02', title: 'Double Cleansing & Skin Preparation', desc: 'The skin is thoroughly cleansed to remove impurities, excess oil, and surface residue, creating the ideal foundation for treatment.' },
      { step: '03', title: 'Precision Skin Preparation', desc: 'The targeted area is carefully conditioned and prepared to optimise treatment comfort and effectiveness.' },
      { step: '04', title: 'Precision Procedure', desc: 'Using the Sam Precision Signature technique, each skin concern is treated with meticulous attention to detail, accuracy, and client comfort.' },
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
  }
]