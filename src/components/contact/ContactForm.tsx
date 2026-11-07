'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { toast } from 'react-hot-toast';
import { Loader2 } from 'lucide-react';
import { contactMailto } from '@/lib/contact-links';

const contactSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  // Zero-credential path: hand the message to the visitor's own mail app,
  // pre-filled and addressed to me. Used when the API has no mail transport
  // configured (or is unreachable).
  const openMailDraft = (data: ContactFormData) => {
    toast('Opening your mail app with your message ready to send.', { icon: '✉️' });
    window.location.href = contactMailto(data.email, data.message);
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Message sent successfully!');
        reset();
        return;
      }

      openMailDraft(data);
    } catch {
      openMailDraft(data);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="glass-dark p-8 border border-border/60">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-text-secondary">Your Email</label>
          <input
            {...register('email')}
            type="email"
            className="w-full bg-foreground/5 border border-border rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-border-strong transition-colors"
            placeholder="you@example.com"
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-text-secondary">Message</label>
          <textarea
            {...register('message')}
            rows={6}
            className="w-full bg-foreground/5 border border-border rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-border-strong transition-colors resize-none"
            placeholder="Tell me about your project, role, or idea..."
          />
          {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
        </div>

        <Button
            type="submit"
            className="w-full bg-foreground text-background hover:bg-foreground/85 h-12"
            disabled={isSubmitting}
        >
            {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            {isSubmitting ? 'Sending…' : 'Send Message'}
        </Button>
      </form>
    </Card>
  );
}
