'use client'

import { useState } from 'react'
import Card, { DataTable } from '@/components/dash/Card'
import { useTooltip, TipTitle } from '@/components/dash/Tooltip'
import { SKILLS } from '@/lib/site'

/* Compact radar: the shape on the left, the axes as a legend on the right. */
const S = 230, C = S / 2, R = 92, MAX = 10
const RINGS = [2.5, 5, 7.5, 10]

const angle = (i: number) => (Math.PI * 2 * i) / SKILLS.length - Math.PI / 2
const pt = (i: number, v: number) => {
  const a = angle(i), r = (v / MAX) * R
  return [C + Math.cos(a) * r, C + Math.sin(a) * r] as const
}

export default function SkillsRadar({ className = '' }: { className?: string }) {
  const { box, show, hide, node } = useTooltip()
  const [hot, setHot] = useState<number | null>(null)

  const enter = (i: number, e: React.MouseEvent | Element) => {
    setHot(i)
    const s = SKILLS[i]
    show(e, <><TipTitle>{s.axis} · <span className="tabular">{s.score}</span>/10</TipTitle>{s.evidence}</>)
  }
  const leave = () => { setHot(null); hide() }

  return (
    <Card
      id="skills"
      title="Skill profile"
      subtitle="Self-assessed, 0–10 · hover for the evidence"
      className={className}
      table={<DataTable head={['Skill', 'Score', 'Evidence']} rows={SKILLS.map(s => [s.axis, s.score, s.evidence])} />}
    >
      <div ref={box} className="relative flex items-center gap-4">
        <svg viewBox={`0 0 ${S} ${S}`} className="h-auto w-[132px] flex-shrink-0 sm:w-[148px]" role="img"
             aria-label={`Radar chart of eight skills: ${SKILLS.map(s => `${s.axis} ${s.score}`).join(', ')}`}>
          {RINGS.map(v => (
            <polygon key={v} fill="none" stroke="var(--grid)" strokeWidth={1.25}
                     points={SKILLS.map((_, i) => pt(i, v).join(',')).join(' ')} />
          ))}
          {SKILLS.map((_, i) => {
            const [x, y] = pt(i, MAX)
            return <line key={i} x1={C} y1={C} x2={x} y2={y}
                         stroke={hot === i ? 'var(--accent)' : 'var(--grid)'} strokeWidth={hot === i ? 2 : 1.25} />
          })}
          {/* axis numbers, matching the legend */}
          {SKILLS.map((_, i) => {
            const [x, y] = pt(i, MAX * 1.12)
            return <text key={i} x={x} y={y + 4} textAnchor="middle" fontSize="12"
                         fill={hot === i ? 'var(--accent)' : 'var(--muted)'} className="tabular">{i + 1}</text>
          })}
          <polygon points={SKILLS.map((s, i) => pt(i, s.score).join(',')).join(' ')}
                   fill="var(--accent)" fillOpacity={0.16} stroke="var(--accent)" strokeWidth={2.5} strokeLinejoin="round" />
          {SKILLS.map((s, i) => {
            const [x, y] = pt(i, s.score)
            return (
              <g key={s.axis} onMouseMove={e => enter(i, e)} onMouseLeave={leave}>
                <circle cx={x} cy={y} r={hot === i ? 7 : 5} fill="var(--accent)" stroke="var(--surface)" strokeWidth={2.5} />
                <circle cx={x} cy={y} r={16} fill="transparent" />
              </g>
            )
          })}
        </svg>

        {/* legend: one row per axis, in axis order clockwise from the top */}
        <ul className="min-w-0 flex-1 space-y-1 text-[12px] leading-tight">
          {SKILLS.map((s, i) => (
            <li key={s.axis}>
              <button type="button"
                      onMouseMove={e => enter(i, e)} onMouseLeave={leave}
                      onFocus={e => enter(i, e.currentTarget)} onBlur={leave}
                      aria-label={`${s.axis}: ${s.score} out of 10. ${s.evidence}`}
                      className={`flex w-full items-center gap-2 rounded px-1 py-0.5 text-left transition-colors
                                  ${hot === i ? 'bg-surface-2 text-ink' : hot === null ? 'text-ink-2' : 'text-ink-muted'}`}>
                <span className={`tabular w-3 text-[10.5px] ${hot === i ? 'text-accent' : 'text-ink-muted'}`}>{i + 1}</span>
                <span className="flex-1 truncate">{s.axis}</span>
                <span className="tabular text-ink">{s.score}</span>
              </button>
            </li>
          ))}
        </ul>
        {node}
      </div>
    </Card>
  )
}
