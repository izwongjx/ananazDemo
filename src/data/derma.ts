import { SkinTreatment } from './skinTreatments'

export const dermaTreatments: SkinTreatment[] = [
  {
    id: 'advanced-epidermal-renewal',
    num: '01',
    name: 'Advanced Epidermal Renewal',
    tag: 'Signature',
    tagColor: 'bg-gold text-off-white',
    price: 'RM 299',
    original: 'RM 450',
    duration: '45–60 min',
    sessions: '1 session',
    shortDesc: 'Designed to gently renew the skin’s epidermal layer by removing accumulated dead skin cells, improving overall skin texture.',
    overview: 'Advanced Epidermal Renewal\n\nThe Essential First Step to Every Skin Transformation\n\nDerma Restructuring Therapy™ is designed to gently renew the skin’s epidermal layer by removing accumulated dead skin cells, improving overall skin texture and promoting a smoother, more even complexion.\n\nAs the essential preparation phase of The Ananaz Way™, this treatment optimises the skin before Precision Dermapen Therapy, allowing advanced regenerative ingredients such as EXOSOME + PDRN to be delivered more effectively for enhanced skin renewal and recovery.\n\nIdeal for Dull and tired-looking skin, Uneven skin texture, Rough skin surface, Clients preparing for regenerative treatments, and Skin requiring professional renewal before Dermapen.',
    tags: ['Renews Skin', 'Exfoliates', 'Smooths Texture', 'Brightens Tone', 'Preps Skin'],
    benefits: [
      { title: 'Renews the skin’s epidermal layer', desc: 'Promotes healthy cell turnover for a fresh, revitalised surface.' },
      { title: 'Removes dull, accumulated dead skin cells', desc: 'Sweeps away impurities that cause dullness and congestion.' },
      { title: 'Improves overall skin texture and smoothness', desc: 'Leaves the skin feeling remarkably soft and refined.' },
      { title: 'Promotes a brighter, more even skin tone', desc: 'Reveals a luminous, healthy glow.' },
      { title: 'Helps reduce the appearance of superficial pigmentation', desc: 'Gently fades surface-level dark spots.' },
      { title: 'Prepares the skin for optimal EXOSOME + PDRN delivery', desc: 'Creates the perfect canvas for advanced regenerative serums.' },
      { title: 'Enhances the effectiveness of Skin Rebirth Therapy™', desc: 'Maximises the results of your subsequent treatments.' },
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