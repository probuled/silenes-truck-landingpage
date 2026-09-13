import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { BurgerIcon } from '../components/icons';
import { useScrolled } from '../hooks/useScrolled';
import { cn } from '../utils/cn';
import sileneSticker from '../assets/brand/silene-sticker.png';

const NAV_LINKS = [
  { href: '#cardapio', label: 'Cardápio' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#horarios', label: 'Horários' },
];

export function Header() {
  const scrolled = useScrolled();

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled ? 'bg-ink/95 shadow-lg shadow-black/40 backdrop-blur' : 'bg-transparent',
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 sm:gap-3">
          <img
            src={sileneSticker}
            alt=""
            className="size-9 shrink-0 -rotate-3 drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)] sm:size-11"
          />
          <span className="flex flex-col font-display text-xl uppercase leading-[0.95] tracking-wide text-cream sm:flex-row sm:items-baseline sm:gap-1.5 sm:text-2xl sm:leading-none">
            <span>
              S
              <span className="relative inline-block">
                <BurgerIcon className="absolute -top-2.5 left-1/2 size-3 -translate-x-1/2 text-brand sm:-top-3 sm:size-3.5" />
                i
              </span>
              lene's
            </span>
            <span className="text-brand">Truck</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-semibold uppercase tracking-wide text-cream/80 transition-colors after:absolute after:-bottom-1 after:inset-x-0 after:h-px after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 hover:text-brand hover:after:scale-x-100 focus-visible:text-brand focus-visible:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="#contato" className="px-7 py-3.5 text-sm">
            Peça agora
          </Button>
        </div>

        <div className="md:hidden">
          <Button href="#contato" className="px-5 py-2.5 text-sm">
            Peça agora
          </Button>
        </div>
      </Container>
    </header>
  );
}
