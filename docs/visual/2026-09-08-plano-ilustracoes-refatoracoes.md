# Plano de Ilustrações Executivas e Refatorações Visuais
## Automação e Modernização do Faturamento do Diário Oficial

**Projeto:** Inteligência Editorial  
**Áreas líderes:** GERDO + GERINF  
**Data-base:** 08/09/2026  
**Status:** baseline visual e narrativo consolidado após rodada adversarial e integração em Astro  

> Este documento é a referência canônica do sistema de ilustrações, infográficos, animações e refatorações visuais do pitch executivo. Ele **supersede, para o modo pitch e para as ilustrações, as seções 8–18 e 27–28 da especificação UX/UI v2.0**, que permanecem válidas para os demais aspectos de arquitetura e conteúdo.

---

## 1. Objetivo

Construir uma narrativa visual executiva que explique a modernização do faturamento do Diário Oficial com baixa carga semântica, alta legibilidade e fidelidade ao processo real.

As ilustrações não devem funcionar como decoração. Cada peça precisa responder a uma pergunta de negócio e reduzir o esforço cognitivo necessário para compreender:

- como o faturamento funciona hoje;
- o que muda com a automação;
- como a análise determinística mede publicações;
- qual o estágio atual da capacidade tecnológica;
- quais impactos são esperados;
- como um valor pode ser rastreado até a evidência publicada;
- como o projeto será implantado e governado;
- o que pertence à evolução futura.

## 2. Princípios consolidados

### 2.1 Uma mensagem principal por cena
Cada cena deve possuir uma relação visual dominante e, preferencialmente, no máximo quatro conceitos secundários.

### 2.2 Texto estrutural em HTML
Títulos, subtítulos, notas, badges de escopo e explicações devem permanecer em HTML sempre que possível. O infográfico deve carregar apenas a informação visual necessária.

Isso evita:

- repetição de títulos;
- texto ilegível em mobile;
- perda de acessibilidade;
- perda de SEO;
- dificuldade de atualização;
- dependência de texto embutido em raster.

### 2.3 Documento real como evidência
As páginas do Diário Oficial usadas como referência devem derivar do PDF real do acervo, não de reconstrução generativa.

Referências definidas:

- **Página 1:** Executivo;
- **Página 71:** Licitações.

A estratégia é alternar essas páginas quando houver necessidade de representar uma edição real.

### 2.4 Sem OCR
O projeto não utiliza OCR como conceito da narrativa visual. A formulação correta é:

> **análise determinística da estrutura editorial, identificação de elementos e medição.**

### 2.5 Valores demonstrativos
Qualquer valor em `cm/coluna` e qualquer valor monetário usado para demonstrar medição, rastreabilidade ou faturamento deve ser explicitamente marcado como **ilustrativo** quando não decorrer de uma medição comprovada da publicação real mostrada na imagem.

Nunca associar silenciosamente um valor fictício a uma publicação real do acervo.

---

## 3. Sistema cromático semântico

As cores possuem função semântica estável e não devem ser usadas apenas por decoração.

| Cor / família | Significado |
|---|---|
| Navy / azul escuro | estrutura institucional, base, contexto |
| Cyan / azul | sistema, fluxo, estrutura editorial |
| Azul claro | tarjas e seções editoriais |
| Índigo / roxo | medição e cálculo |
| Amarelo | publicação faturável identificada |
| Verde | área útil, validação, conclusão e resultado válido |
| Vermelho | etapa manual, condição legada, problema ou risco |

### Regra específica da página do DOE

- **Área útil:** verde;
- **Tarja:** azul;
- **Publicação:** amarelo;
- **Medição:** índigo/roxo;
- **Resultado validado:** verde.

---

## 4. Área útil — regra visual

Ao ilustrar a área útil de uma página do Diário Oficial:

- o limite superior deve iniciar **logo após o cabeçalho editorial**, sem cobrir elementos do cabeçalho;
- o limite deve iniciar imediatamente antes da primeira tarja/publicação útil;
- o limite inferior deve terminar **antes da linha do carimbo “CÓPIA — ...”**;
- o contorno não deve cruzar o cabeçalho nem o carimbo inferior.

Na página 71, os balões de identificação de tarjas devem evitar sobreposição de conteúdo. Quando necessário, deslocar o balão para a coluna adjacente mantendo a seta apontando para a tarja correta.

---

## 5. Narrativa final do pitch

O modo pitch foi refatorado de 8 para **11 cenas**.

Sequência consolidada:

1. **Hero — Automação e Modernização**
2. **Processo atual — Como faturamos hoje**
3. **Mudança do modelo operacional**
4. **Análise determinística e medição**
5. **Estágio atual da automação**
6. **Impactos no faturamento**
7. **Rastreabilidade**
8. **Roadmap**
9. **Governança**
10. **Transparência futura**
11. **Decisão executiva**

