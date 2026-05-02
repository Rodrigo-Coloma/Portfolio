export type Project = {
  slug:     string
  title:    string
  context:  string                     // e.g. "Side project · 2026" or "Ilunion Hotels · 2024–2025"
  problem:  string
  solution: string
  impact:   string[]                   // bullet points, prefer numbers
  stack:    string[]
  links?:   { label: string; href: string; external?: boolean }[]
}

export const PROJECTS: Project[] = [
  {
    slug:    'edc',
    title:   'EDC MVP',
    context: 'Side project · Live · 2026',
    problem:
      'A technical test asked for a Power BI dashboard over dummy clinical data. A static report can show the data, but it can’t capture it, query it, or audit how it changed — which is what an actual Electronic Data Capture system has to do.',
    solution:
      'Full-stack EDC built around the same dummy data: metadata-driven CRFs (forms, fields, rules stored as data), role-scoped auth (Data Manager / Site Coordinator), threaded query workflow with an Open → Answered → Closed state machine, and a discrepancy engine with cross-field predicates evaluated through a whitelisted AST. An EDA workbench mirrors the original PBI layout (violin + box, correlation heatmap, scatter + R², σ outliers) computed client-side on per-subject aggregates. CRF design is AI-assisted: a Claude tool-use agent reads an uploaded protocol and proposes CRFs over an SSE stream with keepalive-aware retry. Append-only audit log, per-field history popovers, and a global audit explorer. Deployed end-to-end on a Linux VPS via Docker Compose behind nginx and Cloudflare.',
    impact: [
      'Live at rcoloma.dev/edc — 15 subjects, 30 form instances, 210 field values, 16 discrepancy rules, full query + audit flow',
      'AI-assisted CRF design: Claude Sonnet 4.6 agent with tool use + SSE streaming proposes ready-to-activate CRFs from a protocol upload',
      'Auto-discrepancy engine with safe cross-field AST evaluator (no eval / attribute access) — auto-opens and auto-closes queries on save',
    ],
    stack: ['TypeScript', 'React', 'Vite', 'Tailwind', 'shadcn/ui', 'Plotly.js', 'FastAPI', 'SQLAlchemy', 'Alembic', 'Pydantic v2', 'PostgreSQL', 'Claude API', 'Docker', 'nginx', 'Cloudflare'],
    links: [
      { label: 'Live demo', href: 'https://rcoloma.dev/edc', external: true },
    ],
  },
  {
    slug:    'cvmachine',
    title:   'CVMACHINE',
    context: 'Side project · Live · 2026',
    problem:
      'Tailoring a CV per role takes hours of manual editing. Most builders force rigid templates and lose nuance.',
    solution:
      'Full-stack web app: upload an existing CV (PDF / DOCX / text), Claude extracts a structured schema, you edit live in a section-by-section editor, then export branded PDF or DOCX. End-to-end ownership — auth, AI parsing, document generation, hosting.',
    impact: [
      'Live production app at rcoloma.dev/cvmachine — auth, AI parsing, custom themes, PDF + DOCX export',
      'Self-hosted on a Linux VPS with PM2, nginx, Cloudflare Tunnel — full ops loop',
      'Two-step rendering pipeline: parse to schema, then render with theme — keeps content / presentation separated',
    ],
    stack: ['TypeScript', 'React', 'Vite', 'Express', 'Prisma', 'PostgreSQL', 'Claude API', 'pdfkit', 'docx'],
    links: [
      { label: 'Live demo',  href: '/cvmachine' },
      { label: 'Source',     href: 'https://github.com/Rodrigo-Coloma', external: true },
    ],
  },
  {
    slug:    'forecasting',
    title:   'Hotel Revenue Forecasting',
    context: 'Ilunion Hotels · 2024–2025',
    problem:
      'The core revenue forecasting model that fed planning across the hotel chain was running with a 5% accuracy gap, distorting downstream demand and pricing decisions.',
    solution:
      'Audited the existing pipeline, ran a feature-engineering pass on seasonality, lead-time, and market signals, and tuned an XGBoost ensemble against rolling cross-validation windows. Tracked experiments and shipping decisions in MLflow, then wired the winning model into the BI refresh pipeline.',
    impact: [
      '+5% accuracy on the core forecasting model — measured against held-out seasonal periods',
      'Shipped to production alongside 4 other ML models (demand, segmentation, churn, propensity)',
      'Integrated into 50+ Power BI reports refreshed automatically via Power Query and Azure SQL',
    ],
    stack: ['Python', 'scikit-learn', 'XGBoost', 'PyTorch', 'MLflow', 'Power BI', 'Power Query', 'Azure SQL'],
  },
  {
    slug:    'azure-platform',
    title:   'Azure + Databricks Data Platform',
    context: 'Grupo Ilunion · 2026 – present',
    problem:
      'Corporate analytics needed a unified, governed cloud data layer to scale across business units and host the company’s first LLM-based applications, replacing scattered ad-hoc reporting.',
    solution:
      'Designed and built the platform end-to-end on Azure Data Factory and Databricks: ingestion contracts, Delta Lake medallion architecture, semantic layer for BI, and the deployment / monitoring pieces for two LLM apps. Set the engineering standards (testing, code review, env separation) the team now ships against.',
    impact: [
      '2 LLM-based applications running in production — full lifecycle from architecture to monitoring',
      'Foundation for 4 high-priority Power BI data products delivered by the team',
      'Consistent engineering standards (CI, testing, environment separation) across a 5-person data team',
    ],
    stack: ['Azure Data Factory', 'Databricks', 'PySpark', 'Delta Lake', 'Power BI', 'Python', 'Claude / Anthropic SDK'],
  },
  {
    slug:    'macrogen',
    title:   'Data Stack from Scratch',
    context: 'Macrogen · 2022–2024',
    problem:
      'A pharmaceutical / lab-services company with no data infrastructure: reporting was manual, inconsistent across business units, and didn’t reconcile against the underlying scientific data.',
    solution:
      'Owned the build end-to-end while running lab operations: warehouse design, ETL pipelines from operational + lab systems, modeling layer that respected scientific data standards, and the reporting tier on Power BI. Picked tooling against constraints (small team, no platform team) and documented it for the next engineer.',
    impact: [
      'Reporting time reduced from days of manual exports to minutes of refreshed dashboards',
      'Single source of truth reconciling business KPIs and lab-side scientific data',
      'Stack handed off cleanly when transitioning out of the role',
    ],
    stack: ['SQL Server', 'ETL', 'Power BI', 'Power Query', 'DAX', 'Data Modeling'],
  },
]
