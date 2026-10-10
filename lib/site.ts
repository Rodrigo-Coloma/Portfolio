/**
 * Single source of truth for the portfolio's content.
 * Every visual on the dashboard reads from here or from lib/projects.ts.
 */

export const PROFILE = {
  name:     'Rodrigo Coloma Gutiérrez',
  short:    'Rodrigo Coloma',
  role:     'Data Team Lead',
  team:     'Internal Data Product Development',
  org:      'Grupo Ilunion · corporate data office',
  location: 'Madrid, Spain',
  photo:    '/rodrigo.jpg',
  intro:
    'I lead the team that builds the group\'s internal data products, reporting to the CDO: the governed platform, the semantic models, the reports and the agents on top. My job is to turn data strategy into products that hold together across the whole stack — one platform, one set of definitions, one way of working.',
  background:
    'Pharmacist by training. Moved into data through the statistics behind 10+ peer-reviewed studies, then built a data function from nothing, shipped production ML for a hotel chain and delivered validated clinical reporting under GxP.',
  email:    'rjcolgut@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rcoloma',
  github:   'https://github.com/Rodrigo-Coloma',
  resume:   '/resume.pdf',
}

export const FOCUS = ['Data strategy', 'Data governance', 'Semantic layers', 'Data platforms', 'LLM agents', 'GxP reporting']

export const EDUCATION = [
  { title: 'Data Analytics Bootcamp', org: 'Ironhack',                        years: '2023–24', note: 'Best Final Project' },
  { title: 'B. Pharmacy',             org: 'Complutense University of Madrid', years: '2009–16' },
]

/* ─── Domain views ──────────────────────────────────────────
   The top of the report switches between four views. Each one
   carries the most recent job in that domain, three KPI cards and
   its own skill radar (self-assessed, 0–10).
*/

export type Kpi   = { value: string; label: string; context: string }
export type Skill = { axis: string; score: number; evidence: string }
export type Job   = {
  title:       string
  org:         string
  years:       string
  facts:       [string, string][]
  description: string
}

export type View = 'Grupo Ilunion' | 'Hotels' | 'Life sciences' | 'Education'
export const VIEW_ORDER: View[] = ['Grupo Ilunion', 'Hotels', 'Life sciences', 'Education']

