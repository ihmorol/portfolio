'use client';

import { cn } from '@/lib/utils';

interface ProjectCoverProps {
  /** Project title; drives the ghost wordmark and aria label. */
  label: string;
  /** Primary and secondary cover colors as hex. */
  from: string;
  to: string;
  /** Lucide icon component (projects page). */
  icon?: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  /** Material symbol name (home featured cards). */
  materialIcon?: string;
  className?: string;
}

function hexToRgba(hex: string, alpha: number): string {
  const value = hex.replace('#', '');
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function initialsOf(label: string): string {
  return label
    .split(/\s+/)
    .map((word) => word[0])
    .filter(Boolean)
    .slice(0, 3)
    .join('')
    .toUpperCase();
}

/**
 * Generated card cover art for projects without screenshots: a tinted canvas
 * with color glows, a dot grid, film grain, a glass icon chip, and a ghost
 * monogram. Fully data-driven so new projects need no image assets.
 */
export function ProjectCover({
  label,
  from,
  to,
  icon: Icon,
  materialIcon,
  className,
}: ProjectCoverProps) {
  return (
    <div
      role="img"
      aria-label={`${label} cover art`}
      className={cn('relative h-full w-full overflow-hidden bg-background-tertiary', className)}
    >
      {/* Color glows */}
      <div
        aria-hidden="true"
        className="absolute -right-[12%] -top-[30%] h-[85%] w-[65%] rounded-full"
        style={{
          background: `radial-gradient(circle at center, ${hexToRgba(from, 0.5)}, transparent 70%)`,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-[35%] -left-[15%] h-[90%] w-[70%] rounded-full"
        style={{
          background: `radial-gradient(circle at center, ${hexToRgba(to, 0.42)}, transparent 70%)`,
        }}
      />

      {/* Dot grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(hsl(var(--text-primary) / 0.13) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />

      {/* Film grain */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage: "url('/images/brand/noise-soft-01.png')",
          backgroundSize: '180px 180px',
        }}
      />

      {/* Ghost monogram */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-4 -right-1 select-none text-[6.5rem] font-extrabold leading-none tracking-tight md:text-[7.5rem]"
        style={{
          color: 'transparent',
          WebkitTextStroke: `1.5px ${hexToRgba(from, 0.32)}`,
        }}
      >
        {initialsOf(label)}
      </span>

      {/* Glass icon chip */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="flex h-16 w-16 items-center justify-center rounded-2xl border backdrop-blur-md transition-transform duration-500 ease-out group-hover:scale-110 md:h-[4.5rem] md:w-[4.5rem]"
          style={{
            borderColor: hexToRgba(from, 0.4),
            backgroundColor: 'hsl(var(--bg-elev-1) / 0.55)',
            boxShadow: `0 14px 36px ${hexToRgba(from, 0.3)}, inset 0 1px 0 hsl(var(--text-primary) / 0.08)`,
          }}
        >
          {materialIcon ? (
            <span
              className="material-symbols-outlined text-3xl md:text-4xl"
              style={{ color: to, fontVariationSettings: "'FILL' 0, 'wght' 500" }}
              aria-hidden="true"
            >
              {materialIcon}
            </span>
          ) : Icon ? (
            <Icon className="h-8 w-8 md:h-9 md:w-9" aria-hidden="true" style={{ color: to }} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
