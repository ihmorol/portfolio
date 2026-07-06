'use client';

import { Mail, Dribbble, Twitter, Linkedin, Github } from 'lucide-react';
import { aboutData } from '@/data/about-data';

const iconMap: Record<string, React.ComponentType<any>> = {
  'dribbble': Dribbble,
  'twitter': Twitter,
  'linkedin': Linkedin,
  'github': Github,
};

export function ConnectSection() {
  const { title, description, cta, email, socialTitle, socialDescription, socials } = aboutData.connect;

  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-background-secondary border border-border/60 rounded-3xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10">
          <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center text-background mb-4 shadow-[0_0_20px_rgba(255,255,255,0.1)] mx-auto group-hover:scale-110 transition-transform duration-300">
            <Mail size={32} />
          </div>
          <h3 className="text-xl font-bold mb-2 text-text-primary">{title}</h3>
          <p className="text-sm text-text-secondary mb-6 px-4">
            {description}
          </p>
          <a
            href={email}
            className="inline-block w-auto px-8 bg-foreground text-background py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-foreground/85 transition-colors"
          >
            {cta}
          </a>
        </div>
      </div>
      <div className="bg-background-secondary border border-border/60 rounded-3xl p-8 flex flex-col justify-center items-center text-center gap-6">
        <div className="text-center">
          <h3 className="text-lg font-bold text-text-primary">{socialTitle}</h3>
          <p className="text-xs text-text-muted mt-1">
            {socialDescription}
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {socials.map((social) => {
              const Icon = iconMap[social.icon] || Github;
              return (
                  <a
                    key={social.name}
                    href={social.url}
                    title={social.name}
                    className={`w-12 h-12 rounded-full ${social.color} flex items-center justify-center text-text-primary hover:scale-110 transition-transform shadow-lg ${social.shadow}`}
                  >
                    <Icon size={24} />
                  </a>
              );
          })}
        </div>
      </div>
    </div>
  );
}
