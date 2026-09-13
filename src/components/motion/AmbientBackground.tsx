'use client';

import { useEffect, useState } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion';

interface AmbientBackgroundProps {
  /** Max pointer-parallax displacement in px, mirroring ParallaxLayer's speed prop. */
  range?: number;
}

/**
 * Fixed ambient backdrop: three blurred accent blobs that drift on slow CSS
 * loops and lean gently toward the pointer (mouse parallax). Sits behind all
 * page content; pure decoration, hidden from the accessibility tree.
 */
export function AmbientBackground({ range = 14 }: AmbientBackgroundProps) {
  const shouldReduceMotion = useReducedMotion();
  const [hasFinePointer, setHasFinePointer] = useState(false);

  const parallaxX = useMotionValue(0);
  const parallaxY = useMotionValue(0);
  const springX = useSpring(parallaxX, { stiffness: 40, damping: 20 });
  const springY = useSpring(parallaxY, { stiffness: 40, damping: 20 });

  useEffect(() => {
    if (shouldReduceMotion) return;

    const finePointerQuery = window.matchMedia(
      '(hover: hover) and (pointer: fine)'
    );
    if (!finePointerQuery.matches) return;

    setHasFinePointer(true);

    const handlePointerMove = (event: PointerEvent) => {
      const moveX = (event.clientX / window.innerWidth - 0.5) * 2;
      const moveY = (event.clientY / window.innerHeight - 0.5) * 2;
      parallaxX.set(moveX * range);
      parallaxY.set(moveY * range);
    };

    window.addEventListener('pointermove', handlePointerMove, {
      passive: true,
    });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [parallaxX, parallaxY, range, shouldReduceMotion]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={hasFinePointer ? { x: springX, y: springY } : undefined}
    >
      <div className="blob absolute -top-[15vh] -left-[10vw] h-[55vmax] w-[55vmax] rounded-full blur-[110px] blob-drift-a" />
      <div className="blob absolute top-[30vh] -right-[15vw] h-[48vmax] w-[48vmax] rounded-full blur-[110px] blob-drift-b" />
      <div className="blob absolute -bottom-[20vh] left-[25vw] h-[42vmax] w-[42vmax] rounded-full blur-[110px] blob-drift-c" />
    </motion.div>
  );
}