Rotas implementadas em `src/data/content.ts`:

```text
/apresentacao/
/apresentacao/faturamento-atual/
/apresentacao/antes-depois/
/apresentacao/analise-deterministica/
/apresentacao/automacao/
/apresentacao/impactos/
/apresentacao/rastreabilidade/
/apresentacao/roadmap/
/apresentacao/governanca/
/apresentacao/evolucao/
/apresentacao/decisao/
```

---

## 6. Especificação das cenas e decisões de refatoração

### 6.1 Hero — Automação e Modernização

**Pergunta respondida:** o que o projeto transforma?

Fluxo visual:

```text
EDIÇÃO
  →
PUBLICAÇÕES
  →
ANÁLISE
  →
MEDIÇÃO
  →
RESPONSABILIZAÇÃO
  →
DADOS DE FATURAMENTO
  →
ENVIO AUTOMATIZADO
```

Decisões consolidadas:

- fundo do infográfico deve poder ser transparente;
- não usar Farol da Barra, prédios, pontes, ondas decorativas ou skyline;
- não usar marca do Governo como elemento do hero;
- usar página real do DOE como referência de edição;
- não repetir “dados de faturamento” no fim do fluxo;
- o último estágio deve representar **envio automatizado aos clientes**;
- evitar valores específicos no hero, salvo se forem claramente abstratos/ilustrativos.

**Status:** conceito aprovado e implementado como componente visual.

### 6.2 Processo atual

**Pergunta respondida:** onde está a contradição operacional atual?

Versão reduzida:

```text
EDIÇÃO DIGITAL
      ↓
   IMPRESSÃO
      ↓
MEDIÇÃO MANUAL
      ↓
 LANÇAMENTO
      ↓
FATURAMENTO
```

Mensagem-chave:

> **Digital → físico/manual → digital.**

Refatoração aplicada:

- removidos diagnósticos inferiores repetitivos;
- eliminada explicação excessiva de riscos na própria figura;
- detalhes ficam no texto HTML ou na fala do apresentador.

### 6.3 Mudança do modelo operacional

**Pergunta respondida:** qual é a mudança de papel das equipes?

```text
HOJE
Pessoas executam o fluxo

NOVO MODELO
Sistema executa o fluxo regular
Equipes supervisionam exceções
```

Refatoração aplicada:

- removido painel lateral de benefícios, que repetia a cena de impactos;
- foco exclusivo na mudança de modelo operacional.

### 6.4 Análise determinística e medição

**Pergunta respondida:** como o sistema entende e mede a página?

Fluxo:

```text
Página real
   ↓
Área útil
   ↓
Tarjas
   ↓
Publicações
   ↓
Medição
   ↓
Resultado
```

Regras:

- utilizar página 71 como principal referência para tarjas e publicações;
- preservar duas colunas e hierarquia editorial;
- destacar área útil, tarjas e publicações com a semântica cromática definida;
- resultados de demonstração usam `cm/coluna` + valor em reais;
- nunca usar “perímetro” como métrica;
- nunca chamar o processo de OCR;
- valores não comprovados devem ser marcados como ilustrativos.

**Status:** peça técnica central do pitch.

### 6.5 Estágio atual

**Pergunta respondida:** quanto da capacidade principal já foi construída?

Informação dominante:

> **≈ 70–80%**

Sempre acompanhada de:

> **Estimativa interna do desenvolvimento do núcleo principal.**

Visual recomendado/implementado:

- lista de capacidades concluídas;
- capacidades em andamento;
- capacidades ainda pendentes;
- sem repetir a página inteira do DOE ou o pipeline completo.

A narrativa não deve afirmar “pronto para homologação” como fato consumado. Formulação preferida:

> **Núcleo em consolidação para homologação progressiva.**

### 6.6 Impactos no faturamento

**Pergunta respondida:** o que a automação muda para o negócio?

Relação principal:

```text
                 CONSISTÊNCIA
                      ↑
                      │
RASTREABILIDADE ← AUTOMAÇÃO → ESCALA
                      │
                      ↓
             CONTINUIDADE OPERACIONAL
```

Mensagem complementar:

> **Equipes atuam por exceção, conferência e controle.**

Refatoração aplicada:

- removida repetição do fluxo “hoje → automação → resultado”;
- benefícios consolidados em uma composição executiva de valor.

### 6.7 Rastreabilidade

**Pergunta respondida:** de onde veio este valor?

Cadeia visual:

```text
VALOR
  ↓
cm/coluna
  ↓
PUBLICAÇÃO
  ↓
PÁGINA DO DOE
  ↓
EVIDÊNCIA
```

