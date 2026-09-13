import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { slideInRight } from "../animations/variants";
import type { GalleryPhoto } from "../types/content";

interface AboutProps {
  photos: GalleryPhoto[];
}

export function About({ photos }: AboutProps) {
  const [family] = photos;

  return (
    <section
      id="sobre"
      className="bg-[linear-gradient(180deg,var(--color-ink)_0%,var(--color-surface)_12%,var(--color-surface)_88%,var(--color-ink)_100%)] py-24 sm:py-32"
      aria-labelledby="sobre-heading"
    >
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <SectionHeading
            eyebrow="Nossa história"
            title={
              <span id="sobre-heading">
                Um food truck que virou ponto de encontro
              </span>
            }
          />
          <div className="mt-6 max-w-[62ch] space-y-4 text-cream/70">
            <p className="text-pretty leading-relaxed">
              A Silene's Truck nasceu para servir hambúrguer artesanal com o
              cuidado de quem cozinha para a família: ingredientes frescos,
              blend selecionado e tudo montado na hora do seu pedido.
            </p>
            <p className="text-pretty leading-relaxed">
              Hoje somos parada certa em Paulista para quem quer boa comida,
              música e um clima gostoso ao ar livre, de terça a domingo, sempre
              a partir das 17h.
            </p>
          </div>
        </Reveal>

        <Reveal variants={slideInRight}>
          <img
            src={family.image}
            alt={family.alt}
            loading="lazy"
            decoding="async"
            width={800}
            height={946}
            className="aspect-[800/946] w-full rounded-3xl border border-border object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
