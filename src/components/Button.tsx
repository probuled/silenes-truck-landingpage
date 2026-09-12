import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { cn } from '../utils/cn';

type ButtonVariant = 'primary' | 'outline' | 'ghost';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-brand text-cream hover:bg-brand-light shadow-lg shadow-brand/30 hover:shadow-brand/50',
  outline: 'border border-cream/30 text-cream hover:border-brand hover:text-brand',
  ghost: 'text-cream/80 hover:text-brand',
};

export function Button({ children, variant = 'primary', icon, className, ...anchorProps }: ButtonProps) {
  return (
    <a
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
        variantStyles[variant],
        className,
      )}
      {...anchorProps}
    >
      {icon}
      {children}
    </a>
  );
}
