import { useLoaderData } from 'react-router';
import { Header } from '../sections/Header';
import { Hero } from '../sections/Hero';
import { Marquee } from '../sections/Marquee';
import { Menu } from '../sections/Menu';
import { About } from '../sections/About';
import { HoursLocation } from '../sections/HoursLocation';
import { DeliveryCta } from '../sections/DeliveryCta';
import { Footer } from '../sections/Footer';
import type { homeLoader } from '../routes';

export function Home() {
  const { business, menu, gallery } = useLoaderData() as ReturnType<typeof homeLoader>;

  return (
    <>
      <a
        href="#cardapio-heading"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-cream"
      >
        Pular para o conteúdo
      </a>

      <Header business={business} />

      <main>
        <Hero business={business} heroItem={menu[0]} />
        <Marquee />
        <Menu items={menu} business={business} />
        <About photos={gallery} />
        <HoursLocation business={business} />
        <DeliveryCta business={business} />
      </main>

      <Footer business={business} />
    </>
  );
}
