import type { MouseEvent } from 'react';
import { useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react';

export function useTilt(maxDeg = 8) {
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { stiffness: 200, damping: 20, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [maxDeg, -maxDeg]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-maxDeg, maxDeg]), springConfig);

  function handleMouseMove(event: MouseEvent<HTMLElement>) {
    if (shouldReduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return { rotateX, rotateY, handleMouseMove, handleMouseLeave };
}
