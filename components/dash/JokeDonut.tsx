'use client'

import { useState } from 'react'
import Card, { DataTable } from '@/components/dash/Card'
import { useTooltip, TipTitle } from '@/components/dash/Tooltip'
import { BI_HOURS } from '@/lib/site'

/** One hue, ordered: the biggest slice is the brightest. */
const RAMP = ['#6ce3bf', '#3fd0a6', '#22b48c', '#169773', '#117a5e']

const PLAN = [{ label: 'Actually building the report', pct: 100, note: 'As estimated in the kickoff deck. Two weeks, tops.' }]

const C = 110, R_OUT = 96, R_IN = 62

function arc(a0: number, a1: number) {
  // full circle needs two halves
  if (a1 - a0 >= Math.PI * 2 - 1e-6) {
    return `M ${C} ${C - R_OUT} A ${R_OUT} ${R_OUT} 0 1 1 ${C - 0.01} ${C - R_OUT} Z
            M ${C} ${C - R_IN} A ${R_IN} ${R_IN} 0 1 0 ${C - 0.01} ${C - R_IN} Z`
  }
  const p = (r: number, a: number) => `${C + r * Math.sin(a)} ${C - r * Math.cos(a)}`
  const large = a1 - a0 > Math.PI ? 1 : 0
  return `M ${p(R_OUT, a0)} A ${R_OUT} ${R_OUT} 0 ${large} 1 ${p(R_OUT, a1)}
          L ${p(R_IN, a1)} A ${R_IN} ${R_IN} 0 ${large} 0 ${p(R_IN, a0)} Z`
}

export default function JokeDonut({ className = '' }: { className?: string }) {
  const [mode, setMode] = useState<'reality' | 'plan'>('reality')
  const [hot, setHot] = useState<number | null>(null)
  const { box, show, hide, node } = useTooltip()
  const data = mode === 'reality' ? BI_HOURS : PLAN

  let acc = 0
  const slices = data.map((d, i) => {
    const a0 = (acc / 100) * Math.PI * 2
    acc += d.pct
    const a1 = (acc / 100) * Math.PI * 2
    return { ...d, a0, a1, color: mode === 'plan' ? RAMP[1] : RAMP[i] }
  })

  const enter = (i: number, e: React.MouseEvent | Element) => {
    setHot(i)
    const s = slices[i]
    show(e, <><TipTitle>{s.label} · <span className="tabular">{s.pct}%</span></TipTitle>{s.note}</>)
  }
  const leave = () => { setHot(null); hide() }

  return (
    <Card
      id="joke"
      title="Where the hours on a BI project go"
      subtitle="n = every BI project ever · the only pie chart in this report"
      className={className}
      table={<DataTable head={['Activity', 'Share', 'Note']} rows={data.map(d => [d.label, `${d.pct}%`, d.note])} />}
    >
      <div role="group" aria-label="Scenario" className="mb-4 inline-flex rounded-lg border border-hairline p-0.5 text-[12.5px]">
        {(['reality', 'plan'] as const).map(m => (
          <button key={m} type="button" onClick={() => { setMode(m); leave() }} aria-pressed={mode === m}
                  className={`rounded-md px-3 py-1 transition-colors ${mode === m ? 'bg-accent-dim text-accent' : 'text-ink-muted hover:text-ink'}`}>
            {m === 'reality' ? 'Reality' : 'Project plan'}
          </button>
        ))}
      </div>

      <div ref={box} className="relative flex flex-col items-center gap-6 sm:flex-row sm:items-center lg:mt-6">
        <svg viewBox={`0 0 ${C * 2} ${C * 2}`} className="h-auto w-[220px] flex-shrink-0" role="img"
             aria-label={`Donut chart: ${data.map(d => `${d.label} ${d.pct}%`).join(', ')}`}>
          {slices.map((s, i) => (
            <path key={s.label} d={arc(s.a0, s.a1)} fill={s.color} fillRule="evenodd"
                  stroke="var(--surface)" strokeWidth={2}
                  opacity={hot === null || hot === i ? 1 : 0.35}
                  tabIndex={0} role="button" aria-label={`${s.label}: ${s.pct}%. ${s.note}`}
                  onMouseMove={e => enter(i, e)} onMouseLeave={leave}
                  onFocus={e => enter(i, e.currentTarget)} onBlur={leave}
                  className="cursor-default outline-none transition-opacity" />
          ))}
          <text x={C} y={C - 2} textAnchor="middle" fontSize="26" fontWeight="600" fill="var(--ink)" className="tabular">
            {hot !== null ? `${slices[hot].pct}%` : mode === 'plan' ? '100%' : '14%'}
          </text>
          <text x={C} y={C + 17} textAnchor="middle" fontSize="11" fill="var(--muted)">
            {hot !== null ? 'of the hours' : 'building it'}
          </text>
        </svg>

        <ul className="w-full space-y-2 text-[12.5px]">
          {slices.map((s, i) => (
            <li key={s.label}
                onMouseEnter={() => setHot(i)} onMouseLeave={() => setHot(null)}
                className={`flex items-center gap-2.5 transition-opacity ${hot === null || hot === i ? '' : 'opacity-45'}`}>
              <span className="h-2.5 w-2.5 flex-shrink-0 rounded-sm" style={{ background: s.color }} />
              <span className="flex-1 text-ink-2">{s.label}</span>
              <span className="tabular text-ink">{s.pct}%</span>
            </li>
          ))}
        </ul>
        {node}
      </div>
    </Card>
  )
}
