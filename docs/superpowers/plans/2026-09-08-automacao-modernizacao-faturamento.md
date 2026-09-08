# Automação e Modernização do Faturamento do Diário Oficial
## Implementation Plan

**Projeto:** Inteligência Editorial

**Goal:** construir uma apresentação executiva e site consultivo que demonstrem como a EGBA está modernizando o faturamento do Diário Oficial por meio da automação da medição e da responsabilização financeira.

**Architecture:** Astro estático com conteúdo estruturado, navegação client-side e proteção externa na Hostinger.

**Tech Stack:** Astro 7.3.x, TypeScript strict, CSS nativo, Content Collections, ClientRouter, CSP, Playwright, GitHub Actions e Hostinger.

**Spec:** `docs/superpowers/specs/2026-09-08-automacao-modernizacao-faturamento-design.md`

## Global Constraints

- faturamento é o assunto central;
- Inteligência Editorial é tecnologia habilitadora;
- plataforma do cliente é segunda etapa;
- oito cenas;
- pitch ≤ 300 segundos;
- nenhuma métrica sem classificação de evidência;
- 70%–80% = estimativa interna;
- nenhum percentual de redução de erros sem baseline;
- turnover = redução da dependência de mão de obra dedicada à medição;
- static output;
- sem backend;
- sem banco;
- sem framework UI;
- autenticação fora da aplicação.

---

## Task 1 — Fundação
Criar Astro, TypeScript strict, build, check e Playwright.

**Gate**
```text
astro check = PASS
astro build = PASS
playwright = PASS
```

**Commit**
```bash
git commit -m "chore: initialize billing modernization site"
```

## Task 2 — Contratos de conteúdo
Criar schemas para cenas, claims, cronograma, equipe e ficha técnica.

### BusinessClaim
```text
statement
scope
evidenceLevel
source
referenceDate
```

### Scope
```text
current-process
current-project
expected-impact
future-stage
```

### Evidence
```text
confirmed
internal-estimate
expected
future-target
```

**Gate:** dados semanticamente inválidos impedem o build.

## Task 3 — Fundação visual
Criar tokens, tipografia, grid, layouts, foco e reduced motion.

**Princípio:** processo antes de decoração.

**Gate:** sem overflow em 1366×768.

## Task 4 — Arquitetura do pitch
Criar as oito rotas, layout, progresso e ClientRouter.

```text
/apresentacao/
/apresentacao/faturamento-atual/
/apresentacao/por-que-modernizar/
/apresentacao/antes-depois/
/apresentacao/automacao/
/apresentacao/impactos/
/apresentacao/evolucao/
/apresentacao/decisao/
```

**Gate:** todas as rotas existem no build estático.

## Task 5 — Navegação
Implementar Right, Left, Space, PageDown, PageUp, Home, End, F e Back/Forward.

**Gate:** pitch utilizável integralmente sem mouse.

## Task 6 — Cena 1
Construir “Automação e Modernização do Faturamento do Diário Oficial”, com “Projeto Inteligência Editorial” em posição secundária.

**Teste adversarial:** reduzir visualmente o nome Inteligência Editorial. O assunto continua evidente? Resposta necessária: sim.

## Task 7 — Cena 2
Construir fluxo do faturamento atual.

Obrigatório:
- digital;
- impressão;
- medição;
- lançamento;
- consolidação;
- faturamento.

**Gate:** pessoa sem contexto consegue recontar o fluxo.

## Task 8 — Cena 3
Construir justificativa da modernização:
- pressão;
- erro;
- retrabalho;
- dependência;
- turnover.

**Guardrail:** não afirmar que automação eliminará todo turnover da organização.

## Task 9 — Cena 4
Construir Antes × Depois.

Mensagem obrigatória:

**deixar de depender da medição humana para faturar.**

**Gate:** diferença compreensível em até cinco segundos.

## Task 10 — Cena 5
Mostrar motor de automação:

```text
edição
→ processamento
→ identificação
→ medição
→ responsabilidade
→ dados
→ validação
```

70%–80% sempre como **estimativa interna**.

**Gate:** motor aparece como meio, não como fim.

## Task 11 — Cena 6
Impactos no faturamento:
- eficiência;
- consistência;
- continuidade;
- rastreabilidade;
- escalabilidade;
- dependência operacional.

