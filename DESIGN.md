---
name: Silene's Truck
description: Hamburgueria artesanal em Paulista, PE — landing page escura, quente e direta ao WhatsApp
colors:
  carvao: "#050505"
  superficie: "#121212"
  superficie-elevada: "#1a1a1a"
  contorno: "#2a2a2a"
  brasa: "#e11d2a"
  brasa-viva: "#ff4d54"
  brasa-profunda: "#a3141e"
  creme: "#f5efe6"
  aberto: "#34d399"
typography:
  display:
    fontFamily: "'Anton', 'Arial Narrow', sans-serif"
    fontSize: "clamp(2.25rem, 6vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "normal"
  body:
    fontFamily: "'Inter', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "'Inter', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.1em"
rounded:
  pill: "9999px"
  card: "24px"
spacing:
  container-x: "24px"
  gap-sm: "16px"
  gap-md: "24px"
  gap-lg: "32px"
  gap-xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.brasa-profunda}"
    textColor: "{colors.creme}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.brasa-profunda}"
    textColor: "{colors.creme}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.creme}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.creme}"
    padding: "8px 12px"
  card-cardapio:
    backgroundColor: "{colors.superficie}"
    rounded: "{rounded.card}"
  status-badge-aberto:
    backgroundColor: "transparent"
    textColor: "{colors.aberto}"
    rounded: "{rounded.pill}"
    padding: "6px 16px"
  status-badge-fechado:
    backgroundColor: "transparent"
    textColor: "{colors.creme}"
    rounded: "{rounded.pill}"
    padding: "6px 16px"
---

# Design System: Silene's Truck

## Overview

**Creative North Star: "A Chapa Depois do Escurecer"**

O site simula o próprio food truck de noite: fundo quase preto (carvão), luz vermelha de brasa pulsando em pontos específicos, e a comida como único elemento totalmente iluminado na cena. Tudo em volta é escuro e contido de propósito — igual à experiência real de chegar num food truck depois das 17h, guiado pela luz e pelo cheiro da chapa.

A composição é direta e sem rodeios: tipografia condensada em caixa alta grita como um letreiro de trailer, o corpo de texto em Inter é conversacional e caloroso ("do jeitinho que você gosta"), e cada seção converge para uma única ação — abrir o WhatsApp. Não há ornamento gratuito; os poucos efeitos de movimento (embers subindo, respiração do glow, tilt 3D no hambúrguer do hero) existem para reforçar "comida saindo quente da chapa", não para impressionar por si.

Rejeições confirmadas pela implementação: nada de cards com sombra neutra genérica (a profundidade vem de contorno + glow colorido, nunca de `box-shadow` cinza); nada de paleta pastel ou clean-editorial — o contraste é alto e a cor é usada com intenção, não decoração.

