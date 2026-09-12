import { Container } from '../components/Container';
import { InstagramIcon, WhatsAppIcon, MapPinIcon, ClockIcon } from '../components/icons';
import type { BusinessInfo } from '../types/content';

interface FooterProps {
  business: BusinessInfo;
}

export function Footer({ business }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface py-14">
      <Container className="grid gap-10 sm:grid-cols-3">
        <div>
          <span className="font-display text-2xl uppercase text-cream">
            Silene's <span className="text-brand">Truck</span>
          </span>
          <p className="mt-3 text-sm text-cream/60">{business.tagline}</p>
          <div className="mt-5 flex gap-4">
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram da Silene's Truck"
              className="flex size-10 items-center justify-center rounded-full border border-border text-cream/70 transition-colors hover:border-brand hover:text-brand focus-visible:border-brand focus-visible:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              <InstagramIcon className="size-5" />
            </a>
            <a
              href={business.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp da Silene's Truck"
              className="flex size-10 items-center justify-center rounded-full border border-border text-cream/70 transition-colors hover:border-brand hover:text-brand focus-visible:border-brand focus-visible:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              <WhatsAppIcon className="size-5" />
            </a>
          </div>
        </div>

        <div className="text-sm text-cream/70">
          <h3 className="font-display text-base uppercase tracking-wide text-cream">Horários</h3>
          <ul className="mt-3 space-y-2">
            {business.schedule.map((entry) => (
              <li key={entry.days} className="flex items-center gap-2">
                <ClockIcon className="size-4 text-brand" />
                {entry.days}: {entry.hours}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-sm text-cream/70">
          <h3 className="font-display text-base uppercase tracking-wide text-cream">Onde estamos</h3>
          <p className="mt-3 flex items-start gap-2">
            <MapPinIcon className="mt-0.5 size-4 shrink-0 text-brand" />
            {business.address}
          </p>
        </div>
      </Container>

      <Container className="mt-10 border-t border-border pt-6 text-xs text-cream/60">
        © {year} Silene's Truck. Todos os direitos reservados.
      </Container>
    </footer>
  );
}
