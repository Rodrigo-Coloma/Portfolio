'use client'

import { useEffect, useState } from 'react'

const PAGES = [
  { id: 'overview', label: 'Overview' },
  { id: 'skills',   label: 'Skills' },
  { id: 'career',   label: 'Career' },
  { id: 'stack',    label: 'Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'how',      label: 'How I work' },
  { id: 'contact',  label: 'Contact' },
]

/** Report page tabs along the bottom edge, tracking the section in view. */
export default function PageTabs() {
  const [active, setActive] = useState('overview')

  useEffect(() => {
    const els = PAGES.map(p => document.getElementById(p.id)).filter((e): e is HTMLElement => !!e)
    const obs = new IntersectionObserver(entries => {
      const v = entries.filter(e => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
      if (v[0]) setActive(v[0].target.id)
    }, { rootMargin: '-35% 0px -55% 0px' })
    els.forEach(e => obs.observe(e))
    return () => obs.disconnect()
  }, [])

  return (
    <nav aria-label="Report pages"
         className="fixed inset-x-0 bottom-0 z-30 h-[var(--chrome-bottom)] border-t border-hairline bg-plane/95 backdrop-blur">
      <div className="mx-auto flex h-full max-w-[1480px] items-stretch justify-between px-2 sm:px-4">
        <ul className="thin-scroll flex items-stretch overflow-x-auto [scrollbar-width:none]">
          {PAGES.map(p => (
            <li key={p.id} className="flex">
              <a href={`#${p.id}`} aria-current={active === p.id ? 'location' : undefined}
                 className={`relative flex items-center whitespace-nowrap px-3 text-[12.5px] transition-colors sm:px-4
                             ${active === p.id ? 'bg-surface text-ink' : 'text-ink-muted hover:text-ink'}`}>
                {active === p.id && <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[2px] bg-accent" />}
                {p.label}
              </a>
            </li>
          ))}
        </ul>
        <span className="hidden items-center gap-3 pl-4 text-[11.5px] text-ink-muted lg:flex">
          <span>Page 1 of 1</span><span className="h-3 w-px bg-axis" /><span>Zoom 100%</span>
        </span>
      </div>
    </nav>
  )
}
