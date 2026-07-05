'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { staggerContainer } from '@/lib/motion-tokens';

interface StaggerGroupProps {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
  amount?: number;
}

export function StaggerGroup({
  children,
  className,
  once = true,
  amount = 0.1,
}: StaggerGroupProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={staggerContainer}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
