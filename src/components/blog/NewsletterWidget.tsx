'use client';

import { Mail } from 'lucide-react';
import { blogData } from '@/data/blog-data';
import { NewsletterForm } from '@/components/shared/NewsletterForm';

export function NewsletterWidget() {
  const { newsletter } = blogData;

  return (
    <div className="rounded-[24px] border border-border bg-card p-6 shadow-card flex flex-col h-full group hover:border-border-strong hover:shadow-card-hover transition-all duration-300 relative overflow-hidden">
      <div className="absolute -right-6 -top-6 w-32 h-32 bg-accent-red/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="flex items-start gap-4 mb-6 z-10">
        <div className="w-12 h-12 bg-accent-red rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-accent-red/20">
          <Mail className="text-text-primary w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-text-primary leading-tight">{newsletter.title.replace(' Newsletter', '')}<br/>Newsletter</h3>
        </div>
      </div>
      
      <p className="text-[10px] text-text-secondary mb-6 leading-relaxed font-[family-name:var(--font-spline)] z-10">
        {newsletter.description}
      </p>
      
      <div className="mt-auto z-10">
        <NewsletterForm
          variant="pill"
          buttonText={newsletter.buttonText}
          emailPlaceholder={newsletter.placeholder}
        />
      </div>
    </div>
  );
}
