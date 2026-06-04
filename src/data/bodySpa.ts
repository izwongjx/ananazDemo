export const bodySpaTreatments = [
  {
    id: 'massages-and-therapies',
    num: '01',
    name: 'Massages & Therapies',
    tag: 'Core & Targeted Relief',
    tagColor: 'bg-dark text-white',
    price: 'From RM 50',
    original: null,
    duration: '30 - 120 mins',
    sessions: 'Single session',
    shortDesc: 'Includes Aroma Therapy, Traditional Therapy, Face & Shoulder, and Nerve treatments.',
    overview: 'A complete suite of bodywork tailored to your exact tension points. Whether you need the deep cultural roots of our Traditional Therapy, the calming strokes of Aroma Therapy, or quick targeted relief for your face, shoulders, or nerves, our master therapists customize every session.',
    pricingOptions: [
      { 
        name: 'Aroma Therapy', 
        variants: [
          { duration: '60 Mins', price: 'RM 95' },
          { duration: '90 Mins', price: 'RM 125' },
          { duration: '120 Mins', price: 'RM 150' }
        ]
      },
      { 
        name: 'Traditional Therapy', 
        variants: [
          { duration: '90 Mins', price: 'RM 150' },
          { duration: '120 Mins', price: 'RM 190' }
        ]
      },
      { 
        name: 'Face & Shoulder Therapy', 
        variants: [
          { duration: '30 Mins', price: 'RM 65' }
        ]
      },
      { 
        name: 'Aromatherapy Nerve Treatment', 
        variants: [
          { duration: '30 Mins', price: 'RM 50' }
        ]
      },
      { 
        name: 'Traditional Nerve Therapy', 
        variants: [
          { duration: '30 Mins', price: 'RM 55' }
        ]
      }
    ],
    benefits: [
      { title: 'Aroma & Traditional Therapy' },
      { title: 'Face & Shoulder Therapy' },
      { title: 'Nerve Treatments' },
      { title: 'Full Body & Targeted Relief' }
    ],
    process: [
      { step: '01', title: 'Consultation', desc: 'We assess your muscle tension and energy levels to recommend the perfect modality or targeted area.' },
      { step: '02', title: 'Customized Bodywork', desc: 'Your chosen therapy is executed by highly trained specialists.' },
    ],
    aftercare: [
      'Drink plenty of warm water to flush out released toxins',
      'Rest and avoid heavy physical exertion for 12 hours',
    ],
  },
  {
    id: 'scrubs-and-masks',
    num: '02',
    name: 'Scrubs, Lulur & Masks',
    tag: 'Skin Renewal',
    tagColor: 'bg-[#C18C74] text-white',
    price: 'From RM 70',
    original: null,
    duration: 'Varies',
    sessions: 'Single session',
    shortDesc: 'Reveal glowing skin with Traditional Body Lulur, Ananaz Signature Scrub, and Body Masks.',
    overview: 'Shed dullness and deeply hydrate. Our exfoliation and mask therapies are designed to renew your skin\'s texture and glow. Perfect as standalone sessions for radiant skin.',
    pricingOptions: [
      { 
        name: 'Body Lulur', 
        variants: [
          { duration: 'Standalone', price: 'RM 70' }
        ]
      },
      { 
        name: 'Ananaz Signature Special Scrub', 
        variants: [
          { duration: 'Standalone', price: 'RM 95' }
        ]
      },
      { 
        name: 'Body Mask', 
        variants: [
          { duration: 'Standalone', price: 'RM 70' }
        ]
      }
    ],
    benefits: [
      { title: 'Body Lulur' },
      { title: 'Ananaz Signature Scrub' },
      { title: 'Body Mask' },
      { title: 'Deep Exfoliation' }
    ],
    process: [
      { step: '01', title: 'Full Body Exfoliation', desc: 'Application of your chosen scrub or lulur to reveal fresh skin.' },
      { step: '02', title: 'Nourishing Mask', desc: 'Optional body mask application for deep tissue hydration.' },
    ],
    aftercare: [
      'Avoid direct sun exposure for 24 hours',
      'Apply gentle moisturizers daily to maintain the glow',
    ],
  },
  {
    id: 'baths-and-sauna',
    num: '03',
    name: 'Baths, Steam & Sauna',
    tag: 'Detoxification',
    tagColor: 'bg-[#398880] text-white',
    price: 'From RM 52',
    original: null,
    duration: 'Varies',
    sessions: 'Single session',
    shortDesc: 'Immerse in holistic healing. Featuring Saunas, Milk Baths, and Herbal Hydrotherapy.',
    overview: 'Water and steam are ancient conduits for healing. Melt away stress, open your pores, and detoxify your system with our curated selection of saunas and therapeutic baths.',
    pricingOptions: [
      { 
        name: 'Aromatherapy Sauna', 
        variants: [
          { duration: 'Session', price: 'RM 52' }
        ]
      },
      { 
        name: 'Milk / Flower Bath', 
        variants: [
          { duration: 'Session', price: 'RM 60' }
        ]
      },
      { 
        name: 'Hydrotherapy Bath', 
        variants: [
          { duration: 'Standalone', price: 'RM 75' }
        ]
      },
      { 
        name: 'Aura Herbal Hydrotherapy Bath', 
        variants: [
          { duration: 'Standalone', price: 'RM 85' }
        ]
      }
    ],
    benefits: [
      { title: 'Aromatherapy Sauna' },
      { title: 'Milk / Flower Bath' },
      { title: 'Hydrotherapy' },
      { title: 'Aura Herbal Bath' }
    ],
    process: [
      { step: '01', title: 'Preparation', desc: 'Your sauna or bath is drawn and infused with chosen ingredients.' },
      { step: '02', title: 'Immersion', desc: 'A private, deeply relaxing soak or steam session to melt away the world.' },
    ],
    aftercare: [
      'Rehydrate generously to replace fluids lost in the sauna',
      'Allow the herbal properties to remain on the skin if possible',
    ],
  },
  {
    id: 'spa-addons',
    num: '04',
    name: 'Spa Add-Ons',
    tag: 'Enhancements',
    tagColor: 'bg-[#EEF7F6] text-[#398880]',
    price: 'From RM 50',
    original: null,
    duration: 'Add-On',
    sessions: 'Single session',
    shortDesc: 'Enhance any massage or body spa treatment with discounted add-on rates.',
    overview: 'Take your spa experience to the next level. All of our scrubs, baths, masks, and targeted therapies are available at special add-on rates when combined with a primary treatment.',
    pricingOptions: [
      {
        name: 'Add-On Scrubs & Masks',
        variants: [
          { duration: 'Ananaz Signature Special Scrub', price: 'RM 65' },
          { duration: 'Body Lulur', price: 'RM 55' },
          { duration: 'Body Mask', price: 'RM 50' }
        ]
      },
      {
        name: 'Add-On Baths',
        variants: [
          { duration: 'Aura Herbal Hydrotherapy Bath', price: 'RM 65' },
          { duration: 'Hydrotherapy Bath', price: 'RM 50' }
        ]
      },
      {
        name: 'Add-On Targeted Relief',
        variants: [
          { duration: 'Face & Shoulder Therapy (30 Mins)', price: 'RM 50' },
          { duration: 'Aromatherapy Nerve Treatment (30 Mins)', price: 'RM 50' },
          { duration: 'Traditional Nerve Therapy (30 Mins)', price: 'RM 55' }
        ]
      }
    ],
    benefits: [
      { title: 'Discounted Rates' },
      { title: 'Customized Experience' },
      { title: 'Total Restoration' }
    ],
    process: [
      { step: '01', title: 'Combine', desc: 'Select any primary treatment from our menu.' },
      { step: '02', title: 'Enhance', desc: 'Add one or more of these specialized enhancements to complete your ritual.' },
    ],
    aftercare: [
      'Enjoy your deeply customized spa experience',
      'Hydrate and rest well to maximize the holistic benefits',
    ],
  }
]
