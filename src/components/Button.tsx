import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';
import { cn } from '../utils/cn';

type ButtonVariant = 'primary' | 'outline' | 'ghost';

type MotionSafeAnchorProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onAnimationEnd'
>;

interface ButtonProps extends MotionSafeAnchorProps {
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: ReactNode;
  /** Pulls the button gently toward the cursor on hover. Reserved for standout CTAs. */
  magnetic?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-brand text-cream hover:bg-brand-light shadow-lg shadow-brand/30 hover:shadow-brand/50',
  outline: 'border border-cream/30 text-cream hover:border-brand hover:text-brand',
  ghost: 'text-cream/80 hover:text-brand',
};

const MAGNETIC_PULL = 10;

export function Button({
  children,
  variant = 'primary',
  icon,
  magnetic = false,
  className,
  ...anchorProps
}: ButtonProps) {
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.4 });

  const isMagnetic = magnetic && !shouldReduceMotion;

  function handleMouseMove(event: MouseEvent<HTMLAnchorElement>) {
    if (!isMagnetic) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(((event.clientX - rect.left) / rect.width - 0.5) * MAGNETIC_PULL);
    y.set(((event.clientY - rect.top) / rect.height - 0.5) * MAGNETIC_PULL);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      style={isMagnetic ? { x: springX, y: springY } : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-sm font-semibold uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
        variantStyles[variant],
        className,
      )}
      {...anchorProps}
    >
      {variant === 'primary' && (
        <span
          aria-hidden="true"
          className="absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/25 opacity-0 transition-[left,opacity] duration-0 group-hover:left-[120%] group-hover:opacity-100 group-hover:duration-700 group-hover:ease-out"
        />
      )}
      <span className="relative inline-flex items-center gap-2">
        {icon}
        {children}
      </span>
    </motion.a>
  );
}
