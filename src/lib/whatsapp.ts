// WhatsApp routing utility for Ananaz MediSpa

export const WA_NUMBERS = {
  cheras:  '60163298780',
  bangiS9: '60137641998',
  bangiS7: '60163304373',
} as const

export type Branch = keyof typeof WA_NUMBERS

export const BRANCH_LABELS: Record<Branch, string> = {
  cheras:  'Bandar Tun Hussein Onn (HQ)',
  bangiS9: 'Bangi Section 9',
  bangiS7: 'Bangi Section 7',
}

/**
 * Build a pre-filled WhatsApp deep link.
 */
export function waLink(branch: Branch, message: string): string {
  const number = WA_NUMBERS[branch]
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

/** General inquiry CTA */
export const waGeneral = (subject = 'your services') =>
  waLink('cheras', `Hi, I found you via your website. I'd like to enquire about ${subject}.`)

/** Book/Enquire a specific service */
export const waBook = (service: string, branch: Branch = 'cheras') =>
  waLink(branch, `Hi, I found you via your website. I'd like to learn more about ${service}.`)

/** Order/Enquire about a product */
export const waProduct = (productName: string) =>
  waLink('cheras', `Hi, I'd like to learn more about ${productName}.`)

/** Academy enrollment */
export const waAcademy = (course = 'the Beauty Academy') =>
  waLink('cheras', `Hi, I found you via your website. I'd like to enquire about enrolling in ${course}.`)

/** Per-branch WhatsApp */
export const waBranch = (branch: Branch) =>
  waLink(branch, `Hi, I found you via your website. I'd like to make an appointment at your ${BRANCH_LABELS[branch]} branch.`)
