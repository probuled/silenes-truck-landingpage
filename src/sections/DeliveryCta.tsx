import { Container } from '../components/Container';
import { Reveal } from '../components/Reveal';
import { Button } from '../components/Button';
import { WhatsAppIcon } from '../components/icons';
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
          <h2 id="cta-heading" className="font-display text-5xl uppercase leading-[0.95] text-cream sm:text-6xl">
            Pediu, <span className="text-brand">chegou!</span>
          </h2>
          <p className="max-w-xl text-lg text-cream/70">
            Peça pelo WhatsApp e receba seu hambúrguer fresquinho direto da chapa. Atendimento rápido, do
            jeitinho que você gosta.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              href={business.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              icon={<WhatsAppIcon className="size-5" />}
              className="px-8 py-4 text-base"
              magnetic
            >
              Chamar no WhatsApp
            </Button>
            <a href={`tel:+55${business.phoneDisplay.replace(/\D/g, '')}`} className="text-cream/70 hover:text-brand">
              ou ligue {business.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
