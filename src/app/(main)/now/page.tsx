import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Footer } from '@/components/layout/Footer';
import { Reveal } from '@/components/motion/Reveal';
import { PageLeftSideBar } from '@/components/shared/page-left-sidebar';
import { VerticalSocialLinks } from '@/components/shared/vertical-social-links';
import { layoutData } from '@/data/layout-data';
import { nowData } from '@/data/now-data';

export default function NowPage() {
  const { socialLinks } = layoutData.footer;
  const { header, updatedAt, status, sections, cta } = nowData;

  return (
    <>
      <main className="flex-grow flex flex-col items-center w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 xl:px-20 pt-20 md:pt-24 pb-8 md:pb-12 relative min-h-screen">
        <PageLeftSideBar title="NOW" />
        <VerticalSocialLinks items={socialLinks} />

        <div className="w-full pt-14 md:pt-20 pb-14 md:pb-20">
          {/* Editorial header: title block left, status right, rule underneath */}
          <Reveal>
            <header className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-end border-b border-border pb-10 md:pb-14">
              <div className="md:col-span-8">
                <p className="type-micro text-text-muted mb-4 uppercase tracking-[0.2em]">
                  What I&apos;m doing &middot; Updated {updatedAt}
                </p>
                <h1 className="type-display-1 text-text-primary mb-5">
                  What I&apos;m <span className="text-text-muted">{header.titleHighlight}</span> Doing
                </h1>
                <p className="type-body-lg text-text-secondary max-w-2xl">
                  {header.description}
                </p>
              </div>
              <div className="md:col-span-4 flex flex-wrap gap-2.5 md:justify-end md:pb-1.5">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border type-caption text-text-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
                  {status.availability}
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border type-caption text-text-secondary">
                  <span className="material-symbols-outlined text-sm">place</span>
                  {status.location}
                </span>
              </div>
            </header>
          </Reveal>

          {/* Sections as editorial rows: label column left, content right, hairline dividers */}
          <div>
            {sections.map((section, index) => (
              <Reveal key={section.title} delay={0.05 * (index + 1)}>
                <section
                  className={`grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-10 py-8 md:py-12 border-b border-border ${
                    index === sections.length - 1 ? 'border-b-0' : ''
                  }`}
                >
                  <div className="md:col-span-4 flex items-center gap-3">
                    <span
                      className={`material-symbols-outlined text-xl ${section.colorClass}`}
                      aria-hidden="true"
                    >
                      {section.icon}
                    </span>
                    <h2 className="type-h3 text-text-primary">{section.title}</h2>
                    <span
                      className="type-micro text-text-muted ml-auto hidden md:block"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="md:col-span-8 space-y-3.5 md:pt-1">
                    {section.items.map((item) => (
                      <p key={item} className="type-body text-text-secondary leading-relaxed">
                        {item}
                      </p>
                    ))}
                  </div>
                </section>
              </Reveal>
            ))}
          </div>

          {/* Closing line */}
          <Reveal delay={0.24}>
            <div className="border-t border-border pt-8 md:pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div>
                <p className="type-h3 text-text-primary mb-1">{cta.title}</p>
                <p className="type-caption text-text-secondary">{cta.description}</p>
              </div>
              <Link
                href="/contact"
                className="focus-ring shrink-0 h-11 px-6 rounded-full bg-foreground text-background hover:bg-foreground/85 transition-colors type-micro inline-flex items-center gap-2"
              >
                {cta.buttonText} <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
