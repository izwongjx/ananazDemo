import { SkinTreatment } from './skinTreatments'

export const skinBrightTreatments: SkinTreatment[] = [
  {
    id: 'exosome-trx',
    num: '01',
    name: 'Exosome + TRX',
    tag: 'Signature',
    tagColor: 'bg-gold text-off-white',
    price: 'RM 399',
    original: 'RM 600',
    duration: '60–90 min',
    sessions: '1 session',
    shortDesc: 'Skin Bright Therapy™ delivers a targeted regenerative brightening treatment designed to improve uneven skin tone, reduce the appearance of pigmentation and support healthier, more radiant skin.',
    overview: 'Skin Bright Therapy™ delivers a targeted regenerative brightening treatment designed to improve uneven skin tone, reduce the appearance of pigmentation and support healthier, more radiant skin.\n\nPowered by the synergistic combination of Tranexamic Acid (TXA) and PDRN, this advanced therapy helps restore skin clarity while supporting the skin’s natural repair process for brighter, smoother and more even-looking skin.\n\nIdeal for treating Melasma, Sunspots, Uneven skin tone, Post-inflammatory pigmentation (PIH), Acne marks, and Dull, tired-looking skin. This therapy is highly suitable for clients seeking a brighter, more radiant complexion.',
    tags: ['Reduces pigmentation', 'PIH recovery', 'Brighter skin', 'Strengthens barrier', 'Enhances radiance', 'Smoother texture'],
    benefits: [
      { title: 'Reduces the appearance of pigmentation & dark spots', desc: 'Helps fade unwanted spots and hyperpigmentation for a clearer look.' },
      { title: 'Supports post-inflammatory pigmentation recovery', desc: 'Aids in healing and soothing marks left by acne or injury.' },
      { title: 'Promotes brighter, clearer-looking skin', desc: 'Unveils a more luminous, even and refined tone.' },
      { title: 'Strengthens the skin barrier while supporting regeneration', desc: 'Repairs and fortifies the skin from within for better resilience.' },
      { title: 'Enhances overall skin radiance and luminosity', desc: 'Leaves you with a healthy, beautiful, glowing complexion.' },
      { title: 'Leaves skin smoother, healthier and more refined', desc: 'Visibly improves overall texture and skin health.' },
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