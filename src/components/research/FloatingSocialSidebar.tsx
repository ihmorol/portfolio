import React from 'react';

export const FloatingSocialSidebar = () => {
  return (
    <div className="fixed right-8 bottom-12 hidden xl:flex flex-col items-center z-40">
      <div className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.2em] writing-vertical-rl transform rotate-180 flex gap-8">
        <span className="hover:text-text-primary cursor-pointer transition-colors">Scholar</span>
        <span className="hover:text-text-primary cursor-pointer transition-colors">ORCID</span>
        <span className="hover:text-text-primary cursor-pointer transition-colors">ResearchGate</span>
        <span className="hover:text-text-primary cursor-pointer transition-colors">GitHub</span>
      </div>
    </div>
  );
};
