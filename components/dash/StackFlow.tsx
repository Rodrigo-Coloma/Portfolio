'use client'

import Card, { DataTable } from '@/components/dash/Card'
import { useFilters } from '@/components/dash/filters'
import { LAYERS } from '@/lib/site'
import { PROJECTS } from '@/lib/projects'

/**
 * The stack as one pipeline. Each layer shows how many projects touch it; clicking a layer cross-filters the project table.
 */
export default function StackFlow({ className = '' }: { className?: string }) {
  const { layer, setLayer } = useFilters()
  const counts = LAYERS.map(l => PROJECTS.filter(p => p.layers.includes(l.name)).length)
  const max = Math.max(1, ...counts)

  return (
    <Card
      id="stack"
      title="One stack, end to end"
      subtitle="Projects touching each layer · click a layer to filter the project table"
      className={className}
      table={<DataTable head={['Layer', 'Projects', 'Tools']}
                        rows={LAYERS.map((l, i) => [l.name, counts[i], l.tools.join(', ')])} />}
    >
      <ol className="grid gap-2 md:grid-cols-5 md:gap-0">
        {LAYERS.map((l, i) => {
          const active = layer === l.name
          const dim = layer && !active
          return (
            <li key={l.name} className="relative flex md:items-stretch">
              <button
                type="button"
                onClick={() => setLayer(active ? null : l.name)}
                aria-pressed={active}
                className={`flex w-full flex-col rounded-lg border p-4 text-left transition-colors md:mx-1.5
                            ${active ? 'border-accent/70 bg-accent-dim' : 'border-hairline bg-surface-2/40 hover:border-accent/40'}
                            ${dim ? 'opacity-45' : ''}`}
              >
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-ink-muted">0{i + 1}</span>
                  <span className="tabular text-[12px] text-ink-2">{counts[i]} {counts[i] === 1 ? 'project' : 'projects'}</span>
                </div>
                <div className={`mt-1 text-[17px] font-semibold ${active ? 'text-accent' : 'text-ink'}`}>{l.name}</div>
                <div className="text-[12.5px] text-ink-muted">{l.blurb}</div>
                {/* magnitude bar: projects in this layer */}
                <div className="mt-3 h-1.5 w-full rounded-full bg-grid" aria-hidden="true">
                  <div className="h-full rounded-full bg-accent transition-[width] duration-500" style={{ width: `${(counts[i] / max) * 100}%` }} />
                </div>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {l.tools.map(t => (
                    <li key={t} className="rounded-md border border-hairline px-2 py-0.5 text-[11.5px] text-ink-2">{t}</li>
                  ))}
                </ul>
              </button>
              {i < LAYERS.length - 1 && (
                <span aria-hidden="true" className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 text-ink-muted md:block">›</span>
              )}
            </li>
          )
        })}
      </ol>
    </Card>
  )
}
