# Especificação Executável UX/UI + Arquitetura Astro
## Automação e Modernização do Faturamento do Diário Oficial
### Projeto Inteligência Editorial — GERDO + GERINF

**Versão:** 2.0  
**Data-base:** 08/09/2026  
**Organização:** Empresa Gráfica da Bahia — EGBA  
**Áreas líderes:** Gerência do Diário Oficial — GERDO / Gerência de Informática — GERINF

---

## 1. Objetivo de negócio

Modernizar o processo de faturamento das publicações do Diário Oficial, substituindo progressivamente etapas físicas, medições manuais e lançamentos operacionais por um fluxo digital, automatizado, rastreável e escalável.

O Projeto Inteligência Editorial é a capacidade tecnológica utilizada para viabilizar essa transformação.

A apresentação deve preservar esta hierarquia:

- **Problema de negócio:** faturamento.
- **Transformação:** automação e modernização.
- **Tecnologia habilitadora:** Inteligência Editorial.

## 2. Mensagem central

> **Modernizar o faturamento do Diário Oficial, substituindo medições e lançamentos manuais por um processo digital, automatizado, rastreável e transparente.**

Uma seção, gráfico, ilustração ou funcionalidade que não contribua para explicar essa transformação deve ser removida ou deslocada para documentação complementar.

## 3. Funções do site

### Durante a reunião
Pitch executivo de até cinco minutos para Conselho de Administração e stakeholders.

### Depois da reunião
Documento digital de consulta sobre:
- situação atual do faturamento;
- problemas do processo;
- transformação proposta;
- automação;
- estágio do projeto;
- impactos;
- cronograma;
- governança;
- transparência;
- evolução futura.

## 4. Critério principal de sucesso

Ao final da apresentação, um conselheiro deverá conseguir responder:

1. Como o faturamento funciona hoje?
2. Onde estão os principais riscos e ineficiências?
3. O que será automatizado?
4. Como a automação modifica o faturamento?
5. Quanto dessa capacidade já foi construída?
6. Quais resultados são esperados?
7. Como a mudança aumenta rastreabilidade e transparência?
8. Qual é a próxima etapa?
9. O que o Conselho está sendo chamado a apoiar?

## 5. Guardrail estratégico

O site não deve parecer:
- projeto genérico de inteligência artificial;
- plataforma de pesquisa;
- laboratório tecnológico;
- dashboard corporativo;
- proposta abstrata de transformação digital;
- plataforma de clientes já existente.

O visitante deve perceber imediatamente:

> **Estamos modernizando o faturamento do Diário Oficial.**

## 6. Escopo da V1

### Incluído
- explicação do faturamento atual;
- medição manual;
- processo físico ainda existente;
- lançamento e consolidação dos dados;
- problemas e riscos;
- turnover e dependência de conhecimento operacional;
- automação proposta;
- motor em desenvolvimento;
- estimativa de 70%–80% de desenvolvimento do núcleo;
- homologação;
- impactos esperados no faturamento;
- rastreabilidade;
- transparência;
- cronograma;
- equipes;
- governança;
- pedido ao Conselho;
- segunda etapa de consulta ao cliente.

### Fora da V1
- faturamento real executado pelo site;
- integração financeira;
- ERP;
- contas de clientes;
- consulta real às publicações;
- consulta real a preços;
- banco de dados;
- APIs corporativas;
- autenticação individual na aplicação;
- plataforma operacional do cliente.

## 7. Princípio narrativo

```text
Faturamento atual
      ↓
Problema operacional
      ↓
Necessidade de modernização
      ↓
Automação
      ↓
Implantação
      ↓
Melhoria do faturamento
      ↓
Transparência
      ↓
Escala
```

A tecnologia não abre a narrativa. O problema de negócio abre a narrativa.

## 8. Modos de uso

### Modo Pitch
`/apresentacao/`

Características:
- oito cenas;
- no máximo 300 segundos;
- leitura predominantemente visual;
- uma ideia principal por tela;
- teclado;
- tela cheia;
- navegação linear.