Interação/animação deve poder revelar o caminho de volta até a publicação real.

Regra factual:

- valores demonstrativos devem aparecer como **ilustrativos**;
- a evidência documental real não pode ser usada para sugerir que uma medição fictícia é factual.

### 6.8 Roadmap

**Pergunta respondida:** qual é o caminho de implantação?

Versão consolidada:

```text
✓ CONCEPÇÃO
    ───
● AUTOMAÇÃO
    ───
◐ HOMOLOGAÇÃO
    ───
○ IMPLANTAÇÃO
    ───
○ ESCALA
    ───
○ TRANSPARÊNCIA
```

Refatoração aplicada:

- removida legenda superior redundante;
- estado comunicado diretamente na linha temporal;
- próximo marco tratado como **homologação progressiva**;
- transparência permanece futura.

### 6.9 Governança

**Pergunta respondida:** quem constrói, homologa e sustenta a mudança?

```text
GERDO ↔ GERINF
       ↓
DESENVOLVIMENTO TÉCNICO
       ↓
ÁREAS DO PROCESSO
```

Escopo da peça:

> **Governança da construção, homologação e operação técnica.**

Estrutura:

- Gerência do Diário Oficial — GERDO;
- Gerência de Informática — GERINF;
- Seção de Desenvolvimento de Aplicações;
- Seção do Diário Oficial;
- Seção de Editoração Eletrônica do Diário Oficial;
- Seção de Planejamento e Controle de Produção do Diário Oficial.

### 6.10 Transparência futura

**Pergunta respondida:** o que os dados estruturados poderão habilitar depois?

Badge obrigatório:

> **SEGUNDA ETAPA — EVOLUÇÃO FUTURA**

Visual reduzido:

```text
PORTAL DO CLIENTE

Publicação | Medição | Valor | Evidência | Histórico

Consultar · Conferir · Rastrear
```

Regra:

> **Visão conceitual — não representa funcionalidade já implantada.**

### 6.11 Decisão executiva

**Pergunta respondida:** qual apoio institucional é necessário agora?

Fluxo corrigido:

```text
CONSOLIDAR AUTOMAÇÃO
        →
HOMOLOGAR
        →
IMPLANTAR
        →
ESCALAR
```

Transparência aparece separadamente como evolução posterior.

Pedido executivo consolidado:

> **Apoio institucional para concluir a automação, iniciar a homologação progressiva e preparar a implantação assistida.**

---

## 7. Plano de animação

A animação deve existir apenas quando comunica processo, identificação, progresso ou rastreabilidade.

### 7.1 Gramática de movimento

| Movimento | Significado |
|---|---|
| deslocamento | fluxo |
| reveal / surgimento | identificação |
| preenchimento | progresso |
| caminho reverso / sequencial | rastreabilidade |

### 7.2 Prioridade por cena

| Cena | Prioridade | Movimento planejado/implementado |
|---|---|---|
| Hero | Alta | fluxo completo da edição ao envio automatizado |
| Processo atual | Média | entrada sequencial das etapas manuais |
| Modelo operacional | Média | transição entre execução humana e supervisão por exceção |
| Análise determinística | **Alta** | área útil → tarjas → publicações → medição → resultado |
| Estágio atual | Média | preenchimento progressivo das capacidades |
| Impactos | Baixa | entradas suaves dos quatro impactos |
| Rastreabilidade | **Alta** | valor → medição → publicação → evidência |
| Roadmap | **Alta** | desenho da linha até o estágio atual |
| Governança | Média | GERDO + GERINF → desenvolvimento → áreas operacionais |
| Transparência futura | Baixa | revelação discreta do mockup conceitual |
| Decisão | Baixa | surgimento único das etapas de decisão |

### 7.3 Reduced motion

Nenhuma informação pode depender de movimento.

O site deve respeitar:

```css
@media (prefers-reduced-motion: reduce)
```

Em reduced motion, o estado final das ilustrações deve ser imediatamente legível.

---

## 8. Implementação Astro

Os visuais executivos foram separados em componentes próprios sob:

`src/components/pitch/`

Componentes atuais:

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

Princípios de implementação:

- texto narrativo permanece na página Astro;
- componente visual contém a relação gráfica;
- layouts são responsivos;
- animações são semânticas;
- estilos compartilham tokens do projeto;
- imagens reais devem ser referenciadas da pasta pública de imagens.

---

## 9. Organização de assets

Diretório canônico:

```text
public/images/
├── README.md
├── bagov.png
├── illustrations/
├── legacy/
└── reference/
```

Uso:

- `public/images/illustrations/` — ilustrações e infográficos finais do projeto;
- `public/images/reference/` — páginas reais do DOE e outras referências documentais;
- `public/images/legacy/` — imagens herdadas do template original, sem função canônica na narrativa atual.

