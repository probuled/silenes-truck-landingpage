import { motion } from 'motion/react';
import { Container } from '../components/Container';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { WhatsAppIcon } from '../components/icons';
import { fadeUp, staggerContainer } from '../animations/variants';
import { formatCurrency } from '../utils/formatCurrency';
import type { BusinessInfo, MenuItem } from '../types/content';

interface MenuProps {
  items: MenuItem[];
  business: BusinessInfo;
}

export function Menu({ items, business }: MenuProps) {
  return (
    <section id="cardapio" className="py-24 sm:py-32" aria-labelledby="cardapio-heading">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Cardápio"
            title={
              <span id="cardapio-heading">
                Os destaques da <span className="text-brand">chapa</span>
              </span>
            }
            description="Uma seleção dos hambúrgueres mais pedidos. Cardápio completo e combos direto no WhatsApp."
          />
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((item) => (
            <motion.article
              key={item.id}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-surface"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                  width={600}
                  height={450}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {item.tag ? (
                  <span className="absolute left-3 top-3 rounded-full bg-brand-dark px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-cream">
                    {item.tag}
                  </span>
                ) : null}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-xl uppercase text-cream">{item.name}</h3>
                <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-cream/65">{item.description}</p>
                <div className="mt-4 flex min-h-7 items-center justify-between">
                  {item.price ? (
                    <span className="font-display text-lg text-brand-light">{formatCurrency(item.price)}</span>
                  ) : (
                    <span className="text-xs font-semibold uppercase tracking-[0.1em] text-cream/60">
                      Consulte o preço
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <Reveal className="mt-12 flex justify-center">
          <Button href={business.whatsappUrl} target="_blank" rel="noreferrer" icon={<WhatsAppIcon className="size-4" />}>
            Ver cardápio completo
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
