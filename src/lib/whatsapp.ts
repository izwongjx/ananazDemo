// WhatsApp routing utility for Ananaz MediSpa

export const WA_NUMBERS = {
  btho:  '60143322893',
  bangi: '60389208872',
} as const

export type Branch = keyof typeof WA_NUMBERS

export const BRANCH_LABELS: Record<Branch, string> = {
  btho:  'Bandar Tun Hussein Onn (BTHO)',
  bangi: 'Bangi',
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
  waLink('btho', `Hi, I found you via your website. I'd like to enquire about ${subject}.`)

/** Book/Enquire a specific service */
export const waBook = (service: string, branch: Branch = 'btho') =>
  waLink(branch, `Hi, I found you via your website. I'd like to learn more about ${service}.`)

/** Order/Enquire about a product */
export const waProduct = (productName: string) =>
  waLink('btho', `Hi, I'd like to learn more about ${productName}.`)

/** Academy enrollment */
export const waAcademy = (course = 'the Beauty Academy') =>
  waLink('btho', `Hi, I found you via your website. I'd like to enquire about enrolling in ${course}.`)

/** Per-branch WhatsApp */
export const waBranch = (branch: Branch) =>
  waLink(branch, `Hi, I found you via your website. I'd like to make an appointment at your ${BRANCH_LABELS[branch]} branch.`)

/**
 * Full booking details WhatsApp link.
 */
export interface BookingDetails {
  name: string
  phone?: string
  service: string
  branch?: Branch
  date: string
  time: string
  altDate1?: string
  altTime1?: string
  altDate2?: string
  altTime2?: string
}

export function waFullBooking(details: BookingDetails): string {
  const branch = details.branch || 'btho'
  const message = `*ANANAZ MEDISPA BOOKING REQUEST*

Hello! I'd like to reserve a session for a treatment.

*Guest Details:*
- Name: ${details.name}
${details.phone ? `- Phone: ${details.phone}` : ''}

*Service:*
- ${details.service}

*Preferred Schedule:*
- Date: ${details.date}
- Time: ${details.time}
${details.altDate1 ? `\n*Alternative Date 1:*\n- ${details.altDate1} (${details.altTime1 || 'Anytime'})` : ''}${details.altDate2 ? `\n*Alternative Date 2:*\n- ${details.altDate2} (${details.altTime2 || 'Anytime'})` : ''}

Thank you! I look forward to your confirmation.`

  return waLink(branch, message)
}
