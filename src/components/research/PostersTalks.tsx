import React from 'react';
import { researchData } from '@/data/research-data';

export const PostersTalks = () => {
  const { title, items } = researchData.talks;

  return (
    <div className="bg-surface rounded-3xl p-6 border border-border flex-1">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-text-primary text-sm">present_to_all</span>
        </div>
        <h3 className="text-lg font-bold text-text-primary">{title}</h3>
      </div>
      <div className="space-y-4">
        {items.map((talk, index) => (
          <div key={index} className="relative pl-4 border-l-2 border-border hover:border-pink-500 transition-colors">
            <h5 className="text-sm font-bold text-text-primary">{talk.title}</h5>
            <p className="text-xs text-text-secondary mb-1">{talk.event}</p>
            <a href={talk.link} className="text-[10px] text-pink-400 hover:text-pink-300 font-bold flex items-center gap-1 mt-1">
              {talk.action} <span className="material-symbols-outlined text-[10px]">{talk.icon}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
