import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { WhatsAppIcon, ClockIcon, MapPinIcon } from '../components/icons';
import { useStoreStatus } from '../hooks/useStoreStatus';
import { useTilt } from '../hooks/useTilt';
import { staggerContainer, fadeUp } from '../animations/variants';
import { cn } from '../utils/cn';
import type { BusinessInfo, MenuItem } from '../types/content';

interface HeroProps {
  business: BusinessInfo;
  heroItem: MenuItem;
  heroImage: string;
}

const EMBERS = [
  { top: '18%', left: '62%', size: 5, duration: 7, delay: 0 },
  { top: '32%', left: '84%', size: 3, duration: 5.5, delay: 0.6 },
  { top: '58%', left: '70%', size: 4, duration: 6.5, delay: 1.2 },
  { top: '74%', left: '90%', size: 3, duration: 5, delay: 0.3 },
  { top: '46%', left: '56%', size: 2, duration: 6, delay: 1.6 },
];

export function Hero({ business, heroItem, heroImage }: HeroProps) {
  const status = useStoreStatus(business);
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const tilt = useTilt(6);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative min-h-[100svh] overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <motion.div
        aria-hidden="true"
        style={shouldReduceMotion ? undefined : { y: backgroundY }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(225,29,42,0.35),transparent_55%),radial-gradient(circle_at_10%_80%,rgba(225,29,42,0.15),transparent_45%)]"
      />

      {!shouldReduceMotion && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          {EMBERS.map((ember, index) => (
            <span
              key={index}
              className="absolute animate-float rounded-full bg-brand/70 blur-[2px]"
              style={{
                top: ember.top,
                left: ember.left,
                width: ember.size,
                height: ember.size,
                animationDuration: `${ember.duration}s`,
                animationDelay: `${ember.delay}s`,
              }}
            />
          ))}
        </div>
      )}

      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          animate="visible"
          variants={staggerContainer}
          style={shouldReduceMotion ? undefined : { y: contentY, opacity: contentOpacity }}
        >
          <motion.span
            variants={fadeUp}
            className={cn(
              'inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wide',
              status.isOpen ? 'border-emerald-500/40 text-emerald-400' : 'border-cream/20 text-cream/60',
            )}
          >
            <span
              className={cn('size-2 rounded-full', status.isOpen ? 'bg-emerald-400' : 'bg-cream/40')}
              aria-hidden="true"
            />
            {status.label}
          </motion.span>

          <motion.h1
            variants={staggerContainer}
            className="mt-6 font-display text-5xl uppercase leading-[0.92] text-cream sm:text-6xl lg:text-7xl"
          >
            <motion.span variants={fadeUp} className="block">
              Hambúrguer
            </motion.span>
            <motion.span variants={fadeUp} className="block">
              bem-feito,
            </motion.span>
            <motion.span variants={fadeUp} className="block pl-[clamp(16px,7vw,64px)]">
              do jeitinho
            </motion.span>
            <motion.span variants={fadeUp} className="block pl-[clamp(16px,7vw,64px)]">
              que você
            </motion.span>
            <motion.span variants={fadeUp} className="block pl-[clamp(16px,7vw,64px)] text-brand">
              gosta
            </motion.span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-lg text-lg text-cream/70">
            Blend na medida, chapa quente e ingredientes frescos todos os dias. A Silene's Truck é parada
            obrigatória em Paulista para quem leva hambúrguer a sério.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <Button
              href={business.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              icon={<WhatsAppIcon className="size-4" />}
              magnetic
            >
              Peça pelo WhatsApp
            </Button>
            <Button href="#cardapio" variant="outline">
              Ver cardápio
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-6 text-sm text-cream/60">
            <span className="inline-flex items-center gap-2">
              <ClockIcon className="size-4 text-brand" /> Ter–Dom · a partir das 17h
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPinIcon className="size-4 text-brand" /> {business.address}
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          onMouseMove={tilt.handleMouseMove}
          onMouseLeave={tilt.handleMouseLeave}
          style={{ perspective: 1000 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 animate-breathe rounded-full bg-brand/30 blur-3xl"
          />
          <div className={cn('relative z-10 h-full w-full', !shouldReduceMotion && 'animate-float')}>
            <motion.img
              style={shouldReduceMotion ? undefined : { rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
              src={heroImage}
              alt={`${heroItem.name}, hambúrguer artesanal da Silene's Truck`}
              width={900}
              height={817}
              className="h-full w-full object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.6)]"
              fetchPriority="high"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
