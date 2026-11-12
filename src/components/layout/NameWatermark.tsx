import { cn } from '@/lib/utils';

interface NameWatermarkProps {
  className?: string;
}

/**
 * Giant full-bleed "IKRAMUL" wordmark that sits at the very bottom of a page
 * and bleeds slightly off the bottom edge. Rendered as an SVG so it always
 * spans the exact viewport width; the tint uses the theme foreground token at
 * low opacity so it blends into every page in both light and dark mode.
 */
export function NameWatermark({ className }: NameWatermarkProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none select-none w-full overflow-hidden',
        'text-foreground/[0.06] dark:text-foreground/[0.07]',
        className
      )}
    >
      <svg
        viewBox="0 0 1000 136"
        className="block h-auto w-full"
        focusable="false"
        role="presentation"
      >
        <text
          x="0"
          y="150"
          textLength="1000"
          lengthAdjust="spacingAndGlyphs"
          fontSize="200"
          fontWeight="800"
          fontFamily="var(--font-jakarta), sans-serif"
          fill="currentColor"
        >
          IKRAMUL
        </text>
      </svg>
    </div>
  );
}
