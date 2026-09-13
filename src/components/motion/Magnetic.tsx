'use client';

import { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion';
import { cn } from '@/lib/utils';

interface MagneticProps {
  children: React.ReactNode;
  className?: string;
  /** Max pull distance in px toward the pointer. Keep under ~8px. */
  strength?: number;
}

/**
 * Magnetic hover: the wrapped element leans a few pixels toward the pointer
 * and springs back on leave. Use sparingly on primary CTAs only.
 */
export function Magnetic({ children, className, strength = 6 }: MagneticProps) {
  const shouldReduceMotion = useReducedMotion();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const pullX = useMotionValue(0);
  const pullY = useMotionValue(0);
  const springX = useSpring(pullX, { stiffness: 220, damping: 16 });
  const springY = useSpring(pullY, { stiffness: 220, damping: 16 });

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = wrapperRef.current?.getBoundingClientRect();
    if (!rect) return;

    const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (event.clientY - rect.top) / rect.height - 0.5;

    pullX.set(relativeX * strength * 2);
    pullY.set(relativeY * strength * 2);
  };

  const handleMouseLeave = () => {
    pullX.set(0);
    pullY.set(0);
  };

  return (
    <motion.div
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={cn('inline-block will-change-transform', className)}
    >
      {children}
    </motion.div>
  );
}
