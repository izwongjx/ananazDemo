import { SkinTreatment } from './skinTreatments'

export const glassSkinTreatments: SkinTreatment[] = [
  {
    id: 'signature-triple-glow',
    num: '01',
    name: 'Signature Triple Glow',
    tag: 'Signature',
    tagColor: 'bg-gold text-off-white',
    price: 'RM 299',
    original: 'RM 450',
    duration: '60–90 min',
    sessions: '1 session',
    shortDesc: 'Professional Glass Skin Peel with customised brightening technology for smoother, clearer and naturally luminous skin.',
    overview: 'Professional Glass Skin Peel with customised brightening technology for smoother, clearer and naturally luminous skin. Reveal smoother, brighter and naturally luminous skin with Ananaz’s exclusive professional glass skin treatment.',
    tags: ['Smooth Texture', 'Crystal Clear Glow', 'Even Skin Tone', 'Refined Pores', 'Makeup-Ready Skin'],
    benefits: [
      { title: 'Smooth Texture', desc: 'Refines the skin surface for a silky, flawless feel.' },
      { title: 'Crystal Clear Glow', desc: 'Unveils a natural, lit-from-within radiance.' },
      { title: 'Even Skin Tone', desc: 'Helps to balance and unify your complexion.' },
      { title: 'Refined Pores', desc: 'Visibly reduces the appearance of enlarged pores.' },
      { title: 'Makeup-Ready Skin', desc: 'Creates the perfect smooth canvas for any makeup application.' },
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
