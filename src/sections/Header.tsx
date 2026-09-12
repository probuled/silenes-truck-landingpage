import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { WhatsAppIcon } from '../components/icons';
import { useScrolled } from '../hooks/useScrolled';
import { cn } from '../utils/cn';
import type { BusinessInfo } from '../types/content';

const NAV_LINKS = [
  { href: '#cardapio', label: 'Cardápio' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#horarios', label: 'Horários' },
  { href: '#contato', label: 'Contato' },
];

interface HeaderProps {
  business: BusinessInfo;
}

export function Header({ business }: HeaderProps) {
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
        <a href="#top" className="font-display text-2xl uppercase leading-none tracking-wide text-cream">
          Silene's <span className="text-brand">Truck</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-semibold uppercase tracking-wide text-cream/80 transition-colors after:absolute after:-bottom-1 after:inset-x-0 after:h-px after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 hover:text-brand hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            href={business.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            icon={<WhatsAppIcon className="size-4" />}
            className="px-5 py-2.5 text-xs"
          >
            Peça agora
          </Button>
        </div>

        <button
          type="button"
          className="flex flex-col gap-1.5 p-2 md:hidden"
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
                  className="text-base font-semibold uppercase tracking-wide text-cream/90 hover:text-brand"
                >
                  {link.label}
                </a>
              ))}
              <Button
                href={business.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                icon={<WhatsAppIcon className="size-4" />}
                className="mt-2"
              >
                Peça agora
              </Button>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
