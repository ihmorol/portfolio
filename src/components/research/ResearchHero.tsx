import React from 'react';
import { researchData } from '@/data/research-data';

export const ResearchHero = () => {
  const { title, highlightedTitle, highlightIcon, description } = researchData.hero;

  return (
    <div className="text-center mb-12 md:mb-16">
      <h1 className="text-4xl md:text-6xl font-bold text-white flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 leading-tight">
        {title}
        <span className="flex items-center gap-2">
          <span
            className="material-symbols-outlined text-amber-300 text-5xl md:text-6xl"
            style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}
          >
            {highlightIcon}
          </span>
          {highlightedTitle}
        </span>
      </h1>
      <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base font-body">
        {description}
      </p>
    </div>
  );
};
