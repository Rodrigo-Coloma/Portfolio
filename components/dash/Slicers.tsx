'use client'

import { useFilters, DOMAIN_COLOR } from '@/components/dash/filters'
import { DOMAINS } from '@/lib/site'
import { PROJECTS } from '@/lib/projects'

/** Slicer row, sticky under the top bar. Every visual listens to it. */
export default function Slicers() {
  const { domain, setDomain, layer, setLayer, reset } = useFilters()
  const any = domain || layer

  return (
    <div className="sticky top-[var(--chrome-top)] z-20 -mx-4 mb-4 border-b border-hairline bg-plane/90 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6">
      <div className="flex items-center gap-2 overflow-x-auto [scrollbar-width:none] sm:flex-wrap [&::-webkit-scrollbar]:hidden [&>*]:flex-shrink-0 [&>button]:whitespace-nowrap">
        <span className="mr-1 text-[11.5px] font-medium uppercase tracking-[0.08em] text-ink-muted">Domain</span>
        <button type="button" onClick={() => setDomain(null)} aria-pressed={!domain}
                className={`rounded-full border px-3 py-1 text-[12.5px] transition-colors
                            ${!domain ? 'border-accent/60 bg-accent-dim text-accent' : 'border-hairline text-ink-2 hover:text-ink'}`}>
          All <span className="tabular text-ink-muted">{PROJECTS.length}</span>
        </button>
        {DOMAINS.map(d => {
          const on = domain === d
          return (
            <button key={d} type="button" onClick={() => setDomain(on ? null : d)} aria-pressed={on}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[12.5px] transition-colors
                                ${on ? 'border-accent/60 bg-accent-dim text-ink' : 'border-hairline text-ink-2 hover:text-ink'}`}>
              <span className="h-2 w-2 rounded-full" style={{ background: DOMAIN_COLOR[d] }} />
              {d} <span className="tabular text-ink-muted">{PROJECTS.filter(p => p.domain === d).length}</span>
            </button>
          )
        })}
        {layer && (
          <button type="button" onClick={() => setLayer(null)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-accent/60 bg-accent-dim px-3 py-1 text-[12.5px] text-ink">
            Layer: {layer} <span aria-hidden="true" className="text-accent">×</span>
            <span className="sr-only">Remove layer filter</span>
          </button>
        )}
        {any && (
          <button type="button" onClick={reset} className="ml-auto text-[12.5px] text-ink-muted underline-offset-4 hover:text-accent hover:underline">
            Reset filters
          </button>
        )}
      </div>
    </div>
  )
}
