'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed left-6 bottom-12 z-40 hidden lg:flex flex-col items-center gap-4">
      <div className="bg-card/80 backdrop-blur-md border border-white/5 rounded-full p-1.5 w-8 h-32 flex flex-col justify-between items-center relative shadow-lg overflow-hidden">
         {/* Background Track */}
        <div className="absolute inset-0 w-full h-full bg-transparent"></div>
        
        {/* Animated Fill */}
        <motion.div
            className="absolute top-0 left-0 right-0 bg-white rounded-full w-full origin-top"
            style={{ scaleY, height: '100%' }}
        />
      </div>
      
      <div className="bg-card/80 backdrop-blur-md border border-white/5 rounded-full py-4 px-1.5 w-8">
        <span className="block writing-vertical-rl text-[10px] font-bold tracking-widest text-text-muted uppercase text-center h-full rotate-180">
          Scroll
        </span>
      </div>
    </div>
  );
}
