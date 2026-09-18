import type { ReactNode } from 'react';
import { cn } from '../utils/cn';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, align = 'left', className }: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mx-auto max-w-2xl text-center',
        align === 'center' ? 'lg:mx-auto lg:text-center' : 'lg:mx-0 lg:text-left',
        className,
      )}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-light">{eyebrow}</span>
      <h2 className="mt-3 text-balance font-display text-4xl uppercase leading-[0.95] text-cream sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-base leading-relaxed text-cream/70">{description}</p>
      ) : null}
    </div>
  );
}
