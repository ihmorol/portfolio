'use client';

import { useEffect, useRef, useState } from 'react';
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion';

/**
 * Site-wide cursor spotlight. A soft accent-tinted light that trails the
 * pointer with a gentle spring. Rendered only for fine pointers (mouse),
 * and disabled entirely for reduced-motion users.
 */
export function CursorGlow() {
  const shouldReduceMotion = useReducedMotion();
  const [isEnabled, setIsEnabled] = useState(false);
  const hasMovedRef = useRef(false);

  const glowX = useMotionValue(-400);
  const glowY = useMotionValue(-400);
  const glowOpacity = useMotionValue(0);

  const springX = useSpring(glowX, { stiffness: 60, damping: 18, mass: 0.6 });
  const springY = useSpring(glowY, { stiffness: 60, damping: 18, mass: 0.6 });

  useEffect(() => {
    if (shouldReduceMotion) return;

    const finePointerQuery = window.matchMedia(
      '(hover: hover) and (pointer: fine)'
    );
    if (!finePointerQuery.matches) return;

    setIsEnabled(true);

    const handlePointerMove = (event: PointerEvent) => {
      glowX.set(event.clientX);
      glowY.set(event.clientY);
      if (!hasMovedRef.current) {
        hasMovedRef.current = true;
        animate(glowOpacity, 1, { duration: 0.4 });
      }
    };

    const handlePointerLeave = () => animate(glowOpacity, 0, { duration: 0.4 });
    const handlePointerEnter = () => {
      if (hasMovedRef.current) animate(glowOpacity, 1, { duration: 0.4 });
    };

    window.addEventListener('pointermove', handlePointerMove, {
      passive: true,
    });
    document.documentElement.addEventListener(
      'pointerleave',
      handlePointerLeave
    );
    document.documentElement.addEventListener(
      'pointerenter',
      handlePointerEnter
    );

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.documentElement.removeEventListener(
        'pointerleave',
        handlePointerLeave
      );
      document.documentElement.removeEventListener(
        'pointerenter',
        handlePointerEnter
      );
    };
  }, [glowOpacity, glowX, glowY, shouldReduceMotion]);

  if (!isEnabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-30"
      style={{
        x: springX,
        y: springY,
        opacity: glowOpacity,
      }}
    >
      <div
        className="h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(circle, hsl(var(--accent-primary) / 0.08) 0%, hsl(var(--accent-cyan) / 0.04) 38%, transparent 68%)',
        }}
      />
    </motion.div>
  );
}
