import { SkinTreatment } from './skinTreatments'

export const bodyWellnessTreatments: SkinTreatment[] = [
  {
    id: 'signature-body-spa',
    num: '01',
    name: 'Signature Body Spa',
    tag: 'Signature',
    tagColor: 'bg-[#486A68] text-white',
    price: 'RM 288',
    original: null,
    duration: '120 min',
    sessions: '1 session',
    shortDesc: 'A complete body wellness experience combining therapeutic massage, sauna and facial pressure point therapy.',
    overview: 'Signature Body Spa\n\nRelax. Recharge. Restore.\n\nA complete body wellness experience combining therapeutic massage, sauna and facial pressure point therapy to help release muscle tension, improve circulation and encourage deep relaxation.\n\nPerfect for:\n• Stress & fatigue\n• Muscle tightness\n• Busy professionals\n• Self-care & relaxation',
    tags: ['Relax', 'Recharge', 'Restore', 'Relieves Stress'],
    benefits: [
      { title: 'Releases muscle tension', desc: 'Soothes tight muscles and relieves physical stress.' },
      { title: 'Improves circulation', desc: 'Encourages healthy blood flow throughout the body.' },
      { title: 'Deep relaxation', desc: 'Calms the mind and restores a sense of peace.' },
      { title: 'Full body rejuvenation', desc: 'Leaves you feeling completely refreshed and renewed.' }
    ],
    processDesc: 'Every step is thoughtfully designed to prepare, treat, soothe, and protect your body.',
    process: [
      { step: '01', title: 'Consultation', desc: 'A brief assessment to understand your wellness needs and preferences.' },
      { step: '02', title: 'Aromatherapy Sauna', desc: 'Warm up muscles and prepare the body for deep relaxation.' },
      { step: '03', title: 'Therapeutic Massage', desc: 'Customised pressure to release tension and improve circulation.' },
      { step: '04', title: 'Facial Pressure Points', desc: 'Targeted therapy to relieve head and neck stress.' },
      { step: '05', title: 'Rest & Tea', desc: 'Conclude your journey with a calming herbal tea.' }
    ],
    aftercare: [
      'Drink plenty of water to help flush out toxins',
      'Avoid strenuous exercise for 24 hours',
      'Rest and allow your body to fully recover',
      'Take a warm bath if muscles feel tender'
    ]
  },
  {
    id: 'therapeutic-massage',
    num: '02',
    name: 'Therapeutic Massage',
    tag: 'Popular',
    tagColor: 'bg-gold text-off-white',
    price: 'RM 168',
    original: null,
    duration: '60/90/120 min',
    sessions: '1 session',
    shortDesc: 'Choose from Aroma Therapy or Traditional Therapy to ease tired muscles and restore comfort.',
    overview: 'Therapeutic Massage\n\nRelieve Everyday Tension.\n\nChoose from Aroma Therapy or Traditional Therapy to help ease tired muscles, encourage better circulation and restore comfort throughout the body.\n\nAvailable in:\n• 60 Minutes\n• 90 Minutes\n• 120 Minutes',
    tags: ['Eases Tension', 'Improves Circulation', 'Restores Comfort'],
    benefits: [
      { title: 'Relieves everyday tension', desc: 'Melts away the stress stored in your muscles.' },
      { title: 'Encourages better circulation', desc: 'Helps deliver oxygen and nutrients to tissues.' },
      { title: 'Restores comfort', desc: 'Brings balance back to a tired, aching body.' },
      { title: 'Customisable therapy', desc: 'Tailored to your specific areas of concern.' }
    ],
    processDesc: 'A personalised approach to body therapy.',
    process: [
      { step: '01', title: 'Assessment', desc: 'Identify areas of tension and select your preferred therapy style.' },
      { step: '02', title: 'Preparation', desc: 'Settle into a calming environment with soothing aromas.' },
      { step: '03', title: 'Targeted Massage', desc: 'Focused techniques to address your specific needs.' },
      { step: '04', title: 'Awakening', desc: 'Gentle stretching to awaken the body.' }
    ],
    aftercare: [
      'Stay hydrated to support muscle recovery',
      'Avoid heavy lifting for the rest of the day',
      'Notice how your body feels and rests'
    ]
  },
  {
    id: 'herbal-wellness-therapy',
    num: '03',
    name: 'Herbal Wellness Therapy',
    tag: 'Detox',
    tagColor: 'bg-[#1A5F62] text-white',
    price: 'RM 228',
    original: null,
    duration: '90 min',
    sessions: '1 session',
    shortDesc: 'A warming herbal therapy designed to support circulation and encourage detoxification.',
    overview: 'Herbal Wellness Therapy\n\nDetox. Rebalance. Revitalise.\n\nA warming herbal therapy designed to support circulation, encourage detoxification and leave the body feeling lighter and re-energised.\n\nIdeal for those who often experience:\n• Muscle stiffness\n• Water retention\n• Fatigue\n• Feeling physically heavy',
    tags: ['Detox', 'Rebalance', 'Revitalise', 'Warming'],
    benefits: [
      { title: 'Supports circulation', desc: 'Warming herbs help stimulate healthy blood flow.' },
      { title: 'Encourages detoxification', desc: 'Aids the body in naturally flushing out impurities.' },
      { title: 'Reduces water retention', desc: 'Helps the body feel lighter and less bloated.' },
      { title: 'Re-energises the body', desc: 'Combats fatigue and restores vitality.' }
    ],
    processDesc: 'A traditional approach to modern wellness.',
    process: [
      { step: '01', title: 'Herbal Selection', desc: 'Custom blend of traditional warming herbs.' },
      { step: '02', title: 'Application', desc: 'Warm herbal compresses applied to meridian points.' },
      { step: '03', title: 'Deep Heat Therapy', desc: 'Allowing the herbal properties to penetrate deeply.' },
      { step: '04', title: 'Balancing Massage', desc: 'A light massage to distribute the benefits.' }
    ],
    aftercare: [
      'Keep the body warm and avoid cold drafts',
      'Drink warm herbal tea or water',
      'Avoid cold showers for at least 12 hours'
    ]
  },
  {
    id: 'womens-wellness',
    num: '04',
    name: 'Women’s Wellness',
    tag: 'Specialised',
    tagColor: 'bg-gold text-off-white',
    price: 'RM 198',
    original: null,
    duration: '90 min',
    sessions: '1 session',
    shortDesc: 'Specialised therapies designed to support comfort and wellbeing through different stages of a woman’s life.',
    overview: 'Women’s Wellness\n\nSupporting Women’s Wellbeing Naturally.\n\nSpecialised therapies designed to support comfort and wellbeing through different stages of a woman’s life.\n\nTreatments include:\n• Traditional Women’s Massage\n• Miss V Care\n• Women’s Wellness Therapy',
    tags: ['Discreet Care', 'Comfort', 'Wellbeing'],
    benefits: [
      { title: 'Supports hormonal balance', desc: 'Gentle therapies to support natural rhythms.' },
      { title: 'Eases feminine discomfort', desc: 'Targeted relief for common women’s wellness concerns.' },
      { title: 'Restores inner confidence', desc: 'A holistic approach to feeling comfortable in your body.' },
      { title: 'Discreet and respectful', desc: 'A private, comforting environment for intimate care.' }
    ],
    processDesc: 'Elegant, discreet, and deeply restorative care.',
    process: [
      { step: '01', title: 'Private Consultation', desc: 'A discreet conversation about your specific wellness needs.' },
      { step: '02', title: 'Preparation', desc: 'Ensuring your complete comfort and privacy.' },
      { step: '03', title: 'Specialised Therapy', desc: 'Gentle, effective treatments tailored for women.' },
      { step: '04', title: 'Restoration', desc: 'Time to rest and integrate the benefits.' }
    ],
    aftercare: [
      'Rest and prioritise self-care',
      'Maintain good hydration',
      'Follow any specific advice provided by your therapist'
    ]
  },
  {
    id: 'body-rituals',
    num: '05',
    name: 'Body Rituals',
    tag: 'Luxury',
    tagColor: 'bg-black text-white',
    price: 'RM 318',
    original: null,
    duration: '120 min',
    sessions: '1 session',
    shortDesc: 'Luxurious body rituals created to nourish both skin and senses.',
    overview: 'Body Rituals\n\nSlow Down. Indulge. Reconnect.\n\nLuxurious body rituals created to nourish both skin and senses.\n\nIncludes:\n• Body Scrub\n• Body Mask\n• Herbal Bath\n• Milk Flower Bath\n• Hydrotherapy Bath\n• Aromatherapy Sauna',
    tags: ['Indulge', 'Nourish', 'Luxurious'],
    benefits: [
      { title: 'Nourishes the skin', desc: 'Deeply hydrates and softens the entire body.' },
      { title: 'Soothes the senses', desc: 'Aromatherapy and luxurious textures calm the mind.' },
      { title: 'Promotes deep connection', desc: 'A rare opportunity to completely disconnect from the world.' },
      { title: 'Ultimate indulgence', desc: 'The pinnacle of physical relaxation and care.' }
    ],
    processDesc: 'A multi-sensory journey of indulgence.',
    process: [
      { step: '01', title: 'Exfoliation', desc: 'Gentle body scrub to reveal smooth, radiant skin.' },
      { step: '02', title: 'Nourishing Mask', desc: 'Application of a rich, hydrating body mask.' },
      { step: '03', title: 'Thermal Wrap', desc: 'Encouraging deep absorption of nutrients.' },
      { step: '04', title: 'Luxurious Bath', desc: 'Immerse in a milk flower or herbal hydrotherapy bath.' },
      { step: '05', title: 'Moisture Application', desc: 'Sealing in hydration with premium body oils.' }
    ],
    aftercare: [
      'Avoid showering immediately to let oils absorb',
      'Protect your skin from direct sun',
      'Enjoy the lingering sense of calm'
    ]
  },
  {
    id: 'wellness-enhancements',
    num: '06',
    name: 'Wellness Enhancements',
    tag: 'Add-on',
    tagColor: 'bg-divider text-dark',
    price: 'RM 88',
    original: null,
    duration: '30 min',
    sessions: '1 session',
    shortDesc: 'Add personalised wellness treatments to complement your visit.',
    overview: 'Wellness Enhancements\n\nComplete Your Experience.\n\nAdd personalised wellness treatments to complement your visit.\n\nOptions include:\n• Face & Shoulder Therapy\n• Eye Care\n• Face Massage\n• Nerve Therapy\n• Hair Oil Therapy',
    tags: ['Personalised', 'Complementary', 'Targeted'],
    benefits: [
      { title: 'Targeted relief', desc: 'Focuses on specific areas needing extra attention.' },
      { title: 'Elevates your visit', desc: 'Turns a great treatment into an exceptional one.' },
      { title: 'Time-efficient', desc: 'Quick yet highly effective enhancements.' },
      { title: 'Fully customisable', desc: 'Build the exact experience your body craves.' }
    ],
    processDesc: 'Seamlessly integrated into your main treatment.',
    process: [
      { step: '01', title: 'Selection', desc: 'Choose your desired enhancement before your session.' },
      { step: '02', title: 'Integration', desc: 'Flawlessly incorporated into your treatment flow.' },
      { step: '03', title: 'Targeted Care', desc: 'Dedicated time focused solely on your chosen area.' }
    ],
    aftercare: [
      'Follow the aftercare advice for your primary treatment'
    ]
  }
]
