---
target: toda a landing page (src/pages/Home.tsx)
total_score: 26
max_score: 32
na_heuristics: 7,10
p0_count: 2
p1_count: 3
target_identity: "file:/home/luan/work/probuled/silenes-truck-landingpage/src/pages/Home.tsx"
target_fingerprint: "sha256:bb66dd01718c0b4fa01474a478fc245dca113fb6ba673d909a2974588f9cf59f"
target_path: /home/luan/work/probuled/silenes-truck-landingpage/src/pages/Home.tsx
timestamp: 2026-09-12T21-40-49Z
slug: src-pages-home-tsx
---
Method: dual-agent (A: design-review sub-agent · B: detector-evidence sub-agent)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Badge aberto/fechado é claro e ao vivo, mas sem feedback ao abrir CTA externo (nova aba) nem loading no iframe do mapa |
| 2 | Match System / Real World | 4 | Linguagem, metáforas de chapa/brasa e horários reais, tudo coerente |
| 3 | User Control and Freedom | 3 | Menu mobile fecha por X ou link, sem handler de Esc |
| 4 | Consistency and Standards | 3 | Toggle mobile usa breakpoint `md` (768px) enquanto o resto do sistema usa só `sm`/`lg` — faixa órfã 640–767px |
| 5 | Error Prevention | 3 | "Consulte o preço" evita inventar valor, mas sem fallback visível se o iframe do mapa falhar |
| 6 | Recognition Rather Than Recall | 4 | Ícones + labels consistentes, marca sempre visível no header sticky |
| 7 | Flexibility and Efficiency | n/a | Landing page sem fluxo de power user |
| 8 | Aesthetic and Minimalist Design | 3 | Hero acumula 5+ camadas de movimento simultâneas, tensionando a própria regra do DESIGN.md |
| 9 | Error Recovery | 3 | Estado "fechado" bem comunicado, mas telefone alternativo não fica ao lado do CTA principal |
| 10 | Help and Documentation | n/a | Não aplicável a landing de conversão direta |
| **Total** | | **26/32** | **Good (81%)** |

## Design Specificity Verdict

**Avaliação qualitativa (Assessment A):** a composição estrutural (hero escuro + glow atrás do produto + botão pill + tilt 3D + magnetic button) é um padrão "dark-hero premium" genérico, que serviria para qualquer bar, hamburgueria gourmet ou coquetelaria. A especificidade real vem da camada de conteúdo: fotografia 100% real, copy calorosa em pt-BR ("fresquinho direto da chapa", "Pediu, chegou"), dados reais de negócio, e o status aberto/fechado calculado ao vivo. Troque fotos e texto por outra hamburgueria e o esqueleto de componentes sobrevive sem ajuste — a especificidade está no dado, não no sistema visual.

**Varredura determinística (Assessment B):** `impeccable detect --json src/sections src/components src/pages` → **exit 0, `[]`** — zero violações mecânicas de padrão em todo o código de seções/componentes/páginas. Isso confirma que a implementação é fiel ao que o DESIGN.md documenta (nenhuma anti-padrão detectada), mas um detector limpo não mede especificidade — é um julgamento que só a avaliação qualitativa capta, e que confirma o veredito de A: o sistema é tecnicamente disciplinado, mas estruturalmente intercambiável.

**Overlays visuais:** não disponíveis nesta sessão — nenhuma ferramenta de automação de navegador está exposta, então não há overlay visível para o usuário nem verificação visual/interativa ao vivo. Toda a Avaliação B foi feita por revisão determinística de código-fonte (grep + cálculo de contraste manual a partir dos tokens do DESIGN.md).

## Overall Impression

