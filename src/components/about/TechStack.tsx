'use client';

import { aboutData } from '@/data/about-data';

export function TechStack() {
  const { title, items } = aboutData.techStack;

  return (
    <div className="bg-background-secondary border border-border/60 rounded-3xl p-6">
      <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-text-secondary">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1.5 bg-background border border-border rounded-lg text-[10px] uppercase font-bold text-text-primary"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
