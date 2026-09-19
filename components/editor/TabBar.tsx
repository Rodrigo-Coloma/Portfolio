'use client'

import Link from 'next/link'
import { FILES, PROFILE } from '@/lib/site'

export type PaneMode = 'source' | 'preview'

/**
 * Editor tab bar. Each tab is a "file" that maps to a section of the page.
 * On small screens the right-hand control toggles between the source and
 * preview panes; on wide screens both are visible and it is just a label.
 */
export default function TabBar({
  active,
  mode,
  onMode,
  home = true,
}: {
  active?:  string
  mode?:    PaneMode
  onMode?:  (m: PaneMode) => void
  home?:    boolean
}) {
  return (
    <header
      className="fixed top-0 inset-x-0 z-40 h-[var(--chrome-top)] bg-paper-chrome border-b border-rule
                 flex items-center justify-between text-[12.5px] text-ink-muted"
    >
      <nav aria-label="Sections" className="flex h-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {FILES.map(f => {
          const isActive = f.name === active
          const href = home ? f.anchor : `/${f.anchor}`
          return (
            <Link
              key={f.name}
              href={href}
              aria-current={isActive ? 'page' : undefined}
              className={`h-full flex items-center px-4 whitespace-nowrap border-r border-rule transition-colors
                          ${isActive ? 'bg-paper text-ink' : 'hover:text-ink'}`}
            >
              {f.name}
            </Link>
          )
        })}
      </nav>

      <div className="flex items-center gap-4 pr-4 pl-3 flex-shrink-0">
        {onMode && mode ? (
          <div role="group" aria-label="Pane" className="flex md:hidden border border-rule rounded-md overflow-hidden">
            {(['source', 'preview'] as PaneMode[]).map(m => (
              <button
                key={m}
                type="button"
                onClick={() => onMode(m)}
                aria-pressed={mode === m}
                className={`h-7 px-3 transition-colors ${mode === m ? 'bg-accent text-white' : 'text-ink-muted'}`}
              >
                {m}
              </button>
            ))}
          </div>
        ) : null}

        <div className="hidden md:flex items-center gap-3">
          <span>source</span>
          <span className="text-ink">│</span>
          <span>preview</span>
        </div>

        <a
          href={PROFILE.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline text-accent hover:text-accent-deep"
        >
          resume.pdf ↓
        </a>
      </div>
    </header>
  )
}
