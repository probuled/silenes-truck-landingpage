import { Button } from './Button';
import { WhatsAppIcon } from './icons';
import { cn } from '../utils/cn';
import type { BusinessInfo } from '../types/content';

type OrderButtonsSize = 'compact' | 'default' | 'large';

interface OrderButtonsProps {
  business: BusinessInfo;
  className?: string;
  size?: OrderButtonsSize;
  showSeparators?: boolean;
}

const sizeStyles: Record<OrderButtonsSize, { button: string; icon: string; logoHeight: string }> = {
  compact: { button: 'px-4 py-2.5 text-xs', icon: 'size-4', logoHeight: 'h-4' },
  default: { button: 'px-6 py-3.5 text-sm', icon: 'size-5', logoHeight: 'h-5' },
  large: { button: 'px-8 py-4 text-base', icon: 'size-5', logoHeight: 'h-5' },
};

export function OrderButtons({ business, className, size = 'default', showSeparators = true }: OrderButtonsProps) {
  const { button: buttonSize, icon: iconSize, logoHeight } = sizeStyles[size];

  return (
    <div className={cn('flex flex-wrap items-center gap-3', className)}>
      <Button
        href={business.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        icon={<WhatsAppIcon className={iconSize} />}
        className={cn('bg-whatsapp shadow-whatsapp/30 hover:shadow-whatsapp/60', buttonSize)}
        magnetic
      >
        Peça pelo WhatsApp
      </Button>

      {showSeparators && <span className="text-sm font-semibold text-cream/50">ou</span>}

      <Button
        href={business.ifoodUrl}
        target="_blank"
        rel="noreferrer"
        icon={<img src="/ifood-logo.png" alt="" className={cn(iconSize, 'brightness-0 invert')} />}
        className={cn('bg-ifood shadow-ifood/30 hover:shadow-ifood/60', buttonSize)}
      >
        Peça pelo iFood
      </Button>

      {showSeparators && <span className="text-sm font-semibold text-cream/50">ou</span>}

      <Button
        href={business.ninetyNineFoodUrl}
        target="_blank"
        rel="noreferrer"
        icon={<img src="/99food-logo.png" alt="" className={cn(logoHeight, 'w-auto')} />}
        className={cn('bg-ninety-nine text-ink shadow-ninety-nine/30 hover:shadow-ninety-nine/60', buttonSize)}
      >
        Peça pelo 99Food
      </Button>
    </div>
  );
}