O sistema de design é coeso e tecnicamente bem implementado — zero achados do detector mecânico, tokens respeitados, regra da "brasa única" cumprida de ponta a ponta. Mas a avaliação cruzada revelou fricções reais e concretas exatamente no caminho da única ação que a página existe para gerar: pedir pelo WhatsApp. O botão de CTA principal reprova contraste de acessibilidade no estado hover, o próprio botão fica escondido no header mobile (canal de acesso majoritário, segundo o PRODUCT.md), e o ponto de maior dúvida do visitante (entrega até onde?) fica sem resposta. A maior oportunidade não é estética — é fricção de conversão e acessibilidade no CTA que a página inteira foi construída para servir.

## What's Working

- **Status ao vivo**: o badge "Aberto agora"/"Fechado" (Hero, HoursLocation) via `useStoreStatus` cumpre diretamente o Princípio #1 do PRODUCT.md — nunca enterrar essa informação.
- **Disciplina de cor**: a "Regra da Brasa Única" é respeitada de ponta a ponta — confirmado tanto qualitativamente (A) quanto pelo grep de cores hardcoded (B): zero hex crus fora do tema, e o único acento fora da paleta (`emerald-400/500`) é exatamente a exceção documentada para o status "aberto".
- **Preço ausente sem invenção**: `Menu.tsx:68-72` mostra "Consulte o preço" em vez de inventar um valor, honrando a restrição explícita do PRODUCT.md — mesmo que a execução visual desse texto tenha problemas (ver P1 abaixo).

## Priority Issues

- **[P0] Botão de CTA principal reprova contraste de acessibilidade, pior ainda no hover**
  **Why it matters**: o componente `Button` variante `primary` (`src/components/Button.tsx:22`) — usado em TODOS os CTAs de conversão do site ("Peça pelo WhatsApp" no Hero, "Peça agora" no Header, "Ver cardápio completo" no Menu, "Chamar no WhatsApp" no DeliveryCta) — renderiza texto creme sobre fundo brasa (`#e11d2a`) em repouso (≈4.17:1, já abaixo dos 4.5:1 exigidos para texto pequeno/normal) e cai para **≈2.86:1** no hover (`hover:bg-brand-light` `#ff4d54`), abaixo até do limiar de 3:1 para texto grande. É exatamente o botão que decide se o pedido acontece, e ele fica menos legível no exato momento em que o visitante interage com ele.
  **Fix**: escurecer o `brasa`/`brasa-viva` ou usar `creme` com peso maior + leve stroke/shadow para subir o contraste acima de 4.5:1 em repouso e no hover; testar com o par real de cores antes de fechar.
  **Suggested command**: $impeccable harden

