/**
 * Single source of truth for the portfolio's content.
 * Both panes read from here: the preview renders it as a page,
 * the source pane renders it as Markdown (see lib/source.ts).
 */

export const PROFILE = {
  name:     'Rodrigo Coloma Gutiérrez',
  short:    'Rodrigo Coloma',
  role:     'Data Team Lead · Internal data product development',
  location: 'Madrid',
  headline: 'Coherent from source to decision.',
  /** Headline split for the preview: [before, emphasised, after]. */
  headlineParts: ['Coherent from source to ', 'decision', '.'] as const,
  intro:
    'I lead the internal data product development team at Grupo Ilunion, within the corporate data office and reporting to the CDO. The team builds and runs what the group\'s businesses actually use: the governed data platform, the semantic models, the reports and the agents on top. My job is to turn the CDO\'s data strategy into products that hold together across the whole stack — one platform, one set of definitions, one way of working. Before that I built a data function from nothing, put production ML in front of a hotel chain, and delivered validated clinical reporting for a US trial sponsor under GxP.',
  email:    'rjcolgut@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rcoloma',
  github:   'https://github.com/Rodrigo-Coloma',
  resume:   '/resume.pdf',
}

export type Principle = { title: string; body: string; source: string[] }

export const PRINCIPLES: Principle[] = [
  {
    title: 'One platform, one set of definitions',
    body:
      'Scattered reporting is a strategy problem before it is a technical one. Within the CDO\'s strategy, my team replaced six report-specific models (headcount, compensation, training, accidents…) with a single People domain model that corporate owns and every business builds on: around 50 analysts extend it, 2,500–3,000 people consume it, and "headcount" means the same thing in all of them.',
    source: ['six report models → one governed domain', 'model; ~50 analysts, 2.5–3k consumers.'],
  },
  {
    title: 'Governance that enables, not blocks',
    body:
      'Corporate owns the semantic model and the metric definitions; businesses extend it through composite models, add their own tables and manage their own row-level security, which encodes both organisational scope and which KPI families you may see. Everything is versioned in Azure DevOps and promoted through Dev → Test → Prod, so a change upstream reaches every business without a fork.',
    source: ['corporate owns definitions; businesses', 'extend and own their RLS. Dev → Test → Prod.'],
  },
  {
    title: 'Coherence across the whole stack',
    body:
      'Ingestion in Azure Data Factory and Databricks, Delta Lake medallion layers under Unity Catalog, the semantic layer in TMDL, reports in Power BI, and conversational agents (Databricks Genie, Copilot Studio in Teams) that answer from the same model as the reports. One lineage, one vocabulary, from the raw table to the question asked in chat.',
    source: ['ADF · Databricks · Unity Catalog · TMDL', '· Power BI · agents on the same model.'],
  },
  {
    title: 'Standards the team ships against',
    body:
      'Testing, code review and environment separation are the baseline for the data product team, not an aspiration. Progress is shown at demo days rather than in status emails, proposals fit in a five-minute pitch to the CDO, and when something breaks — a Unity Catalog permission, a Power Query firewall, a Dataverse endpoint — the write-up goes in the ticket so it does not break twice.',
    source: ['CI, review, env separation; demo days,', 'five-minute pitches, write-ups in tickets.'],
  },
  {
    title: 'Regulated when it has to be',
    body:
      'In a GxP setting the system description and the requirements specification are part of the deliverable. I write them in the sponsor\'s own templates, cite HIPAA, 21 CFR Part 11 and EU Annex 11 where they apply, and keep endpoint analysis in validated R rather than convenient Python. The same discipline, dialled down, is what makes corporate numbers auditable.',
    source: ['DES/SRS in the sponsor\'s templates;', 'HIPAA · 21 CFR Part 11 · EU Annex 11.'],
  },
  {
    title: 'Hands-on where it earns trust',
    body:
      'I still open the model. A 29-branch SWITCH measure used as a visual filter became 13 precomputed status flags; a family of "subjects with X" measures became SUMs over 1/0 columns; a forecasting pipeline gained five points of accuracy after a feature-engineering pass. Paying at refresh time instead of click time is a design decision, and knowing that first-hand is what lets me set standards the team respects.',
    source: ['29-branch SWITCH → 13 flags; SUM of 1/0;', '+5% forecast accuracy. Pay at refresh time.'],
  },
]

export type Job = { org: string; years: string; role: string }

export const EXPERIENCE: Job[] = [
  { org: 'Grupo Ilunion',           years: '2026–now',  role: 'Data Team Lead, internal data product development (corporate data office, reporting to the CDO)' },
  { org: 'US trial sponsor',        years: '2026',      role: 'Independent Clinical Data Analyst (GxP)' },
  { org: 'Ilunion Hotels',          years: '2024–2026', role: 'Senior Data Scientist' },
  { org: 'Macrogen',                years: '2022–2024', role: 'Data Analyst & Lab Director' },
  { org: 'Hospital 12 de Octubre',  years: '2018–2022', role: 'Clinical Data Specialist' },
]

export type StackGroup = { name: string; key: string; items: string[] }

export const STACK: StackGroup[] = [
  { name: 'Modeling & BI',    key: 'modeling',    items: ['Power BI · DAX · TMDL', 'Power Query / M · Fabric', 'Deployment pipelines · RLS'] },
  { name: 'Data engineering', key: 'engineering', items: ['Databricks · Unity Catalog', 'PySpark · Azure Data Factory', 'Dataverse · Power Automate'] },
  { name: 'Code & infra',     key: 'code/infra',  items: ['Python · R · SQL · TypeScript', 'PostgreSQL · pgvector · Docker', 'Azure DevOps · nginx · Linux'] },
]

export const EDUCATION = [
  { years: '2023–24', title: 'Data Analytics Bootcamp', org: 'Ironhack', note: 'Best Final Project Award' },
  { years: '2009–16', title: 'B. Pharmacy',              org: 'Complutense University of Madrid' },
]

export const LANGUAGES = [
  { name: 'Spanish', level: 'native' },
  { name: 'English', level: 'C2' },
  { name: 'German',  level: 'A1' },
]

export const CONTACT_BLURB =
  'Open to data leadership roles, to consulting on data strategy, governance and semantic layers, and to talks on the same. Based in Madrid, working across CET and US hours. Email is the fastest way to reach me.'

/** Files shown in the editor tab bar. Each maps to a section anchor. */
export const FILES = [
  { name: 'README.md',     anchor: '#top'      },
  { name: 'how-i-work.md', anchor: '#work'     },
  { name: 'projects.md',   anchor: '#projects' },
  { name: 'stack.md',      anchor: '#stack'    },
  { name: 'contact.md',    anchor: '#contact'  },
]
