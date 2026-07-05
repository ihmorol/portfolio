'use client';

import Image from 'next/image';
import { Download } from 'lucide-react';
import { aboutData } from '@/data/about-data';

export function IntroCard() {
  const { badge, name, title, description, highlights, location, cvButton, status, profileImage } = aboutData.intro;

  return (
    <div className="bg-white text-black rounded-3xl p-8 md:p-12 relative overflow-hidden group">
      <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="px-3 py-1 bg-black/5 rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-800">
              {badge}
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{name}</h2>
          <p className="text-xl font-medium text-gray-500 mb-6">
            {title}
          </p>
          <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base mb-8">
            {description.map((para, index) => (
                <p key={index}>{para}</p>
            ))}
          </div>
          <div className="border-t border-gray-200 pt-6">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-4">
              {highlights.title}
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-medium text-gray-700">
              {highlights.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-black rounded-full"></span>{item}
                  </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative">
            <div className="w-full h-full relative">
               {/* 
                  Using placeholder logic if image fails, but ideally using next/image with the URL from data.
               */}
               {profileImage ? (
                   <div 
                        className="w-full h-full bg-gray-200 bg-cover bg-center" 
                        style={{ backgroundImage: `url('${profileImage}')` }}
                   ></div>
               ) : (
                   <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                      <span className="material-symbols-outlined text-6xl">person</span>
                   </div>
               )}
            </div>
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-black">
              {location}
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-black text-white px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              <span>{cvButton}</span>
              <Download size={14} />
            </a>
            <div className="flex items-center justify-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wide">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              {status}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
        <span className="material-symbols-outlined text-[12rem]">face</span>
      </div>
    </div>
  );
}
