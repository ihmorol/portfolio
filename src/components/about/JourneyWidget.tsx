'use client';

import { aboutData } from '@/data/about-data';

export function JourneyWidget() {
  const { title, icon, items } = aboutData.journey;

  return (
    <div className="bg-[#1a1b1e] border border-white/5 rounded-3xl p-8 relative overflow-hidden h-full">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <div className="w-10 h-10 bg-[#FFD93D] rounded-full flex items-center justify-center text-black shadow-[0_0_15px_rgba(255,217,61,0.3)]">
          <span className="material-symbols-outlined">{icon}</span>
        </div>
      </div>
      <div className="space-y-0 relative">
        <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-white/20 via-white/10 to-transparent"></div>
        
        {items.map((item, index) => (
          <div key={index} className={`relative pl-12 ${item.description ? 'pb-10' : ''} group`}>
            {/* Dot */}
            <div 
              className={`absolute left-[13px] top-1.5 w-3.5 h-3.5 rounded-full border-[3px] border-[#1a1b1e] z-10 
              ${item.active 
                ? `${item.color} shadow-[0_0_10px_#6BCB77]` 
                : item.isEducation
                  ? 'bg-gray-600'
                  : `bg-white ${item.hoverBg} transition-colors`
              }`}
            ></div>
            
            <span className={`text-[10px] font-bold uppercase tracking-widest mb-1 block ${item.active ? item.textColor : 'text-gray-400'}`}>
              {item.period}
            </span>
            
            <h4 className={`text-base font-bold text-white transition-colors ${!item.active && !item.isEducation ? item.hoverColor : ''}`}>
              {item.role}
            </h4>
            
            <p className="text-xs text-gray-400 mt-1">{item.company}</p>
            
            {item.description && (
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