### Modo Consulta
Permite navegação livre pelas áreas:
- faturamento;
- transformação;
- automação;
- transparência;
- cronograma;
- equipe;
- ficha técnica.

## 9. Arquitetura de rotas

```text
/
├── apresentacao/
│   ├── [abertura]
│   ├── faturamento-atual/
│   ├── por-que-modernizar/
│   ├── antes-depois/
│   ├── automacao/
│   ├── impactos/
│   ├── evolucao/
│   └── decisao/
│
├── faturamento/
├── transformacao/
├── automacao/
├── transparencia/
├── cronograma/
├── equipe/
└── ficha-tecnica/
```

## 10. Cena 1 — Abertura
**Tempo:** 20 segundos

### Título
**Automação e Modernização do Faturamento do Diário Oficial**

### Identificação secundária
Projeto Inteligência Editorial — GERDO + GERINF

### Mensagem
**Do processo manual para um faturamento digital, automatizado, rastreável e escalável.**

### Ação
`Iniciar apresentação`

O nome “Inteligência Editorial” nunca deve ser visualmente mais importante que o objeto de negócio.

## 11. Cena 2 — Como faturamos hoje
**Tempo:** 45 segundos

```text
Diário Oficial produzido digitalmente
              ↓
Impressão de uma cópia para medição
              ↓
Medição manual publicação por publicação
              ↓
Identificação da responsabilidade financeira
              ↓
Lançamento e consolidação
              ↓
Informação utilizada no faturamento
```

Mensagem de fechamento:

> **Apesar de o Diário Oficial ser produzido digitalmente, uma etapa essencial do faturamento ainda depende de um processo físico e manual.**

## 12. Cena 3 — Por que modernizar
**Tempo:** 35 segundos

### Pressão operacional
A medição precisa ser executada em poucas horas.

### Erros
Possibilidade de:
- medição incorreta;
- lançamento incorreto;
- atribuição incorreta;
- retrabalho;
- correções posteriores;
- cancelamento ou reprocessamento de notas.

### Dependência humana
O processo exige conhecimento operacional difícil de substituir rapidamente.

### Turnover
Treinamento e substituição de pessoal tornam-se mais complexos porque o desempenho depende de habilidade adquirida durante a própria execução do trabalho.

Mensagem:

> **O problema não é apenas custo de mão de obra. É dependência operacional.**

## 13. Cena 4 — Antes × Depois
**Tempo:** 45 segundos

### Antes
**Pessoas executam a medição e os lançamentos necessários ao faturamento.**

```text
Edição digital
→ impressão
→ medição humana
→ lançamento
→ conferência
→ faturamento
```

Características:
- manual;
- repetitivo;
- sujeito a variabilidade;
- dependente de especialistas;
- difícil de escalar.

### Depois
**O sistema produz os dados de medição e responsabilização; pessoas supervisionam exceções.**

```text
Edição digital
→ processamento
→ identificação
→ medição automática
→ responsabilidade financeira
→ validação
→ faturamento
```

Mensagem central:

> **Não queremos apenas medir mais rápido. Queremos deixar de depender da medição humana para faturar.**

## 14. Cena 5 — A automação em construção
**Tempo:** 40 segundos

Headline:

**A capacidade tecnológica necessária já está em desenvolvimento avançado.**

```text
Edição digital
     ↓
Leitura
     ↓
Identificação da estrutura editorial
     ↓
Identificação das publicações
     ↓
Medição
     ↓
Responsabilidade financeira
     ↓
Dados estruturados
     ↓
Validação
```

Indicador:

**≈ 70%–80%**

Legenda obrigatória:

**Estimativa interna de desenvolvimento do núcleo principal, atualmente em desenvolvimento e testes.**

O motor não é o produto final. Ele é o componente que permite automatizar o processo necessário ao faturamento.

## 15. Cena 6 — O que muda no faturamento
**Tempo:** 45 segundos

### Eficiência
Redução significativa do trabalho repetitivo.

