import { motion, useReducedMotion } from 'motion/react';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { WhatsAppIcon, ClockIcon, MapPinIcon } from '../components/icons';
import { useStoreStatus } from '../hooks/useStoreStatus';
import { cn } from '../utils/cn';
import type { BusinessInfo, MenuItem } from '../types/content';

interface HeroProps {
  business: BusinessInfo;
  heroItem: MenuItem;
}

export function Hero({ business, heroItem }: HeroProps) {
  const status = useStoreStatus(business);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(225,29,42,0.35),transparent_55%),radial-gradient(circle_at_10%_80%,rgba(225,29,42,0.15),transparent_45%)]"
      />

      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
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
          </span>

          <h1 className="mt-6 font-display text-5xl uppercase leading-[0.92] text-cream sm:text-6xl lg:text-7xl">
            Hambúrguer bem-feito, <span className="text-brand">do jeitinho</span> que você gosta
          </h1>

          <p className="mt-6 max-w-lg text-lg text-cream/70">
            Blend na medida, chapa quente e ingredientes frescos todos os dias. A Silene's Truck é parada
            obrigatória em Paulista para quem leva hambúrguer a sério.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={business.whatsappUrl} target="_blank" rel="noreferrer" icon={<WhatsAppIcon className="size-4" />}>
              Peça pelo WhatsApp
            </Button>
            <Button href="#cardapio" variant="outline">
              Ver cardápio
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-cream/60">
            <span className="inline-flex items-center gap-2">
              <ClockIcon className="size-4 text-brand" /> Ter–Dom · a partir das 17h
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPinIcon className="size-4 text-brand" /> {business.address}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-brand/30 blur-3xl"
          />
          <img
            src={heroItem.image}
            alt={`${heroItem.name}, hambúrguer artesanal da Silene's Truck`}
            width={900}
            height={720}
            className="relative z-10 h-full w-full rounded-[2.5rem] border border-white/10 object-cover shadow-2xl shadow-black/60"
            fetchPriority="high"
          />
        </motion.div>
      </Container>
    </section>
  );
}
