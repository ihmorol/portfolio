import React from 'react';
import { researchData } from '@/data/research-data';

export const ActiveProjects = () => {
  const { title, items } = researchData.activeProjects;

  return (
    <div className="md:col-span-12 bg-surface rounded-3xl p-6 md:p-8 border border-border">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-text-primary text-xl">folder_open</span>
        </div>
        <h3 className="text-2xl font-bold text-text-primary">{title}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((project, index) => (
          <div key={index} className="bg-surface-light/30 rounded-2xl p-5 border border-border hover:border-border-strong transition-all group">
            <div className={`h-32 bg-gradient-to-br ${project.gradient} rounded-xl mb-4 relative overflow-hidden`}>
              <div className="absolute inset-0 opacity-30 flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-text-primary">{project.icon}</span>
              </div>
            </div>
            <h4 className={`text-lg font-bold text-text-primary mb-2 ${project.hoverColor} transition-colors`}>{project.title}</h4>
            <p className="text-xs text-text-secondary mb-4 font-body leading-relaxed">
              {project.description}
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-[10px] font-bold text-text-muted bg-surface-light px-2 py-1 rounded">{project.year}</span>
              <a href="/projects" className={`w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center ${project.buttonHover} transition-colors`}>
                <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
