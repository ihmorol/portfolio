import React from 'react';
import { researchData } from '@/data/research-data';
import { layoutData } from '@/data/layout-data';
import { LucideIcon, icons } from 'lucide-react';

export const ConnectSection = () => {
  const { title, description } = researchData.connect;
  const { socialLinks } = layoutData.footer;

  // Helper to get Lucide icon by string name
  const IconComponent = ({ name, className }: { name: string; className?: string }) => {
    const LucideIcon = icons[name as keyof typeof icons] as LucideIcon;
    return LucideIcon ? <LucideIcon className={className} /> : null;
  };

  return (
    <div className="md:col-span-12 bg-surface rounded-3xl p-6 md:px-10 md:py-8 border border-border flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="text-center md:text-left">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-xs text-gray-400 font-body max-w-sm">{description}</p>
      </div>
      <div className="flex items-center gap-4 md:gap-6">
        <a className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-surface-light flex items-center justify-center hover:bg-blue-500 transition-colors group cursor-pointer">
          <span className="material-symbols-outlined text-blue-500 group-hover:text-white text-xl">school</span>
        </a>
        {socialLinks.map((link, index) => (
          <a key={index} href={link.url} className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-surface-light flex items-center justify-center hover:bg-white text-gray-400 hover:text-black transition-colors group">
             {link.icon ? (
               <IconComponent name={link.icon} className="w-5 h-5 group-hover:scale-110 transition-transform" />
             ) : (
               <span className="material-symbols-outlined text-xl">link</span>
             )}
          </a>
        ))}
         <a className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-surface-light flex items-center justify-center hover:bg-blue-400 transition-colors group cursor-pointer">
          <span className="material-symbols-outlined text-blue-400 group-hover:text-white text-xl">alternate_email</span>
        </a>
      </div>
    </div>
  );
};
