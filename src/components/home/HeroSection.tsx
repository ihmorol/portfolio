'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { homeData } from '@/data/home-data';
import { PageHeader } from '@/components/shared/PageHeader';
import { Zap } from 'lucide-react';
import { HeroDepthScene } from '@/components/3d/hero/HeroDepthScene';
import { HoverField } from '@/components/motion/HoverField';
import { pageEnterTransition } from '@/lib/motion-tokens';

export function HeroSection() {
  const { titlePrefix, titleHighlight, subtitle, description } = homeData.hero;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={pageEnterTransition}
      className="relative isolate w-full mb-8 md:mb-16"
    >
      <HeroDepthScene className="rounded-[var(--radius-xl)]" />
      <PageHeader
        titlePrefix={titlePrefix}
        icon="bolt"
        titleSuffix={titleHighlight}
        customIcon={
          <Zap className="text-accent-yellow w-12 h-12 md:w-16 md:h-16 fill-current -rotate-12 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]" />
        }
        description="Building exceptional digital experiences."
      />

      <div className="relative z-10 flex flex-col lg:flex-row gap-4 md:gap-6">
        <div className="flex flex-row gap-3 md:gap-4 lg:gap-5">
          <div className="flex flex-col gap-2 md:gap-3 w-[calc(50%-6px)] sm:w-36 md:w-44 lg:w-52 flex-shrink-0">
            <HoverField className="relative w-full aspect-[3/4] sm:aspect-[9/14] rounded-xl md:rounded-2xl overflow-hidden bg-gradient-to-br from-background-tertiary to-background-secondary border border-border">
              <Image src="/images/profile/image.jpeg" alt="Profile" fill className="object-cover" priority />
            </HoverField>
            <Link
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring flex items-center justify-center gap-2 md:gap-3 bg-background-secondary hover:bg-background-tertiary text-text-primary px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-xl transition-colors w-full border border-border"
            >
              <span
                className="material-symbols-outlined text-lg md:text-xl"
                style={{ fontVariationSettings: "'FILL' 0, 'wght' 400" }}
              >
                download
              </span>
              <span className="type-micro">Resume</span>
            </Link>
          </div>

          <div className="flex flex-col gap-2 md:gap-3 w-[calc(50%-6px)] sm:w-36 md:w-44 lg:w-52 flex-shrink-0">
            <HoverField>
              <Link
                href="/projects"
                className="group focus-ring relative w-full aspect-[3/4] sm:aspect-[9/14] bg-gradient-to-br from-accent-blue via-accent-teal to-accent-coral rounded-xl md:rounded-2xl flex flex-col items-center justify-center gap-2 md:gap-4 transition-transform cursor-pointer border border-white/20"
              >
                <span
                  className="material-symbols-outlined text-white text-4xl md:text-5xl lg:text-6xl"
                  style={{ fontVariationSettings: "'FILL' 1, 'wght' 400" }}
                >
                  dynamic_feed
                </span>
                <span className="type-micro text-white">View Projects</span>
              </Link>
            </HoverField>
            <Link
              href="/contact"
              className="focus-ring flex items-center justify-center gap-2 md:gap-3 bg-background-secondary hover:bg-background-tertiary text-text-primary px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-xl transition-colors w-full border border-border"
            >
              <span
                className="material-symbols-outlined text-lg md:text-xl"
                style={{ fontVariationSettings: "'FILL' 0, 'wght' 400" }}
              >
                calendar_month
              </span>
              <span className="type-micro">Meeting</span>
            </Link>
          </div>
        </div>

        <div className="surface-card-strong flex-1 p-4 md:p-6 lg:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-accent-yellow/20 to-transparent rounded-full -mr-32 -mt-32 opacity-80" />
          <div className="relative z-10">
            <h2 className="type-h2 text-text-primary mb-4">{subtitle}</h2>
            <p className="type-body text-text-secondary max-w-xl">{description}</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
