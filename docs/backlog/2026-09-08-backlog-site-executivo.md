# Backlog de Construção
## Site Executivo — Automação e Modernização do Faturamento do Diário Oficial

**Projeto:** Inteligência Editorial

---

## P0 — Regra principal

Nenhuma história P0 pode ser aceita apenas porque “a tela ficou pronta”.

Ela deve contribuir para explicar:
- faturamento atual;
- problema;
- automação;
- implantação;
- impacto;
- transparência.

## EPIC E0 — Foco de negócio e narrativa

| ID | Item | Pri. |
|---|---|---:|
| IE-WEB-001 | Registrar faturamento como objetivo principal da apresentação | P0 |
| IE-WEB-002 | Consolidar mensagem executiva da modernização | P0 |
| IE-WEB-003 | Reescrever oito cenas com faturamento como fio condutor | P0 |
| IE-WEB-004 | Classificar afirmações por nível de evidência | P0 |
| IE-WEB-005 | Validar nomenclaturas organizacionais | P0 |
| IE-WEB-006 | Auditar conteúdo para eliminar deriva para “projeto genérico de IA” | P0 |
| IE-WEB-007 | Auditar segunda etapa para impedir protagonismo excessivo | P0 |

**Gate:** um leitor deve compreender o problema de faturamento antes de conhecer detalhes do motor.

## EPIC E1 — Fundação Astro

| ID | Item | Pri. |
|---|---|---:|
| IE-WEB-010 | Inicializar Astro + TypeScript strict | P0 |
| IE-WEB-011 | Configurar check/build/test | P0 |
| IE-WEB-012 | Criar estrutura de projeto | P0 |
| IE-WEB-013 | Criar modelos tipados de conteúdo | P0 |
| IE-WEB-014 | Criar modelo BusinessClaim | P0 |
| IE-WEB-015 | Configurar CSP | P1 |
| IE-WEB-016 | Configurar noindex | P1 |

## EPIC E2 — Sistema visual orientado ao faturamento

| ID | Item | Pri. |
|---|---|---:|
| IE-WEB-020 | Criar design tokens | P0 |
| IE-WEB-021 | Criar layout executivo | P0 |
| IE-WEB-022 | Criar layout do pitch | P0 |
| IE-WEB-023 | Criar padrões visuais de processo | P0 |
| IE-WEB-024 | Criar padrão Antes × Depois | P0 |
| IE-WEB-025 | Criar padrão evidência/rastreabilidade | P0 |
| IE-WEB-026 | Implementar reduced motion | P0 |
| IE-WEB-027 | Criar header consulta | P1 |
| IE-WEB-028 | Criar rodapé institucional | P1 |

## EPIC E3 — Motor da apresentação

| ID | Item | Pri. |
|---|---|---:|
| IE-WEB-030 | Criar schema das cenas | P0 |
| IE-WEB-031 | Criar oito rotas | P0 |
| IE-WEB-032 | Configurar ClientRouter | P0 |
| IE-WEB-033 | Implementar anterior/próximo | P0 |
| IE-WEB-034 | Implementar progresso | P0 |
| IE-WEB-035 | Implementar teclado | P0 |
| IE-WEB-036 | Implementar fullscreen | P0 |
| IE-WEB-037 | Implementar transições | P0 |
| IE-WEB-038 | Validar histórico | P0 |

## EPIC E4 — Pitch do faturamento

| ID | Cena | Pri. |
|---|---|---:|
| IE-WEB-040 | Automação e Modernização do Faturamento | P0 |
| IE-WEB-041 | Como faturamos hoje | P0 |
| IE-WEB-042 | Por que modernizar | P0 |
| IE-WEB-043 | Antes × Depois | P0 |
| IE-WEB-044 | Automação em construção | P0 |
| IE-WEB-045 | Impacto no faturamento | P0 |
| IE-WEB-046 | Transparência e evolução | P0 |
| IE-WEB-047 | Decisão e pedido ao Conselho | P0 |
| IE-WEB-048 | Cronometrar apresentação | P0 |
| IE-WEB-049 | Revisão adversarial final do pitch | P0 |

**Gate:** pitch ≤ 300 segundos e faturamento permanece protagonista nas oito cenas.

## EPIC E5 — Consulta executiva

