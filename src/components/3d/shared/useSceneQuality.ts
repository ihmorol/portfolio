'use client';

import { useEffect, useMemo, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

export type SceneQualityTier = 'high' | 'medium' | 'low';

interface SceneQualityState {
  tier: SceneQualityTier;
  reducedMotion: boolean;
}

type NavigatorWithMemory = Navigator & { deviceMemory?: number };

function detectTier(): SceneQualityTier {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return 'medium';
  }

  const width = window.innerWidth;
  const isTouch = window.matchMedia('(pointer: coarse)').matches;
  const cores = navigator.hardwareConcurrency ?? 4;
  const memory = (navigator as NavigatorWithMemory).deviceMemory ?? 4;

  if (width < 768 || isTouch || memory <= 3 || cores <= 4) {
    return 'low';
  }

  if (width >= 1280 && memory >= 8 && cores >= 8) {
    return 'high';
  }

  return 'medium';
}

export function useSceneQuality(): SceneQualityState {
  const shouldReduceMotion = useReducedMotion();
  const [tier, setTier] = useState<SceneQualityTier>('medium');

  useEffect(() => {
    const updateTier = () => {
      setTier(detectTier());
    };

    updateTier();
    window.addEventListener('resize', updateTier);
    return () => window.removeEventListener('resize', updateTier);
  }, []);

  return useMemo(
    () => ({ tier, reducedMotion: Boolean(shouldReduceMotion) }),
    [shouldReduceMotion, tier]
  );
}
