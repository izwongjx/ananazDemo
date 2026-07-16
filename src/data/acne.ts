import { SkinTreatment } from './skinTreatments'

export const acneTreatments: SkinTreatment[] = [
  {
    id: 'acne-recovery-complex',
    num: '01',
    name: 'Acne Recovery Complex™',
    tag: 'Signature',
    tagColor: 'bg-gold text-off-white',
    price: 'RM 399',
    original: 'RM 600',
    duration: '60–90 min',
    sessions: '1 session',
    shortDesc: 'Designed to calm inflamed skin, reduce congestion and support the skin’s natural healing process.',
    overview: 'Featuring Acne Recovery Complex™\n\nPowered by Precision Dermapen Technology™\n\nOnce the skin has been optimally prepared through Derma Restructuring Therapy™, Acne Recovery Therapy™ is designed to calm inflamed skin, reduce congestion and support the skin’s natural healing process.\n\nUsing Precision Dermapen Technology™, this targeted treatment helps improve skin texture, minimise the appearance of post-acne marks and strengthen the skin barrier, promoting healthier, clearer and more balanced skin over time.\n\nIdeal for treating Active acne, Oily & congested skin, Enlarged pores, Post-acne marks, Uneven skin texture, and Clients seeking long-term acne recovery.',
    tags: ['Calms inflamed skin', 'Reduces congestion & oil', 'Natural healing', 'Improves post-acne marks', 'Refines texture', 'Strengthens barrier'],
    benefits: [
      { title: 'Helps calm inflamed and acne-prone skin', desc: 'Soothes redness and irritation to provide immediate comfort.' },
      { title: 'Reduces pore congestion and excess oil', desc: 'Keeps pores clear and balances sebum production.' },
      { title: 'Supports the skin’s natural healing process', desc: 'Encourages faster, healthier recovery from active breakouts.' },
      { title: 'Improves the appearance of post-acne marks', desc: 'Fades dark spots and hyperpigmentation left behind by blemishes.' },
      { title: 'Refines overall skin texture', desc: 'Smooths out bumps and unevenness for a softer surface.' },
      { title: 'Strengthens the skin barrier', desc: 'Builds resilience to help protect against future breakouts.' },
      { title: 'Promotes healthier, clearer-looking skin', desc: 'Reveals a more balanced, radiant, and clarified complexion.' },
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
