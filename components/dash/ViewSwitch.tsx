'use client'

import { useFilters, VIEW_COLOR } from '@/components/dash/filters'
import { VIEW_ORDER } from '@/lib/site'

/** Domain view selector: switches the job card, KPI cards and skill radar. */
export default function ViewSwitch() {
  const { view, setView } = useFilters()
  return (
    <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2">
      <span className="text-[11.5px] font-medium uppercase tracking-[0.08em] text-ink-muted">View by domain</span>
      <div role="tablist" aria-label="Domain view"
           className="flex overflow-x-auto rounded-lg border border-hairline bg-surface p-0.5 [scrollbar-width:none]">
        {VIEW_ORDER.map(v => {
          const on = view === v
          return (
            <button key={v} type="button" role="tab" aria-selected={on} onClick={() => setView(v)}
                    className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-1.5 text-[12.5px] transition-colors
                                ${on ? 'bg-accent-dim text-ink' : 'text-ink-muted hover:text-ink'}`}>
              <span className="h-2 w-2 rounded-full" style={{ background: VIEW_COLOR[v] }} />
              {v}
            </button>
          )
        })}
      </div>
      <span className="hidden text-[12px] text-ink-muted md:inline">or click a bar in the career timeline</span>
    </div>
  )
}
