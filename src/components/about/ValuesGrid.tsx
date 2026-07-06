'use client';

import { aboutData } from '@/data/about-data';

export function ValuesGrid() {
  const { values } = aboutData;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {values.map((value) => (
          <div key={value.title} className="bg-background-secondary border border-border/60 rounded-3xl p-6 hover:border-border-strong transition-all group h-full">
            <div className={`w-10 h-10 ${value.colorClass} rounded-xl flex items-center justify-center mb-4 text-black group-hover:scale-110 transition-transform`}>
              <span className="material-symbols-outlined">{value.icon}</span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-text-primary">{value.title}</h3>
            <p className="text-text-secondary text-xs leading-relaxed">
              {value.description}
            </p>
          </div>
      ))}
    </div>
  );
}
