'use client';

import { aboutData } from '@/data/about-data';

export function InterestsGrid() {
  const { title, icon, items } = aboutData.interests;

  return (
    <div className="bg-[#1a1b1e] border border-white/5 rounded-3xl p-8 relative overflow-hidden">
      <div className="flex items-center justify-between mb-6 relative z-10">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <span className="material-symbols-outlined text-gray-400">{icon}</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
        {items.map((item) => (
             <div key={item.name} className="bg-white/5 p-4 rounded-2xl text-center hover:bg-white/10 transition-colors">
              <span className={`material-symbols-outlined text-2xl mb-2 ${item.colorClass}`}>{item.icon}</span>
              <div className="text-xs font-bold uppercase tracking-wider text-white">{item.name}</div>
            </div>
        ))}
      </div>
      <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-purple-500/20 blur-[80px] rounded-full pointer-events-none"></div>
    </div>
  );
}
