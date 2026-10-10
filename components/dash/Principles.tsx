import { PRINCIPLES } from '@/lib/site'

export default function Principles({ className = '' }: { className?: string }) {
  return (
    <section id="how" aria-label="How I work" className={`rounded-xl border border-hairline bg-surface p-5 ${className}`}>
      <h2 className="text-[14px] font-semibold text-ink">How I work</h2>
      <p className="mt-0.5 text-[12.5px] text-ink-muted">Six principles the numbers above came from</p>
      <div className="mt-4 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
        {PRINCIPLES.map((p, i) => (
          <div key={p.title} className="flex gap-3">
            <span className="tabular mt-0.5 text-[12px] font-medium text-accent">0{i + 1}</span>
            <div>
              <h3 className="text-[14px] font-medium text-ink">{p.title}</h3>
              <p className="mt-1 text-[13px] leading-relaxed text-ink-2">{p.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
