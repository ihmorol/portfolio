'use client';

import { useEffect, useState } from 'react';

interface PageLeftSideBarProps {
  title: string;
}

export const PageLeftSideBar: React.FC<PageLeftSideBarProps> = ({ title }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-6 bottom-12 hidden xl:flex flex-col items-center gap-4 z-40">
      <div className="bg-background-secondary/80 backdrop-blur border border-border rounded-full p-1.5 w-10 h-64 flex flex-col justify-between items-center relative">
        <span 
          className="text-[10px] font-bold text-text-secondary uppercase tracking-widest text-vertical py-4" 
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          {title}
        </span>
        <div className="w-1.5 h-full bg-border/50 rounded-full relative overflow-hidden mb-2">
          <div 
            className="absolute top-0 left-0 w-full bg-foreground rounded-full transition-all duration-100 ease-out"
            style={{ height: `${scrollProgress * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};
