'use client'

import Card, { DataTable } from '@/components/dash/Card'
import { useTooltip, TipTitle } from '@/components/dash/Tooltip'
import { useFilters, DOMAIN_COLOR, NEUTRAL } from '@/components/dash/filters'
import { CAREER, DOMAINS, type Stint } from '@/lib/site'

const START = 2009
const TICKS = [2010, 2014, 2018, 2022, 2026]

export default function CareerTimeline({ asOf, className = '' }: { asOf: number; className?: string }) {
  const { box, show, hide, node } = useTooltip()
  const { domain, setDomain } = useFilters()
  const END = Math.ceil(asOf + 0.25)
  const pct = (y: number) => ((y - START) / (END - START)) * 100

  const tip = (s: Stint) => (
    <>
      <TipTitle>{s.org}</TipTitle>
      <div>{s.role}</div>
      <div className="mt-1 text-ink-muted">
        {s.label}{s.domain ? ` · ${s.domain}` : ' · education'}{s.domain ? ' · click to filter' : ''}
      </div>
    </>
  )

  return (
    <Card
      id="career"
      title="Career timeline"
      subtitle="Roles by business domain · click a bar to cross-filter the report"
      className={className}
      table={<DataTable head={['Organisation', 'Role', 'Years', 'Domain']}
                        rows={CAREER.map(s => [s.org, s.role, s.label, s.domain ?? 'Education'])} />}
    >
      {/* legend */}
      <ul className="mb-4 flex flex-wrap gap-x-4 gap-y-1.5 text-[12px] text-ink-2">
        {DOMAINS.filter(d => CAREER.some(s => s.domain === d)).map(d => (
          <li key={d} className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm" style={{ background: DOMAIN_COLOR[d] }} />{d}
          </li>
        ))}
        <li className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm" style={{ background: NEUTRAL }} />Education</li>
      </ul>

      <div ref={box} className="relative">
        {/* rows */}
        <div className="space-y-2.5">
          {CAREER.map(s => {
            const end = s.end ?? asOf
            const left = pct(s.start)
            const width = Math.max(pct(end) - left, 1.2)
            const dim = domain && s.domain !== domain
            const color = s.domain ? DOMAIN_COLOR[s.domain] : NEUTRAL
            const interactive = !!s.domain
            return (
              <div key={s.org + s.start} className="grid grid-cols-[104px_minmax(0,1fr)] items-center gap-3 sm:grid-cols-[150px_minmax(0,1fr)]">
                <div className={`truncate text-[12.5px] ${dim ? 'text-ink-muted' : 'text-ink-2'}`} title={s.org}>{s.org}</div>
                <div className="relative h-[18px]">
                  {/* gridlines */}
                  {TICKS.map(t => (
                    <span key={t} aria-hidden="true" className="absolute inset-y-0 w-px bg-grid" style={{ left: `${pct(t)}%` }} />
                  ))}
                  <button
                    type="button"
                    disabled={!interactive}
                    aria-label={`${s.org}, ${s.role}, ${s.label}${interactive ? '. Filter by ' + s.domain : ''}`}
                    aria-pressed={interactive ? domain === s.domain : undefined}
                    onClick={() => interactive && setDomain(domain === s.domain ? null : s.domain)}
                    onMouseMove={e => show(e, tip(s))}
                    onMouseLeave={hide}
                    onFocus={e => show(e.currentTarget, tip(s))}
                    onBlur={hide}
                    className={`absolute inset-y-0 rounded-[4px] transition-opacity enabled:cursor-pointer disabled:cursor-default
                                ${dim ? 'opacity-25' : 'opacity-100 hover:brightness-110'}
                                ${s.end === null ? 'rounded-r-none' : ''}`}
                    style={{
                      left: `${left}%`,
                      width: `${width}%`,
                      background: s.end === null
                        ? `linear-gradient(90deg, ${color} 70%, color-mix(in srgb, ${color} 35%, transparent))`
                        : color,
                    }}
                  >
                    {/* extended hit area for thin bars */}
                    <span aria-hidden="true" className="absolute -inset-x-2 -inset-y-1.5" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* axis */}
        <div className="mt-2 grid grid-cols-[104px_minmax(0,1fr)] gap-3 sm:grid-cols-[150px_minmax(0,1fr)]">
          <span />
          <div className="relative h-5 border-t border-axis">
            {TICKS.map(t => (
              <span key={t} className="tabular absolute top-1 -translate-x-1/2 text-[11px] text-ink-muted" style={{ left: `${pct(t)}%` }}>{t}</span>
            ))}
          </div>
        </div>
        {node}
      </div>
    </Card>
  )
}
