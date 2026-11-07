import nodemailer from 'nodemailer';

export type MailInput = {
  subject: string;
  replyTo?: string;
  text: string;
};

export type MailResult = { ok: true } | { ok: false; error: string };

function getRecipient(): string | null {
  return process.env.CONTACT_EMAIL || process.env.SMTP_USER || null;
}

function isSmtpConfigured(): boolean {
  return Boolean(
    process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASSWORD
  );
}

/**
 * Sends a notification email to the site owner using whichever transport is
 * configured: Resend (preferred, works on serverless hosts) or SMTP via
 * nodemailer. Returns a descriptive error instead of throwing so API routes
 * can surface a useful message to the sender.
 *
 * Both contact forms treat "no transport configured" as a signal to fall back
 * to opening the visitor's own mail app with a pre-filled draft, so the site
 * works with zero credentials.
 */
export async function sendMail({
  subject,
  replyTo,
  text,
}: MailInput): Promise<MailResult> {
  const to = getRecipient();
  if (!to) {
    return {
      ok: false,
      error:
        'Recipient email is not configured. Set CONTACT_EMAIL in the environment.',
    };
  }

  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    try {
      const { Resend } = await import('resend');
      const resend = new Resend(resendKey);
      const from =
        process.env.CONTACT_FROM || 'Portfolio <onboarding@resend.dev>';
      const { error } = await resend.emails.send({
        from,
        to,
        subject,
        reply_to: replyTo,
        text,
      });
      if (error) {
        console.error('Resend error:', error);
        return { ok: false, error: 'Failed to send email. Please try again later.' };
      }
      return { ok: true };
    } catch (err) {
      console.error('Resend request failed:', err);
      return { ok: false, error: 'Failed to send email. Please try again later.' };
    }
  }

  if (isSmtpConfigured()) {
    const port = Number(process.env.SMTP_PORT) || 587;
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port,
        secure: port === 465,
        auth: {
          user: process.env.SMTP_USER as string,
          pass: process.env.SMTP_PASSWORD as string,
        },
      });
      await transporter.sendMail({
        from: process.env.SMTP_USER as string,
        to,
        subject,
        replyTo,
        text,
      });
      return { ok: true };
    } catch (err) {
      console.error('SMTP error:', err);
      return { ok: false, error: 'Failed to send email. Please try again later.' };
    }
  }

  return {
    ok: false,
    error:
      'Email is not configured yet. Set RESEND_API_KEY or the SMTP_* variables in the environment.',
  };
}