export const VIEWS: Record<View, { job: Job; kpis: Kpi[]; skills: Skill[] }> = {
  'Grupo Ilunion': {
    job: {
      title: 'Data Team Lead',
      org:   'Internal Data Product Development · Grupo Ilunion',
      years: '2026–now',
      facts: [
        ['Org',        'Grupo Ilunion · corporate data office'],
        ['Reports to', 'Chief Data Officer'],
        ['Team',       'Internal data product development'],
      ],
      description:
        'I lead the team that builds the group\'s internal data products: the governed platform, the semantic models, the reports and the agents on top. My job is to turn data strategy into products that hold together across the whole stack — one platform, one set of definitions, one way of working.',
    },
    kpis: [
      { value: '~50',    label: 'Analysts building on it', context: 'Businesses extend the corporate model through composite models they own' },
      { value: '2.5–3k', label: 'Report consumers',        context: 'One definition of headcount, absenteeism and compensation across the group' },
      { value: '−40%',   label: 'Project development time', context: 'Reusable governed model and team standards instead of building every report from scratch' },
    ],
    skills: [
      { axis: 'Leadership',          score: 8.5, evidence: 'Leads the internal data product team: standards, demo days, five-minute pitches to the CDO.' },
      { axis: 'Strategic vision',    score: 8.5, evidence: 'Turned scattered reporting into one governed platform and one People domain model.' },
      { axis: 'Data governance',     score: 9.5, evidence: 'Corporate-owned definitions, RLS by org and KPI family, Dev → Test → Prod.' },
      { axis: 'Analytical thinking', score: 9,   evidence: 'Metric definitions argued from the data, not from the loudest stakeholder.' },
      { axis: 'Problem solving',     score: 9,   evidence: 'A 29-branch SWITCH became 13 precomputed flags; every incident written up in the ticket.' },
      { axis: 'Communication',       score: 8,   evidence: 'Proposals that fit in five minutes; progress shown at demo days.' },
      { axis: 'Technical depth',     score: 9,   evidence: 'ADF, Databricks, TMDL/DAX, LLM agents — still opens the model.' },
      { axis: 'Stakeholder mgmt',    score: 8,   evidence: 'Very different businesses building on one model without forking it.' },
    ],
  },

  'Hotels': {
    job: {
      title: 'Senior Data Scientist',
      org:   'Ilunion Hotels',
      years: '2024–2026',
      facts: [
        ['Org',   'Ilunion Hotels · hotel chain'],
        ['Scope', 'Revenue, demand and commercial analytics'],
        ['Stack', 'Python · XGBoost · MLflow · Power BI'],
      ],
      description:
        'Owned the chain\'s predictive layer and the reporting on top of it. Audited and rebuilt the core revenue forecasting pipeline, shipped five ML-based solutions — forecasting, demand, segmentation, churn and propensity — and wired them into Power BI dashboards that refresh automatically.',
    },
    kpis: [
      { value: '50+', label: 'Power BI dashboards',     context: 'Fed by the ML layer and refreshed automatically' },
      { value: '5',   label: 'ML-based solutions',      context: 'Forecasting, demand, segmentation, churn and propensity, in production' },
      { value: '+5%', label: 'Forecast accuracy',       context: 'Core revenue model, measured on held-out seasonal periods' },
    ],
    skills: [
      { axis: 'Machine learning',    score: 9,   evidence: 'Five production models: forecasting, demand, segmentation, churn, propensity.' },
      { axis: 'Forecasting',         score: 9,   evidence: 'Seasonality, lead-time and market features; XGBoost ensemble on rolling CV windows.' },
      { axis: 'Python',              score: 9,   evidence: 'scikit-learn, XGBoost, pandas; pipelines from extraction to scoring.' },
      { axis: 'Power BI · DAX',      score: 9.5, evidence: '50+ dashboards on top of the models, refreshed automatically.' },
      { axis: 'SQL',                 score: 9,   evidence: 'Azure SQL sources, feature tables and reporting views.' },
      { axis: 'Feature engineering', score: 8.5, evidence: 'The +5% came from re-engineered features more than from tuning.' },
      { axis: 'MLOps',               score: 8,   evidence: 'MLflow tracking and versioned models behind the reports.' },
      { axis: 'Revenue mgmt',        score: 7.5, evidence: 'Pricing, OTA rates and demand — the business the models serve.' },
    ],
  },

  'Life sciences': {
    job: {
      title: 'Independent Clinical Data Analyst',
      org:   'US clinical-trial sponsor · GxP',
      years: '2026',
      facts: [
        ['Engagement', 'Independent · sole data person'],
        ['Trial',      'Phase 3, surgical imaging'],
        ['Framework',  'GCP · 21 CFR Part 11 · EU Annex 11'],
      ],
      description:
        'Sole data person on a Phase 3 trial. Designed and built the clinical reporting system end to end — EDC → Dataverse → Power BI, a three-stage deployment pipeline, the system description and requirements specification in the sponsor\'s templates — and ran endpoint and inter-rater reliability analysis in R. Before that: lab director and data analyst at Macrogen, clinical data at Hospital 12 de Octubre.',
    },
    kpis: [
      { value: '10+',         label: 'Peer-reviewed articles',    context: 'Statistical analysis behind clinical and lab research' },
      { value: 'E2E',         label: 'Clinical reporting system', context: 'EDC → Dataverse → Power BI, 26 requirements, built solo' },
      { value: 'Days → min',  label: 'Interim reporting time',    context: 'Manual compilation replaced by validated, refreshed reports' },
    ],
    skills: [
      { axis: 'Biostatistics',       score: 9,   evidence: '10+ peer-reviewed studies; ICC inter- and intra-rater reliability on an ordinal scale.' },
      { axis: 'Clinical trial data', score: 9,   evidence: 'EDC field dictionaries, endpoint maps, TLF shell feasibility reviews.' },
      { axis: 'GxP & regulation',    score: 9,   evidence: 'HIPAA, 21 CFR Part 11 and EU Annex 11 cited in delivered documentation.' },
      { axis: 'Validation docs',     score: 9,   evidence: 'System description and requirements spec in the sponsor\'s own templates.' },
      { axis: 'R',                   score: 8.5, evidence: 'Endpoint statistics in R, run reproducibly from a Fabric notebook.' },
      { axis: 'Power BI reporting',  score: 9.5, evidence: 'Enrollment, dosing, follow-up and adverse events, three-stage pipeline.' },
      { axis: 'Pharmacology',        score: 8,   evidence: 'Pharmacist by training — reads a protocol as well as a schema.' },
      { axis: 'Lab operations',      score: 8,   evidence: 'Ran lab operations at Macrogen while building its data stack.' },
    ],
  },

  'Education': {
    job: {
      title: 'Data Analytics Bootcamp',
      org:   'Ironhack',
      years: '2023–24',
      facts: [
        ['Award',     'Best Final Project'],
        ['Earlier',   'B. Pharmacy · Complutense University of Madrid'],
        ['Languages', 'Spanish · English C2 · German A1'],
      ],
      description:
        'Formalised the move from lab to data with an intensive bootcamp in Python, SQL, statistics and visualisation, finished with the Best Final Project award. It built on a pharmacy degree and years of statistics for peer-reviewed research — the scientific method, applied to business data.',
    },
    kpis: [
      { value: '#1', label: 'Best Final Project', context: 'Ironhack Data Analytics Bootcamp, 2023–24 cohort' },
      { value: 'C2', label: 'English level',      context: 'Native Spanish; working daily with US and EU teams' },
      { value: '2',  label: 'Disciplines combined', context: 'Pharmacy and data analytics — science first, then the stack' },
    ],
    skills: [
      { axis: 'Learning speed',      score: 9.5, evidence: 'From lab to production ML and data leadership in a few years.' },
      { axis: 'Curiosity',           score: 9.5, evidence: 'Side projects in RAG, clinical EDC and public-tender analytics, built for fun.' },
      { axis: 'Scientific method',   score: 9,   evidence: 'Hypothesis, measurement, peer review — applied to business data.' },
      { axis: 'Adaptability',        score: 9,   evidence: 'Hospital, lab, hotel chain, clinical sponsor, corporate group.' },
      { axis: 'Discipline',          score: 8.5, evidence: 'A demanding degree, then a bootcamp alongside a full-time job.' },
      { axis: 'Teamwork',            score: 8.5, evidence: 'Cohort projects at Ironhack; cross-functional teams since.' },
      { axis: 'Presenting',          score: 8,   evidence: 'Final project pitch that won the cohort award.' },
      { axis: 'Resilience',          score: 9,   evidence: 'A career pivot made while working, without stopping either.' },
    ],
  },
}

