'use client';

import { useEffect, useRef } from 'react';
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from 'framer-motion';

interface CountUpProps {
  /** Stat value, e.g. '3.94', '500+', '6×'. Numeric part animates; the rest is preserved. */
  value: string;
  className?: string;
  duration?: number;
}

const NUMERIC_PATTERN = /^([^\d]*)([\d.,]+)(.*)$/;

/**
 * Counts the numeric part of a stat up from zero when scrolled into view.
 * Non-numeric prefix/suffix ('×', '+', currency marks) render statically, and
 * reduced-motion users always see the final value. Thousands separators
 * ('1,500+') are preserved via locale grouping during the animation.
 */
export function CountUp({ value, className, duration = 1.4 }: CountUpProps) {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.6 });

  const match = value.match(NUMERIC_PATTERN);
  const prefix = match?.[1] ?? '';
  const numeric = match ? match[2].replace(/,/g, '') : '';
  const target = match ? parseFloat(numeric) : NaN;
  const suffix = match?.[3] ?? '';
  const decimals = numeric.includes('.') ? numeric.split('.')[1].length : 0;
  const useGrouping = Boolean(match?.[2].includes(','));

  const raw = useMotionValue(0);
  const formatted = useTransform(raw, (latest) => {
    const rounded =
      decimals > 0 ? latest.toFixed(decimals) : Math.round(latest).toString();
    if (!useGrouping) return rounded;
    return Number(rounded).toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  });

  useEffect(() => {
    if (!isInView || Number.isNaN(target)) return;
    if (shouldReduceMotion) {
      raw.set(target);
      return;
    }
    const controls = animate(raw, target, { duration, ease: [0.22, 1, 0.36, 1] });
    return () => controls.stop();
  }, [duration, isInView, raw, shouldReduceMotion, target]);

  if (Number.isNaN(target) || shouldReduceMotion) {
    return (
      <span ref={containerRef} className={className}>
        {value}
      </span>
    );
  }

  return (
    <span ref={containerRef} className={className}>
      {prefix}
      <motion.span className="tabular-nums">{formatted}</motion.span>
      {suffix}
    </span>
  );
}
