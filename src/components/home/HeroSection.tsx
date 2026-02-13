'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { homeData } from '@/data/home-data';
import { PageHeader } from '@/components/shared/PageHeader';
import { Zap } from 'lucide-react';

export function HeroSection() {
  const { titlePrefix, titleHighlight, subtitle, description } = homeData.hero;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full mb-8 md:mb-16"
    >
      {/* Hero Title */}
      <PageHeader
        titlePrefix={titlePrefix}
        icon="bolt"
        titleSuffix={titleHighlight}
        customIcon={
          <Zap className="text-amber-400 w-12 h-12 md:w-16 md:h-16 fill-current transform -rotate-12 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]" />
        }
        description="Building exceptional digital experiences."
      />
      {/* Main Hero Layout */}
      <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
        {/* Left Side - Profile Image + View Projects Card with Action Buttons */}
        <div className="flex flex-row gap-3 md:gap-4 lg:gap-5">
          {/* Profile Image Column */}
          <div className="flex flex-col gap-2 md:gap-3 w-[calc(50%-6px)] sm:w-36 md:w-44 lg:w-52 flex-shrink-0">
            {/* Profile Image */}
            <div className="relative w-full aspect-[3/4] sm:aspect-[9/14] rounded-xl md:rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-700">
              <Image
                src="/images/profile/image.jpeg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Resume Button */}
            <Link 
              href="/resume.html" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 md:gap-3 bg-gray-900 hover:bg-gray-800 text-white px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-xl transition-colors w-full"
            >
              <span 
                className="material-symbols-outlined text-lg md:text-xl" 
                style={{ fontVariationSettings: "'FILL' 0, 'wght' 400" }}
              >
                download
              </span>
              <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">Resume</span>
            </Link>
          </div>

          {/* View Projects Column */}
          <div className="flex flex-col gap-2 md:gap-3 w-[calc(50%-6px)] sm:w-36 md:w-44 lg:w-52 flex-shrink-0">
            {/* View Projects Card */}
            <Link 
              href="/projects" 
              className="group relative w-full aspect-[3/4] sm:aspect-[9/14] bg-gradient-to-br from-pink-400 to-rose-500 rounded-xl md:rounded-2xl flex flex-col items-center justify-center gap-2 md:gap-4 transition-transform hover:scale-[1.02] cursor-pointer"
            >
              <span 
                className="material-symbols-outlined text-white text-4xl md:text-5xl lg:text-6xl" 
                style={{ fontVariationSettings: "'FILL' 1, 'wght' 400" }}
              >
                dynamic_feed
              </span>
              <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase">
                View Projects
              </span>
            </Link>
            {/* Meeting Button */}
            <Link 
              href="/contact" 
              className="flex items-center justify-center gap-2 md:gap-3 bg-gray-900 hover:bg-gray-800 text-white px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-xl transition-colors w-full"
            >
              <span 
                className="material-symbols-outlined text-lg md:text-xl" 
                style={{ fontVariationSettings: "'FILL' 0, 'wght' 400" }}
              >
                calendar_month
              </span>
              <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">Meeting</span>
            </Link>
          </div>
        </div>

        {/* Right Side - Description Card */}
        <div className="flex-1 bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-10 relative overflow-hidden">
          {/* Subtle gradient overlay */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-amber-50 to-transparent rounded-full -mr-32 -mt-32 opacity-60" />
          
          <div className="relative z-10">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-snug">
              {subtitle}
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xl">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
