import { Container } from '../components/Container';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { slideInRight } from '../animations/variants';
import type { GalleryPhoto } from '../types/content';

interface AboutProps {
  photos: GalleryPhoto[];
}

export function About({ photos }: AboutProps) {
  const [sign, grill, family, seating] = photos;

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
            title={<span id="sobre-heading">Um food truck que virou ponto de encontro</span>}
          />
          <div className="mt-6 space-y-4 text-cream/70">
            <p>
              A Silene's Truck nasceu para servir hambúrguer artesanal com o cuidado de quem cozinha para a
              família: ingredientes frescos, blend selecionado e tudo montado na hora do seu pedido.
            </p>
            <p>
              Hoje somos parada certa em Paulista para quem quer boa comida, música e um clima gostoso ao ar
              livre — de terça a domingo, sempre a partir das 17h.
            </p>
          </div>
        </Reveal>

        <Reveal variants={slideInRight} className="grid grid-cols-2 gap-4">
          <img
            src={sign.image}
            alt={sign.alt}
            loading="lazy"
            decoding="async"
            width={500}
            height={620}
            className="col-span-1 row-span-2 h-full w-full rounded-3xl border border-border object-cover"
          />
          <img
            src={grill.image}
            alt={grill.alt}
            loading="lazy"
            decoding="async"
            width={500}
            height={300}
            className="h-full w-full rounded-3xl border border-border object-cover"
          />
          <img
            src={family.image}
            alt={family.alt}
            loading="lazy"
            decoding="async"
            width={500}
            height={300}
            className="h-full w-full rounded-3xl border border-border object-cover"
          />
          <img
            src={seating.image}
            alt={seating.alt}
            loading="lazy"
            decoding="async"
            width={1000}
            height={300}
            className="col-span-2 h-full w-full rounded-3xl border border-border object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
