'use client';

import { homeData } from '@/data/home-data';

export function SocialChannels() {
  const { title, description, channels } = homeData.social;
  
  // Helper to map colorIdx to concrete classes, as we can't interpolate full tailwind classes if they are not safelisted, but here we can return full strings.
  // Actually, keeping the logic simple: assuming the colorIdx maps to specific brand colors.
  const getColorClasses = (colorIdx: string) => {
      switch(colorIdx) {
          case 'pink': return 'text-[#EA4C89] hover:bg-[#EA4C89]';
          case 'green': return 'text-[#25D366] hover:bg-[#25D366]';
          case 'blue': return 'text-[#0A66C2] hover:bg-[#0A66C2]';
          case 'blue_dark': return 'text-[#1877F2] hover:bg-[#1877F2]';
          case 'blue_bright': return 'text-[#1769FF] hover:bg-[#1769FF]';
          case 'red': return 'text-[#E4405F] hover:bg-[#E4405F]';
          default: return 'text-white hover:bg-white';
      }
  };

  return (
    <section className="glass-dark rounded-3xl p-8 mb-16 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-left">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-sm text-gray-500 mt-2">{description}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
            {channels.map((channel) => (
                <a 
                    key={channel.name} 
                    className={`h-12 w-12 rounded-full bg-[#252525] border border-white/5 flex items-center justify-center transition-all duration-300 glow-hover hover:text-white ${getColorClasses(channel.colorIdx)}`} 
                    href={channel.url} 
                    title={channel.name}
                >
                    <span className="material-symbols-outlined text-2xl">{channel.icon}</span>
                </a>
            ))}
        </div>
    </section>
  );
}
