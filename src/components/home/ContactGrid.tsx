'use client';

import Link from 'next/link';
import { homeData } from '@/data/home-data';
import { NewsletterForm } from '@/components/shared/NewsletterForm';

/**
 * One skeleton for all three cards: a fixed-height illustration zone, a
 * centered title and description, then a bottom-pinned action area. Keeping
 * the header and title rows at fixed heights is what lines the three cards
 * up; the action area (button or form) absorbs the remaining height.
 */
export function ContactGrid() {
  const { blocks } = homeData.contact;
  const emailBlock = blocks.find(b => b.type === 'email');
  const messageBlock = blocks.find(b => b.type === 'message');
  const newsletterBlock = blocks.find(b => b.type === 'newsletter');

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16 items-stretch">
        {/* Email Block */}
        <div className="glass-dark rounded-3xl p-8 flex flex-col h-full min-h-[360px] border border-border/60 relative overflow-hidden">
            <div className="flex justify-center items-center h-24 mb-6 relative z-10">
                <div className="relative w-32 h-24">
                    <div className="absolute bottom-0 left-0 w-full h-20 bg-green-500 rounded-lg shadow-lg z-10 flex items-center justify-center overflow-hidden">
                        <div className="w-0 h-0 border-l-[64px] border-l-transparent border-r-[64px] border-r-transparent border-t-[40px] border-t-green-600 absolute top-0"></div>
                    </div>
                    <div className="absolute -top-4 left-2 w-[90%] h-20 bg-white rounded-lg shadow-sm z-0 transform rotate-[-2deg]"></div>
                </div>
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-2 text-center relative z-10">{emailBlock?.title}</h3>
            <p className="text-xs text-text-secondary mb-6 px-4 text-center relative z-10">{emailBlock?.description}</p>
            <div className="mt-auto relative z-10">
                <a href={`mailto:${emailBlock?.emailAddress}`} className="block bg-foreground text-background w-full py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-foreground/85 transition-colors text-center">
                    {emailBlock?.cta}
                </a>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-secondary/80 to-transparent pointer-events-none"></div>
        </div>

        {/* Message Block */}
        <div className="glass-dark rounded-3xl p-8 flex flex-col h-full min-h-[360px] border border-border/60 relative overflow-hidden">
            <div className="flex justify-center items-center h-24 mb-6 relative z-10">
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
            <h3 className="text-2xl font-bold text-text-primary mb-2 text-center relative z-10">{messageBlock?.title}</h3>
            <p className="text-xs text-text-secondary mb-6 px-4 text-center relative z-10">{messageBlock?.description}</p>
            <div className="mt-auto relative z-10">
                <Link href="/contact#message" className="block bg-foreground text-background w-full py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-foreground/85 transition-colors text-center">
                    {messageBlock?.cta}
                </Link>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-secondary/80 to-transparent pointer-events-none"></div>
        </div>

        {/* Newsletter Block */}
        <div className="glass-dark rounded-3xl p-8 flex flex-col h-full min-h-[360px] border border-border/60 relative">
            <div className="flex justify-center items-center h-24 mb-6 relative z-10">
                <div className="relative w-32 h-24">
                    <div className="absolute bottom-0 left-0 w-full h-20 bg-accent-red rounded-lg shadow-lg z-10 flex items-center justify-center">
                        <span className="text-white font-bold text-3xl lowercase">a</span>
                    </div>
                    <div className="absolute -top-4 left-2 w-[90%] h-20 bg-white rounded-lg shadow-sm z-0 transform rotate-[2deg]"></div>
                </div>
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-2 text-center relative z-10">{newsletterBlock?.title}</h3>
            <p className="text-xs text-text-secondary mb-6 px-4 text-center relative z-10">{newsletterBlock?.description}</p>
            <div className="mt-auto relative z-10">
                <NewsletterForm
                  variant="stacked"
                  showName
                  buttonText={newsletterBlock?.cta || 'Sign Up'}
                  namePlaceholder={newsletterBlock?.placeholders?.name}
                  emailPlaceholder={newsletterBlock?.placeholders?.email}
                />
            </div>
        </div>
    </section>
  );
}
