'use client'

import Image from 'next/image'

const SKILLS = [
  'Azure', 'Databricks', 'PySpark', 'Python', 'SQL',
  'PyTorch', 'XGBoost', 'Power BI', 'MLflow', 'Agentic AI',
]

const EXPERIENCE = [
  { role: 'Data Team Lead',              company: 'Grupo Ilunion',        period: '2026 – Now'  },
  { role: 'Senior Data Scientist',       company: 'Ilunion Hotels',        period: '2024 – 2025' },
  { role: 'Data Analyst & Lab Director', company: 'Macrogen',              period: '2022 – 2024' },
  { role: 'Clinical Data Specialist',    company: '12 Octubre Hospital',   period: '2018 – 2022' },
]

export default function ProfessionalSide({ shrunk }: { shrunk: boolean }) {
  return (
    <div className="h-full bg-[#050e1f] relative overflow-hidden group">

      {/* Dot grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-100 pointer-events-none" />

      {/* Radial blue glow — top-left */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#050e1f] to-transparent pointer-events-none" />

      {/* ── Main content ── */}
      <div
        className="relative z-10 h-full flex flex-col justify-center px-12 lg:px-16 xl:px-20"
        style={{
          opacity:    shrunk ? 0.35 : 1,
          transform:  shrunk ? 'scale(0.96)' : 'scale(1)',
          transition: 'opacity 600ms ease, transform 600ms ease',
        }}
      >

        {/* Avatar */}
        <div className="mb-7">
          <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-blue-500/30 ring-offset-2 ring-offset-[#050e1f]">
            <Image
              src="/photo.png"
              alt="Rodrigo Coloma"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* Eyebrow */}
        <p className="text-blue-400/70 text-[10px] font-medium tracking-[0.3em] uppercase mb-5 animate-fade-in">
          Data Engineer · ML Practitioner · Madrid
        </p>

        {/* Name */}
        <h1 className="text-5xl xl:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-3">
          Rodrigo<br />Coloma
        </h1>

        {/* Subtitle */}
        <p className="text-slate-500 text-sm mb-8">
          Senior Data Scientist · Open to remote EU roles
        </p>

        {/* Blue accent line */}
        <div className="w-10 h-[2px] bg-blue-500 mb-8 rounded-full" />

        {/* Bio */}
        <p className="text-slate-400 text-sm leading-relaxed mb-9 max-w-[340px]">
          Nine years building data systems and ML solutions across cloud
          architecture, production models, and LLM applications —
          shipped end-to-end.
        </p>

        {/* Skills */}
        <div className="mb-9">
          <p className="text-[10px] text-slate-600 uppercase tracking-[0.2em] mb-3">Core stack</p>
          <div className="flex flex-wrap gap-1.5 stagger">
            {SKILLS.map(skill => (
              <span
                key={skill}
                className="px-2.5 py-1 text-[11px] border border-slate-700/70 text-slate-500
                           hover:border-blue-500/50 hover:text-blue-400/80 transition-colors duration-200
                           rounded-[3px] cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-10">
          <p className="text-[10px] text-slate-600 uppercase tracking-[0.2em] mb-4">Experience</p>
          <div className="space-y-3 stagger">
            {EXPERIENCE.map(job => (
              <div key={job.company} className="flex items-baseline justify-between gap-4">
                <div className="min-w-0">
                  <span className="text-slate-200 text-sm font-medium">{job.role}</span>
                  <span className="text-slate-600 text-xs"> · {job.company}</span>
                </div>
                <span className="text-slate-700 text-[11px] flex-shrink-0 tabular-nums">{job.period}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          <a
            href="https://www.linkedin.com/in/rcoloma"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500
                       text-white text-xs font-medium transition-colors duration-200 rounded-[3px]"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/Rodrigo-Coloma"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 border border-slate-700
                       hover:border-slate-500 text-slate-400 hover:text-slate-200
                       text-xs font-medium transition-colors duration-200 rounded-[3px]"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub ↗
          </a>
          <a
            href="mailto:rjcolgut@gmail.com"
            className="flex items-center gap-1.5 px-4 py-2 border border-slate-700/60
                       hover:border-slate-600 text-slate-500 hover:text-slate-300
                       text-xs font-medium transition-colors duration-200 rounded-[3px]"
          >
            rjcolgut@gmail.com
          </a>
        </div>

      </div>

      {/* Side label hint */}
      <div
        className="absolute bottom-6 left-12 lg:left-16 xl:left-20 text-[10px] text-slate-700 uppercase tracking-widest"
        style={{ opacity: shrunk ? 0 : 1, transition: 'opacity 400ms ease' }}
      >
        Professional
      </div>
    </div>
  )
}
