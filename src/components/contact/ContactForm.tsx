'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { toast } from 'react-hot-toast';
import { Loader2 } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
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

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to send message');

      toast.success('Message sent successfully!');
      reset();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="glass-dark p-8 border border-white/5">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider text-gray-400">Name</label>
            <input
              {...register('name')}
              className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-gray-400">Email</label>
            <input
              {...register('email')}
              className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-bold uppercase tracking-wider text-gray-400">Subject</label>
          <input
            {...register('subject')}
            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
            placeholder="Project Inquiry"
          />
          {errors.subject && <p className="text-red-500 text-xs">{errors.subject.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-gray-400">Message</label>
          <textarea
            {...register('message')}
            rows={6}
            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors resize-none"
            placeholder="Tell me about your project..."
          />
          {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
        </div>

        <Button 
            type="submit" 
            className="w-full bg-white text-black hover:bg-gray-200 h-12"
            disabled={isSubmitting}
        >
            {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </Card>
  );
}