Imagens aprovadas produzidas durante a etapa de concepção devem ser migradas para `illustrations/` quando incorporadas definitivamente ao produto.

As páginas 1 e 71 do PDF de referência devem ser armazenadas em `reference/` quando o binário for incorporado ao repositório.

---

## 10. Guardrails de fidelidade e carga semântica

Não usar:

- OCR como explicação da análise;
- robôs, cérebros digitais, circuitos ou estética genérica de IA;
- paisagens, prédios, pontes, Farol da Barra ou ondas decorativas;
- marcas institucionais como ornamento;
- números fictícios sem indicação de caráter ilustrativo;
- páginas do DOE reconstruídas artificialmente quando o arquivo real estiver disponível;
- dashboards fictícios que sugiram funcionalidade implementada;
- texto duplicado entre HTML e imagem;
- múltiplos benefícios repetidos em cenas diferentes.

Sempre preferir:

- evidência real;
- abstração mínima;
- uma ideia principal por cena;
- semântica cromática estável;
- movimento com significado;
- informação executiva rapidamente escaneável.

---

## 11. Rodada adversarial — achados incorporados

A rodada adversarial realizada sobre o conjunto completo resultou nas seguintes decisões já incorporadas à arquitetura visual:

1. **Reduzir redundância narrativa** entre processo atual, modelo operacional e impactos.
2. **Separar texto de interface e infográfico**, evitando “slide dentro do site”.
3. **Corrigir o rigor factual** de valores demonstrativos sobre páginas reais.
4. **Eliminar inconsistência de maturidade**, mantendo 70–80% como estimativa interna e homologação como próximo marco.
5. **Simplificar o roadmap** para uma única linha de progresso.
6. **Manter transparência como segunda etapa**, sem aparência de produto já entregue.
7. **Reformular a decisão executiva** para consolidar → homologar → implantar → escalar.
8. **Congelar a semântica cromática** para área útil, tarjas, publicações, medição e resultado.
9. **Normalizar o papel da animação** como recurso explicativo, e não decorativo.
10. **Organizar os assets** em diretório canônico `public/images/`.

---

## 12. Histórico de implementação

### PR #4 — Refatorar ilustrações executivas e animações do pitch

- branch: `refactor/illustrations-animations`;
- 26 arquivos alterados;
- modo pitch expandido para 11 cenas;
- componentes visuais e animações semânticas adicionados;
- Quality Gate aprovado;
- merge em `main` concluído;
- commit de merge: `884d812196cbf58fc4b434d9292c5199bb687f33`.

PR: <https://github.com/guedesle/apresentacao-ie/pull/4>

### PR #5 — Organizar imagens em public/images

- centralização das imagens em `public/images/`;
- criação de `illustrations/`, `reference/` e `legacy/`;
- atualização das referências de imagem;
- remoção das cópias dispersas;
- Quality Gate aprovado;
- merge em `main` concluído;
- commit de merge: `f9358b136286099e6cd77e85daa54a7191fe1fbb`.

PR: <https://github.com/guedesle/apresentacao-ie/pull/5>

---

## 13. Estado atual

O sistema visual está em estado de **baseline consolidado** para a próxima etapa de integração e refinamento.

Já estão definidos:

- narrativa final de 11 cenas;
- objetivos de cada ilustração;
- semântica cromática;
- regras de fidelidade documental;
- tratamento de valores ilustrativos;
- componentes Astro correspondentes;
- estratégia de animação;
- comportamento reduced-motion;
- organização canônica dos assets.

### Próximas ações recomendadas

1. incorporar ao repositório os arquivos raster/SVG finais aprovados em `public/images/illustrations/`;
2. incorporar as páginas reais 1 e 71 em `public/images/reference/`;
3. substituir reproduções estruturais temporárias por imagens reais onde a fidelidade documental for necessária;
4. realizar revisão visual responsiva desktop/tablet/mobile;
5. executar uma rodada final de consistência entre modo pitch e modo consulta;
6. validar a apresentação completa em tela cheia e em ambiente de reunião.

---

## 14. Regra de manutenção

Qualquer nova ilustração, animação ou alteração visual deve responder às seguintes perguntas antes de ser incorporada:

1. Qual pergunta executiva esta peça responde?
2. Existe informação repetida em outra cena?
3. O dado apresentado é real, estimado, esperado ou ilustrativo?
4. O documento exibido é uma fonte real ou uma representação conceitual?
5. A cor possui significado consistente com o sistema?
6. A animação explica algo ou apenas ornamenta?
7. A peça continua legível sem animação?
8. O conteúdo textual deveria estar em HTML em vez de embutido na imagem?

Se a peça não superar esse gate, deve ser refatorada antes da integração.
