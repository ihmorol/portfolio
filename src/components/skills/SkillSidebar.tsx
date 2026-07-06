import React from 'react';

export const SkillSidebar = () => {
  return (
    <>
      <div className="fixed left-6 bottom-12 hidden xl:flex flex-col items-center gap-4 z-40">
        <div className="bg-surface/80 backdrop-blur border border-border rounded-full p-1.5 w-10 h-64 flex flex-col justify-between items-center relative">
          <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest py-4 [writing-mode:vertical-rl] [text-orientation:mixed]">SKILLS</span>
          <div className="w-1.5 h-full bg-border/50 rounded-full relative overflow-hidden mb-2">
            <div className="absolute top-1/4 left-0 w-full h-1/4 bg-foreground rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="fixed right-8 bottom-12 hidden xl:flex flex-col items-center z-40">
        <div className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.2em] transform rotate-180 [writing-mode:vertical-rl] [text-orientation:mixed] flex gap-8">
          <span className="hover:text-text-primary cursor-pointer transition-colors">Linkedin</span>
          <span className="hover:text-text-primary cursor-pointer transition-colors">Behance</span>
          <span className="hover:text-text-primary cursor-pointer transition-colors">Twitter</span>
          <span className="hover:text-text-primary cursor-pointer transition-colors">Dribbble</span>
        </div>
      </div>
    </>
  );
};
