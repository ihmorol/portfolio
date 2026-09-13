'use client';

import { aboutData } from '@/data/about-data';

export function JourneyWidget() {
  const { title, icon, items } = aboutData.journey;

  return (
    <div className="bg-background-secondary border border-border/60 rounded-3xl p-8 relative overflow-hidden h-full">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-text-primary">{title}</h3>
        <div className="w-10 h-10 bg-accent-yellow rounded-full flex items-center justify-center text-black shadow-[0_0_15px_rgba(255,217,61,0.3)]">
          <span className="material-symbols-outlined">{icon}</span>
        </div>
      </div>
      <div className="space-y-0 relative">
        <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-white/20 via-white/10 to-transparent"></div>
        
        {items.map((item, index) => (
          <div key={index} className={`relative pl-12 ${item.description ? 'pb-10' : ''} group`}>
            {/* Dot */}
            <div 
              className={`absolute left-[13px] top-1.5 w-3.5 h-3.5 rounded-full border-[3px] border-background-secondary z-10 
              ${item.active 
                ? `${item.color} shadow-[0_0_10px_#4ade80]` 
                : item.isEducation
                  ? 'bg-border-strong'
                  : `bg-foreground ${item.hoverBg} transition-colors`
              }`}
            ></div>
            
            <span className={`text-[10px] font-bold uppercase tracking-widest mb-1 block ${item.active ? item.textColor : 'text-text-secondary'}`}>
              {item.period}
            </span>
            
            <h4 className={`text-base font-bold text-text-primary transition-colors ${!item.active && !item.isEducation ? item.hoverColor : ''}`}>
              {item.role}
            </h4>
            
            <p className="text-xs text-text-secondary mt-1">{item.company}</p>
            
            {item.description && (
              <p className="text-xs text-text-muted mt-2 leading-relaxed">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
