import type { ReactNode } from 'react';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { fadeUp } from '../animations/variants';

interface RevealProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
}

export function Reveal({ children, variants = fadeUp, className, delay = 0 }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
