import { Button } from './Button';
import { WhatsAppIcon } from './icons';
import { cn } from '../utils/cn';
import type { BusinessInfo } from '../types/content';

interface OrderButtonsProps {
  business: BusinessInfo;
  className?: string;
  buttonClassName?: string;
}

export function OrderButtons({ business, className, buttonClassName }: OrderButtonsProps) {
  return (
    <div className={cn('flex flex-wrap items-center gap-4', className)}>
      <Button
        href={business.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        icon={<WhatsAppIcon className="size-5" />}
        className={cn('bg-whatsapp shadow-whatsapp/30 hover:shadow-whatsapp/60', buttonClassName)}
        magnetic
      >
        Peça pelo WhatsApp
      </Button>

      <span className="text-sm font-semibold text-cream/50">ou</span>

      <Button
        href={business.ifoodUrl}
        target="_blank"
        rel="noreferrer"
        icon={<img src="/ifood-logo.png" alt="" className="size-5 brightness-0 invert" />}
        className={cn('bg-ifood shadow-ifood/30 hover:shadow-ifood/60', buttonClassName)}
      >
        Peça pelo iFood
      </Button>

      <span className="text-sm font-semibold text-cream/50">ou</span>

      <Button
        href={business.ninetyNineFoodUrl}
        target="_blank"
        rel="noreferrer"
        icon={<img src="/99food-logo.png" alt="" className="h-5 w-auto" />}
        className={cn('bg-ninety-nine text-ink shadow-ninety-nine/30 hover:shadow-ninety-nine/60', buttonClassName)}
      >
        Peça pelo 99Food
      </Button>
    </div>
  );
}
