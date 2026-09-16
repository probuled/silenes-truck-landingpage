import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { OrderButtons } from "../components/OrderButtons";
import type { BusinessInfo } from "../types/content";

interface DeliveryCtaProps {
  business: BusinessInfo;
}

export function DeliveryCta({ business }: DeliveryCtaProps) {
  return (
    <section
      id="contato"
      className="relative overflow-hidden py-24 sm:py-28"
      aria-labelledby="cta-heading"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(120deg,rgba(225,29,42,0.25),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 size-[420px] -translate-x-1/2 -translate-y-1/2 animate-breathe rounded-full bg-brand/25 blur-3xl"
      />
      <Container className="relative flex flex-col items-center gap-6 text-center lg:max-w-7xl">
        <Reveal className="flex w-full flex-col items-center gap-6">
          <h2
            id="cta-heading"
            className="text-balance font-display text-5xl uppercase leading-[0.95] text-cream sm:text-6xl"
          >
            Pediu, <span className="text-brand">chegou!</span>
          </h2>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-cream/70">
            Peça pelo Ifood, 99Food ou Anota Ai e receba seu hambúrguer
            fresquinho direto da chapa. Atendimento rápido, do jeitinho que
            você gosta.
          </p>
          <OrderButtons
            business={business}
            className="max-w-sm justify-center lg:max-w-none"
            size="default"
            stackOnMobile
            hideWhatsapp
          />
        </Reveal>
      </Container>
    </section>
  );
}
