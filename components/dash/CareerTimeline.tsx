'use client'

import Card, { DataTable } from '@/components/dash/Card'
import { useTooltip, TipTitle } from '@/components/dash/Tooltip'
import { useFilters, DOMAIN_COLOR, NEUTRAL } from '@/components/dash/filters'
import { CAREER, DOMAINS, type Stint, type View } from '@/lib/site'

const START = 2018
const TICKS = [2018, 2020, 2022, 2024, 2026]
/** Only what overlaps the axis; the degree (2009–16) lives in the profile's education list. */
const ROWS = CAREER.filter(s => (s.end ?? Infinity) > START)

export default function CareerTimeline({ asOf, className = '' }: { asOf: number; className?: string }) {
  const { box, show, hide, node } = useTooltip()
  const { view, setView } = useFilters()
  const viewOf = (s: Stint): View => s.domain === null ? 'Education' : s.domain === 'Side projects' ? 'Grupo Ilunion' : s.domain
  const END = Math.ceil(asOf + 0.25)
  const pct = (y: number) => ((y - START) / (END - START)) * 100

  const tip = (s: Stint) => (
    <>
      <TipTitle>{s.org}</TipTitle>
      <div>{s.role}</div>
      <div className="mt-1 text-ink-muted">
        {s.label}{s.domain ? ` · ${s.domain}` : ' · education'} · click to view
      </div>
    </>
  )

  return (
    <Card
      id="career"
      title="Career timeline"
      subtitle="Roles by business domain · click a bar to switch the view"
      className={className}
      table={<DataTable head={['Organisation', 'Role', 'Years', 'Domain']}
                        rows={ROWS.map(s => [s.org, s.role, s.label, s.domain ?? 'Education'])} />}
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
          {ROWS.map(s => {
            const end = s.end ?? asOf
            const left = pct(s.start)
            const width = Math.max(pct(end) - left, 1.2)
            const color = s.domain ? DOMAIN_COLOR[s.domain] : NEUTRAL
            return (
              <div key={s.org + s.start} className="grid grid-cols-[104px_minmax(0,1fr)] items-center gap-3 sm:grid-cols-[150px_minmax(0,1fr)]">
                <div className={`truncate text-[12.5px] ${view === viewOf(s) ? 'text-ink' : 'text-ink-muted'}`} title={s.org}>{s.org}</div>
                <div className="relative h-[18px]">
                  {/* gridlines */}
                  {TICKS.map(t => (
                    <span key={t} aria-hidden="true" className="absolute inset-y-0 w-px bg-grid" style={{ left: `${pct(t)}%` }} />
                  ))}
                  <button
                    type="button"
                    aria-label={`${s.org}, ${s.role}, ${s.label}. Show the ${viewOf(s)} view`}
                    aria-pressed={view === viewOf(s)}
                    onClick={() => setView(viewOf(s))}
                    onMouseMove={e => show(e, tip(s))}
                    onMouseLeave={hide}
                    onFocus={e => show(e.currentTarget, tip(s))}
                    onBlur={hide}
                    className={`absolute inset-y-0 cursor-pointer rounded-[4px] transition-opacity hover:brightness-110 ${view === viewOf(s) ? 'opacity-100' : 'opacity-40 hover:opacity-80'} ${s.end === null ? 'rounded-r-none' : ''}`}
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
