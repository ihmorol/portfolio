import React from 'react';
import { researchData } from '@/data/research-data';

export const ResearchExperience = () => {
  const { title, items } = researchData.experience;

  return (
    <div className="md:col-span-12 bg-surface rounded-3xl p-6 md:p-8 border border-border">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-white text-2xl">science</span>
        </div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      <div className="space-y-6">
        {items.map((exp, index) => (
          <div key={index} className="group border-b border-border pb-6 last:border-0 last:pb-0">
            <div className="flex flex-col md:flex-row justify-between md:items-start gap-2 mb-2">
              <div>
                <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{exp.role}</h4>
                <p className="text-sm text-gray-400">{exp.institution} • Advisor: {exp.advisor}</p>
              </div>
              <span className="text-xs font-bold bg-surface-light px-3 py-1 rounded-full text-gray-300 border border-border whitespace-nowrap">{exp.period}</span>
            </div>
            <p className="text-sm text-gray-400 mb-3 leading-relaxed font-body">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.tags.map(tag => (
                <span key={tag} className="text-[10px] uppercase tracking-wider text-blue-400 border border-blue-900/50 bg-blue-900/20 px-2 py-1 rounded">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