/* ─── Career timeline ───────────────────────────────────────── */

export type Domain = 'Grupo Ilunion' | 'Hotels' | 'Life sciences' | 'Side projects'
export const DOMAINS: Domain[] = ['Grupo Ilunion', 'Hotels', 'Life sciences', 'Side projects']

export type Stint = {
  org:    string
  role:   string
  start:  number   // fractional year
  end:    number | null
  kind:   'role' | 'education'
  domain: Domain | null   // education is not a business domain
  label:  string   // years as shown
}

export const CAREER: Stint[] = [
  { org: 'Grupo Ilunion',          role: 'Data Team Lead · internal data product development', start: 2026,   end: null,   kind: 'role',      domain: 'Grupo Ilunion', label: '2026–now'  },
  { org: 'US trial sponsor',       role: 'Independent Clinical Data Analyst (GxP)',             start: 2026.4, end: 2026.6, kind: 'role',      domain: 'Life sciences', label: '2026'      },
  { org: 'Ilunion Hotels',         role: 'Senior Data Scientist',                                start: 2024,   end: 2026,   kind: 'role',      domain: 'Hotels',        label: '2024–2026' },
  { org: 'Ironhack',               role: 'Data Analytics Bootcamp · Best Final Project',         start: 2023.5, end: 2024,   kind: 'education', domain: null,            label: '2023–24'   },
  { org: 'Macrogen',               role: 'Data Analyst & Lab Director',                          start: 2022,   end: 2024,   kind: 'role',      domain: 'Life sciences', label: '2022–2024' },
  { org: 'Hospital 12 de Octubre', role: 'Clinical Data Specialist',                             start: 2018,   end: 2022,   kind: 'role',      domain: 'Life sciences', label: '2018–2022' },
  { org: 'Complutense Univ.',      role: 'B. Pharmacy',                                          start: 2009,   end: 2016,   kind: 'education', domain: null,            label: '2009–16'   },
]

