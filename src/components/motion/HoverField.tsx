'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { cardHover, cardHoverTransition } from '@/lib/motion-tokens';

interface HoverFieldProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export function HoverField({
  children,
  className,
  disabled = false,
}: HoverFieldProps) {
  const shouldReduceMotion = useReducedMotion();

  if (disabled || shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hover"
      variants={cardHover}
      transition={cardHoverTransition}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
