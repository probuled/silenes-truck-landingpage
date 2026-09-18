# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Moradores e trabalhadores de Paulista, PE (e região) que estão decidindo o jantar/lanche da noite. Dois perfis igualmente importantes:
- **Descoberta**: quem ainda não comprou e chega via indicação/Instagram/busca — a página precisa apresentar a marca e convencer.
- **Recorrente**: cliente que já conhece e só quer confirmar rapidamente se está aberto, ver o cardápio e abrir o WhatsApp para pedir.

Acesso majoritariamente mobile, no fim de tarde/noite (funcionamento é só a partir das 17h).

## Product Purpose

Landing page de uma hamburgueria (food truck) que existe para gerar pedidos via WhatsApp/telefone — seja para entrega em domicílio, retirada, ou consumo no local. A página precisa deixar claro, sem fricção, se o negócio está aberto agora e como pedir.

## Positioning

Hambúrguer artesanal feito na chapa, com blend bovino e ingredientes de qualidade (pão brioche, maionese da casa, bacon crocante, cheddar) — o diferencial declarado é o preparo/ingrediente artesanal, não preço nem storytelling familiar (embora a fotografia da página já explore o clima familiar/acolhedor do espaço).

## Operating Context

- Funciona como food truck/trailer com endereço fixo (Av. Antônio Cabral, PE-22, Paulista, PE) e mesas ao ar livre — atende entrega, retirada e consumo no local.
- Horário: terça a domingo, a partir das 17h (fecha 23h30 ter–qui, meia-noite sex–dom); fechado às segundas.
- Canal de pedido único: WhatsApp (link direto) e telefone/ligação — não há carrinho/checkout online nem app de delivery terceirizado.
- Presença social: Instagram (@silenestruck) como prova social/vitrine.
- Status aberto/fechado é calculado em tempo real na página a partir do horário de funcionamento (`useStoreStatus`), então é informação viva, não texto estático.

## Capabilities and Constraints

- Mostra cardápio com fotos reais dos produtos; nem todo item tem preço cadastrado (alguns têm, outros não — não inventar preços para os que não têm).
- Todo pedido termina no WhatsApp/telefone; qualquer novo recurso de "pedir" deve apontar para esse canal, não simular um fluxo de compra que não existe.
- Fotografia é 100% real (ambiente, chapa, hambúrgueres, clientes) — evidência de marca, não deve ser substituída por imagens genéricas/stock.
- Indisponível/indefinido: cardápio completo com preço em todos os itens; existência de programa de fidelidade, cupons, ou promoções — não assumir nenhum desses até confirmação.

## Brand Commitments

- Nome: **Silene's Truck**. Tagline atual: "Hambúrguer bem-feito, do jeitinho que você gosta."
- Paleta/tom já em uso no código: fundo escuro (#050505), vermelho de marca vibrante (brasa/chapa), tipografia display condensada (Anton) + texto (Inter) — tratar como linguagem visual estabelecida, não greenfield.
- Voz: direta, calorosa, coloquial em pt-BR ("fresquinho direto da chapa", "do jeitinho que você gosta").

## Evidence on Hand

- Fotos reais em `src/assets/photos/`: hero-burger, bom-gosto-burger, x-tropical-burger, fried-chicken-burger, venue-sign, grill-action, family-photo, outdoor-seating.
- Dados de negócio reais em `src/data/content.ts`: telefone, WhatsApp, Instagram, endereço, Google Maps, horários por dia da semana, 4 itens de cardápio (2 com preço, 2 sem).
- Sem depoimentos/avaliações de clientes cadastrados — não inventar testemunhos, notas ou números (ex: "clientes atendidos", "nota no Google") sem fonte real.

## Product Principles

1. O status aberto/fechado e o caminho para o WhatsApp são a ação mais importante da página — nunca enterrar ou enfraquecer esses dois elementos por estética.
2. Ingredientes e preparo artesanal (chapa, blend, brioche, maionese da casa) são o argumento central de venda — priorizar isso sobre apelo de preço ou promoção.
3. A fotografia real do ambiente e da comida é a prova social principal; tratá-la como ativo central do design, não como preenchimento.
4. Servir igualmente quem está descobrindo a marca agora e quem já é cliente e só quer checar horário/cardápio rápido — não otimizar só para um dos dois.
5. Nenhum fluxo de pedido deve simular carrinho/checkout: tudo converge para WhatsApp ou ligação.
