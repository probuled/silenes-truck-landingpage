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
  instagramUrl: string;
  instagramHandle: string;
  address: string;
  mapsUrl: string;
  schedule: DayHours[];
  closedWeekday: number;
  openHour: number;
  openMinute: number;
  closeHourByWeekday: Record<number, { hour: number; minute: number }>;
}

export interface SiteContent {
  business: BusinessInfo;
  menu: MenuItem[];
  gallery: GalleryPhoto[];
}
