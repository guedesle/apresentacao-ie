# Handoff — migração do site executivo para Astro

## Objetivo do lote
Transformar a apresentação de faturamento em um site Astro completo, preservando a centralidade do problema de negócio: automação e modernização do faturamento do Diário Oficial.

## Estado atual
A implementação base em Astro foi concluída e posteriormente recebeu uma rodada adversarial completa de refatoração visual e narrativa.

O modo pitch está atualmente estruturado em **11 cenas**, com componentes visuais dedicados e animações semânticas.

## Entregas consolidadas
- home executiva;
- modo consulta: faturamento, transformação, automação, transparência, cronograma, equipe e ficha técnica;
- modo pitch com 11 cenas e navegação por teclado;
- componentes visuais dedicados em `src/components/pitch/`;
- cena específica de análise determinística e medição;
- cena específica de rastreabilidade;
- roadmap e governança incorporados à narrativa do pitch;
- conteúdo tipado e validação semântica durante build;
- design responsivo e reduced-motion;
- animações com função semântica, não decorativa;
- CSP, robots noindex/nofollow/noarchive;
- GitHub Actions para `npm ci` + `npm run build`;
- documentação de evidência para separar fatos, estimativas, expectativas e evolução futura;
- assets centralizados em `public/images/`.

## Narrativa atual do pitch

1. Hero — Automação e Modernização
2. Processo atual
3. Mudança do modelo operacional
4. Análise determinística e medição
5. Estágio atual
6. Impactos no faturamento
7. Rastreabilidade
8. Roadmap
9. Governança
10. Transparência futura
11. Decisão executiva

A fonte de verdade para essa sequência é `src/data/content.ts`.

## Guardrails preservados
- faturamento permanece como assunto central;
- Inteligência Editorial aparece como tecnologia habilitadora;
- 70%–80% sempre identificado como estimativa interna;
- nenhuma promessa de erro zero ou economia inventada;
- transparência ao cliente permanece segunda etapa;
- análise da página é descrita como **análise determinística**, nunca como OCR;
- valores de medição e faturamento não comprovados são tratados como ilustrativos;
- páginas reais do DOE não devem ser reconstruídas artificialmente quando o arquivo real estiver disponível.

## Sistema visual consolidado

A semântica cromática está congelada da seguinte forma:

- navy/azul escuro: estrutura institucional;
- cyan/azul: sistema, fluxo e estrutura editorial;
- azul claro: tarjas;
- índigo/roxo: medição;
- amarelo: publicação faturável identificada;
- verde: área útil, validação e resultado;
- vermelho: etapa manual, legado ou risco.

As páginas reais escolhidas como referências documentais são:

- página 1 — Executivo;
- página 71 — Licitações.

## Assets

Diretório canônico:

```text
public/images/
├── README.md
├── bagov.png
├── illustrations/
├── legacy/
└── reference/
```

- `illustrations/`: ilustrações finais aprovadas;
- `reference/`: páginas reais do DOE e referências documentais;
- `legacy/`: imagens herdadas do template original.

## Implementação visual

Componentes atuais em `src/components/pitch/`:

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

## Histórico recente

### PR #4 — Refatorar ilustrações executivas e animações do pitch

- Quality Gate aprovado;
- merge em `main` concluído;
- commit de merge: `884d812196cbf58fc4b434d9292c5199bb687f33`.

### PR #5 — Organizar imagens em public/images

- Quality Gate aprovado;
- merge em `main` concluído;
- commit de merge: `f9358b136286099e6cd77e85daa54a7191fe1fbb`.

## Documentação visual canônica

Consultar:

[Plano de Ilustrações Executivas e Refatorações Visuais](../visual/2026-09-08-plano-ilustracoes-refatoracoes.md)

Esse documento supersede, para o modo pitch e para as ilustrações, as seções 8–18 e 27–28 da especificação UX/UI v2.0.

## Débito controlado
A especificação original aponta Astro 7.3.x, enquanto o lockfile atual do repositório permanece baseado em Astro 5.4.1. A migração funcional foi mantida sobre o lockfile reproduzível existente para não introduzir uma atualização de dependências sem lockfile validado. Upgrade de runtime deve ser executado em lote próprio, regenerando e validando `package-lock.json`.

Outro débito controlado é a incorporação dos binários finais das ilustrações aprovadas e das páginas reais 1 e 71 do DOE em `public/images/illustrations/` e `public/images/reference/`. A arquitetura e os componentes já estão preparados para essa substituição.

## Próximo gate
Antes de nova expansão funcional, executar:

1. incorporação dos assets finais aprovados;
2. revisão visual responsiva desktop/tablet/mobile;
3. validação em tela cheia;
4. revisão final de consistência entre modo pitch e modo consulta;
5. confirmação de que nenhum valor ilustrativo aparece como evidência factual.
