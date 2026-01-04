import Link from 'next/link';
import React from 'react';

interface SocialLink {
  title: string;
  url: string;
}

interface VerticalSocialLinksProps {
  items: SocialLink[];
}

export const VerticalSocialLinks: React.FC<VerticalSocialLinksProps> = ({ items }) => {
  return (
    <div className="fixed right-8 bottom-12 hidden xl:flex flex-col items-center z-40">
      <div 
        className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] transform rotate-180 flex gap-8" 
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      >
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className="hover:text-white cursor-pointer transition-colors"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
