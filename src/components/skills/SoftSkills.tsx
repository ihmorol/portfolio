import React from 'react';
import { skillsData } from '@/data/skills-data';

export const SoftSkills = () => {
  const { title, skills, quote } = skillsData.softSkills;

  return (
    <div className="md:col-span-5 bg-gradient-to-br from-surface to-surface-light rounded-3xl p-6 md:px-8 md:py-8 border border-border flex flex-col justify-between">
      <h3 className="text-xl font-bold text-text-primary mb-6">{title}</h3>
      <div className="flex flex-wrap gap-3 content-start h-full">
        {skills.map((skill) => (
          <span key={skill} className="px-4 py-2 bg-foreground/10 rounded-full text-xs text-text-primary border border-border hover:border-border-strong transition-colors cursor-default">
            {skill}
          </span>
        ))}
      </div>
      <div className="mt-8 pt-6 border-t border-border">
        <p className="text-[10px] text-text-secondary font-body leading-relaxed">
          {quote}
        </p>
      </div>
    </div>
  );
};