- **[P0] CTA de WhatsApp escondido no header mobile**
  **Why it matters**: `Header.tsx:49` (`hidden md:block`) esconde o botão "Peça agora" na barra mobile — só existe dentro do menu hambúrguer (`Header.tsx:107-115`). Para o público majoritariamente mobile (PRODUCT.md) que já rolou passado o Hero, o caminho mais rápido pro WhatsApp exige abrir o menu primeiro — um passo extra na ação que "nunca deve ser enterrada" (Princípio #1 do PRODUCT.md). Isso também penaliza especificamente o "cliente recorrente" que só quer pedir rápido.
  **Fix**: manter um botão/ícone de WhatsApp sempre visível na barra mobile do header, ao lado do hambúrguer, sem depender do menu aberto.
  **Suggested command**: $impeccable clarify

- **[P1] Múltiplos textos e bordas do sistema reprovam contraste AA**
  **Why it matters**: além do botão primário, outros elementos ficam abaixo do mínimo WCAG AA sobre os fundos documentados no DESIGN.md: (a) eyebrow e preço em `text-brand` sobre fundo escuro (`SectionHeading.tsx:15`, `Menu.tsx:69`) ≈3.9–4.3:1, abaixo de 4.5:1; (b) texto utilitário em `text-cream/40` — "Consulte o preço" (`Menu.tsx:71`), "Fechado" (`HoursLocation.tsx:40`), copyright do rodapé (`Footer.tsx:63-65`) — todos ≈3.5:1, abaixo de 4.5:1, justo onde a informação (preço ausente, dia fechado) mais precisa ser lida; (c) a borda do botão `outline` (`border-cream/30`, `Button.tsx:23`, usado em "Ver cardápio" e "Traçar rota") ≈2.35:1, abaixo do mínimo de 3:1 para identificar o limite de um controle interativo que não tem preenchimento nem sombra.
  **Fix**: subir essas opacidades/tons para o próximo nível já usado no sistema (`/60` no lugar de `/40`, borda `/40`+ no outline) sem introduzir cor nova.
  **Suggested command**: $impeccable harden

- **[P1] Estados de foco inconsistentes entre elementos interativos**
  **Why it matters**: `focus-visible` só existe no componente `Button` (`Button.tsx:63`). Todos os links "nativos" — nav do header (`Header.tsx:39-46`), botão hambúrguer (`Header.tsx:61-83`), links do painel mobile (`Header.tsx:98-106`), link `tel:` "ou ligue" (`DeliveryCta.tsx:38`), ícones do Instagram/WhatsApp no Footer (`Footer.tsx:21-38`) — dependem só do outline padrão do navegador, sem indicador de foco customizado. Um usuário de teclado recebe uma experiência de foco inconsistente pela página, e o outline padrão pode ter contraste insuficiente sobre `carvao`/`superficie`.
  **Fix**: replicar o padrão de foco do `Button` (ou um equivalente `focus-visible:` no sublinhado/ícone) em todo link interativo fora do componente.
  **Suggested command**: $impeccable harden

- **[P1] Nenhuma reasseguração de entrega/retirada perto do mapa**
  **Why it matters**: `HoursLocation.tsx` mostra só horário + mapa + endereço + "Traçar rota", mas nunca reafirma que o negócio atende entrega, retirada e consumo no local — informação que existe no PRODUCT.md mas não chega ao visitante. É o ponto exato da ansiedade "será que entregam até mim", e a página fica em silêncio bem aqui, no ponto de maior dúvida antes da decisão.
  **Fix**: uma linha de copy junto ao mapa (ex.: "Entrega, retirada ou mesinha no local — combina tudo no WhatsApp").
  **Suggested command**: $impeccable clarify

## Persona Red Flags

**Jordan (Confusa/Primeira Visita)**
- Nenhum texto explícito confirma "entrega, retirada e consumo no local" — só é possível inferir pelo verbo "receba" em `DeliveryCta.tsx:24`.
- Hero apresenta dois CTAs de peso visual parecido (`Hero.tsx:119-130`) sem hierarquia clara de qual clicar primeiro.
- O item de nav "Contato" (`Header.tsx:14`) aponta para a seção `DeliveryCta` (`id="contato"`), que é puramente um CTA final, não um canal de "fale com a gente" genérico.

**Riley (Testador Metódico)**
- Ao tabular pelo teclado, os links do header não mostram indicador de foco customizado (só hover) — ver P1 de foco.
- Entre 640–767px encontra o grid já em 2 colunas enquanto a nav desktop ainda está escondida atrás do hambúrguer (breakpoint `md`=768) — inconsistência perceptível.
- Clica em "Consulte o preço" (`Menu.tsx:71`) esperando algum detalhe — é texto estático sem link/tooltip; beco sem saída.
- O `tel:` construído em `DeliveryCta.tsx:38` gera 10 dígitos (formato de linha fixa, coerente com "(81) 7330-2704") — vale confirmar com o cliente que é mesmo esse o número correto, mas não é um bug óbvio.

**Sam (Usuário Dependente de Acessibilidade)** — persona adicionada pela evidência do detector/contraste (Assessment B)
- Foco visível existe só no componente `Button` (`Button.tsx:63`); nav do header, botão hambúrguer, painel mobile, link de telefone e ícones do Footer não têm tratamento de `:focus-visible` customizado.
- O CTA primário cai para ≈2.86:1 de contraste no hover (`Button.tsx:22`, `hover:bg-brand-light`) — abaixo do mínimo mesmo para texto grande; um usuário com baixa visão pode perder a legibilidade do botão no momento em que interage com ele.
- Eyebrow e preço em `text-brand` (`SectionHeading.tsx:15`, `Menu.tsx:69`) ficam abaixo de 4.5:1 sobre fundo escuro.

**Casey (Mobile Distraída)**
- Precisa rolar por 5 linhas de H1 (`Hero.tsx:96-110`) + parágrafo antes de alcançar qualquer botão.
- Os efeitos "delight" mais elaborados (shine do botão, magnetic pull) só disparam em hover/mousemove — inexistentes em touch, o canal principal segundo o PRODUCT.md.

**Cliente Recorrente** (persona derivada do PRODUCT.md — só quer confirmar aberto/fechado e cardápio rápido)
- No mobile, não há CTA de WhatsApp visível permanentemente no header (`Header.tsx:49`) — precisa abrir o menu hambúrguer mesmo já sabendo o que quer pedir.
- O badge de status só existe na Hero e em Horários — quem rolou até o Menu para checar um item não vê o status sem voltar ao topo.
- 2 dos 4 itens de destaque do cardápio exigem ida ao WhatsApp mesmo assim (`Menu.tsx:68-72`) — a "checagem rápida" que esse perfil busca não é totalmente atendida.

## Minor Observations

- `About.tsx:12` desestrutura `photos` assumindo exatamente 4 itens (`const [sign, grill, family, seating] = photos`) sem guarda — quebra em runtime se a galeria tiver menos de 4 fotos.
- `DeliveryCta.tsx:20-26` reimplementa manualmente um H2 + parágrafo em vez de usar `SectionHeading` — por isso é a única seção sem eyebrow, quebrando a convenção "todo título é precedido por eyebrow" citada no DESIGN.md.
- `DeliveryCta.tsx:13` usa `py-24 sm:py-28`, desviando da progressão `py-24→sm:py-32` que Menu/About/HoursLocation seguem.
- O "Status Badge" (Hero + HoursLocation) está duplicado letra por letra em dois arquivos, sem componente compartilhado, apesar do DESIGN.md chamá-lo de "componente de assinatura" (o que sugere reuso).
- Configuração de spring física duplicada com valores próximos em 3 lugares (`Button.tsx:40-41`, `Menu.tsx:44`, `useTilt.ts:8`) sem constante compartilhada.
- Alt-text inconsistente: `Menu.tsx:50` usa só `item.name`, enquanto `Hero.tsx:160` usa um template mais descritivo para o mesmo tipo de imagem (foto de hambúrguer).
- Pequena deriva de documentação: a borda do badge "aberto" usa `emerald-500` no código, mas o DESIGN.md só nomeia `#34d399` (`emerald-400`) como o token "aberto" — mesma exceção documentada, tom levemente diferente.
- `Brasa Profunda` (`#a3141e`) e `Superfície Elevada` (`#1a1a1a`) continuam sem nenhum uso no código — tokens reservados, o próprio DESIGN.md já reconhece isso.

## Questions to Consider

1. Se o WhatsApp falhar para um visitante (sem app instalado, sem sessão web), qual é o plano B no momento em que ele clica — por que o telefone só aparece isolado no CTA final em vez de sempre ao lado do botão primário?
2. As micro-interações mais elaboradas do sistema (shine do botão, magnetic pull) foram desenhadas para hover, mas o acesso é majoritariamente mobile — elas foram pensadas para quem revisa o código ou para quem vai pedir de fato?
3. A ansiedade "será que entregam até mim" está nomeada no PRODUCT.md mas sem resposta na página — é uma omissão de conteúdo, ou a área de entrega real ainda precisa ser definida com o cliente antes de escrever essa copy?
