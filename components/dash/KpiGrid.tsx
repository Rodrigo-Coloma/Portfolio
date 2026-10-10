'use client'

import { useFilters } from '@/components/dash/filters'
import { VIEWS } from '@/lib/site'

/** Stat tiles for the selected domain: a headline figure, what it counts, and its context. */
export default function KpiGrid({ className = '' }: { className?: string }) {
  const { view } = useFilters()
  return (
    <section aria-label={`Key figures · ${view}`} aria-live="polite" className={`grid grid-cols-1 gap-3 sm:grid-cols-3 ${className}`}>
      {VIEWS[view].kpis.map(k => (
        <div key={view + k.label} className="relative flex animate-[fadein_.35s_ease-out] flex-col rounded-xl border border-hairline bg-surface p-4">
          <span aria-hidden="true" className="absolute left-0 top-4 h-6 w-[3px] rounded-r bg-accent" />
          <div className="text-[28px] font-semibold leading-none tracking-[-0.02em] text-ink sm:text-[32px]">{k.value}</div>
          <div className="mt-2 text-[13px] font-medium text-ink-2">{k.label}</div>
          <div className="mt-1 text-[12px] leading-snug text-ink-muted">{k.context}</div>
        </div>
      ))}
    </section>
  )
}
