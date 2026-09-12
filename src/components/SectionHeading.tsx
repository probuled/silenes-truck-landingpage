import type { ReactNode } from 'react';
import { cn } from '../utils/cn';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, align = 'left', className }: SectionHeadingProps) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">{eyebrow}</span>
      <h2 className="mt-3 font-display text-4xl uppercase leading-[0.95] text-cream sm:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base text-cream/70">{description}</p> : null}
    </div>
  );
}
