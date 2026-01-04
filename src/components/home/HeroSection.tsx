'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { homeData } from '@/data/home-data';

export function HeroSection() {
  const { titlePrefix, titleHighlight, subtitle, description } = homeData.hero;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full mb-16"
    >
      {/* Hero Title - Top Left */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-10 md:mb-14">
        <span className="text-white">{titlePrefix}</span>
        <span className="material-symbols-outlined text-yellow-400 text-5xl md:text-7xl lg:text-8xl align-middle mx-2" style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}>bolt</span>
        <span className="text-white">{titleHighlight}</span>
      </h1>

      {/* Main Hero Layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Side - Profile Image + View Projects Card with Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-5">
          {/* Profile Image Column */}
          <div className="flex flex-col gap-3 w-full sm:w-40 md:w-48 lg:w-52 flex-shrink-0">
            {/* Profile Image */}
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-700">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Resume Button */}
            <Link 
              href="/resume.pdf" 
              target="_blank"
              className="flex items-center justify-center gap-3 bg-gray-900 hover:bg-gray-800 text-white px-4 py-3 rounded-xl transition-colors w-full"
            >
              <span 
                className="material-symbols-outlined text-xl" 
                style={{ fontVariationSettings: "'FILL' 0, 'wght' 400" }}
              >
                download
              </span>
              <span className="text-xs font-bold tracking-widest uppercase">Resume</span>
            </Link>
          </div>

          {/* View Projects Column */}
          <div className="flex flex-col gap-3 w-full sm:w-40 md:w-48 lg:w-52 flex-shrink-0">
            {/* View Projects Card */}
            <Link 
              href="/projects" 
              className="group relative w-full aspect-square bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex flex-col items-center justify-center gap-4 transition-transform hover:scale-[1.02] cursor-pointer"
            >
              <span 
                className="material-symbols-outlined text-white text-5xl md:text-6xl" 
                style={{ fontVariationSettings: "'FILL' 1, 'wght' 400" }}
              >
                dynamic_feed
              </span>
              <span className="text-white text-xs font-bold tracking-widest uppercase">
                View Projects
              </span>
            </Link>
            {/* Meeting Button */}
            <Link 
              href="/contact" 
              className="flex items-center justify-center gap-3 bg-gray-900 hover:bg-gray-800 text-white px-4 py-3 rounded-xl transition-colors w-full"
            >
              <span 
                className="material-symbols-outlined text-xl" 
                style={{ fontVariationSettings: "'FILL' 0, 'wght' 400" }}
              >
                calendar_month
              </span>
              <span className="text-xs font-bold tracking-widest uppercase">Meeting</span>
            </Link>
          </div>
        </div>

        {/* Right Side - Description Card */}
        <div className="flex-1 bg-white rounded-2xl p-6 md:p-8 lg:p-10 relative overflow-hidden">
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
