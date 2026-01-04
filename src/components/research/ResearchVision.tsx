import React from 'react';
import { researchData } from '@/data/research-data';

export const ResearchVision = () => {
  const { title, description, currentFocus, longTermGoal, coreInterests } = researchData.vision;

  return (
    <div className="md:col-span-12 bg-white rounded-3xl p-6 md:p-10 flex flex-col md:flex-row gap-8 overflow-hidden">
      <div className="flex-1 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-4">
          <span className="material-symbols-outlined text-black text-3xl">
            psychology
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            {title}
          </h2>
        </div>
        <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed font-body">
          {description}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded-xl">
            <h4 className="font-bold text-black text-sm mb-1">{currentFocus.title}</h4>
            <p className="text-gray-500 text-xs">{currentFocus.text}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-xl">
            <h4 className="font-bold text-black text-sm mb-1">
              {longTermGoal.title}
            </h4>
            <p className="text-gray-500 text-xs">{longTermGoal.text}</p>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-gray-50 rounded-2xl p-6 flex flex-col gap-4 justify-center relative overflow-hidden">
        <div className="absolute right-0 top-0 w-32 h-32 bg-blue-100 rounded-bl-full opacity-50"></div>
        <div className="relative z-10">
          <h3 className="text-black font-bold text-lg mb-4">Core Interests</h3>
          <div className="flex flex-wrap gap-2">
            {coreInterests.map((interest) => (
              <span
                key={interest}
                className="px-3 py-1.5 bg-white text-black text-xs font-bold rounded-full shadow-sm border border-gray-100"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
