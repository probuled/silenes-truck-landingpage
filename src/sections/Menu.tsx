import { motion } from "motion/react";
import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { Button } from "../components/Button";
import { fadeUp, staggerContainer } from "../animations/variants";
import { formatCurrency } from "../utils/formatCurrency";
import type { BusinessInfo, MenuItem } from "../types/content";

interface MenuProps {
  items: MenuItem[];
  business: BusinessInfo;
}

export function Menu({ items, business }: MenuProps) {
  return (
    <section
      id="cardapio"
      className="py-24 sm:py-32"
      aria-labelledby="cardapio-heading"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Cardápio"
            title={
              <span id="cardapio-heading">
                Os destaques da <span className="text-brand">chapa</span>
              </span>
            }
            description="Uma seleção dos hambúrgueres mais pedidos. Cardápio completo e combos direto no Ifood e 99Food."
            align="center"
          />
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((item) => (
            <motion.article
              key={item.id}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
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
                <h3 className="font-display text-xl uppercase text-cream">
                  {item.name}
                </h3>
                <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-cream/65">
                  {item.description}
                </p>
                <div className="mt-4 flex min-h-7 items-center justify-between">
                  {item.price ? (
                    <span className="font-display text-lg text-brand-light">
                      {formatCurrency(item.price)}
                    </span>
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

        <Reveal className="mt-12 flex flex-col items-center gap-5">
          <p className="text-center text-sm text-cream/70">
            Para ver o cardápio completo, entre no iFood ou 99Food e faça seu
            pedido.
          </p>

          <div className="flex w-full max-w-xs flex-col items-center gap-3 sm:max-w-none sm:w-auto sm:flex-row sm:justify-center">
            <Button
              href={business.ifoodUrl}
              target="_blank"
              rel="noreferrer"
              icon={
                <img
                  src="/ifood-logo.png"
                  alt=""
                  className="h-7 w-auto brightness-0 invert"
                />
              }
              className="w-full bg-ifood shadow-ifood/30 hover:shadow-ifood/60 sm:w-auto"
            >
              Peça pelo iFood
            </Button>

            <span className="text-sm font-semibold text-cream/50">ou</span>

            <Button
              href={business.ninetyNineFoodUrl}
              target="_blank"
              rel="noreferrer"
              icon={<img src="/99food-logo.png" alt="" className="h-5 w-auto" />}
              className="w-full bg-ninety-nine text-ink shadow-ninety-nine/30 hover:shadow-ninety-nine/60 sm:w-auto"
            >
              Peça pelo 99Food
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
