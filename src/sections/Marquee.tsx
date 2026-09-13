import { FlameIcon } from '../components/icons';

const PHRASES = [
  'Feito na chapa',
  'Carne no ponto certo',
  'Pão brioche fresquinho',
  'Pediu, chegou',
  'Blend artesanal',
  'Do jeitinho que você gosta',
  'Ingredientes selecionados',
  'Sabor de food truck',
  'Sempre fresquinho',
  'Feito na hora',
];

export function Marquee() {
  const items = [...PHRASES, ...PHRASES];

  return (
    <div className="overflow-hidden border-y border-border bg-surface py-4" aria-hidden="true">
      <div className="flex w-max animate-marquee gap-10">
        {items.map((phrase, index) => (
          <span
            key={`${phrase}-${index}`}
            className="flex items-center gap-3 font-display text-lg uppercase tracking-wide text-cream/70 sm:text-xl"
          >
            <FlameIcon className="size-4 text-brand" />
            {phrase}
          </span>
        ))}
      </div>
    </div>
  );
}
