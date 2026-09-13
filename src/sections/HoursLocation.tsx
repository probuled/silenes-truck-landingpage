import { motion } from "motion/react";
import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { Button } from "../components/Button";
import { ClockIcon, InstagramIcon } from "../components/icons";
import { useStoreStatus } from "../hooks/useStoreStatus";
import { staggerContainer, fadeUp } from "../animations/variants";
import { cn } from "../utils/cn";
import type { BusinessInfo } from "../types/content";

interface HoursLocationProps {
  business: BusinessInfo;
}

export function HoursLocation({ business }: HoursLocationProps) {
  const status = useStoreStatus(business);
  const today = new Date().getDay();
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address)}`;

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

        <Reveal className="mt-14 overflow-hidden rounded-3xl border border-border bg-surface lg:grid lg:grid-cols-[1.15fr_1fr]">
          <div className="flex h-full flex-col p-8 sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <ClockIcon className="size-6 text-brand" />
                <h3 className="font-display text-2xl uppercase text-cream">
                  Horário de funcionamento
                </h3>
              </div>

              <span
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em]",
                  status.isOpen
                    ? "border-emerald-500/40 text-emerald-400"
                    : "border-cream/20 text-cream/60",
                )}
              >
                <span
                  className={cn(
                    "size-2 rounded-full",
                    status.isOpen
                      ? "animate-pulse bg-emerald-400"
                      : "bg-cream/40",
                  )}
                />
                {status.label}
              </span>
            </div>

            <motion.ul
              variants={staggerContainer}
              className="mt-8 flex flex-col gap-1.5"
            >
              {business.schedule.map((entry) => {
                const isToday = entry.weekdays.includes(today);

                return (
                  <motion.li
                    key={entry.days}
                    variants={fadeUp}
                    className={cn(
                      "flex items-center justify-between gap-4 rounded-2xl px-4 py-3 transition-colors",
                      isToday && "bg-brand/10",
                    )}
                  >
                    <span
                      className={cn(
                        "flex items-center gap-2 capitalize",
                        isToday ? "text-cream" : "text-cream/60",
                      )}
                    >
                      {entry.days}
                      {isToday ? (
                        <span className="rounded-full bg-brand-dark px-2 py-0.5 text-xs font-semibold uppercase tracking-[0.1em] text-cream">
                          Hoje
                        </span>
                      ) : null}
                    </span>
                    <span
                      className={cn(
                        "font-semibold",
                        isToday && entry.hours !== "Fechado"
                          ? "text-brand-light"
                          : "text-cream/60",
                      )}
                    >
                      {entry.hours}
                    </span>
                  </motion.li>
                );
              })}
            </motion.ul>

            <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:mt-auto sm:flex-row sm:items-center sm:justify-between">
              <p className="font-display text-xl uppercase leading-none text-cream sm:text-2xl">
                Siga a gente no Instagram
              </p>
              <Button
                href={business.instagramUrl}
                target="_blank"
                rel="noreferrer"
                icon={<InstagramIcon className="size-5" />}
                className="self-start bg-gradient-to-tr from-instagram-start via-instagram-mid to-instagram-end shadow-lg shadow-instagram-mid/40 hover:shadow-instagram-mid/70 sm:self-auto"
              >
                {business.instagramHandle}
              </Button>
            </div>
          </div>

          <div className="relative flex flex-col border-t border-border lg:border-l lg:border-t-0">
            <div className="relative h-56 overflow-hidden lg:h-auto lg:min-h-[220px] lg:flex-1">
              <iframe
                title="Mapa de localização da Silene's Truck"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(business.address)}&z=15&output=embed`}
                className="h-full w-full grayscale-[0.35] invert-[0.9] hue-rotate-[180deg] brightness-[0.9] contrast-[1.05] saturate-[1.5] sepia-[0.12]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 flex items-center justify-center"
              >
                <span className="absolute size-10 rounded-full bg-brand/30 blur-xl" />
                <span className="relative flex size-3.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand/60" />
                  <span className="relative inline-flex size-3.5 rounded-full bg-brand-light shadow-[0_0_12px_2px_rgba(225,29,42,0.7)]" />
                </span>
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface to-transparent"
              />
            </div>

            <div className="flex flex-col justify-between gap-6 p-8 sm:p-10">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-light">
                  Onde estamos
                </span>
                <p className="mt-2 text-pretty text-lg font-medium leading-snug text-cream">
                  {business.address}
                </p>
                <p className="mt-2 text-sm text-cream/60">
                  Entrega, retirada ou mesinha no local.
                </p>
              </div>
              <Button
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                variant="outline"
                className="self-start"
              >
                Traçar rota
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
