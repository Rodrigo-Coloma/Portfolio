/**
 * Single source of truth for the portfolio's content.
 * Both panes read from here: the preview renders it as a page,
 * the source pane renders it as Markdown (see lib/source.ts).
 */

export const PROFILE = {
  name:     'Rodrigo Coloma Gutiérrez',
  short:    'Rodrigo Coloma',
  role:     'Data Team Lead · Clinical Data Analyst',
  location: 'Madrid',
  headline: 'Models people trust.',
  intro:
    'I design semantic layers and the reporting on top of them. I lead the corporate data team at Grupo Ilunion, serving a group of very different businesses from one governed model, and I have worked as the sole data person for a US clinical-trials sponsor under GxP.',
  email:    'rjcolgut@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rcoloma',
  github:   'https://github.com/Rodrigo-Coloma',
  resume:   '/resume.pdf',
}

export type Principle = { title: string; body: string; source: string[] }

export const PRINCIPLES: Principle[] = [
  {
    title: 'One model, one truth',
    body:
      'I replaced six report-specific models (headcount, compensation, training, accidents…) with a single People domain model. Row-level security handles both who you are in the org and which KPI families you may see, so one user can read salaries for their unit and headcount for all of them.',
    source: ['six report models → one People domain', 'model, RLS by org and by KPI family.'],
  },
  {
    title: 'Governed, then reusable',
    body:
      'Corporate owns the semantic model and the metric definitions; each business builds on it through composite DirectQuery models, adds its own tables, and manages its own RLS. Changes upstream propagate downstream. Versioned in Azure DevOps, shipped through Dev → Test → Prod pipelines.',
    source: ['corporate owns definitions; businesses', 'extend via composite models and own their RLS.'],
  },
  {
    title: 'Performance is a design decision',
    body:
      'Pay at refresh time, not at click time. A 29-branch SWITCH measure used as a visual filter became 13 precomputed status flags; a "subjects with X" family of measures became SUMs over 1/0 columns. Master–detail layouts that work on load, no bookmarks required.',
    source: ['precompute at refresh; 29-branch SWITCH', '→ 13 flags; measures as SUM of 1/0.'],
  },
  {
    title: 'Documentation nobody has to ask for',
    body:
      'In a regulated setting the system description and requirements spec are part of the deliverable. I write them in the sponsor\'s own templates, cite HIPAA, 21 CFR Part 11 and EU Annex 11 where they apply, and keep the analysis code in validated R rather than convenient Python.',
    source: ['SRS/DES in the sponsor\'s templates;', 'HIPAA · 21 CFR Part 11 · EU Annex 11.'],
  },
  {
    title: 'Ship in the open',
    body:
      'Progress is shown at demo days, not in status emails. Proposals fit in a five-minute pitch to the CDO. When something breaks — a Unity Catalog permission, a Power Query firewall, a Dataverse TDS endpoint — the write-up goes in the ticket so it does not break twice.',
    source: ['demo days, five-minute pitches,', 'write-ups in tickets.'],
  },
  {
    title: 'Conversational on top, rigorous underneath',
    body:
      'Agents in Teams (Copilot Studio) and Databricks Genie sit on the same governed model as the reports. They only work because the model already knows what "headcount" means: the last month\'s snapshot, never a sum.',
    source: ['agents sit on the governed model,', 'not beside it.'],
  },
]

export type Job = { org: string; years: string; role: string }

export const EXPERIENCE: Job[] = [
  { org: 'Grupo Ilunion',           years: '2026–now',  role: 'Data Team Lead, corporate data team' },
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
  'Open to consulting on semantic models and Power BI governance, remote EU roles, and talks on the same. Based in Madrid, working across CET and US hours. Email is the fastest way to reach me.'

/** Files shown in the editor tab bar. Each maps to a section anchor. */
export const FILES = [
  { name: 'README.md',     anchor: '#top'      },
  { name: 'how-i-work.md', anchor: '#work'     },
  { name: 'projects.md',   anchor: '#projects' },
  { name: 'stack.md',      anchor: '#stack'    },
  { name: 'contact.md',    anchor: '#contact'  },
]
