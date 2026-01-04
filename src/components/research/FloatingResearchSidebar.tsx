import React from 'react';

export const FloatingResearchSidebar = () => {
  return (
    <div className="fixed left-6 bottom-12 hidden xl:flex flex-col items-center gap-4 z-40">
      <div className="bg-surface/80 backdrop-blur border border-border rounded-full p-1.5 w-10 h-64 flex flex-col justify-between items-center relative">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest writing-vertical-rl py-4">RESEARCH</span>
        <div className="w-1.5 h-full bg-gray-700/50 rounded-full relative overflow-hidden mb-2">
          <div className="absolute top-1/4 left-0 w-full h-1/4 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
