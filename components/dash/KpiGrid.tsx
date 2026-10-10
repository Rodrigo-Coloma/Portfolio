import { KPIS } from '@/lib/site'

/** Stat tiles: a headline figure, what it counts, and the context it came from. */
export default function KpiGrid({ className = '' }: { className?: string }) {
  return (
    <section aria-label="Key figures" className={`grid grid-cols-2 gap-3 sm:grid-cols-3 ${className}`}>
      {KPIS.map(k => (
        <div key={k.label} className="relative flex flex-col rounded-xl border border-hairline bg-surface p-4">
          <span aria-hidden="true" className="absolute left-0 top-4 h-6 w-[3px] rounded-r bg-accent" />
          <div className="text-[28px] font-semibold leading-none tracking-[-0.02em] text-ink sm:text-[32px]">{k.value}</div>
          <div className="mt-2 text-[13px] font-medium text-ink-2">{k.label}</div>
          <div className="mt-1 text-[12px] leading-snug text-ink-muted">{k.context}</div>
        </div>
      ))}
    </section>
  )
}
