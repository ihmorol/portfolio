'use client';

import { aboutData } from '@/data/about-data';

export function PhilosophyCard() {
  const { title, icon, quote, description } = aboutData.philosophy;

  return (
    <div className="bg-background-secondary border border-border/60 rounded-3xl p-8 flex flex-col justify-between group hover:border-border transition-colors relative overflow-hidden h-full">
      <div className="relative z-10">
        <div className="w-12 h-12 bg-foreground rounded-2xl flex items-center justify-center mb-6 text-background shadow-lg">
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <h3 className="text-xl font-bold mb-4 text-text-primary">{title}</h3>
        <blockquote className="text-lg font-medium italic text-text-secondary mb-4">
          &quot;{quote}&quot;
        </blockquote>
        <div className="text-sm text-text-secondary leading-relaxed">
          {description}
        </div>
      </div>
      <div className="absolute top-1/2 -right-12 w-40 h-40 bg-foreground/5 rounded-full blur-[40px] pointer-events-none"></div>
    </div>
  );
}
