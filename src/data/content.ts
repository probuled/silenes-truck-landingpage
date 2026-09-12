import heroBurger from "../assets/photos/hero-burger.jpg";
import heroBurgerCutout from "../assets/photos/hero-burger.webp";
import bomGostoBurger from "../assets/photos/bom-gosto-burger.jpg";
import xTropicalBurger from "../assets/photos/x-tropical-burger.jpg";
import friedChickenBurger from "../assets/photos/fried-chicken-burger.jpg";
import venueSign from "../assets/photos/venue-sign.jpg";
import grillAction from "../assets/photos/grill-action.jpg";
import familyPhoto from "../assets/photos/family-photo.jpg";
import outdoorSeating from "../assets/photos/outdoor-seating.jpg";
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
      id: "bacon-supreme",
      name: "Bacon Supreme",
      description:
        "Pão brioche, blend bovino, bacon crocante, cheddar cremoso, cebola caramelizada e maionese da casa.",
      image: heroBurger,
      tag: "Mais pedido",
    },
    {
      id: "bom-gosto-duplo",
      name: "Bom Gosto Duplo",
      description:
        "Dois blends bovinos, bacon extra, cheddar derretido escorrendo e maionese especial no brioche.",
      image: bomGostoBurger,
      tag: "Duplo",
    },
    {
      id: "x-tropical",
      name: "X-Tropical",
      description:
        "Quente, suculento e levemente adocicado: o contraste perfeito com o sabor salgado do blend e queijo derretido.",
      price: 17.99,
      image: xTropicalBurger,
    },
    {
      id: "chicken-crispy",
      name: "Chicken Crispy",
      description:
        "Frango empanado crocante, maionese da casa, picles e alface fresquinha no pão brioche.",
      image: friedChickenBurger,
    },
  ],
  gallery: [
    {
      id: "sign",
      image: venueSign,
      alt: "Letreiro luminoso da Silene's Truck",
    },
    {
      id: "grill",
      image: grillAction,
      alt: "Hambúrgueres sendo grelhados na chapa da Silene's Truck",
    },
    {
      id: "family",
      image: familyPhoto,
      alt: "Clientes reunidos e sorrindo na Silene's Truck",
    },
    {
      id: "seating",
      image: outdoorSeating,
      alt: "Mesas ao ar livre com luzes decorativas da Silene's Truck",
    },
  ],
};
