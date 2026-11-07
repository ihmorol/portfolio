import { NextResponse } from 'next/server';
import { sendMail } from '@/lib/mail';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email } = body ?? {};

    if (typeof email !== 'string' || !EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const subscriberName =
      typeof name === 'string' && name.trim() ? name.trim() : null;

    const result = await sendMail({
      subject: 'New newsletter subscriber',
      text: `New newsletter signup:\n\nEmail: ${email}${
        subscriberName ? `\nName: ${subscriberName}` : ''
      }`,
    });

    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 503 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
