'use client';

import { aboutData } from '@/data/about-data';

export function TechStack() {
  const { title, items } = aboutData.techStack;

  return (
    <div className="bg-[#24262b] border border-white/5 rounded-3xl p-6">
      <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-gray-400">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1.5 bg-[#050505] border border-white/10 rounded-lg text-[10px] uppercase font-bold text-white"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
