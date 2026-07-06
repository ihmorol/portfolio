import React from 'react';
import { skillsData } from '@/data/skills-data';

export const CurrentlyLearning = () => {
  const { title, items } = skillsData.currentlyLearning;

  return (
    <div className="md:col-span-4 bg-surface rounded-3xl p-1 flex flex-col h-full border border-border group hover:border-border-strong transition-colors">
      <div className="flex-grow p-6 flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent"></div>
        <div className="w-full relative z-10">
          <h3 className="text-lg font-bold text-text-primary mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-amber-400 animate-pulse">school</span>
            {title}
          </h3>
          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={index} className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-border/60">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-text-primary">{item.name}</span>
                  <span className="text-[10px] text-text-secondary">{item.topic}</span>
                </div>
                <div className="w-full bg-background-tertiary rounded-full h-1">
                  <div className={`${item.colorClass} h-1 rounded-full`} style={{ width: `${item.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
