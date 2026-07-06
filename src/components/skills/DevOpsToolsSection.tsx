import React from 'react';
import { skillsData } from '@/data/skills-data';

export const DevOpsToolsSection = () => {
  const { title, ciCd, environment } = skillsData.devOps;

  return (
    <div className="md:col-span-6 bg-surface rounded-3xl p-8 border border-border flex flex-col h-full">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 bg-purple-500/10 rounded-full flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-purple-400 text-xl">construction</span>
        </div>
        <h3 className="text-xl font-bold text-text-primary">{title}</h3>
      </div>
      <div className="space-y-6">
        <div>
          <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-3">{ciCd.title}</h4>
          <div className="flex flex-wrap gap-2">
            {ciCd.items.map((item, index) => (
              <span key={index} className="flex items-center gap-1.5 px-3 py-1.5 bg-surface-light rounded-full text-xs text-text-secondary border border-border">
                <span className="material-symbols-outlined text-[14px]">{item.icon}</span> {item.name}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-3">{environment.title}</h4>
          <div className="grid grid-cols-2 gap-2">
            {environment.items.map((item, index) => (
              <div key={index} className="bg-surface-light/50 p-2 rounded-lg border border-border/60 flex items-center gap-2">
                <span className={`w-1.5 h-1.5 ${item.colorClass} rounded-full`}></span>
                <span className="text-xs text-text-secondary">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