| ID | Item | Pri. |
|---|---|---:|
| IE-WEB-050 | Landing executiva | P1 |
| IE-WEB-051 | Página Faturamento | P1 |
| IE-WEB-052 | Página Transformação | P1 |
| IE-WEB-053 | Página Automação | P1 |
| IE-WEB-054 | Página Transparência | P1 |
| IE-WEB-055 | Página Cronograma | P1 |
| IE-WEB-056 | Página Equipe | P1 |
| IE-WEB-057 | Página Ficha Técnica | P1 |

## EPIC E6 — Evidências e claims

| ID | Item | Pri. |
|---|---|---:|
| IE-WEB-060 | Marcar 70%–80% como estimativa interna | P0 |
| IE-WEB-061 | Marcar ganhos não medidos como esperados | P0 |
| IE-WEB-062 | Marcar plataforma como etapa futura | P0 |
| IE-WEB-063 | Remover promessa de “erro zero” | P0 |
| IE-WEB-064 | Revisar afirmação sobre turnover | P0 |
| IE-WEB-065 | Registrar fonte/data de métricas futuras | P1 |

## EPIC E7 — Governança e cronograma

| ID | Item | Pri. |
|---|---|---:|
| IE-WEB-070 | Criar timeline de modernização do faturamento | P1 |
| IE-WEB-071 | Representar GERDO + GERINF | P1 |
| IE-WEB-072 | Representar Desenvolvimento de Aplicações | P1 |
| IE-WEB-073 | Representar unidades operacionais | P1 |
| IE-WEB-074 | Separar construção de homologação/operação | P1 |

## EPIC E8 — QA executivo

| ID | Item | Pri. |
|---|---|---:|
| IE-WEB-080 | Configurar Playwright | P0 |
| IE-WEB-081 | Testar navegação do pitch | P0 |
| IE-WEB-082 | Testar todas as rotas | P1 |
| IE-WEB-083 | Testar 1920×1080 | P0 |
| IE-WEB-084 | Testar 1366×768 | P0 |
| IE-WEB-085 | Testar tablet | P1 |
| IE-WEB-086 | Testar mobile | P1 |
| IE-WEB-087 | Testar teclado | P0 |
| IE-WEB-088 | Testar reduced motion | P1 |
| IE-WEB-089 | Auditoria Lighthouse | P1 |
| IE-WEB-090 | Red-team editorial | P0 |

### Red-team editorial
- parece projeto de faturamento?
- tecnologia ganhou protagonismo excessivo?
- o cliente apareceu cedo demais?
- há promessa não comprovada?
- há jargão desnecessário?
- um conselheiro entende o pedido?

## EPIC E9 — Hostinger e release

| ID | Item | Pri. |
|---|---|---:|
| IE-WEB-100 | Criar subdomínio | P0 |
| IE-WEB-101 | Configurar HTTPS | P0 |
| IE-WEB-102 | Configurar proteção de diretório | P0 |
| IE-WEB-103 | Validar acesso autorizado | P0 |
| IE-WEB-104 | Validar bloqueio anônimo | P0 |
| IE-WEB-105 | Publicar somente dist | P0 |
| IE-WEB-106 | Criar CI | P1 |
| IE-WEB-107 | Criar deploy manual | P1 |
| IE-WEB-108 | Criar fallback offline | P0 |

## EPIC E10 — Ensaio

| ID | Item | Pri. |
|---|---|---:|
| IE-WEB-110 | Ensaio de conteúdo | P0 |
| IE-WEB-111 | Ensaio cronometrado | P0 |
| IE-WEB-112 | Ensaio com pessoa sem contexto | P0 |
| IE-WEB-113 | Teste no notebook | P0 |
| IE-WEB-114 | Teste no projetor | P0 |
| IE-WEB-115 | Teste de rede | P0 |
| IE-WEB-116 | Aprovação executiva final | P0 |

## Sequência

```text
E0 Foco
 ↓
E1 Fundação
 ↓
E2 Visual
 ↓
E3 Navegação
 ↓
E4 Pitch
 ↓
PITCH MVP
 ↓
E5 Consulta
 ↓
E6 Evidências
 ↓
E7 Governança
 ↓
E8 QA
 ↓
E9 Publicação
 ↓
E10 Ensaio
 ↓
READY FOR EXECUTIVE PRESENTATION
```

## Critério adversarial final

Antes do release, ocultar temporariamente “Projeto Inteligência Editorial” e reler a apresentação.

Se ainda estiver claro que o site trata da **Automação e Modernização do Faturamento do Diário Oficial**, o foco foi preservado. Caso contrário, o release não deve ser aprovado.
