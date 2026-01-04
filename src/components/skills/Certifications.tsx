import React from 'react';
import { skillsData } from '@/data/skills-data';

export const Certifications = () => {
  const certifications = skillsData.certifications;

  return (
    <div className="md:col-span-7 bg-surface rounded-3xl p-6 md:px-8 md:py-8 border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">Certifications</h3>
        <a className="text-xs text-gray-400 hover:text-white transition-colors cursor-pointer">View Credentials</a>
      </div>
      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <div key={index} className="group flex items-start gap-4 p-3 rounded-2xl hover:bg-surface-light transition-colors cursor-pointer">
            <div className={`w-10 h-10 ${cert.codeBg} rounded-lg flex items-center justify-center shrink-0 ${cert.codeColor} font-bold`}>{cert.code}</div>
            <div>
              <h4 className={`text-sm font-bold text-white ${cert.hoverColor} transition-colors`}>{cert.title}</h4>
              <p className="text-[11px] text-gray-400">{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
