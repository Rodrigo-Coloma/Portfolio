'use client'

import { useEffect, useRef } from 'react'
import type { SourceLine } from '@/lib/source'

const COLOR: Record<SourceLine['kind'], string> = {
  fence:   'text-accent',
  heading: 'text-accent',
  code:    'text-ink-faint',
  text:    'text-ink-body',
  blank:   'text-ink-body',
}

/**
 * The left pane: the page as Markdown with line numbers.
 * Headings are links to their section; when the preview scrolls into a
 * new section (`activeAnchor`), the pane scrolls its own heading into view
 * so both panes stay on the same part of the document.
 */
export default function SourcePane({
  lines,
  activeAnchor,
  className = '',
}: {
  lines:         SourceLine[]
  activeAnchor?: string
  className?:    string
}) {
  const box = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!activeAnchor || !box.current) return
    const el = box.current.querySelector<HTMLElement>(`[data-anchor="${activeAnchor}"]`)
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    // The first heading is the top of the document: keep the front matter in view.
    const top = el.offsetTop < 200 ? 0 : el.offsetTop - 28
    box.current.scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' })
  }, [activeAnchor])

  return (
    <div
      ref={box}
      className={`bg-paper border-r border-rule overflow-y-auto py-7 text-[12.5px] leading-6 ${className}`}
      aria-label="Page source"
    >
      {lines.map(l => {
        const isActive = l.kind === 'heading' && l.anchor === activeAnchor
        const body =
          l.kind === 'heading' && l.anchor ? (
            <a href={l.anchor} className="text-accent no-underline hover:underline underline-offset-4">{l.text}</a>
          ) : (
            l.text
          )
        return (
          <div
            key={l.n}
            data-anchor={l.kind === 'heading' ? l.anchor : undefined}
            className={`flex ${isActive ? 'bg-paper-chrome' : ''}`}
          >
            <span className="w-[52px] flex-shrink-0 text-right pr-4 text-ink-gutter select-none tabular-nums">
              {l.n}
            </span>
            <span className={`whitespace-pre pr-6 ${COLOR[l.kind]}`}>{body}</span>
          </div>
        )
      })}
      <div className="flex">
        <span className="w-[52px] flex-shrink-0 text-right pr-4 text-ink-gutter select-none tabular-nums">
          {lines.length + 1}
        </span>
        <span className="caret" aria-hidden="true" />
      </div>
    </div>
  )
}