**Key Characteristics:**
- Fundo quase-preto (#050505) como tela de fundo constante — nunca branco, nunca claro.
- Um único acento vermelho-brasa que carrega toda a urgência/CTA do sistema.
- Tipografia display condensada e sempre em caixa alta, corpo de texto sempre em Inter.
- Cantos sempre arredondados — `rounded-3xl` em cards/fotos, `rounded-full` em pílulas e botões — nunca cantos retos.
- Profundidade por contorno + glow, não por sombra neutra.
- Micro-interações com propósito culinário/físico (fogo, calor, brasa), não decoração abstrata.

## Colors

Paleta escura e de alto contraste: um fundo quase-preto, um vermelho de brasa como único acento, e cream como cor de leitura — sem paleta secundária/terciária, de propósito.

### Primary
- **Brasa** (`#e11d2a`): o único acento do sistema. Usado em CTAs, links ativos, ícones em destaque, eyebrows, preço do cardápio, tags "Mais pedido". Reservado a elementos de ação ou destaque — nunca em blocos grandes de fundo.
- **Brasa Viva** (`#ff4d54`): a cor de texto para todo uso de brasa em texto normal/pequeno diretamente sobre o fundo escuro (eyebrow, preço do cardápio, hover de link/botão outline/ghost) — mais clara que `brasa` para limpar o mínimo AA de 4.5:1 como texto. `brasa` (base) permanece reservada a preenchimentos grandes, títulos display (≥24px) e ícones, onde o limiar de 3:1 já é suficiente.
- **Brasa Profunda** (`#a3141e`): fundo do botão primário (repouso e hover) — o único tom de brasa escuro o bastante para manter texto `creme` acima do mínimo AA (4.5:1) quando usado como fill sólido. O feedback de hover não troca a cor de fundo; vem do glow (`shadow-brand/60`) e da elevação (`-translate-y-0.5`).

### Neutral
- **Carvão** (`#050505`): fundo base de toda a página (`body`), a "noite" sobre a qual tudo acontece.
- **Superfície** (`#121212`): fundo de cards, seções elevadas (menu, horários, header com scroll) — um degrau de luz acima do carvão.
- **Superfície Elevada** (`#1a1a1a`): definida no tema, ainda sem uso em componente — reserva para uma camada de elevação futura acima de Superfície.
- **Contorno** (`#2a2a2a`): toda borda hairline do sistema (cards, divisores, header) — é o principal recurso de separação visual, não sombra.
- **Creme** (`#f5efe6`): cor de texto principal sobre o fundo escuro, e a cor de seleção de texto (`::selection`).

### Functional
- **Aberto** (`#34d399`, verde esmeralda padrão Tailwind): reservado exclusivamente para o indicador "Aberto agora" (badge de status na Hero e em Horários). Não é um token de marca — é sinalização de estado, e não deve ser reaproveitado para outro propósito decorativo.

### Named Rules
**A Regra da Brasa Única.** Existe exatamente um acento de cor de marca (`brasa`) no sistema. Verde só aparece para significar "aberto agora"; nenhuma outra cor de destaque deve ser introduzida sem necessidade funcional equivalente.

**A Regra do Texto Claro.** `brasa` nunca é a cor de um texto normal/pequeno diretamente sobre `carvao`/`superficie` — nesse caso o texto usa `brasa-viva`. `brasa` (base) só aparece como texto em títulos display grandes (≥24px, ex.: a palavra "gosta" no H1 da Hero) ou como fill de ícone, onde o limiar de contraste exigido (3:1) já é atendido.

## Typography

**Display Font:** Anton (com fallback 'Arial Narrow', sans-serif)
**Body Font:** Inter (pesos 400/500/600/700/800 carregados via Fontsource; fallback system-ui, sans-serif)

**Character:** Anton é a voz do letreiro — condensada, pesada, sempre em caixa alta, para gritar títulos como um trailer de rua. Inter é a voz de quem atende o cliente — legível, neutra, confortável em parágrafos longos e em textos pequenos de UI.

### Hierarchy
- **Display / H1** (Anton, `text-5xl` → `text-7xl` responsivo, `leading-[0.92]`, uppercase): título da Hero, sempre quebrado em `<span>` por linha para permitir stagger de entrada.
- **Headline / H2** (Anton, `text-4xl` → `text-5xl`, `leading-[0.95]`, uppercase): título de cada seção, sempre precedido por um eyebrow.
- **Title / H3** (Anton, `text-xl`–`text-2xl`, uppercase): nome do item de cardápio, título de cartão em Horários/Localização.
- **Body** (Inter, `text-base`–`text-lg`, cor `creme/70`): parágrafos de descrição; sem limite de largura explícito além do container, mas sempre dentro de blocos `max-w-lg`/`max-w-2xl`.
- **Label / Eyebrow** (Inter, `text-xs`–`text-sm`, peso 600, `tracking-wide`/`tracking-[0.2em]`, uppercase, cor `brasa` quando é eyebrow): rótulos de navegação, badges de status, eyebrows de seção, tags do cardápio.

### Named Rules
**A Regra do Letreiro.** Todo uso de Anton é em caixa alta. Nunca renderizar Anton em minúsculas — é a fonte do letreiro luminoso, e letreiro luminoso não sussurra.

## Layout

Um único `Container` (`max-w-6xl`, `mx-auto`, `px-6`) disciplina a largura de todas as seções — não há variação de largura de container entre seções. O ritmo vertical padrão é generoso e constante: `py-24` (96px) subindo para `py-32` (128px) em `sm:` para a maioria das seções (Cardápio, Sobre, Horários); a Hero usa `pt-32/pb-20` subindo para `pt-40/pb-28` e ocupa `min-h-[100svh]`.

Grids são assimétricos, nunca uma coluna única monótona:
- Hero: duas colunas desiguais (`lg:grid-cols-[1.1fr_0.9fr]`) — texto maior, imagem do produto menor.
- Cardápio: `sm:grid-cols-2` → `lg:grid-cols-4`, cartões de proporção `aspect-[4/3]`.
- Sobre: duas colunas (`lg:grid-cols-2`) com uma colagem de 4 fotos em grade 2×2 assimétrica (uma foto vertical ocupando duas linhas, uma foto horizontal ocupando as duas colunas).
- Horários & Localização: duas colunas (`lg:grid-cols-2`), horário à esquerda / mapa e endereço à direita.

Breakpoints usados na prática são só `sm` (640px) e `lg` (1024px) — o sistema não usa `md` nem `xl` para reflow de grid, só para o toggle do menu mobile do Header. Mobile-first: tudo empilha em coluna única por padrão e ganha grid a partir de `sm`/`lg`.

## Elevation & Depth

O sistema é predominantemente **plano com contorno** — cards e blocos não usam `box-shadow` neutro para se destacar do fundo; a separação vem de `border border-contorno` sobre `bg-superficie`. Onde existe profundidade adicional, ela é sempre colorida e temática (brasa/fogo), nunca um shadow cinza genérico:

- **Glow de brasa por trás do produto**: um círculo `blur-3xl` com `bg-brand/30` pulsando (`animate-breathe`) atrás da foto do hambúrguer na Hero — luz de chapa, não sombra.
- **Sombra do produto**: `drop-shadow-[0_30px_40px_rgba(0,0,0,0.6)]` só na imagem do hambúrguer, para ancorá-la fisicamente sobre o glow — a única sombra neutra do sistema, e é reservada a fotografia de produto.
- **Glow do botão primário**: `shadow-lg shadow-brand/30` em repouso, intensificando para `shadow-brand/60` no hover — o botão "brilha" mais brasa quando ativado. O fundo do botão (`brasa-profunda`) não muda de cor no hover, só o glow e a elevação (`-translate-y-0.5`) — garante que o texto `creme` nunca perca contraste AA em nenhum estado.
- **Header ao rolar**: ganha `shadow-lg shadow-black/40` + `backdrop-blur` — a única sombra neutra estrutural, sinalizando que o header saiu do fluxo e passou a flutuar sobre o conteúdo.

### Shadow Vocabulary
- **Glow de ação** (`shadow-lg shadow-brand/30`, hover `shadow-brand/60`): CTAs primários.
- **Glow ambiente** (`blur-3xl bg-brand/30`, animado): pano de fundo de imagem hero.
- **Sombra de produto** (`drop-shadow-[0_30px_40px_rgba(0,0,0,0.6)]`): apenas na foto do hambúrguer da Hero.
- **Sombra estrutural de header** (`shadow-lg shadow-black/40`): apenas no header fixo ao rolar/abrir menu.

### Named Rules
**A Regra do Contorno, Não da Sombra.** Cards e superfícies se separam do fundo por `border-contorno`, não por `box-shadow`. Sombra neutra é reservada a dois casos apenas: a foto de produto na Hero e o header flutuante ao rolar.

## Shapes

Geometria sempre suave, nunca canto reto: `rounded-3xl` (24px) é o raio padrão de fotos, cards e blocos de conteúdo (menu, colagem "Sobre", cartões de Horários/Mapa); `rounded-full` é reservado a elementos pill — botões, badges de status, tags do cardápio, avatar do menu hamburguer mobile. Bordas são sempre hairline de 1px em `contorno` (#2a2a2a), nunca espessas ou decorativas. Não há clipping diagonal, recortes ou formas customizadas além dessas duas famílias de raio.

## Components

### Buttons
- **Shape:** `rounded-full` (pill completo) — sem excessão.
- **Primary:** fundo `brasa-profunda` (fixo em repouso e hover — garante contraste AA com o texto `creme` em qualquer estado), texto `creme`, `px-6 py-3.5`, uppercase, `tracking-wide`, com um brilho diagonal (`skew-x-12`, branco translúcido) que atravessa o botão no hover em 700ms — efeito de "reflexo passando". O feedback de hover é só glow (`shadow-brand/60`) e elevação (`hover:-translate-y-0.5`); a cor de fundo não muda.
- **Magnetic (variante especial, não um variant novo):** quando `magnetic`, o botão segue o cursor com um pull de spring física (`stiffness 300`, `damping 20`) dentro de um raio de ~10px — reservado a CTAs de destaque (WhatsApp da Hero e do CTA final), desativado automaticamente com `prefers-reduced-motion`.
- **Outline:** transparente, borda `creme/40`, texto `creme`; no hover/focus a borda e o texto assumem `brasa-viva` (não `brasa` — precisa da versão mais clara para limpar o contraste AA como texto).
- **Ghost:** sem fundo nem borda, texto `creme/80`; no hover/focus o texto assume `brasa-viva`. Usado para links utilitários (ex: "ou ligue").
- **Foco:** todo botão tem `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand` — o mesmo anel de foco em todas as variantes.

### Cards / Containers
- **Corner Style:** `rounded-3xl` (24px), consistente em cartão de cardápio, colagem de fotos e blocos de Horários/Mapa.
- **Background:** `superficie` (#121212) sobre o carvão do body.
- **Shadow Strategy:** nenhuma — ver Elevation & Depth; a definição vem só do `border-contorno`.
- **Border:** 1px `contorno` em todos os cards.
- **Internal Padding:** `p-5` em cartão de cardápio, `p-8` em blocos de Horários/Localização.
- **Comportamento de hover (cartão de cardápio):** eleva 6px (`whileHover y: -6`, spring) e a imagem interna ganha `scale-105` — o cartão "levanta" como se estivesse sendo servido.

### Status Badge (componente de assinatura)
Pílula com ponto indicador (`size-2 rounded-full`) + texto de status, calculada em tempo real a partir do horário de funcionamento (`useStoreStatus`). Aberto: borda `emerald-500/40`, texto e ponto `emerald-400`. Fechado: borda `creme/20`, texto e ponto `creme/60` ou `creme/40`. Aparece na Hero (acima do H1) e em Horários & Localização — é o único lugar do sistema onde uma cor fora da paleta de marca (verde) tem permissão de aparecer, porque comunica um estado real, não decoração.

### Navigation (Header)
- **Estilo:** fixo no topo, `h-20`, transparente no topo da página; ao rolar (ou com o menu mobile aberto) vira `bg-ink/95` com `backdrop-blur` e `shadow-lg shadow-black/40`.
- **Links (desktop):** uppercase, `tracking-wide`, sublinhado que cresce da esquerda (`scale-x-0 → scale-x-100`) em 300ms no hover, cor muda para `brasa`.
- **Mobile:** um botão compacto de WhatsApp ("Peça") fica sempre visível ao lado do hambúrguer, fora do menu aberto — o CTA principal nunca depende de abrir o menu. Hambúrguer animado (3 barras que se tornam X); ao abrir, um painel `AnimatePresence` expande em altura (`height: 0 → auto`) com easing próprio, contendo os mesmos links + um segundo CTA "Peça agora" (rótulo completo).
- **Foco:** todo link de navegação (desktop e painel mobile) tem `focus-visible` tratado — mesmo sublinhado/cor do hover, mais um anel `outline-brand`.

### Marquee (componente de assinatura)
Faixa horizontal infinita (`animate-marquee`, 28s linear) com frases curtas de marca ("Feito na chapa", "Pediu, chegou") intercaladas por um ícone de chama, sobre `bg-superficie` com bordas `contorno` no topo/base. É puramente atmosférico (`aria-hidden`), separa Hero de Cardápio como uma "faixa de letreiro" física.

## Do's and Don'ts

### Do:
- **Do** manter o fundo em `carvao` (#050505) em toda nova seção — a página nunca deve ter um bloco branco ou claro.
- **Do** usar `rounded-3xl` para qualquer novo card/foto e `rounded-full` para qualquer novo elemento de ação ou pílula — nunca um raio intermediário novo.
- **Do** reservar o tom de brasa (`brasa`, `brasa-viva` ou `brasa-profunda`, conforme a Regra do Texto Claro) só para ação/destaque (CTA, preço, tag, eyebrow, ícone ativo); todo o resto do texto é `creme` em variações de opacidade — use `/60` como piso para qualquer texto real (não decorativo); `/40` e abaixo são só para elementos não-textuais (ex.: o ponto do badge "fechado").
- **Do** envolver entradas de seção em `Reveal`/`staggerContainer` (fadeUp) e respeitar `prefers-reduced-motion`, que já está tratado em duas camadas (CSS global + `useReducedMotion` em cada componente animado).
- **Do** usar contorno (`border-contorno`) como principal recurso de separação de superfície, seguindo a Regra do Contorno.

### Don't:
- **Don't** adicionar `box-shadow` cinza/neutro a cards ou botões — a única sombra neutra permitida é no header ao rolar e no drop-shadow da foto de produto da Hero.
- **Don't** introduzir uma segunda cor de acento de marca — a paleta é intencionalmente mono-acento (brasa); verde é reservado exclusivamente ao status "aberto".
- **Don't** renderizar Anton em minúsculas ou usá-lo para corpo de texto — é só para display, sempre uppercase.
- **Don't** simular carrinho, checkout ou formulário de pedido dentro do site — todo CTA de "pedir" aponta para WhatsApp/telefone (ver PRODUCT.md).
- **Don't** trocar a fotografia real do ambiente/produto por imagens de banco de imagens — a fotografia real é a prova social central do sistema.
