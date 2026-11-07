'use client';

import { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { subscribeMailto } from '@/lib/contact-links';

type Variant = 'footer' | 'pill' | 'stacked';

type NewsletterFormProps = {
  variant: Variant;
  buttonText: string;
  showName?: boolean;
  namePlaceholder?: string;
  emailPlaceholder?: string;
};

const inputClass: Record<Variant, string> = {
  footer:
    'w-full bg-foreground/5 border border-border rounded-full px-5 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-border-strong transition-colors',
  pill: 'w-full bg-transparent border border-border rounded-full px-6 py-4 text-xs text-text-primary placeholder:text-text-muted focus:border-border-strong focus:ring-0 transition-colors',
  stacked:
    'w-full min-h-[44px] bg-background-tertiary border border-border rounded-xl px-4 py-3 text-xs text-text-primary focus:outline-none focus:border-border-strong placeholder:text-text-muted focus:ring-0',
};

const buttonClass: Record<Variant, string> = {
  footer:
    'focus-ring absolute right-1 top-1 w-10 h-10 bg-foreground rounded-full flex items-center justify-center text-background hover:bg-foreground/85 transition-colors',
  pill: 'focus-ring w-full bg-foreground hover:bg-foreground/85 text-background type-micro py-4 rounded-full transition-all mt-2 flex items-center justify-center gap-2',
  stacked:
    'focus-ring w-full bg-foreground text-background py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-foreground/85 transition-colors mt-2 flex items-center justify-center gap-2',
};

/**
 * Shared newsletter signup form. Subscribing posts to /api/subscribe, which
 * emails the site owner the new subscriber's address.
 */
export function NewsletterForm({
  variant,
  buttonText,
  showName = false,
  namePlaceholder = 'Your Name',
  emailPlaceholder = 'Email Address',
}: NewsletterFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Zero-credential path: when /api/subscribe has no mail transport
  // configured, open the visitor's mail app with a pre-filled signup draft
  // addressed to the site owner.
  const openMailDraft = () => {
    toast('Opening your mail app to finish subscribing.', { icon: '✉️' });
    window.location.href = subscribeMailto(
      email,
      showName && name ? name : undefined
    );
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name: showName ? name : undefined }),
      });

      if (response.ok) {
        toast.success('Thanks for subscribing!');
        setName('');
        setEmail('');
        return;
      }

      openMailDraft();
    } catch {
      openMailDraft();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className={variant === 'footer' ? 'relative' : undefined}>
      {showName && (
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder={namePlaceholder}
          aria-label={namePlaceholder}
          autoComplete="name"
          className={`${inputClass[variant]} ${variant === 'pill' || variant === 'stacked' ? 'mb-4' : ''}`}
        />
      )}
      <input
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder={emailPlaceholder}
        aria-label={emailPlaceholder}
        autoComplete="email"
        className={`${inputClass[variant]} ${variant === 'pill' ? 'mb-4' : ''} ${
          variant === 'footer' ? 'pr-14' : ''
        }`}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        aria-label={variant === 'footer' ? 'Subscribe' : undefined}
        className={buttonClass[variant]}
      >
        {isSubmitting ? (
          <Loader2 size={16} className="animate-spin" aria-hidden="true" />
        ) : variant === 'footer' ? (
          <ArrowRight size={18} aria-hidden="true" />
        ) : (
          buttonText
        )}
      </button>
    </form>
  );
}
