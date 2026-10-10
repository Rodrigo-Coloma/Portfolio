'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * A report visual: title row with "show as table" and "focus mode"
 * toggles, like a BI tool's visual header.
 */
export default function Card({
  id,
  title,
  subtitle,
  className = '',
  table,
  children,
  bodyClassName = '',
}: {
  id?:            string
  title:          string
  subtitle?:      React.ReactNode
  className?:     string
  table?:         React.ReactNode
  children:       React.ReactNode
  bodyClassName?: string
}) {
  const [focus, setFocus] = useState(false)
  const [asTable, setAsTable] = useState(false)
  const slot = useRef<HTMLDivElement>(null)
  const [slotH, setSlotH] = useState<number | undefined>()

  useEffect(() => {
    if (!focus) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setFocus(false) }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [focus])

  const toggleFocus = () => {
    if (!focus && slot.current) setSlotH(slot.current.offsetHeight)
    setFocus(f => !f)
  }

  return (
    <div id={id} ref={slot} className={`min-w-0 ${className}`} style={focus ? { height: slotH } : undefined}>
      {focus && (
        <div className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm" onClick={() => setFocus(false)} aria-hidden="true" />
      )}
      <section
        aria-label={title}
        className={`group flex flex-col rounded-xl border border-hairline bg-surface
                    ${focus ? 'fixed inset-3 z-50 overflow-auto sm:inset-8 lg:inset-x-[10vw] lg:inset-y-10' : 'h-full'}`}
      >
        <header className="flex items-start justify-between gap-3 px-5 pt-4">
          <div className="min-w-0">
            <h2 className="text-[14px] font-semibold tracking-[-0.005em] text-ink">{title}</h2>
            {subtitle && <p className="mt-0.5 text-[12.5px] text-ink-muted">{subtitle}</p>}
          </div>
          <div className="flex flex-shrink-0 items-center gap-1 text-ink-muted opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100">
            {table && (
              <button
                type="button"
                onClick={() => setAsTable(t => !t)}
                aria-pressed={asTable}
                title={asTable ? 'Show as chart' : 'Show as table'}
                className={`grid h-7 w-7 place-items-center rounded-md hover:bg-surface-2 hover:text-ink ${asTable ? 'text-accent' : ''}`}
              >
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <rect x="2" y="2.5" width="12" height="11" rx="1.5" /><path d="M2 6.5h12M2 10h12M6.5 6.5v7" />
                </svg>
                <span className="sr-only">{asTable ? 'Show as chart' : 'Show as table'}</span>
              </button>
            )}
            <button
              type="button"
              onClick={toggleFocus}
              aria-pressed={focus}
              title={focus ? 'Exit focus mode' : 'Focus mode'}
              className={`grid h-7 w-7 place-items-center rounded-md hover:bg-surface-2 hover:text-ink ${focus ? 'text-accent' : ''}`}
            >
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                {focus
                  ? <path d="M6 2v4H2M10 2v4h4M6 14v-4H2M10 14v-4h4" />
                  : <path d="M2 6V2h4M14 6V2h-4M2 10v4h4M14 10v4h-4" />}
              </svg>
              <span className="sr-only">{focus ? 'Exit focus mode' : 'Focus mode'}</span>
            </button>
          </div>
        </header>
        <div className={`flex-1 px-5 pb-5 pt-3 ${bodyClassName}`}>
          {asTable && table ? <div className="thin-scroll overflow-x-auto">{table}</div> : children}
        </div>
      </section>
    </div>
  )
}

/** Plain data table used by every visual's "show as table" view. */
export function DataTable({ head, rows }: { head: string[]; rows: React.ReactNode[][] }) {
  return (
    <table className="w-full border-collapse text-left text-[13px]">
      <thead>
        <tr className="border-b border-hairline text-[11.5px] uppercase tracking-[0.06em] text-ink-muted">
          {head.map(h => <th key={h} className="py-2 pr-4 font-medium">{h}</th>)}
        </tr>
      </thead>
      <tbody className="tabular">
        {rows.map((r, i) => (
          <tr key={i} className="border-b border-hairline/60 align-top text-ink-2">
            {r.map((c, j) => <td key={j} className={`py-2 pr-4 ${j === 0 ? 'text-ink' : ''}`}>{c}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
