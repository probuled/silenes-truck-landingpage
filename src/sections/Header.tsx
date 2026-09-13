import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || menuOpen ? 'bg-ink/95 shadow-lg shadow-black/40 backdrop-blur' : 'bg-transparent',
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 sm:gap-3">
          <img
            src={sileneSticker}
            alt=""
            className="size-9 shrink-0 -rotate-3 drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)] sm:size-11"
          />
          <span className="font-display text-xl uppercase leading-none tracking-wide text-cream sm:text-2xl">
            S
            <span className="relative inline-block">
              <BurgerIcon className="absolute -top-2.5 left-1/2 size-3 -translate-x-1/2 text-brand sm:-top-3 sm:size-3.5" />
              i
            </span>
            lene's <span className="text-brand">Truck</span>
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
          <Button href="#contato" className="px-5 py-2.5 text-xs">
            Peça agora
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Button href="#contato" className="px-4 py-2 text-xs">
            Peça
          </Button>

          <button
            type="button"
            className="flex flex-col gap-1.5 rounded-sm p-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span
              className={cn(
                'block h-0.5 w-6 bg-cream transition-transform duration-300',
                menuOpen && 'translate-y-2 rotate-45',
              )}
            />
            <span
              className={cn('block h-0.5 w-6 bg-cream transition-opacity duration-300', menuOpen && 'opacity-0')}
            />
            <span
              className={cn(
                'block h-0.5 w-6 bg-cream transition-transform duration-300',
                menuOpen && '-translate-y-2 -rotate-45',
              )}
            />
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            aria-label="Navegação móvel"
            className="overflow-hidden border-t border-border md:hidden"
          >
            <Container className="flex flex-col gap-5 py-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-sm text-base font-semibold uppercase tracking-wide text-cream/90 hover:text-brand focus-visible:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  {link.label}
                </a>
              ))}
              <Button href="#contato" onClick={() => setMenuOpen(false)} className="mt-2">
                Peça agora
              </Button>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
