import React from 'react';
import { skillsData } from '@/data/skills-data';

export const WebMobileSection = () => {
  const { title, frontend, backend, mobile } = skillsData.webMobile;

  return (
    <div className="md:col-span-6 bg-surface rounded-3xl p-8 border border-border flex flex-col h-full">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-blue-400 text-xl">devices</span>
        </div>
        <h3 className="text-xl font-bold text-text-primary">{title}</h3>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-6">
        <div>
          <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-3">{frontend.title}</h4>
          <ul className="space-y-2">
            {frontend.items.map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-text-secondary">
                <span className={`w-1.5 h-1.5 ${item.colorClass} rounded-full`}></span> {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-3">{backend.title}</h4>
          <ul className="space-y-2">
            {backend.items.map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-text-secondary">
                <span className={`w-1.5 h-1.5 ${item.colorClass} rounded-full`}></span> {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2 mt-2 pt-4 border-t border-border">
          <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-3">{mobile.title}</h4>
          <div className="flex gap-3">
            {mobile.items.map((item, index) => (
              <span key={index} className="px-3 py-1.5 bg-surface-light rounded-lg text-xs text-text-primary border border-border">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
