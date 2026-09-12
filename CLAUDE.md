# CLAUDE.md — Diretrizes do Projeto (Landing Pages para Clientes)

Este arquivo orienta o Claude (via Claude Code) sempre que trabalhar neste repositório. O objetivo é gerar landing pages **visualmente modernas, com animações de qualidade**, mas com **código limpo, organizado e fácil de manter**.

---

## 1. Contexto do projeto

- Cada landing page é feita **sob medida para um cliente específico**.
- Stack principal: **ReactJS + TypeScript**.
- O código deve poder ser entendido por outro dev (ou por mim mesmo, 6 meses depois) sem esforço.
- Prioridade dupla, sempre nessa ordem de raciocínio:
  1. **Funciona e está bem arquitetado** (base sólida).
  2. **Impressiona visualmente** (animações modernas, micro-interações, transições suaves).

---

## 2. Antes de escrever qualquer código

Sempre que for implementar algo (componente, hook, animação, estilo), o Claude deve:

1. **Buscar as melhores práticas atuais** de React + TypeScript para aquele caso específico (ex: "melhores práticas para animação de scroll em React 2026", "padrão de arquitetura de componentes React TypeScript", "biblioteca de animação recomendada para landing pages performáticas"). Não confiar apenas em conhecimento antigo — o ecossistema React muda rápido (novas versões, libs, padrões).
2. Priorizar fontes atuais e de qualidade (docs oficiais, blogs de referência da comunidade React/TS, não fóruns genéricos).
3. Trazer a recomendação encontrada e aplicar, explicando brevemente o porquê da escolha quando relevante.

**Isso vale principalmente para:**

- Escolha de bibliotecas de animação (ex: Framer Motion / Motion, GSAP, Lenis para scroll suave, etc.)
- Padrões de estrutura de pastas/arquitetura de componentes
- Estratégias de performance (lazy loading, code splitting, otimização de imagens)
- Acessibilidade (a11y) em landing pages
- SEO técnico para landing pages (meta tags, semântica, Core Web Vitals)

---

## 3. Stack obrigatória

- **Roteamento**: usar **React Router** no **modo Data (Data Router)** — ou seja, `createBrowserRouter` com `loader`/`action` quando fizer sentido, ao invés do modelo declarativo antigo (`<BrowserRouter><Routes>...`). Estruturar as rotas em um arquivo dedicado (ex: `src/routes/index.tsx`) e usar `loader` para buscar dados antes de renderizar a página, evitando `useEffect` para fetch inicial sempre que possível.
- **Estilização**: usar **Tailwind CSS** como padrão para todo o styling. Evitar CSS solto/inline ou misturar Tailwind com outras abordagens de estilização sem necessidade. Extrair combinações de classes repetidas para componentes reutilizáveis (ou usar `clsx`/`tailwind-merge` quando houver classes condicionais). Seguir um design system simples via `tailwind.config` (cores, espaçamentos, fontes do cliente) ao invés de valores "mágicos" espalhados pelo código.

---

## 4. Padrões de Clean Code (React + TypeScript)

- **Tipagem forte**: evitar `any`. Tipar props, retornos de função, estados. Usar `interface`/`type` de forma consistente.
- **Componentização**: componentes pequenos, com responsabilidade única. Separar componentes de apresentação (UI) de lógica (hooks customizados).
- **Nomenclatura clara**: nomes de componentes, funções e variáveis devem descrever o que fazem, sem abreviações confusas.
- **Organização de pastas** sugerida (adaptar conforme o tamanho do projeto):
  ```
  src/
    components/       # componentes reutilizáveis (Button, Card, etc.)
    sections/         # seções da landing page (Hero, About, Pricing, Footer...)
    hooks/            # hooks customizados
    animations/        # variantes/configs de animação reutilizáveis
    styles/           # tokens, temas, estilos globais
    types/            # tipos e interfaces compartilhados
    utils/            # funções utilitárias puras
    assets/           # imagens, ícones, fontes
  ```
- **Evitar duplicação**: extrair lógica repetida para hooks ou funções utilitárias.
- **Comentários**: só quando agregam valor (explicar o "porquê", não o "o quê" óbvio).
- **Consistência de formatação**: seguir ESLint + Prettier configurados no projeto (perguntar/verificar se já existem).
- **Performance**: usar `memo`, `useMemo`, `useCallback` com critério (não por padrão, só quando há ganho real e mensurável).

---

## 5. Animações e experiência visual

- Priorizar animações que reforcem a experiência do usuário, não que apenas "chamem atenção" sem propósito (entrada suave de seções, hover states, parallax leve, transições de página).
- Buscar sempre o padrão mais atual e performático (evitar libs pesadas/obsoletas sem necessidade).
- Garantir que animações respeitem `prefers-reduced-motion` (acessibilidade).
- Testar que as animações não travem o scroll nem prejudiquem o Core Web Vitals (especialmente LCP e CLS).
- Quando eu passar uma referência visual (site, vídeo, print), reproduzir o mais fiel possível, mas sempre com código limpo por trás.

---

## 6. Fluxo de trabalho esperado

Ao receber uma tarefa (ex: "cria a seção Hero com animação de entrada"):

1. Pesquisar rapidamente a melhor prática/lib recomendada para o caso, se ainda não estiver claro.
2. Planejar a estrutura do componente antes de escrever (props, tipos, onde a animação entra).
3. Implementar seguindo os padrões deste arquivo.
4. Revisar o próprio código gerado quanto a: tipagem, clareza, performance, acessibilidade.
5. Explicar de forma breve o que foi feito e por quê (sem enrolação).

---

## 7. O que evitar

- Código genérico "copiado de tutorial" sem adaptação ao contexto do cliente.
- `any`, `// @ts-ignore` sem justificativa.
- Componentes gigantes fazendo várias coisas ao mesmo tempo.
- Animações excessivas que prejudiquem performance ou legibilidade.
- CSS inline bagunçado ou fora do padrão Tailwind definido na Seção 3.
- Rotas declaradas fora do padrão Data Router (ex: usar `<Routes>`/`<Route>` do modo declarativo antigo sem justificativa).
