'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ambientLoopTransition } from '@/lib/motion-tokens';
import { SceneCanvas } from '@/components/3d/SceneCanvas';
import { useSceneQuality } from '@/components/3d/shared/useSceneQuality';

interface HeroDepthSceneProps {
  className?: string;
}

export function HeroDepthScene({ className }: HeroDepthSceneProps) {
  const { tier, reducedMotion } = useSceneQuality();
  const useMeshLayer = tier !== 'low';
  const useMotionLayer = !reducedMotion && tier === 'high';

  return (
    <SceneCanvas className={cn('opacity-80', className)}>
      {useMeshLayer && (
        <div className="absolute inset-0 bg-[url('/images/brand/mesh-hero-01.svg')] bg-cover bg-center opacity-50" />
      )}
      <div className="absolute inset-0 bg-[url('/images/brand/noise-soft-01.png')] bg-[length:220px_220px] opacity-[0.09]" />
      {useMotionLayer && (
        <motion.div
          className="absolute -right-10 top-20 h-80 w-80 bg-[url('/images/brand/blob-depth-01.svg')] bg-contain bg-no-repeat opacity-70"
          animate={{ y: [0, -20], x: [0, -12] }}
          transition={ambientLoopTransition}
        />
      )}
    </SceneCanvas>
  );
}