### Consistência
Mesmo conjunto de regras aplicado de forma reproduzível.

### Continuidade operacional
Menor dependência de conhecimento individual.

### Rastreabilidade
Possibilidade de identificar como o dado utilizado no faturamento foi produzido.

### Escalabilidade
Aumento de volume sem crescimento proporcional da atividade manual.

### Turnover
A necessidade de profissionais dedicados exclusivamente à execução da medição tende a se aproximar de zero após automação e homologação completas.

Evitar promessa de “erro zero”.

## 16. Cena 7 — Transparência e evolução
**Tempo:** 40 segundos

A transparência deve ser apresentada como consequência da automação.

```text
Automação do faturamento
        ↓
Dados estruturados
        ↓
Rastreabilidade
        ↓
Evidência da publicação
        ↓
Transparência para o cliente
```

```text
Valor faturado
      ↕
Medição
      ↕
Publicação
      ↕
Prova publicada
```

### Segunda etapa
**Plataforma de consulta e transparência do faturamento**

Possibilidades futuras:
- publicação;
- edição;
- dimensão considerada;
- evidência;
- preço;
- histórico;
- extrato.

Badge obrigatório:

**Segunda etapa — evolução futura**

## 17. Cena 8 — Decisão
**Tempo:** 30 segundos

Headline:

**O próximo desafio é transformar a automação em capacidade operacional da empresa.**

```text
Automatizar o faturamento
        ↓
Implantar
        ↓
Escalar
        ↓
Tornar transparente
```

Pedido:

> **Apoio institucional para implantação e escala da modernização do faturamento do Diário Oficial e para avanço posterior da plataforma de transparência ao cliente.**

## 18. Orçamento temporal

| Cena | Tempo |
|---|---:|
| Abertura | 20 s |
| Faturamento atual | 45 s |
| Por que modernizar | 35 s |
| Antes × Depois | 45 s |
| Automação | 40 s |
| Impacto no faturamento | 45 s |
| Transparência e evolução | 40 s |
| Decisão | 30 s |
| **Total** | **300 s** |

## 19. Página Faturamento
Página consultiva principal.

Deve conter:
- processo atual;
- dependências;
- fluxo de medição;
- responsabilidades;
- problemas;
- consequências comerciais;
- necessidade de modernização.

Título sugerido:

**O faturamento do Diário Oficial hoje**

## 20. Página Transformação

Estrutura:
- Atual → trabalho humano executa o processo.
- Transição → automação + validação paralela.
- Futuro → sistema executa o fluxo regular e equipes tratam exceções.

Mensagem:

> **Automatizar tarefa mecânica para deslocar trabalho humano para controle e decisão.**

## 21. Página Automação

Conteúdo:
- arquitetura funcional simplificada;
- motor;
- reconhecimento;
- medição;
- responsabilização;
- validação;
- estágio;
- homologação.

Título:

**A automação que sustenta o novo faturamento**

## 22. Página Transparência

Headline:

**Do valor faturado à evidência que o sustenta.**

Explicar:
- rastreabilidade;
- publicação;
- dimensão;
- evidência;
- valor.

Somente depois apresentar a futura plataforma.

## 23. Página Cronograma

Fases:
1. Concepção e requisitos.
2. Motor de automação.
3. Testes e homologação.
4. Implantação no faturamento.
5. Escala.
6. Transparência ao cliente.

Status:
- concluído;
- em execução;
- próximo;
- futuro.

## 24. Página Equipe

### Construção e governança
**GERDO + GERINF**

### Desenvolvimento técnico
**Seção de Desenvolvimento de Aplicações**

### Operação, conhecimento do processo e homologação
- Seção do Diário Oficial;
- Seção de Editoração Eletrônica do Diário Oficial;
- Seção de Planejamento e Controle de Produção do Diário Oficial.

## 25. Ficha técnica

Campos obrigatórios:

