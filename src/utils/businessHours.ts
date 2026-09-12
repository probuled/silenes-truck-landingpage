import type { BusinessInfo } from '../types/content';

const WEEKDAY_LABELS = [
  'domingo',
  'segunda-feira',
  'terça-feira',
  'quarta-feira',
  'quinta-feira',
  'sexta-feira',
  'sábado',
];

function minutesSinceMidnight(hour: number, minute: number): number {
  return hour * 60 + minute;
}

export interface StoreStatus {
  isOpen: boolean;
  label: string;
}

export function getStoreStatus(business: BusinessInfo, now: Date): StoreStatus {
  const weekday = now.getDay();
  const closing = business.closeHourByWeekday[weekday];

  if (!closing) {
    const nextDay = WEEKDAY_LABELS[(weekday + 1) % 7];
    return { isOpen: false, label: `Fechado hoje · abrimos ${nextDay} às 17h` };
  }

  const nowMinutes = minutesSinceMidnight(now.getHours(), now.getMinutes());
  const opensAt = minutesSinceMidnight(business.openHour, business.openMinute);
  const closesAt = minutesSinceMidnight(closing.hour, closing.minute);

  if (nowMinutes < opensAt) {
    return { isOpen: false, label: `Abrimos hoje às ${business.openHour}h` };
  }

  if (nowMinutes >= closesAt) {
    const nextDay = WEEKDAY_LABELS[(weekday + 1) % 7];
    const nextClosing = business.closeHourByWeekday[(weekday + 1) % 7];
    return nextClosing
      ? { isOpen: false, label: `Fechado agora · abrimos ${nextDay} às 17h` }
      : { isOpen: false, label: `Fechado agora · abrimos terça-feira às 17h` };
  }

  const closeLabel = closing.hour >= 24 ? '00h' : `${closing.hour}h${closing.minute ? '30' : ''}`;
  return { isOpen: true, label: `Aberto agora · fecha às ${closeLabel}` };
}
