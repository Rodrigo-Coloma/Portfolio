'use client'

import { useEffect, useState } from 'react'
import TabBar, { type PaneMode } from '@/components/editor/TabBar'
import StatusBar from '@/components/editor/StatusBar'
import SourcePane from '@/components/editor/SourcePane'
import type { SourceLine } from '@/lib/source'
import { FILES } from '@/lib/site'

/**
 * Source / Preview layout: editor chrome top and bottom, Markdown source
 * on the left, the rendered page on the right. On narrow screens only one
 * pane is shown and the tab bar toggles between them.
 */
export default function EditorShell({
  source,
  children,
}: {
  source:   SourceLine[]
  children: React.ReactNode
}) {
  const [mode, setMode] = useState<PaneMode>('preview')
  const [active, setActive] = useState<string>(FILES[0].anchor)

  // Track which section is in view so the tab bar and source pane follow.
  useEffect(() => {
    const sections = FILES
      .map(f => document.querySelector<HTMLElement>(f.anchor))
      .filter((el): el is HTMLElement => !!el)
    if (!sections.length) return

    const obs = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(`#${visible[0].target.id}`)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  const activeFile = FILES.find(f => f.anchor === active)?.name

  return (
    <>
      <TabBar active={activeFile} mode={mode} onMode={setMode} />

      <div className="pt-[var(--chrome-top)] pb-[var(--chrome-bottom)] md:grid md:grid-cols-[400px_minmax(0,1fr)] xl:grid-cols-[480px_minmax(0,1fr)]">
        <SourcePane
          lines={source}
          activeAnchor={active}
          className={`${mode === 'source' ? 'block' : 'hidden'} md:block
                      md:sticky md:top-[var(--chrome-top)]
                      md:h-[calc(100vh-var(--chrome-top)-var(--chrome-bottom))]`}
        />
        <main
          id="preview"
          aria-label="Portfolio — Rodrigo Coloma"
          className={`${mode === 'preview' ? 'block' : 'hidden'} md:block bg-paper-preview font-serif prose-preview min-w-0`}
        >
          {children}
        </main>
      </div>

      <StatusBar lines={source.length} files={FILES.length} />
    </>
  )
}
