'use client'

import Image from 'next/image'
import { useFilters, VIEW_COLOR } from '@/components/dash/filters'
import { PROFILE, FOCUS, EDUCATION, VIEWS } from '@/lib/site'

export default function ProfileCard({ className = '' }: { className?: string }) {
  const { view } = useFilters()
  const job = VIEWS[view].job
  return (
    <section id="overview" aria-label="Profile" className={`relative overflow-hidden rounded-xl border border-hairline bg-surface ${className}`}>
      {/* soft mint glow behind the photo */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-16 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative flex h-full flex-col gap-5 p-5 sm:p-6">
        <div className="flex items-center gap-4">
          <div className="relative h-[88px] w-[88px] flex-shrink-0 overflow-hidden rounded-2xl ring-1 ring-accent/40">
            <Image src={PROFILE.photo} alt={PROFILE.name} fill sizes="88px" priority className="object-cover" />
          </div>
          <div className="min-w-0">
            <h1 className="text-[22px] font-semibold leading-tight tracking-[-0.015em]">{PROFILE.name}</h1>
            <p className="mt-1 text-[13px] text-ink-2">{PROFILE.location} · CET</p>
          </div>
        </div>

        <div key={view} aria-live="polite" className="animate-[fadein_.35s_ease-out] rounded-lg border border-hairline bg-surface-2/50 p-4">
          <div className="flex items-baseline justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-ink-muted">
              <span className="h-2 w-2 rounded-full" style={{ background: VIEW_COLOR[view] }} />
              {view === 'Education' ? 'Latest training' : `Latest role · ${view}`}
            </span>
            <span className="tabular text-[12px] text-ink-muted">{job.years}</span>
          </div>
          <p className="mt-2 text-[16px] font-medium text-accent">{job.title}</p>
          <p className="text-[13px] text-ink-2">{job.org}</p>
          <dl className="mt-3 grid grid-cols-[88px_1fr] gap-y-1.5 text-[13px]">
            {job.facts.map(([k, v]) => (
              <div key={k} className="contents"><dt className="text-ink-muted">{k}</dt><dd className="text-ink-2">{v}</dd></div>
            ))}
          </dl>
          <p className="mt-3 text-[13.5px] leading-relaxed text-ink-2">{job.description}</p>
        </div>


        <div>
          <h2 className="mb-2 text-[11px] font-medium uppercase tracking-[0.1em] text-ink-muted">Focus</h2>
          <ul className="flex flex-wrap gap-1.5">
            {FOCUS.map(f => (
              <li key={f} className="rounded-md border border-accent/25 bg-accent-dim px-2 py-0.5 text-[12px] text-ink-2">{f}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-2 text-[11px] font-medium uppercase tracking-[0.1em] text-ink-muted">Education</h2>
          <ul className="space-y-1.5 text-[13px]">
            {EDUCATION.map(e => (
              <li key={e.title} className="grid grid-cols-[64px_minmax(0,1fr)] gap-x-3">
                <span className="tabular text-[12px] text-ink-muted">{e.years}</span>
                <span>
                  <span className="text-ink">{e.title}</span>
                  <span className="text-ink-2"> · {e.org}</span>
                  {e.note && <span className="block text-[12px] text-accent">{e.note}</span>}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-1">
          <a href={`mailto:${PROFILE.email}`} className="rounded-lg bg-accent px-3.5 py-2 text-[13px] font-medium text-[#062a20] hover:brightness-110">
            Email me
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-hairline px-3.5 py-2 text-[13px] text-ink-2 hover:border-accent/50 hover:text-ink">
            LinkedIn ↗
          </a>
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-hairline px-3.5 py-2 text-[13px] text-ink-2 hover:border-accent/50 hover:text-ink">
            GitHub ↗
          </a>
          <a href={PROFILE.resume} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-hairline px-3.5 py-2 text-[13px] text-ink-2 hover:border-accent/50 hover:text-ink">
            Resume ↓
          </a>
        </div>
      </div>
    </section>
  )
}
