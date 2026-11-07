import { NextResponse } from 'next/server';
import { sendMail } from '@/lib/mail';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE_LENGTH = 5000;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body ?? {};

    // Mirror the client-side zod schema: name >= 2, subject >= 5, message >= 10
    const valid =
      typeof name === 'string' &&
      name.trim().length >= 2 &&
      typeof email === 'string' &&
      EMAIL_RE.test(email) &&
      typeof subject === 'string' &&
      subject.trim().length >= 5 &&
      typeof message === 'string' &&
      message.trim().length >= 10;

    if (!valid) {
      return NextResponse.json(
        {
          error:
            'Please fill in all fields: name, a valid email, a subject, and a message of at least 10 characters.',
        },
        { status: 400 }
      );
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: 'Message is too long (max 5000 characters).' },
        { status: 400 }
      );
    }

    const result = await sendMail({
      subject: `Portfolio contact: ${subject.trim()}`,
      replyTo: email,
      text: `Name: ${name.trim()}\nEmail: ${email}\n\n${message.trim()}`,
    });

    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 503 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
