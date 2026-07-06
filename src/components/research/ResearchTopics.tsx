import React from 'react';
import { researchData } from '@/data/research-data';

export const ResearchTopics = () => {
  const { topics } = researchData;

  return (
    <div className="bg-surface rounded-3xl p-6 border border-border">
      <h3 className="text-lg font-bold text-text-primary mb-4">Research Topics</h3>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic) => (
          <span key={topic} className="px-3 py-1.5 bg-surface-light rounded-lg text-[10px] font-bold text-text-secondary border border-border hover:border-border-strong transition-colors cursor-default">
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
};
