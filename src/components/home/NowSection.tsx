'use client';

import { homeData } from '@/data/home-data';

/**
 * "Now" section: an editorial snapshot of current focus (see nownownow.com).
 * Rendered as a single surface with a status header and a divided focus ledger,
 * deliberately not a grid of identical cards.
 */

type AccentKey = 'blue' | 'teal' | 'purple' | 'green';

const accentIcon: Record<AccentKey, string> = {
  blue: 'text-accent-blue',
  teal: 'text-accent-teal',
  purple: 'text-accent-purple',
  green: 'text-accent-green',
};

const accentDot: Record<AccentKey, string> = {
  blue: 'bg-accent-blue',
  teal: 'bg-accent-teal',
  purple: 'bg-accent-purple',
  green: 'bg-accent-green',
};

export function NowSection() {
  const { title, liveLabel, updated, intro, note, noteUrl, focus } = homeData.now;

  return (
    <section
      aria-labelledby="now-heading"
      className="glass-dark relative mb-16 overflow-hidden rounded-3xl border border-border/60 p-7 md:p-10"
    >
      {/* Single ambient accent, consistent with the site's blob language */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-sky-500/10 blur-[80px]"
      />

      <div className="relative z-10">
        {/* Header: the heading leads; status and date sit beside it, not above */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h2 id="now-heading" className="text-3xl font-bold text-text-primary md:text-4xl">
                {title}
              </h2>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-teal/40 bg-accent-teal/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-teal">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-teal opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-teal" />
                </span>
                {liveLabel}
              </span>
            </div>
            <p className="mt-3 max-w-xl leading-relaxed text-text-secondary">{intro}</p>
          </div>

          <div className="flex items-center gap-2 text-text-muted md:shrink-0">
            <span aria-hidden="true" className="material-symbols-outlined text-base">
              update
            </span>
            <span className="type-caption">Updated {updated}</span>
          </div>
        </div>

        {/* Focus ledger: a divided list, not a card grid */}
        <ul className="mt-8 divide-y divide-border/60 border-t border-border/60">
          {focus.map((item) => {
            const accent = item.accent as AccentKey;
            return (
              <li
                key={item.title}
                className="group flex items-start gap-4 py-5 first:pt-6 md:items-center md:gap-5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border/70 bg-foreground/5 transition-colors group-hover:border-border-strong">
                  <span
                    aria-hidden="true"
                    className={`material-symbols-outlined text-xl ${accentIcon[accent]}`}
                  >
                    {item.icon}
                  </span>
                </span>

                <div className="min-w-0 flex-1">
                  <p className={`type-micro mb-1 ${accentIcon[accent]}`}>{item.label}</p>
                  <h3 className="text-base font-semibold text-text-primary md:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">{item.detail}</p>
                </div>

                <span className="hidden shrink-0 items-center gap-1.5 self-center rounded-full border border-border/60 bg-foreground/5 px-3 py-1 text-xs font-medium text-text-secondary sm:inline-flex">
                  <span className={`h-1.5 w-1.5 rounded-full ${accentDot[accent]}`} />
                  {item.status}
                </span>
              </li>
            );
          })}
        </ul>

        <p className="mt-6 type-caption text-text-muted">
          A{' '}
          <a
            href={noteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-text-secondary underline decoration-border-strong underline-offset-4 transition-colors hover:text-text-primary"
          >
            /now
          </a>{' '}
          page — {note}
        </p>
      </div>
    </section>
  );
}
