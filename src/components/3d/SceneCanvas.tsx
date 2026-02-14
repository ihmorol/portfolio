'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ambientLoopTransition } from '@/lib/motion-tokens';
import { useSceneQuality } from './shared/useSceneQuality';

interface SceneCanvasProps {
  className?: string;
  children?: React.ReactNode;
}

export function SceneCanvas({ className, children }: SceneCanvasProps) {
  const { tier, reducedMotion } = useSceneQuality();
  const enableAmbientAnimation = !reducedMotion && tier !== 'low';

  return (
    <div
      aria-hidden
      className={cn(
        'absolute inset-0 overflow-hidden rounded-[inherit] pointer-events-none',
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(94,201,255,0.22),transparent_46%),radial-gradient(circle_at_88%_20%,rgba(126,244,208,0.18),transparent_44%),radial-gradient(circle_at_60%_82%,rgba(255,199,94,0.16),transparent_45%)]" />
      {enableAmbientAnimation && (
        <>
          <motion.div
            className="absolute -left-20 top-10 h-52 w-52 rounded-full bg-accent-blue/20 blur-3xl"
            animate={{ x: [0, 30], y: [0, -12] }}
            transition={ambientLoopTransition}
          />
          <motion.div
            className="absolute -right-16 bottom-12 h-56 w-56 rounded-full bg-accent-teal/20 blur-3xl"
            animate={{ x: [0, -24], y: [0, 18] }}
            transition={ambientLoopTransition}
          />
        </>
      )}
      {children}
    </div>
  );
}
