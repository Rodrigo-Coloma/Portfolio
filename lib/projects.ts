export type Project = {
  slug:      string
  title:     string
  org:       string          // who it was for
  tags:      string[]        // short stack line shown next to the title
  summary:   string          // one paragraph in the list
  problem?:  string          // optional case study, revealed on demand
  solution?: string
  impact?:   string[]
  stack?:    string[]
  links?:    { label: string; href: string; external?: boolean }[]
}

export const PROJECTS: Project[] = [
  {
    slug:    'data-platform',
    title:   'Internal data product development team',
    org:     'Grupo Ilunion',
    tags:    ['Azure Data Factory', 'Databricks', 'Delta Lake', 'Power BI'],
    summary:
      'The team inside the corporate data office that builds the group\'s data products, which I lead under the CDO. The governed cloud data layer — ingestion contracts, medallion architecture under Unity Catalog, a semantic layer for BI — plus the deployment and monitoring pieces for the group\'s first LLM applications, and the engineering standards the team ships against.',
    problem:
      'Corporate analytics ran on scattered, ad-hoc reporting. Scaling it across business units, and hosting the first LLM-based applications, needed a unified, governed foundation and a team with a shared way of working.',
    solution:
      'Designed and built the platform end to end on Azure Data Factory and Databricks, and set the team\'s standards (testing, code review, environment separation, Dev → Test → Prod) and rituals (demo days, short pitches to the CDO, write-ups in tickets) that keep the products coherent as more businesses join.',
    impact: [
      'Two LLM-based applications in production, owned across their full lifecycle from architecture to monitoring',
      'Foundation for four high-priority Power BI data products delivered by the team',
      'One set of engineering standards across the data product team',
    ],
    stack: ['Azure Data Factory', 'Databricks', 'Unity Catalog', 'PySpark', 'Delta Lake', 'Power BI', 'Azure DevOps', 'Claude / Anthropic SDK'],
  },
  {
    slug:    'people-model',
    title:   'Corporate People model',
    org:     'Grupo Ilunion',
    tags:    ['TMDL', 'DAX', 'Fabric', 'RLS'],
    summary:
      'The governance decision made concrete: one People domain model owned by corporate, extended by every business through chained composite models on a Fabric capacity. Around 50 analysts build on it and 2,500–3,000 people consume it, with one definition of headcount, absenteeism and compensation across the group.',
    problem:
      'Six report-specific models (headcount, compensation, training, accidents…) disagreed with each other, and every business unit rebuilt the same measures with slightly different definitions.',
    solution:
      'Metric definitions live in the model. Row-level security encodes both organisational scope and KPI-family visibility, so one user can read salaries for their unit and headcount for all of them. Businesses extend the model through composite DirectQuery models they own; changes upstream propagate downstream without forks.',
    impact: [
      'One definition of every people KPI across the group, from corporate to each business',
      'Businesses add their own tables and RLS without a copy of the corporate model',
      'Refresh-time precomputation replaced click-time SWITCH logic in the heaviest reports',
    ],
    stack: ['Power BI', 'TMDL', 'DAX', 'Fabric', 'Databricks', 'Azure DevOps'],
  },
  {
    slug:    'agents',
    title:   'Agents on the governed model',
    org:     'Grupo Ilunion',
    tags:    ['Databricks Genie', 'Copilot Studio', 'Teams'],
    summary:
      'Conversational access without a second source of truth. A Databricks Genie space compressed from a 12,000-line TMDL model — instructions, metric glossary, table dictionary and example queries — and a Copilot Studio agent in Teams answering people-analytics questions from the same definitions as the reports. A companion agent turns data-incident emails into Dataverse tickets for a Power App.',
    stack: ['Databricks Genie', 'SQL', 'Copilot Studio', 'Dataverse', 'Power Apps'],
  },
  {
    slug:    'clinical-reporting',
    title:   'Clinical Power BI Reporting System',
    org:     'US trial sponsor',
    tags:    ['Power BI', 'Dataverse', 'R', 'GxP'],
    summary:
      'Validated status reporting for a Phase 3 surgical-imaging trial, delivered as the sole data person under GxP. Enrollment, dosing, follow-up and adverse events, EDC → Dataverse → Power BI, a three-stage deployment pipeline, a requirements specification with 26 requirements, and endpoint statistics in R run from a Fabric notebook.',
    problem:
      'The sponsor needed trial-status reporting that could be validated: every number traceable to the EDC, every change auditable, and the analysis code acceptable to a regulator.',
    solution:
      'A documented system — system description and requirements specification written in the sponsor\'s templates — with a governed data path from the EDC through Dataverse into Power BI, and endpoint statistics computed in R rather than ad-hoc Python.',
    impact: [
      'Interim status reporting in minutes instead of days of manual compilation',
      'Documentation citing HIPAA, 21 CFR Part 11 and EU Annex 11 delivered alongside the reports',
      'Inter-rater reliability analysis (ICC) for an ordinal scale, reproducible from a notebook',
    ],
    stack: ['Power BI', 'Dataverse', 'Power Automate', 'R', 'Fabric'],
  },
  {
    slug:    'macrogen',
    title:   'A data function from nothing',
    org:     'Macrogen',
    tags:    ['SQL Server', 'ETL', 'Power BI'],
    summary:
      'A lab-services company with no data infrastructure. Chose the tooling against real constraints (small team, no platform team), built the warehouse, the ETL from operational and lab systems, a modeling layer that respected scientific data standards and the reporting tier — while running lab operations — and documented it for the next engineer.',
    impact: [
      'Reporting time from days of manual exports to minutes of refreshed dashboards',
      'Single source of truth reconciling business KPIs and lab-side scientific data',
      'Handed off cleanly when leaving the role',
    ],
    stack: ['SQL Server', 'ETL', 'Power BI', 'Power Query', 'DAX'],
  },
  {
    slug:    'forecasting',
    title:   'Hotel revenue forecasting',
    org:     'Ilunion Hotels',
    tags:    ['XGBoost', 'MLflow', 'Power BI'],
    summary:
      'Production ML inside the BI refresh, not beside it. Audited the chain\'s core revenue forecasting pipeline, re-engineered seasonality, lead-time and market features, and tuned an XGBoost ensemble against rolling cross-validation windows.',
    impact: [
      '+5% accuracy on the core forecasting model, measured on held-out seasonal periods',
      'Shipped alongside four other production models (demand, segmentation, churn, propensity)',
      'Wired into 50+ Power BI reports refreshed automatically',
    ],
    stack: ['Python', 'scikit-learn', 'XGBoost', 'MLflow', 'Power BI', 'Azure SQL'],
  },
  {
    slug:    'rate-calculator',
    title:   'Rate identification calculator',
    org:     'Hotels',
    tags:    ['Python', 'pricing'],
    summary:
      'From a price observed on an OTA, infer by probability which tariff, room type and conditions produced it. Piloted on one hotel.',
  },
  {
    slug:    'medlit',
    title:   'medlit — Medical Literature RAG',
    org:     'Side project',
    tags:    ['Python', 'FastAPI', 'pgvector', 'Claude'],
    summary:
      'Biomedical retrieval system: ingests PubMed/PMC, arXiv, bioRxiv/medRxiv, Crossref and local PDFs; section-aware chunking; hybrid dense + BM25 retrieval with reranking; answers generated by Claude with a citation-enforcing prompt.',
    problem:
      'Researchers need answers traceable to a specific PMID, DOI or arXiv ID, and where evidence quality (RCT vs cohort vs case report) matters. Generic LLM chat hallucinates citations and flattens that hierarchy.',
    solution:
      'Swappable embedding backends (BGE / PubMedBERT / OpenAI / Voyage), pluggable stores (Qdrant / Chroma / pgvector) and generators (Anthropic / OpenAI / Ollama) behind common interfaces; RRF fusion, cross-encoder rerank and MMR diversity in the retrieval path.',
    impact: [
      'Three surfaces from one codebase: Typer CLI, FastAPI service with SSE streaming, Streamlit app',
      'Scheduled re-ingestion with automatic dedup by DOI/PMID',
      'Respects open-access terms; closed-access papers store abstract + publisher URL only',
    ],
    stack: ['Python', 'FastAPI', 'Typer', 'Qdrant', 'pgvector', 'sentence-transformers', 'Claude API', 'Streamlit'],
    links: [
      { label: 'Live demo', href: 'https://rcoloma.dev/medlit', external: true },
      { label: 'Source',    href: 'https://github.com/Rodrigo-Coloma/sagebase', external: true },
    ],
  },
  {
    slug:    'edc',
    title:   'EDC MVP',
    org:     'Side project',
    tags:    ['React', 'FastAPI', 'PostgreSQL', 'Claude'],
    summary:
      'A working Electronic Data Capture system: metadata-driven CRFs, role-scoped auth, threaded query workflow, a discrepancy engine with cross-field rules, and an append-only audit log. CRF design is AI-assisted from an uploaded protocol.',
    problem:
      'A technical test asked for a Power BI dashboard over dummy clinical data. A static report can show the data but cannot capture it, query it, or audit how it changed — which is what an EDC has to do.',
    solution:
      'Forms, fields and rules stored as data; Open → Answered → Closed query state machine; discrepancy predicates evaluated through a whitelisted AST; a Claude tool-use agent proposes CRFs over an SSE stream. Deployed with Docker Compose behind nginx and Cloudflare.',
    impact: [
      'Live at rcoloma.dev/edc — subjects, form instances, discrepancy rules, full query + audit flow',
      'Auto-opens and auto-closes queries on save through the discrepancy engine',
    ],
    stack: ['TypeScript', 'React', 'Vite', 'Tailwind', 'Plotly.js', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Claude API', 'Docker', 'nginx'],
    links: [{ label: 'Live demo', href: 'https://rcoloma.dev/edc', external: true }],
  },
  {
    slug:    'cvmachine',
    title:   'CVMACHINE',
    org:     'Side project',
    tags:    ['React', 'Express', 'Prisma', 'Claude'],
    summary:
      'Upload a CV, let Claude extract a structured schema, edit section by section, export a branded PDF or DOCX. Auth, AI parsing, document generation and hosting, end to end.',
    impact: [
      'Live at rcoloma.dev/cvmachine — self-hosted with PM2, nginx and a Cloudflare tunnel',
      'Parse-to-schema then render-with-theme keeps content and presentation separate',
    ],
    stack: ['TypeScript', 'React', 'Vite', 'Express', 'Prisma', 'PostgreSQL', 'Claude API', 'pdfkit', 'docx'],
    links: [{ label: 'Live demo', href: '/cvmachine' }],
  },
]
