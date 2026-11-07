import { contactData } from '@/data/contact-data';

/**
 * Click-to-chat WhatsApp link. The number and pre-filled texts live in
 * contact-data so every entry point stays consistent.
 */
export function whatsappLink(text?: string): string {
  const base = `https://wa.me/${contactData.whatsapp.number}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

/**
 * mailto: draft for the contact form. Used as the zero-credential fallback
 * when /api/contact has no mail transport configured — the visitor's own
 * mail app opens with the message ready to send.
 */
export function contactMailto(fromEmail: string, message: string): string {
  const to = contactData.email.emailAddress;
  const subject = `Portfolio message from ${fromEmail}`;
  const body = `${message}\n\n—\nSent from the portfolio contact form\nReply to: ${fromEmail}`;
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * mailto: draft for newsletter signups — same zero-credential fallback as the
 * contact form. The owner receives the address in their inbox and adds it to
 * the list manually.
 */
export function subscribeMailto(email: string, name?: string): string {
  const to = contactData.email.emailAddress;
  const subject = 'Newsletter signup';
  const body = `Please add me to the portfolio newsletter.\n\nEmail: ${email}${
    name ? `\nName: ${name}` : ''
  }`;
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
