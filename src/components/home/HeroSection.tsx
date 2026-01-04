'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { homeData } from '@/data/home-data';

export function HeroSection() {
  const { titlePrefix, titleHighlight, subtitle, description, buttons } = homeData.hero;

  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center mb-16 mt-8 text-center max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-[64px] leading-tight font-bold tracking-tight mb-6 flex flex-wrap justify-center items-center gap-4">
            {titlePrefix} <span className="material-symbols-outlined text-6xl md:text-[64px] text-yellow-400" style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}>bolt</span> {titleHighlight}
        </h1>
        <h2 className="text-xl md:text-2xl text-white font-medium mb-6">
            {subtitle}
        </h2>
        <p className="text-gray-400 max-w-2xl text-sm md:text-base leading-relaxed mb-10">
            {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            {buttons.map((btn, index) => (
                <button 
                    key={index}
                    className={
                        index === 0 
                        ? "btn-coral px-8 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase transition-transform hover:scale-105 active:scale-95"
                        : "border border-white/20 text-white hover:bg-white hover:text-black px-8 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all active:scale-95"
                    }
                >
                    {btn.text}
                </button>
            ))}
        </div>
      </motion.div>
  );
}
