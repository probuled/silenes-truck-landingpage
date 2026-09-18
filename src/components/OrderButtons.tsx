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
  stackOnMobile?: boolean;
  hideWhatsapp?: boolean;
}

const sizeStyles: Record<
  OrderButtonsSize,
  { button: string; icon: string; logoHeight: string; containerGap: string }
> = {
  compact: { button: 'px-4 py-3.5 text-xs', icon: 'size-4', logoHeight: 'h-5', containerGap: 'gap-3' },
  default: { button: 'px-6 py-3.5 text-sm', icon: 'size-5', logoHeight: 'h-6', containerGap: 'gap-3' },
  large: { button: 'px-8 py-4 text-base', icon: 'size-5', logoHeight: 'h-7', containerGap: 'gap-3' },
};

export function OrderButtons({
  business,
  className,
  size = 'default',
  showSeparators = true,
  stackOnMobile = false,
  hideWhatsapp = false,
}: OrderButtonsProps) {
  const { button: buttonSize, icon: iconSize, logoHeight, containerGap } = sizeStyles[size];
  const separatorClassName = cn(
    'text-sm font-semibold text-cream/50',
    stackOnMobile && 'hidden lg:inline',
  );

  return (
    <div
      className={cn(
        'flex flex-wrap items-center',
        stackOnMobile && 'w-full flex-col items-stretch lg:w-auto lg:flex-row lg:items-center',
        containerGap,
        className,
      )}
    >
      {!hideWhatsapp && (
        <Button
          href={business.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          icon={<WhatsAppIcon className={iconSize} />}
          className={cn(
            'bg-whatsapp shadow-whatsapp/30 hover:shadow-whatsapp/60',
            buttonSize,
            stackOnMobile && 'w-full lg:w-auto',
          )}
          magnetic
        >
          Peça pelo WhatsApp
        </Button>
      )}

      <div
        className={cn(
          'flex items-center',
          stackOnMobile && 'w-full lg:w-auto',
          containerGap,
        )}
      >
        {showSeparators && !hideWhatsapp && <span className={separatorClassName}>ou</span>}

        <Button
          href={business.ifoodUrl}
          target="_blank"
          rel="noreferrer"
          icon={<img src="/ifood-logo.png" alt="" className={cn(logoHeight, 'w-auto brightness-0 invert')} />}
          className={cn(
            'bg-ifood shadow-ifood/30 hover:shadow-ifood/60',
            buttonSize,
            stackOnMobile && 'w-full lg:w-auto',
          )}
        >
          Peça pelo iFood
        </Button>
      </div>

      <div
        className={cn(
          'flex items-center',
          stackOnMobile && 'w-full lg:w-auto',
          containerGap,
        )}
      >
        {showSeparators && <span className={separatorClassName}>ou</span>}

        <Button
          href={business.ninetyNineFoodUrl}
          target="_blank"
          rel="noreferrer"
          icon={<img src="/99food-logo.png" alt="" className={cn(logoHeight, 'w-auto')} />}
          className={cn(
            'bg-ninety-nine text-ink shadow-ninety-nine/30 hover:shadow-ninety-nine/60',
            buttonSize,
            stackOnMobile && 'w-full lg:w-auto',
          )}
        >
          Peça pelo 99Food
        </Button>
      </div>
    </div>
  );
}
