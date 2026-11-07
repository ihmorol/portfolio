'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { homeData } from '@/data/home-data';
import { PageHeader } from '@/components/shared/PageHeader';
import { Zap } from 'lucide-react';
import { TiltCard } from '@/components/motion/TiltCard';
import { pageEnterTransition } from '@/lib/motion-tokens';

export function HeroSection() {
  const { titlePrefix, titleHighlight, subtitle, description, now } = homeData.hero;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={pageEnterTransition}
      className="relative isolate w-full mb-8 md:mb-16"
    >
      <PageHeader
        titlePrefix={titlePrefix}
        icon="bolt"
        titleSuffix={titleHighlight}
        customIcon={
          <Zap className="text-accent-yellow w-12 h-12 md:w-16 md:h-16 fill-current -rotate-12 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]" />
        }
        description="Software engineer and ML researcher, based in Dhaka."
      />

      <div className="relative z-10 flex flex-col lg:flex-row gap-4 md:gap-6">
        <div className="flex flex-row gap-3 md:gap-4 lg:gap-5">
          <div className="flex flex-col gap-2 md:gap-3 w-[calc(50%-6px)] sm:w-36 md:w-44 lg:w-52 flex-shrink-0">
            <TiltCard
              className="relative w-full aspect-[3/4] sm:aspect-[9/14] lg:aspect-auto lg:flex-1 rounded-xl md:rounded-2xl overflow-hidden bg-gradient-to-br from-background-tertiary to-background-secondary border border-border"
              intensity={6}
            >
              <Image src="/images/profile/image.jpeg" alt="Profile" fill className="object-cover" priority />
            </TiltCard>
            <Link
              href="/resume.pdf"
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
            <TiltCard intensity={7} className="rounded-xl md:rounded-2xl lg:flex-1">
              <Link
                href="/projects"
                className="group focus-ring relative w-full aspect-[3/4] sm:aspect-[9/14] lg:aspect-auto lg:h-full bg-gradient-to-br from-accent-blue to-accent-teal rounded-xl md:rounded-2xl flex flex-col items-center justify-center gap-2 md:gap-4 transition-transform cursor-pointer border border-border-strong [transform-style:preserve-3d]"
              >
                <span
                  className="material-symbols-outlined text-text-primary text-4xl md:text-5xl lg:text-6xl drop-shadow-sm [transform:translateZ(34px)]"
                  style={{ fontVariationSettings: "'FILL' 1, 'wght' 400" }}
                >
                  dynamic_feed
                </span>
                <span className="type-micro text-text-primary [transform:translateZ(26px)]">View Projects</span>
              </Link>
            </TiltCard>
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

        <div className="surface-card-strong flex-1 p-4 md:p-6 lg:p-10 relative overflow-hidden flex flex-col">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-accent-yellow/20 to-transparent rounded-full -mr-32 -mt-32 opacity-80" />
          <div className="relative z-10 flex flex-1 flex-col">
            <h2 className="type-h2 text-text-primary mb-4">{subtitle}</h2>
            <p className="type-body text-text-secondary max-w-xl mb-6">{description}</p>
            <Link
              href={now.link}
              className="group focus-ring mt-auto flex items-center justify-between gap-3 w-full px-4 py-3 md:px-5 md:py-3.5 rounded-full border border-border bg-background-secondary/60 hover:border-border-strong hover:bg-background-tertiary/60 transition-colors"
            >
              <span className="flex items-center gap-3 min-w-0">
                <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="type-caption text-text-primary font-semibold whitespace-nowrap">
                  What I&apos;m doing now
                </span>
                <span className="type-caption text-text-muted truncate hidden md:inline">
                  {now.text}
                </span>
              </span>
              <ArrowRight
                size={14}
                aria-hidden="true"
                className="shrink-0 text-text-muted group-hover:translate-x-0.5 group-hover:text-text-primary transition-all"
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
