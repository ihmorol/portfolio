import React from 'react';
import { skillsData } from '@/data/skills-data';

export const AiMlSection = () => {
  const { title, description, items } = skillsData.aiMl;

  return (
    <div className="md:col-span-8 bg-surface rounded-3xl p-1 flex flex-col h-full border border-border group hover:border-border-strong transition-colors">
      <div className="p-8 flex flex-col h-full">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-2">{title}</h3>
            <p className="text-sm text-text-secondary font-body max-w-md">{description}</p>
          </div>
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="material-symbols-outlined text-text-primary text-2xl">smart_toy</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
          {items.map((item, index) => (
            <div key={index} className={`bg-surface-light rounded-xl p-4 border border-border/60 ${item.hoverBorder} transition-colors`}>
              <div className="flex items-center gap-2 mb-2">
                <span className={`material-symbols-outlined ${item.iconColor} text-lg`}>{item.icon}</span>
                <span className="text-sm font-bold text-text-primary">{item.name}</span>
              </div>
              <p className="text-[10px] text-text-secondary leading-snug">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
