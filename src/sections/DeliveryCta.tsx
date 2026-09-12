import { Container } from '../components/Container';
import { Reveal } from '../components/Reveal';
import { OrderButtons } from '../components/OrderButtons';
import type { BusinessInfo } from '../types/content';

interface DeliveryCtaProps {
  business: BusinessInfo;
}

export function DeliveryCta({ business }: DeliveryCtaProps) {
  return (
    <section id="contato" className="relative overflow-hidden py-24 sm:py-28" aria-labelledby="cta-heading">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(120deg,rgba(225,29,42,0.25),transparent_60%)]"
      />
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <Reveal className="flex flex-col items-center gap-6">
          <h2
            id="cta-heading"
            className="text-balance font-display text-5xl uppercase leading-[0.95] text-cream sm:text-6xl"
          >
            Pediu, <span className="text-brand">chegou!</span>
          </h2>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-cream/70">
            Peça pelo WhatsApp e receba seu hambúrguer fresquinho direto da chapa. Atendimento rápido, do
            jeitinho que você gosta.
          </p>
          <OrderButtons business={business} className="justify-center" buttonClassName="px-8 py-4 text-base" />
          <a
            href={`tel:+55${business.phoneDisplay.replace(/\D/g, '')}`}
            className="rounded-sm text-cream/70 hover:text-brand-light focus-visible:text-brand-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            ou ligue {business.phoneDisplay}
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
