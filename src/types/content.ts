export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price?: number;
  image: string;
  tag?: string;
}

export interface DayHours {
  days: string;
  hours: string;
}

export interface GalleryPhoto {
  id: string;
  image: string;
  alt: string;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  phoneDisplay: string;
  whatsappUrl: string;
  ifoodUrl: string;
  ninetyNineFoodUrl: string;
  instagramUrl: string;
  instagramHandle: string;
  address: string;
  schedule: DayHours[];
  closedWeekday: number;
  openHour: number;
  openMinute: number;
  closeHourByWeekday: Record<number, { hour: number; minute: number }>;
}

export interface SiteContent {
  heroImage: string;
  business: BusinessInfo;
  menu: MenuItem[];
  gallery: GalleryPhoto[];
}
