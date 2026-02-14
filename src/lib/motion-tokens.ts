import type { Transition, Variants } from 'framer-motion';

export const motionDurations = {
  fast: 0.2,
  base: 0.35,
  slow: 0.55,
} as const;

export const motionEase = [0.22, 1, 0.36, 1] as const;

export const pageEnterTransition: Transition = {
  duration: motionDurations.base,
  ease: motionEase,
};

export const pageTransitionVariants: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

export const sectionRevealVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const sectionRevealTransition: Transition = {
  duration: 0.45,
  ease: motionEase,
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.04,
      staggerChildren: 0.08,
    },
  },
};

export const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: { y: -4, scale: 1.01 },
};

export const cardHoverTransition: Transition = {
  duration: motionDurations.fast,
  ease: motionEase,
};

export const ctaEmphasisTransition: Transition = {
  duration: 1.8,
  repeat: Infinity,
  repeatType: 'mirror',
  ease: 'easeInOut',
};

export const ambientLoopTransition: Transition = {
  duration: 6,
  repeat: Infinity,
  repeatType: 'mirror',
  ease: 'easeInOut',
};
