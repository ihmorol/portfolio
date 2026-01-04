'use client';

import { aboutData } from '@/data/about-data';

export function PhilosophyCard() {
  const { title, icon, quote, description } = aboutData.philosophy;

  return (
    <div className="bg-[#1a1b1e] border border-white/5 rounded-3xl p-8 flex flex-col justify-between group hover:border-white/10 transition-colors relative overflow-hidden h-full">
      <div className="relative z-10">
        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 text-black shadow-lg">
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
        <blockquote className="text-lg font-medium italic text-gray-300 mb-4">
          &quot;{quote}&quot;
        </blockquote>
        <div className="text-sm text-gray-400 leading-relaxed">
          {description}
        </div>
      </div>
      <div className="absolute top-1/2 -right-12 w-40 h-40 bg-white/5 rounded-full blur-[40px] pointer-events-none"></div>
    </div>
  );
}
