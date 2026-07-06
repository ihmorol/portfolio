'use client';

import { homeData } from '@/data/home-data';

export function ContactGrid() {
  const { blocks } = homeData.contact;
  const emailBlock = blocks.find(b => b.type === 'email');
  const messageBlock = blocks.find(b => b.type === 'message');
  const newsletterBlock = blocks.find(b => b.type === 'newsletter');

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
        {/* Email Block */}
        <div className="glass-dark rounded-3xl p-8 flex flex-col justify-between min-h-[360px] border border-border/60 relative overflow-hidden">
            <div className="flex justify-center mb-6 relative z-10">
                <div className="relative w-32 h-24">
                    <div className="absolute bottom-0 left-0 w-full h-20 bg-green-500 rounded-lg shadow-lg z-10 flex items-center justify-center overflow-hidden">
                        <div className="w-0 h-0 border-l-[64px] border-l-transparent border-r-[64px] border-r-transparent border-t-[40px] border-t-green-600 absolute top-0"></div>
                    </div>
                    <div className="absolute -top-4 left-2 w-[90%] h-20 bg-white rounded-lg shadow-sm z-0 transform rotate-[-2deg]"></div>
                </div>
            </div>
            <div className="mt-auto relative z-10 text-center">
                <h3 className="text-2xl font-bold text-text-primary mb-2">{emailBlock?.title}</h3>
                <p className="text-xs text-text-secondary mb-6 px-4">{emailBlock?.description}</p>
                <button className="bg-foreground text-background w-full py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-foreground/85 transition-colors">
                    {emailBlock?.cta}
                </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-secondary/80 to-transparent pointer-events-none"></div>
        </div>

        {/* Message Block */}
        <div className="glass-dark rounded-3xl p-8 flex flex-col justify-between min-h-[360px] border border-border/60 relative overflow-hidden">
            <div className="flex justify-center mb-6 relative z-10 pt-4">
                <div className="relative w-32 h-24">
                    <div className="absolute top-0 left-0 w-20 h-20 bg-blue-600 rounded-full rounded-bl-none shadow-lg z-10 flex items-center justify-center">
                        <div className="flex gap-1.5">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-0 w-16 h-16 bg-blue-300 rounded-full rounded-br-none shadow-sm z-0 transform translate-x-2"></div>
                </div>
            </div>
            <div className="mt-auto relative z-10 text-center">
                <h3 className="text-2xl font-bold text-text-primary mb-2">{messageBlock?.title}</h3>
                <p className="text-xs text-text-secondary mb-6 px-4">{messageBlock?.description}</p>
                <button className="bg-foreground text-background w-full py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-foreground/85 transition-colors">
                    {messageBlock?.cta}
                </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-secondary/80 to-transparent pointer-events-none"></div>
        </div>

        {/* Newsletter Block */}
        <div className="glass-dark rounded-3xl p-8 flex flex-col border border-border/60">
            <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#FF6B7A] flex items-center justify-center shrink-0">
                    <span className="text-text-primary font-bold text-xl lowercase">a</span>
                </div>
                <div>
                     {/* Handling newline in title */}
                    <h3 className="text-xl font-bold text-text-primary leading-tight">
                        {newsletterBlock?.title.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}
                    </h3>
                </div>
            </div>
            <p className="text-xs text-text-secondary mb-6 leading-relaxed">{newsletterBlock?.description}</p>
            <div className="flex flex-col gap-3 mt-auto">
                <input className="w-full min-h-[44px] bg-background-tertiary border border-border rounded-xl px-4 py-3 text-xs text-text-primary focus:outline-none focus:border-border-strong placeholder:text-text-muted focus:ring-0" placeholder={newsletterBlock?.placeholders?.name} aria-label={newsletterBlock?.placeholders?.name} autoComplete="name" type="text" />
                <input className="w-full min-h-[44px] bg-background-tertiary border border-border rounded-xl px-4 py-3 text-xs text-text-primary focus:outline-none focus:border-border-strong placeholder:text-text-muted focus:ring-0" placeholder={newsletterBlock?.placeholders?.email} aria-label={newsletterBlock?.placeholders?.email} autoComplete="email" type="email" />
                <button className="w-full bg-foreground text-background py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-foreground/85 transition-colors mt-2">
                    {newsletterBlock?.cta}
                </button>
            </div>
        </div>
    </section>
  );
}
