import heroBurgerCutout from "../assets/photos/hero-burger.webp";
import xBurguer from "../assets/photos/x-burguer.jpg";
import xTropicalBurger from "../assets/photos/x-tropical-burger.jpg";
import bomGostoBurger from "../assets/photos/bom-gosto-burger.jpg";
import friedChickenBurger from "../assets/photos/fried-chicken-burger.jpg";
import xEggBurger from "../assets/photos/x-egg-burger.jpg";
import cheddarBaconBurger from "../assets/photos/cheddar-bacon-burger.jpg";
import onionCheddarBurger from "../assets/photos/onion-cheddar-burger.jpg";
import xCalabresaBurger from "../assets/photos/x-calabresa-burger.jpg";
import nordestinoBurger from "../assets/photos/nordestino-burger.jpg";
import xFrangoBurger from "../assets/photos/x-frango-burger.jpg";
import especialCamaraoBurger from "../assets/photos/especial-camarao-burger.jpg";
import familyPhoto from "../assets/photos/family-photo.jpg";
import type { SiteContent } from "../types/content";

export const siteContent: SiteContent = {
  heroImage: heroBurgerCutout,
  business: {
    name: "Silene's Truck",
    tagline: "Hambúrguer bem-feito, do jeitinho que você gosta",
    phoneDisplay: "(81) 7330-2704",
    whatsappUrl: "https://wa.me/558173302704",
    ifoodUrl:
      "https://www.ifood.com.br/delivery/paulista-pe/silenes-truck-maranguape-i/18ce0325-d19f-4bfa-baa2-f2a434a48afb?utm_medium=share",
    ninetyNineFoodUrl: "https://oia.99app.com/dlp9/Rz2pji",
    instagramUrl: "https://www.instagram.com/silenestruck/",
    instagramHandle: "@silenestruck",
    address: "Av. Antônio Cabral de Souza, 1770 - Paulista, PE",
    schedule: [
      { days: "Terça a quinta", hours: "17h às 23h30" },
      { days: "Sexta a domingo", hours: "17h às 00h" },
      { days: "Segunda-feira", hours: "Fechado" },
    ],
    closedWeekday: 1,
    openHour: 17,
    openMinute: 0,
    closeHourByWeekday: {
      0: { hour: 24, minute: 0 },
      2: { hour: 23, minute: 30 },
      3: { hour: 23, minute: 30 },
      4: { hour: 23, minute: 30 },
      5: { hour: 24, minute: 0 },
      6: { hour: 24, minute: 0 },
    },
  },
  menu: [
    {
      id: "x-salada",
      name: "X-Salada",
      description:
        "Delicie-se com nosso X-Salada, uma combinação clássica de pão brioche, blend bovino suculento de 100g, salada fresca, queijo e molho especial da casa.",
      price: 22.7,
      image: xBurguer,
      tag: "Mais pedido",
    },
    {
      id: "x-tropical",
      name: "X-Tropical",
      description:
        "Experimente o X-Tropical, uma fusão exótica de pão brioche, blend bovino de 100g, abacaxi grelhado, queijo mussarela e nosso molho especial da casa.",
      price: 21.0,
      image: xTropicalBurger,
    },
    {
      id: "cheddar-duplo-bacon",
      name: "Cheddar Duplo Bacon",
      description:
        "Desfrute do Cheddar Duplo Bacon, com pão brioche, dois blends bovinos de 100g, cebola caramelizada, cheddar, bacon e molho especial da casa.",
      price: 39.99,
      image: bomGostoBurger,
    },
    {
      id: "chicken-crispy",
      name: "Chicken Crispy",
      description:
        "Frango empanado crocante, maionese da casa, picles e alface fresquinha no pão brioche.",
      price: 16.99,
      image: friedChickenBurger,
    },
    {
      id: "x-egg",
      name: "X-Egg",
      description:
        "Aprecie o X-Egg, com pão brioche, blend de 100g, ovo, queijo mussarela, salada e molho especial da casa.",
      price: 21.0,
      image: xEggBurger,
    },
    {
      id: "cheddar-bacon",
      name: "Cheddar Bacon",
      description:
        "Saboreie o Cheddar Bacon, com pão brioche, blend bovino de 100g, cebola caramelizada, cheddar cremoso, bacon crocante e molho especial da casa.",
      price: 23.5,
      image: cheddarBaconBurger,
    },
    {
      id: "onion-cheddar",
      name: "Onion Cheddar",
      description:
        "Delicie-se com o Onion Cheddar, com pão brioche, blend de 100g, cheddar, cebola e molho especial da casa.",
      price: 23.5,
      image: onionCheddarBurger,
    },
    {
      id: "x-calabresa",
      name: "X-Calabresa",
      description:
        "Experimente o X-Calabresa, com pão brioche, blend de 100g, calabresa grelhada, queijo mussarela, salada e molho especial da casa.",
      price: 25.0,
      image: xCalabresaBurger,
    },
    {
      id: "nordestino",
      name: "Nordestino",
      description:
        "Experimente o Nordestino, com pão brioche, blend bovino de 100g, cebola caramelizada, charque desfiada, queijo coalho e molho especial da casa.",
      price: 32.5,
      image: nordestinoBurger,
    },
    {
      id: "x-frango",
      name: "X-Frango",
      description:
        "Saboreie o X-Frango, com pão brioche, blend de frango de 120g, isca de frango grelhada, salada, queijo mussarela e maionese grilhada.",
      price: 32.5,
      image: xFrangoBurger,
    },
    {
      id: "especial-camarao",
      name: "Especial Camarão",
      description:
        "Desfrute do Especial Camarão, com pão brioche, blend bovino de 100g, camarão, queijo mussarela, Catupiry Original e molho especial da casa.",
      price: 37.0,
      image: especialCamaraoBurger,
    },
  ],
  gallery: [
    {
      id: "family",
      image: familyPhoto,
      alt: "Clientes reunidos e sorrindo na Silene's Truck",
    },
  ],
};
