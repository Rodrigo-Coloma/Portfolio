'use client'

import StampLabel from '@/components/StampLabel'
import RoughUnderline from '@/components/RoughUnderline'
import Typewriter from '@/components/Typewriter'

const EXPERIENCE = [
  { year: '2026',  role: 'Data Team Lead',              company: 'Grupo Ilunion'      },
  { year: '2024',  role: 'Senior Data Scientist',       company: 'Ilunion Hotels'     },
  { year: '2022',  role: 'Data Analyst & Lab Director', company: 'Macrogen'           },
  { year: '2018',  role: 'Clinical Data Specialist',    company: '12 Octubre Hospital'},
]

const EXPERTISE: [string, string][] = [
  ['Cloud Architecture',     'Azure · Databricks · PySpark'],
  ['Machine Learning',       'PyTorch · XGBoost · Scikit-Learn · MLflow'],
  ['Data Engineering',       'Python · SQL · ETL · Data Modeling'],
  ['Business Intelligence',  'Power BI · Advanced DAX · Power Query'],
  ['LLM Applications',       'Claude · Anthropic SDK · Agentic AI'],
]

export default function ProfessionalSide({ shrunk }: { shrunk: boolean }) {
  return (
    <div className="h-full bg-[#FFFCF6] relative overflow-hidden">

      {/* Subtle radial wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_30%,rgba(15,23,42,0.04),transparent)] pointer-events-none" />

      {/* Centered content column */}
      <div
        className="relative h-full max-w-[640px] mx-auto px-12 lg:px-16 flex flex-col justify-center"
        style={{
          opacity:    shrunk ? 0.4 : 1,
          transform:  shrunk ? 'scale(0.97)' : 'scale(1)',
          transition: 'opacity 600ms ease, transform 600ms ease',
        }}
      >

        {/* Vertical accent line on left edge of centered column */}
        <div className="absolute left-0 top-24 bottom-24 w-px bg-gradient-to-b from-transparent via-[#14B8A6]/40 to-transparent pointer-events-none" />

        {/* Eyebrow */}
        <div className="mb-6">
          <StampLabel boxed>Madrid, Spain · Open to remote EU</StampLabel>
        </div>

        {/* Name */}
        <h1 className="text-5xl xl:text-[64px] font-light text-stone-900 leading-[1] tracking-[-0.02em] mb-3">
          <Typewriter text="Rodrigo Coloma" />
        </h1>

        {/* Subtitle */}
        <p className="text-stone-500 text-base font-light tracking-wide mb-12">
          Data Engineer · Senior Data Scientist · ML Practitioner
        </p>

        {/* Bio */}
        <p className="text-stone-700 text-[15px] leading-[1.7] font-light mb-14 max-w-[480px]">
          I build data platforms and ML systems that <RoughUnderline>ship — and stay shipped</RoughUnderline>.
          Nine years across pharma, hospitality, and clinical research turning
          messy data into reliable products. Currently leading data + AI at Grupo Ilunion.
        </p>

        {/* Experience */}
        <div className="mb-14">
          <div className="mb-5">
            <StampLabel>Experience</StampLabel>
          </div>
          <div className="space-y-3">
            {EXPERIENCE.map(job => (
              <div key={job.company} className="flex items-baseline gap-6">
                <span className="text-stone-400 text-xs font-mono tabular-nums w-12 flex-shrink-0">
                  {job.year}
                </span>
                <div className="text-[14px] leading-tight">
                  <span className="text-stone-800 font-medium">{job.role}</span>
                  <span className="text-stone-400 font-light"> · {job.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise */}
        <div className="mb-14">
          <div className="mb-5">
            <StampLabel>Expertise</StampLabel>
          </div>
          <div className="space-y-2.5">
            {EXPERTISE.map(([area, stack]) => (
              <div key={area} className="flex items-baseline gap-6">
                <span className="text-stone-700 text-[13px] font-medium w-44 flex-shrink-0">
                  {area}
                </span>
                <span className="text-stone-500 text-[13px] font-light tracking-wide">
                  {stack}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-7 text-[13px]">
          <a
            href="https://www.linkedin.com/in/rcoloma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-700 hover:text-stone-900 underline-offset-[6px] decoration-stone-300 hover:decoration-stone-600 hover:underline transition-all"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/Rodrigo-Coloma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-700 hover:text-stone-900 underline-offset-[6px] decoration-stone-300 hover:decoration-stone-600 hover:underline transition-all"
          >
            GitHub ↗
          </a>
          <a
            href="mailto:rjcolgut@gmail.com"
            className="text-stone-700 hover:text-stone-900 underline-offset-[6px] decoration-stone-300 hover:decoration-stone-600 hover:underline transition-all"
          >
            rjcolgut@gmail.com
          </a>
        </div>

      </div>

      {/* Side label — centered */}
      <div
        className="absolute bottom-6 inset-x-0 text-center text-[10px] text-stone-300 uppercase tracking-[0.3em]"
        style={{ opacity: shrunk ? 0 : 1, transition: 'opacity 400ms ease' }}
      >
        ⏤ The Professional
      </div>
    </div>
  )
}
