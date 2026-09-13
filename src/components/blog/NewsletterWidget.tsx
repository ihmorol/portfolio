'use client';

import { Mail } from 'lucide-react';
import { blogData } from '@/data/blog-data';

export function NewsletterWidget() {
  const { newsletter } = blogData;

  return (
    <div className="md:col-span-4 bg-background-secondary rounded-3xl p-6 border border-border flex flex-col h-full group hover:border-border-strong transition-colors relative overflow-hidden">
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
      
      <form className="space-y-3 mt-auto z-10" onSubmit={(e) => e.preventDefault()}>
        <div className="relative">
          <Mail className="absolute left-4 top-3 text-text-muted w-4 h-4" />
          <input 
            type="email" 
            placeholder={newsletter.placeholder}
            className="w-full bg-background-tertiary border border-border rounded-full pl-10 pr-4 py-3 text-xs text-text-primary placeholder:text-text-muted focus:border-border-strong focus:ring-0 transition-colors"
          />
        </div>
        <button 
            type="submit"
            className="w-full bg-foreground hover:bg-foreground/85 text-background text-[10px] font-bold py-3 rounded-full transition-all uppercase tracking-wider mt-2 flex justify-center items-center gap-2"
        >
          {newsletter.buttonText}
        </button>
      </form>
    </div>
  );
}