- **Projeto:** Inteligência Editorial
- **Programa/objetivo:** Automação e Modernização do Faturamento do Diário Oficial
- **Organização:** Empresa Gráfica da Bahia — EGBA
- **Áreas responsáveis:** GERDO / GERINF
- **Natureza:** automação de processo / transformação digital
- **Processo principal:** faturamento de publicações
- **Capacidade automatizada:** medição e responsabilização financeira
- **Situação:** desenvolvimento e homologação
- **Estágio do núcleo:** aproximadamente 70%–80%, estimativa interna
- **Próximo marco:** implantação operacional
- **Evolução futura:** plataforma de transparência para clientes

## 26. Regra de conteúdo

Cada página deve responder pelo menos uma destas perguntas:

1. Como o faturamento funciona?
2. O que há de errado hoje?
3. O que será automatizado?
4. Como isso melhora o faturamento?
5. Como será implantado?
6. Como ficará mais transparente?

Se não responder nenhuma delas, o conteúdo deve ser reavaliado.

## 27. Sistema visual

O visual deve comunicar:
- processo;
- fluxo;
- transformação;
- controle;
- rastreabilidade;
- modernização.

Evitar:
- cérebro digital;
- robôs;
- circuitos;
- estrelas de IA;
- dashboards fictícios;
- abstrações tecnológicas sem ligação com faturamento.

## 28. Ilustrações prioritárias

1. **Faturamento atual** — do Diário digital ao dado utilizado no faturamento.
2. **Antes × Depois** — medição humana versus medição automatizada.
3. **Automação** — como a edição se transforma em dados de faturamento.
4. **Rastreabilidade** — valor → medição → publicação → evidência.
5. **Roadmap** — automação → homologação → implantação → escala → transparência.

## 29. Arquitetura Astro

- Astro 7.3.x;
- TypeScript strict;
- static output;
- ClientRouter;
- Content Collections;
- CSS nativo;
- CSP;
- Playwright;
- sem framework UI;
- sem banco;
- sem API;
- sem SSR na V1.

## 30. Modelo de conteúdo

### `BusinessClaim`
- `statement`
- `scope`
- `evidenceLevel`
- `source`
- `referenceDate`

### `scope`
- `current-process`
- `current-project`
- `expected-impact`
- `future-stage`

### `evidenceLevel`
- `confirmed`
- `internal-estimate`
- `expected`
- `future-target`

## 31. Regra de evidência

- Fatos atuais podem ser apresentados diretamente.
- 70%–80% sempre como **estimativa interna**.
- Ganhos de eficiência, enquanto não houver baseline, como **esperados**.
- Não fornecer percentual de redução de erros sem medição.
- Turnover deve ser apresentado como redução da necessidade de mão de obra dedicada à medição.
- Plataforma sempre como **segunda etapa / evolução futura**.

## 32. Segurança e publicação

```text
GitHub
 ↓
CI
 ↓
Astro build
 ↓
dist/
 ↓
Hostinger
 ↓
proteção de diretório
 ↓
HTTPS
 ↓
usuário autorizado
```

Nenhum login client-side.

## 33. Gate de foco de negócio

Pergunta obrigatória:

> **Se retirarmos o nome “Inteligência Editorial”, ainda fica claro que estamos apresentando a modernização do faturamento?**

Se a resposta for não: release reprovado.

## 34. Definition of Done

A V1 estará pronta quando:
1. faturamento for claramente o objeto central;
2. a automação for apresentada como meio;
3. o processo atual estiver compreensível;
4. problemas e riscos estiverem claros;
5. antes × depois estiver claro;
6. 70%–80% estiver qualificado;
7. impactos forem associados ao faturamento;
8. transparência surgir como consequência;
9. plataforma do cliente estiver marcada como futura;
10. cronograma estiver ligado à implantação;
11. responsabilidades estiverem claras;
12. pedido ao Conselho estiver explícito;
13. pitch durar ≤ 5 minutos;
14. site estiver protegido;
15. build e testes estiverem verdes.

## 35. Frase de controle

> **Estamos modernizando o faturamento do Diário Oficial por meio da automação da medição, da responsabilização financeira e da estruturação dos dados que sustentam esse processo.**
