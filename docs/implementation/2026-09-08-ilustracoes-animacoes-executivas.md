# Refatoração adversarial — ilustrações e animações executivas

**Projeto:** Automação e Modernização do Faturamento do Diário Oficial  
**Data-base:** 08/09/2026  
**Branch:** `refactor/illustrations-animations`

## Objetivo
Aplicar integralmente a rodada adversarial do conjunto visual antes da integração definitiva ao site: reduzir redundâncias, controlar carga semântica, estabilizar a semântica cromática, corrigir associações factuais indevidas e transformar as ilustrações prioritárias em componentes animáveis e responsivos.

## Guardrails factuais
- A automação é apresentada como núcleo em desenvolvimento avançado, com **estimativa interna de 70%–80%**.
- A homologação é tratada como **próximo marco**, não como etapa concluída.
- A transparência ao cliente é identificada como **segunda etapa / evolução futura**.
- Valores monetários e medições usados em demonstrações são marcados como **ilustrativos** quando não correspondem a uma medição comprovada da publicação exibida.
- A análise é descrita como **determinística**, baseada em estrutura editorial e regras de negócio. Não há referência a OCR.

## Semântica cromática congelada
| Cor | Semântica |
| --- | --- |
| Navy / azul escuro | estrutura institucional e hierarquia |
| Azul / cyan | sistema, fluxo, leitura estrutural e tarjas |
| Índigo | medição e cálculo |
| Amarelo | publicação faturável identificada |
| Verde | área útil, validação, conclusão e dado válido |
| Vermelho | etapa manual, legado ou condição problemática |

## Sequência narrativa consolidada
1. Hero — visão geral da automação do faturamento.
2. Como faturamos hoje — digital → físico/manual → digital.
3. Mudança do modelo operacional — execução humana → supervisão por exceção.
4. Análise determinística e medição — área útil, tarjas, publicações e cm/coluna.
5. Estágio atual — capacidades e estimativa interna de 70%–80%.
6. Impactos — consistência, rastreabilidade, escala e continuidade.
7. Rastreabilidade — valor → medição → publicação → órgão → evidência.
8. Roadmap — concepção, automação, homologação, implantação, escala e transparência.
9. Governança — GERDO + GERINF + desenvolvimento + áreas operacionais.
10. Transparência futura — consulta, conferência e histórico para o cliente.
11. Decisão executiva — consolidar, homologar, implantar e escalar.

## Matriz de animações
| Cena | Movimento | Significado |
| --- | --- | --- |
| Hero | pulso percorrendo o pipeline | fluxo automatizado |
| Processo atual | entrada sequencial das etapas | retorno do digital ao físico/manual |
| Modelo operacional | troca visual entre blocos | deslocamento da execução para supervisão |
| Análise determinística | área útil → tarja → publicação → resultado | identificação e medição |
| Estágio atual | preenchimento da barra até 76% | maturidade estimada |
| Impactos | linhas conectando benefícios ao núcleo | efeitos derivados da automação |
| Rastreabilidade | cadeia sequencial + destaque da publicação | caminho até a evidência |
| Roadmap | preenchimento parcial da linha | progresso até o estágio atual |
| Governança | conexões em sequência | articulação entre responsabilidades |
| Transparência futura | entrada do mockup e chips | capacidade futura derivada da base estruturada |
| Decisão | entrada sequencial das etapas | próximos marcos executivos |

## Acessibilidade e responsividade
- Todo componente visual possui `figcaption` para leitores de tela.
- As animações são disparadas por `IntersectionObserver` apenas uma vez por cena.
- `prefers-reduced-motion: reduce` remove animações sem ocultar informação.
- Em telas menores, fluxos horizontais tornam-se pilhas verticais e elementos puramente conectivos são removidos.
- Títulos e mensagens principais permanecem em HTML, fora dos infográficos, evitando duplicação, melhorando SEO e mantendo legibilidade em mobile.

## Componentes criados
- `HeroAutomationVisual.astro`
- `CurrentProcessVisual.astro`
- `OperatingModelVisual.astro`
- `DeterministicMeasurementVisual.astro`
- `MaturityVisual.astro`
- `ImpactVisual.astro`
- `TraceabilityVisual.astro`
- `RoadmapVisual.astro`
- `GovernanceVisual.astro`
- `FutureTransparencyVisual.astro`
- `DecisionVisual.astro`

## Próximo gate
Executar build/CI, revisar visualmente em desktop e mobile e somente depois integrar os mesmos componentes ao modo consultivo do site.
