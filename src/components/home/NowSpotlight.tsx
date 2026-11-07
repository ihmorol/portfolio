import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { homeData } from '@/data/home-data';
import { Magnetic } from '@/components/motion/Magnetic';

/**
 * Full-width editorial band distilling the /now page: label + pitch on the
 * left, hairline status rows (Building / Teaching / Researching) on the right.
 * Every fact is mirrored from now-data.ts; nothing new is claimed here.
 */
export function NowSpotlight() {
  const { label, updatedAt, title, description, ctaText, ctaLink, rows } =
    homeData.nowSpotlight;

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
      <div className="lg:col-span-4 flex flex-col justify-center">
        <p className="type-micro text-text-muted mb-4">
          {label} · {updatedAt}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
          {title}
        </h2>
        <p className="text-text-muted leading-relaxed mb-8 max-w-sm">
          {description}
        </p>
        <Magnetic strength={5}>
          <Link
            href={ctaLink}
            className="focus-ring bg-foreground text-background px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-foreground/85 hover:shadow-lg transition-all duration-300 w-max cursor-pointer"
          >
            {ctaText}
          </Link>
        </Magnetic>
      </div>

      <div className="lg:col-span-8 border-y border-border/60 divide-y divide-border/60">
        {rows.map((row) => (
          <Link
            key={row.title}
            href={row.href}
            {...(row.external
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
            className="group flex items-center gap-4 md:gap-6 py-6 md:py-7 px-2 -mx-2 rounded-xl transition-colors hover:bg-foreground/[0.03]"
          >
            <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full ${row.dot} opacity-60`}
              />
              <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${row.dot}`} />
            </span>
            <span
              className="material-symbols-outlined text-text-secondary text-2xl shrink-0"
              aria-hidden="true"
            >
              {row.icon}
            </span>
            <span className="flex-1 min-w-0">
              <span className="type-micro text-text-muted">{row.title}</span>
              <span className="mt-1 block text-sm md:text-[15px] font-medium text-text-primary leading-relaxed">
                {row.text}
              </span>
            </span>
            <ArrowRight
              size={18}
              aria-hidden="true"
              className="shrink-0 text-text-muted opacity-60 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-text-primary transition-all"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
