import React from 'react';
import { skillsData } from '@/data/skills-data';

export const ProgrammingLanguages = () => {
  const { title, description, languages, projects } = skillsData.programmingLanguages;

  return (
    <div className="md:col-span-12 bg-white rounded-3xl p-6 md:p-10 flex flex-col md:flex-row gap-8 overflow-hidden text-black">
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">{title}</h2>
        <p className="text-gray-600 text-sm md:text-base mb-8 max-w-lg leading-relaxed font-body">
          {description}
        </p>
        <div className="space-y-6">
          {languages.map((lang, index) => (
            <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-bold">{lang.name}</h3>
                <span className="text-xs font-bold bg-black text-white px-2 py-1 rounded-full">{lang.years}</span>
              </div>
              <p className="text-xs text-gray-500 font-body mb-2">{lang.usage}</p>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className={`${lang.colorClass} h-1.5 rounded-full`} style={{ width: `${lang.percentage}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-1/3 bg-gray-50 rounded-2xl p-6 flex flex-col justify-center gap-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <span className="material-symbols-outlined text-9xl text-black select-none">code</span>
        </div>
        <h4 className="text-sm font-bold uppercase tracking-wider mb-2 z-10">Related Projects</h4>
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 z-10">
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-8 h-8 rounded-full ${project.iconBg} flex items-center justify-center ${project.iconColor} font-bold text-xs`}>{project.icon}</div>
              <span className="text-sm font-bold text-gray-800">{project.title}</span>
            </div>
            <p className="text-[10px] text-gray-500 font-body">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
