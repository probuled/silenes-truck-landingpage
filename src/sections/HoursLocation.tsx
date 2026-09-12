import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { Button } from "../components/Button";
import { ClockIcon, MapPinIcon } from "../components/icons";
import { useStoreStatus } from "../hooks/useStoreStatus";
import { cn } from "../utils/cn";
import type { BusinessInfo } from "../types/content";

interface HoursLocationProps {
  business: BusinessInfo;
}

export function HoursLocation({ business }: HoursLocationProps) {
  const status = useStoreStatus(business);

  return (
    <section
      id="horarios"
      className="py-24 sm:py-32"
      aria-labelledby="horarios-heading"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Horários & Localização"
            title={
              <span id="horarios-heading">Quando e onde te esperamos</span>
            }
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal className="rounded-3xl border border-border bg-surface p-8">
            <div className="flex items-center gap-3">
              <ClockIcon className="size-6 text-brand" />
              <h3 className="font-display text-2xl uppercase text-cream">
                Horário de funcionamento
              </h3>
            </div>

            <ul className="mt-6 divide-y divide-border">
              {business.schedule.map((entry) => (
                <li
                  key={entry.days}
                  className="flex items-center justify-between py-3 text-cream/80"
                >
                  <span className="capitalize">{entry.days}</span>
                  <span
                    className={cn(
                      "font-semibold",
                      entry.hours === "Fechado" && "text-cream/60",
                    )}
                  >
                    {entry.hours}
                  </span>
                </li>
              ))}
            </ul>

            <span
              className={cn(
                "mt-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em]",
                status.isOpen
                  ? "border-emerald-500/40 text-emerald-400"
                  : "border-cream/20 text-cream/60",
              )}
            >
              <span
                className={cn(
                  "size-2 rounded-full",
                  status.isOpen ? "bg-emerald-400" : "bg-cream/40",
                )}
              />
              {status.label}
            </span>
          </Reveal>

          <Reveal
            delay={0.1}
            className="flex flex-col overflow-hidden rounded-3xl border border-border bg-surface"
          >
            <iframe
              title="Mapa de localização da Silene's Truck"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(business.address)}&z=15&output=embed`}
              className="h-64 w-full grayscale invert-[0.92] contrast-[1.1]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="flex flex-1 flex-col justify-between gap-6 p-8">
              <div className="flex items-start gap-3">
                <MapPinIcon className="mt-1 size-6 shrink-0 text-brand" />
                <div>
                  <h3 className="font-display text-2xl uppercase text-cream">
                    Endereço
                  </h3>
                  <p className="mt-2 text-cream/70">{business.address}</p>
                  <p className="mt-2 text-sm text-cream/60">
                    Entrega, retirada ou mesinha no local.
                  </p>
                </div>
              </div>
              <Button
                href={business.mapsUrl}
                target="_blank"
                rel="noreferrer"
                variant="outline"
                className="self-start"
              >
                Traçar rota
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
