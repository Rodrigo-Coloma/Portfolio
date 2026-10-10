'use client'

import { useState } from 'react'
import Card, { DataTable } from '@/components/dash/Card'
import { useTooltip, TipTitle } from '@/components/dash/Tooltip'
import { SKILLS } from '@/lib/site'

const W = 560, H = 400
const CX = W / 2, CY = H / 2 + 4, R = 132
const MAX = 10
const RINGS = [2, 4, 6, 8, 10]

const angle = (i: number) => (Math.PI * 2 * i) / SKILLS.length - Math.PI / 2
const pt = (i: number, v: number) => {
  const a = angle(i), r = (v / MAX) * R
  return [CX + Math.cos(a) * r, CY + Math.sin(a) * r] as const
}

export default function SkillsRadar({ className = '' }: { className?: string }) {
  const { box, show, hide, node } = useTooltip()
  const [hot, setHot] = useState<number | null>(null)

  const poly = SKILLS.map((s, i) => pt(i, s.score).join(',')).join(' ')

  const enter = (i: number, e: React.MouseEvent | Element) => {
    setHot(i)
    const s = SKILLS[i]
    show(e, (
      <>
        <TipTitle>{s.axis} · <span className="tabular">{s.score}</span>/10</TipTitle>
        {s.evidence}
      </>
    ))
  }
  const leave = () => { setHot(null); hide() }

  return (
    <Card
      id="skills"
      title="Skill profile"
      subtitle="Self-assessed, 0–10 · hover an axis for the evidence"
      className={className}
      table={<DataTable head={['Skill', 'Score', 'Evidence']} rows={SKILLS.map(s => [s.axis, s.score, s.evidence])} />}
    >
      <div ref={box} className="relative">
        <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto block h-auto w-full max-w-[560px]" role="img"
             aria-label={`Radar chart of eight skills: ${SKILLS.map(s => `${s.axis} ${s.score}`).join(', ')}`}>
          {/* rings */}
          {RINGS.map(v => (
            <polygon key={v} fill="none" stroke="var(--grid)" strokeWidth={1}
                     points={SKILLS.map((_, i) => pt(i, v).join(',')).join(' ')} />
          ))}
          {/* ring values on the first axis */}
          {RINGS.map(v => {
            const [x, y] = pt(0, v)
            return <text key={v} x={x + 5} y={y + 3} fontSize="10" fill="var(--muted)" className="tabular">{v}</text>
          })}
          {/* spokes */}
          {SKILLS.map((_, i) => {
            const [x, y] = pt(i, MAX)
            return <line key={i} x1={CX} y1={CY} x2={x} y2={y}
                         stroke={hot === i ? 'var(--accent)' : 'var(--grid)'} strokeWidth={hot === i ? 1.5 : 1} />
          })}

          {/* the shape */}
          <polygon points={poly} fill="var(--accent)" fillOpacity={0.16} stroke="var(--accent)" strokeWidth={2} strokeLinejoin="round" />

          {/* points, labels and hit areas */}
          {SKILLS.map((s, i) => {
            const [x, y] = pt(i, s.score)
            const a = angle(i)
            const lx = CX + Math.cos(a) * (R + 22)
            const ly = CY + Math.sin(a) * (R + 22)
            const anchor = Math.abs(Math.cos(a)) < 0.2 ? 'middle' : Math.cos(a) > 0 ? 'start' : 'end'
            const dy = Math.sin(a) > 0.5 ? 12 : Math.sin(a) < -0.5 ? -4 : 4
            return (
              <g key={s.axis}
                 tabIndex={0}
                 role="button"
                 aria-label={`${s.axis}: ${s.score} out of 10. ${s.evidence}`}
                 onMouseMove={e => enter(i, e)}
                 onMouseLeave={leave}
                 onFocus={e => enter(i, e.currentTarget)}
                 onBlur={leave}
                 className="cursor-default outline-none">
                <text x={lx} y={ly + dy} textAnchor={anchor} fontSize="13"
                      fill={hot === i ? 'var(--ink)' : 'var(--ink-2)'} fontWeight={hot === i ? 600 : 400}>
                  {s.axis}
                </text>
                <circle cx={x} cy={y} r={hot === i ? 6 : 4.5} fill="var(--accent)" stroke="var(--surface)" strokeWidth={2} />
                {/* generous hit target: the point and the label */}
                <circle cx={x} cy={y} r={18} fill="transparent" />
                <circle cx={lx} cy={ly} r={30} fill="transparent" />
              </g>
            )
          })}
        </svg>
        {node}
      </div>
    </Card>
  )
}
