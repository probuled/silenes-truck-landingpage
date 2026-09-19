import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { OrderButtons } from "../components/OrderButtons";
import { SectionHeading } from "../components/SectionHeading";
import { cn } from "../utils/cn";
import type { BusinessInfo } from "../types/content";

interface DeliveryCtaProps {
  business: BusinessInfo;
}

interface MealVoucherProvider {
  name: string;
  logo: string;
  /** Recorta a margem branca de algumas logos para preencher o tile por completo. */
  imageClassName?: string;
}

const MEAL_VOUCHER_PROVIDERS: MealVoucherProvider[] = [
  { name: "VR", logo: "/vr-logo.png", imageClassName: "scale-125" },
  { name: "Ticket", logo: "/ticket-logo.png" },
  { name: "Alelo", logo: "/alelo-logo.png" },
  { name: "Sodexo", logo: "/sodexo-logo.jpg" },
  { name: "Pluxee", logo: "/pluxee-logo.png" },
];

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
            Peça pelo Ifood ou 99Food e receba seu hambúrguer fresquinho direto
            da chapa. Atendimento rápido, do jeitinho que você gosta.
          </p>
          <OrderButtons
            business={business}
            className="max-w-sm justify-center lg:max-w-none"
            size="default"
            stackOnMobile
            hideWhatsapp
          />

          <div className="mt-14 flex w-full flex-col items-center gap-8 border-t border-cream/10 pt-12">
            <SectionHeading
              eyebrow="Pagamento no local"
              title="Aceitamos também vale refeição"
              description={
                <>
                  Vindo presencialmente, aceitamos crédito, pix e débito. E o
                  mais importante: também aceitamos{" "}
                  <span className="font-semibold text-brand-light">
                    vale alimentação
                  </span>{" "}
                  dos seguintes parceiros:
                </>
              }
              align="center"
            />

            <div className="flex max-w-[300px] flex-wrap items-center justify-center gap-4 sm:max-w-none">
              {MEAL_VOUCHER_PROVIDERS.map((provider) => (
                <div
                  key={provider.name}
                  className="aspect-square w-20 overflow-hidden rounded-2xl shadow-lg shadow-black/30 sm:w-24"
                >
                  <img
                    src={provider.logo}
                    alt={provider.name}
                    loading="lazy"
                    className={cn(
                      "h-full w-full object-cover",
                      provider.imageClassName,
                    )}
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
