export type EvidenceLevel = 'confirmed' | 'internal-estimate' | 'expected' | 'future-target';
export type ClaimScope = 'current-process' | 'current-project' | 'expected-impact' | 'future-stage';
export type RoadmapStatus = 'concluido' | 'em-execucao' | 'proximo' | 'futuro';

export interface BusinessClaim {
  statement: string;
  scope: ClaimScope;
  evidenceLevel: EvidenceLevel;
  source: string;
  referenceDate: string;
}

export interface RoadmapItem {
  phase: string;
  title: string;
  description: string;
  status: RoadmapStatus;
}

export const siteMeta = {
  title: 'Modernização do Faturamento · Diário Oficial',
  description: 'Automação e modernização do faturamento do Diário Oficial, com medição digital, responsabilização financeira, rastreabilidade e homologação.',
  referenceDate: '08 de setembro de 2026',
};

export const consultationNav = [
  { href: '/', label: 'Visão geral' },
  { href: '/faturamento/', label: 'Faturamento' },
  { href: '/transformacao/', label: 'Transformação' },
  { href: '/automacao/', label: 'Automação' },
  { href: '/transparencia/', label: 'Transparência' },
  { href: '/cronograma/', label: 'Cronograma' },
  { href: '/equipe/', label: 'Equipe' },
  { href: '/ficha-tecnica/', label: 'Ficha técnica' },
];

export const pitchRoutes = [
  '/apresentacao/',
  '/apresentacao/faturamento-atual/',
  '/apresentacao/antes-depois/',
  '/apresentacao/analise-deterministica/',
  '/apresentacao/automacao/',
  '/apresentacao/impactos/',
  '/apresentacao/rastreabilidade/',
  '/apresentacao/roadmap/',
  '/apresentacao/governanca/',
  '/apresentacao/evolucao/',
  '/apresentacao/decisao/',
] as const;

export const currentFlow = [
  'Edição digital',
  'Impressão para medição',
  'Medição manual publicação por publicação',
  'Responsabilidade financeira',
  'Lançamento e consolidação',
  'Dados utilizados no faturamento',
];

export const automatedFlow = [
  'Edição digital',
  'Processamento',
  'Identificação',
  'Medição automática',
  'Responsabilidade financeira',
  'Dados estruturados',
  'Validação',
];

export const roadmap: RoadmapItem[] = [
  { phase: '01', title: 'Concepção', description: 'Escopo, regras de medição, responsabilização e critérios definidos.', status: 'concluido' },
  { phase: '02', title: 'Automação do núcleo', description: 'Leitura, identificação, medição e responsabilização em consolidação.', status: 'em-execucao' },
  { phase: '03', title: 'Homologação', description: 'Validação técnica e operacional com áreas envolvidas e casos reais.', status: 'proximo' },
  { phase: '04', title: 'Implantação assistida', description: 'Entrada controlada do fluxo automatizado no processo operacional.', status: 'futuro' },
  { phase: '05', title: 'Escala operacional', description: 'Ampliação do uso e redução progressiva da execução manual.', status: 'futuro' },
  { phase: '06', title: 'Transparência ao cliente', description: 'Consulta de publicação, medição, evidência e histórico como evolução posterior.', status: 'futuro' },
];

export const teams = [
  {
    label: 'Construção e governança',
    title: 'GERDO + GERINF',
    members: ['Gerência do Diário Oficial', 'Gerência de Informática'],
  },
  {
    label: 'Desenvolvimento técnico',
    title: 'Seção de Desenvolvimento de Aplicações',
    members: ['Desenvolvimento e integração da capacidade tecnológica'],
  },
  {
    label: 'Operação, conhecimento do processo e homologação',
    title: 'Equipes operacionais do Diário Oficial',
    members: ['Seção do Diário Oficial', 'Seção de Editoração Eletrônica do Diário Oficial', 'Seção de Planejamento e Controle de Produção do Diário Oficial'],
  },
];

export const facts = [
  ['Programa / objetivo', 'Automação e Modernização do Faturamento do Diário Oficial'],
  ['Projeto', 'Inteligência Editorial'],
  ['Organização', 'Empresa Gráfica da Bahia — EGBA'],
  ['Áreas responsáveis', 'GERDO / GERINF'],
  ['Natureza', 'Automação de processo / transformação digital'],
  ['Processo principal', 'Faturamento de publicações'],
  ['Capacidade automatizada', 'Medição e responsabilização financeira'],
  ['Situação', 'Desenvolvimento e preparação para homologação progressiva'],
  ['Estágio do núcleo', 'Aproximadamente 70%–80% — estimativa interna'],
  ['Próximo marco', 'Homologação progressiva'],
  ['Evolução futura', 'Plataforma de transparência para clientes'],
] as const;

export const claims: BusinessClaim[] = [
  {
    statement: 'A edição do Diário Oficial já é produzida digitalmente, mas a medição utilizada no faturamento ainda depende de uma etapa física e manual.',
    scope: 'current-process',
    evidenceLevel: 'confirmed',
    source: 'Documentação do processo GERDO/GERINF',
    referenceDate: '2026-09-08',
  },
  {
    statement: 'O núcleo principal da automação encontra-se em desenvolvimento avançado, estimado internamente entre 70% e 80%.',
    scope: 'current-project',
    evidenceLevel: 'internal-estimate',
    source: 'Estimativa interna de desenvolvimento',
    referenceDate: '2026-09-08',
  },
  {
    statement: 'A automação tende a reduzir trabalho repetitivo, ampliar consistência e diminuir dependência de conhecimento individual na execução da medição.',
    scope: 'expected-impact',
    evidenceLevel: 'expected',
    source: 'Objetivos e critérios de desenho do projeto',
    referenceDate: '2026-09-08',
  },
  {
    statement: 'Uma plataforma de transparência para clientes é tratada como evolução futura e não integra a implantação operacional inicial.',
    scope: 'future-stage',
    evidenceLevel: 'future-target',
    source: 'Roadmap do projeto',
    referenceDate: '2026-09-08',
  },
];

const evidenceLevels = new Set<EvidenceLevel>(['confirmed', 'internal-estimate', 'expected', 'future-target']);
const scopes = new Set<ClaimScope>(['current-process', 'current-project', 'expected-impact', 'future-stage']);
const statuses = new Set<RoadmapStatus>(['concluido', 'em-execucao', 'proximo', 'futuro']);

for (const claim of claims) {
  if (!claim.statement.trim() || !claim.source.trim() || !claim.referenceDate.trim()) throw new Error('BusinessClaim incompleto.');
  if (!evidenceLevels.has(claim.evidenceLevel) || !scopes.has(claim.scope)) throw new Error(`BusinessClaim semanticamente inválido: ${claim.statement}`);
}

for (const item of roadmap) {
  if (!item.phase || !item.title || !item.description || !statuses.has(item.status)) throw new Error(`Roadmap semanticamente inválido: ${item.title}`);
}

if (pitchRoutes.length !== 11) throw new Error('O modo pitch deve possuir exatamente onze cenas.');
