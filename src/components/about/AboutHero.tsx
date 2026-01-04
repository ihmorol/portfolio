'use client';

import { aboutData } from '@/data/about-data';

export function AboutHero() {
  const { titlePrefix, titleHighlight, description } = aboutData.hero;

  return (
    <section className="pt-32 pb-16 text-center px-6">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
        {titlePrefix} <span className="font-light italic text-gray-400">{titleHighlight}</span>
      </h1>
      <p className="text-text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
        {description}
      </p>
    </section>
  );
}
