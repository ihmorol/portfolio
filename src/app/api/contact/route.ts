import { NextResponse } from 'next/server';
import { sendMail } from '@/lib/mail';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE_LENGTH = 5000;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body ?? {};

    // Required: a valid email and a message (mirrors the client-side schema).
    // Name and subject are optional extras if a caller provides them.
    const isOptionalText = (value: unknown) =>
      typeof value === 'string' || value === undefined;

    const valid =
      typeof email === 'string' &&
      EMAIL_RE.test(email) &&
      typeof message === 'string' &&
      message.trim().length >= 10 &&
      isOptionalText(name) &&
      isOptionalText(subject);

    if (!valid) {
      return NextResponse.json(
        {
          error:
            'Please provide a valid email and a message of at least 10 characters.',
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
      subject: `Portfolio message${
        typeof subject === 'string' && subject.trim()
          ? `: ${subject.trim()}`
          : ''
      }`,
      replyTo: email,
      text: [
        `Email: ${email}`,
        typeof name === 'string' && name.trim() ? `Name: ${name.trim()}` : null,
        '',
        message.trim(),
      ]
        .filter((part) => part !== null)
        .join('\n'),
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
