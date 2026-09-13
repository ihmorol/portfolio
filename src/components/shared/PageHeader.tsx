'use client';

import React from 'react';

interface PageHeaderProps {
  /** Text before the icon */
  titlePrefix: string;
  /** Material symbol icon name (e.g., 'person', 'bolt', 'school') */
  icon: string;
  /** Text after the icon (can be styled differently) */
  titleSuffix?: string;
  /** Whether the suffix should be italic/light styled */
  suffixItalic?: boolean;
  /** Optional description paragraph below the title */
  description?: string;
  /** Custom icon component (for Lucide icons) - overrides material symbol */
  customIcon?: React.ReactNode;
}

export function PageHeader({
  titlePrefix,
  icon,
  titleSuffix,
  suffixItalic = false,
  description,
  customIcon,
}: PageHeaderProps) {
  return (
    <div className="pt-4 md:pt-8 pb-8 md:pb-12 text-center">
      <h1 className="type-display-2 tracking-tight mb-6 text-text-primary flex items-center justify-center gap-2 md:gap-4 flex-wrap">
        {titlePrefix}
        {customIcon}
        {titleSuffix && (
          <span
            className={
              suffixItalic
                ? 'font-light italic text-text-muted'
                : 'font-semibold text-gradient-accent'
            }
          >
            {titleSuffix}
          </span>
        )}
      </h1>
      {description && (
        <p className="type-body-lg text-text-secondary max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
