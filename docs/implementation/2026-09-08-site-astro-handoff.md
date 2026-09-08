# Handoff — migração do site executivo para Astro

## Objetivo do lote
Transformar a apresentação de faturamento em um site Astro completo, preservando a centralidade do problema de negócio: automação e modernização do faturamento do Diário Oficial.

## Estado
Implementação realizada em `feat/site-astro-faturamento`.

## Entregas
- home executiva;
- modo consulta: faturamento, transformação, automação, transparência, cronograma, equipe e ficha técnica;
- modo pitch com oito cenas e navegação por teclado;
- conteúdo tipado e validação semântica durante build;
- design responsivo e reduced-motion;
- CSP, robots noindex/nofollow/noarchive;
- GitHub Actions para `npm ci` + `npm run build`;
- documentação de evidência para separar fatos, estimativas, expectativas e evolução futura.

## Guardrails preservados
- faturamento permanece como assunto central;
- Inteligência Editorial aparece como tecnologia habilitadora;
- 70%–80% sempre identificado como estimativa interna;
- nenhuma promessa de erro zero ou economia inventada;
- transparência ao cliente permanece segunda etapa.

## Débito controlado
A especificação aponta Astro 7.3.x, enquanto o lockfile atual do repositório permanece baseado em Astro 5.4.1. A migração funcional foi mantida sobre o lockfile reproduzível existente para não introduzir uma atualização de dependências sem lockfile validado. Upgrade de runtime deve ser executado em lote próprio, regenerando e validando `package-lock.json`.

## Gate humano
Merge em `main` permanece decisão final do responsável pelo repositório, conforme low-HITL e branch/PR lifecycle.