**Guardrail:** nenhum número de economia inventado.

## Task 12 — Cena 7
Transparência como consequência:

```text
dados do faturamento
→ rastreabilidade
→ evidência
→ cliente
```

Plataforma = **segunda etapa**.

**Gate:** plataforma não pode parecer objetivo principal do projeto atual.

## Task 13 — Cena 8
Pedido ao Conselho.

Frase:

**Automatizar o faturamento → Implantar → Escalar → Tornar transparente**

CTA: apoio institucional.

**Gate:** decisão esperada está inequívoca.

## Task 14 — Cronometragem
Apresentar sem pausas.

Esperado:
```text
<= 05:00
```

Se ultrapassar, reduzir conteúdo; não acelerar artificialmente a fala.

## Task 15 — Página Faturamento
Criar `/faturamento/` como página consultiva principal.

Conteúdo:
- fluxo atual;
- gargalos;
- efeitos;
- necessidade de mudança.

## Task 16 — Página Transformação
Criar `/transformacao/`.

Explicar:
- hoje;
- transição;
- futuro.

## Task 17 — Página Automação
Criar `/automacao/`.

Aprofundar:
- motor;
- componentes;
- desenvolvimento;
- homologação.

## Task 18 — Página Transparência
Criar `/transparencia/`.

```text
faturamento
→ medição
→ publicação
→ evidência
→ cliente
```

## Task 19 — Cronograma
Criar `/cronograma/`.

Fases:
1. requisitos;
2. automação;
3. testes;
4. implantação;
5. escala;
6. transparência.

## Task 20 — Equipe
Criar `/equipe/`.

Separar:
- construção/governança: GERDO + GERINF;
- desenvolvimento: Desenvolvimento de Aplicações;
- operação/homologação: demais seções operacionais.

## Task 21 — Ficha técnica
Criar `/ficha-tecnica/`.

Campo primário:
**Programa/objetivo: Automação e Modernização do Faturamento do Diário Oficial**

Campo secundário:
**Projeto: Inteligência Editorial**

## Task 22 — Rodapé
Adicionar EGBA, Diário Oficial, Casa Civil, links institucionais, projeto e ano.

Não adicionar marca do Governo do Estado.

## Task 23 — Security hardening
Implementar:
- CSP;
- noindex;
- nofollow;
- noarchive;
- robots.

**Gate:** nenhum recurso remoto obrigatório.

## Task 24 — Testes E2E
Cobrir:
- oito cenas;
- teclado;
- histórico;
- fullscreen;
- rotas;
- breakpoints;
- reduced motion.

## Task 25 — Teste editorial adversarial

### Rodada A — Foco
**O projeto parece ser de faturamento ou de IA?**  
Resultado exigido: **faturamento**.

### Rodada B — Conselho
**Um conselheiro entende o problema em menos de 60 segundos?**  
Resultado exigido: **sim**.

### Rodada C — Evidência
**Alguma expectativa está apresentada como resultado?**  
Resultado exigido: **não**.

### Rodada D — Escopo
**A plataforma do cliente está competindo com a automação atual?**  
Resultado exigido: **não**.

## Task 26 — CI
Pipeline:

```text
npm ci
→ astro check
→ astro build
→ playwright
```

## Task 27 — Hostinger
Publicar apenas `dist/`.

Configurar:
- subdomínio;
- SSL;
- proteção;
- SSH/SFTP;
- diretório.

## Task 28 — Deploy controlado
GitHub Actions com `workflow_dispatch`.

Nunca deploy automático apenas por merge.

## Task 29 — Ensaio operacional
Testar:
- notebook;
- projetor;
- rede;
- fullscreen;
- autenticação;
- fallback local.

## Task 30 — Gate executivo final

A versão só recebe **READY FOR EXECUTIVE PRESENTATION** quando:

- objeto = faturamento;
- problema = processo manual e dependente;
- transformação = automação;
- estágio = desenvolvimento avançado e testes;
- ganho = modernização operacional do faturamento;
- transparência = consequência e segunda etapa;
- pedido = implantação e escala.

## Regra final de implementação

> **Esta alteração ajuda o Conselho a compreender ou apoiar a modernização do faturamento?**

Se a resposta for não, não entra no pitch principal.