/* ─── Stack, as one pipeline ────────────────────────────────── */

export type Layer = 'Ingest' | 'Store' | 'Model' | 'Serve' | 'Converse'
export const LAYERS: { name: Layer; blurb: string; tools: string[] }[] = [
  { name: 'Ingest',   blurb: 'Contracts at the edge',          tools: ['Azure Data Factory', 'Power Automate', 'EDC / APIs'] },
  { name: 'Store',    blurb: 'Medallion, governed',            tools: ['Databricks', 'Delta Lake', 'Unity Catalog', 'Dataverse', 'PostgreSQL'] },
  { name: 'Model',    blurb: 'One set of definitions',         tools: ['TMDL · DAX', 'PySpark', 'Python · R', 'XGBoost · MLflow'] },
  { name: 'Serve',    blurb: 'Reports people trust',           tools: ['Power BI · Fabric', 'Deployment pipelines', 'Power Apps', 'FastAPI'] },
  { name: 'Converse', blurb: 'Agents on the same model',       tools: ['Databricks Genie', 'Copilot Studio', 'Claude API', 'RAG · pgvector'] },
]

/* ─── How I work ────────────────────────────────────────────── */

export const PRINCIPLES: { title: string; body: string }[] = [
  { title: 'One platform, one set of definitions', body: 'Scattered reporting is a strategy problem before it is a technical one. "Headcount" should mean the same thing in every report, every business and every agent.' },
  { title: 'Governance that enables',              body: 'Corporate owns the definitions; businesses extend the model and own their RLS. Versioned in Azure DevOps, promoted Dev → Test → Prod, no forks.' },
  { title: 'Coherence across the stack',           body: 'One lineage and one vocabulary from the raw table to the question asked in Teams. Agents answer from the model the reports use.' },
  { title: 'Standards the team ships against',     body: 'Testing, review and environment separation are the baseline. Progress shown at demo days; every incident written up so it breaks once.' },
  { title: 'Regulated when it has to be',          body: 'DES and SRS in the sponsor\'s templates, HIPAA · 21 CFR Part 11 · EU Annex 11, endpoint analysis in validated R.' },
  { title: 'Hands-on where it earns trust',        body: 'Pay at refresh time, not at click time. Knowing that first-hand is what lets me set standards the team respects.' },
]

/* ─── The joke ──────────────────────────────────────────────── */

export const BI_HOURS: { label: string; pct: number; note: string }[] = [
  { label: 'Agreeing what "headcount" means',     pct: 31, note: 'Average of month-end snapshots? Last month? Including interns? Three meetings.' },
  { label: 'Explaining why it doesn\'t match Excel', pct: 24, note: 'The Excel had a filter on. It always has a filter on.' },
  { label: 'Waiting for the refresh',             pct: 17, note: 'Gateway timeout at 98%. Retry. Coffee.' },
  { label: 'Changing the colours back',           pct: 14, note: '"Can it be more corporate?" → "Can it pop more?" → original.' },
  { label: 'Actually building the report',        pct: 14, note: 'The fun part. Takes an afternoon.' },
]

export const CONTACT_BLURB =
  'Open to data leadership roles, to consulting on data strategy, governance and semantic layers, and to talks on the same. Based in Madrid, working across CET and US hours.'
