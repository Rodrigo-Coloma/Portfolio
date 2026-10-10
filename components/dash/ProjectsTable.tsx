'use client'

import { Fragment, useMemo, useState } from 'react'
import Card from '@/components/dash/Card'
import { useFilters, DOMAIN_COLOR } from '@/components/dash/filters'
import { LAYERS, DOMAINS } from '@/lib/site'
import { PROJECTS, type Project } from '@/lib/projects'

type SortKey = 'default' | 'title' | 'domain' | 'layers'

function Detail({ p }: { p: Project }) {
  return (
    <div className="grid gap-x-8 gap-y-4 px-1 pb-5 pt-1 text-[13px] leading-relaxed text-ink-2 md:grid-cols-2">
      <p className="md:col-span-2">{p.summary}</p>
      {p.problem && (
        <div><h4 className="mb-1 text-[11px] uppercase tracking-[0.08em] text-ink-muted">Problem</h4><p>{p.problem}</p></div>
      )}
      {p.solution && (
        <div><h4 className="mb-1 text-[11px] uppercase tracking-[0.08em] text-ink-muted">Solution</h4><p>{p.solution}</p></div>
      )}
      {p.impact && (
        <div>
          <h4 className="mb-1 text-[11px] uppercase tracking-[0.08em] text-ink-muted">Impact</h4>
          <ul className="space-y-1">
            {p.impact.map(i => <li key={i} className="flex gap-2"><span className="text-accent">▸</span><span>{i}</span></li>)}
          </ul>
        </div>
      )}
      {(p.stack || p.links) && (
        <div>
          {p.stack && (
            <>
              <h4 className="mb-1.5 text-[11px] uppercase tracking-[0.08em] text-ink-muted">Stack</h4>
              <ul className="mb-3 flex flex-wrap gap-1.5">
                {p.stack.map(t => <li key={t} className="rounded-md border border-hairline px-2 py-0.5 text-[11.5px]">{t}</li>)}
              </ul>
            </>
          )}
          {p.links && (
            <div className="flex flex-wrap gap-3">
              {p.links.map(l => (
                <a key={l.href} href={l.href} target={l.external ? '_blank' : undefined}
                   rel={l.external ? 'noopener noreferrer' : undefined}
                   className="text-accent underline-offset-4 hover:underline">
                  {l.label} {l.external ? '↗' : '→'}
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default function ProjectsTable({ className = '' }: { className?: string }) {
  const { projects, layer, setLayer } = useFilters()
  const [open, setOpen] = useState<string | null>(null)
  const [sort, setSort] = useState<SortKey>('default')

  const rows = useMemo(() => {
    const r = [...projects]
    if (sort === 'title')  r.sort((a, b) => a.title.localeCompare(b.title))
    if (sort === 'domain') r.sort((a, b) => DOMAINS.indexOf(a.domain) - DOMAINS.indexOf(b.domain))
    if (sort === 'layers') r.sort((a, b) => b.layers.length - a.layers.length)
    return r
  }, [projects, sort])

  const head = (key: SortKey, label: string, cls = '') => (
    <th className={`py-2.5 pr-4 font-medium ${cls}`} aria-sort={sort === key ? (key === 'layers' ? 'descending' : 'ascending') : 'none'}>
      <button type="button" onClick={() => setSort(sort === key ? 'default' : key)}
              className={`inline-flex items-center gap-1 uppercase tracking-[0.06em] hover:text-ink ${sort === key ? 'text-accent' : ''}`}>
        {label}<span aria-hidden="true" className="text-[9px]">{sort === key ? (key === 'layers' ? '▼' : '▲') : '↕'}</span>
      </button>
    </th>
  )


  return (
    <Card
      id="projects"
      title="Projects"
      subtitle={<>
        Showing <span className="tabular text-ink-2">{rows.length}</span> of <span className="tabular">{PROJECTS.length}</span>
        {layer
          ? <> · layer {layer} · <button type="button" onClick={() => setLayer(null)} className="text-accent underline-offset-4 hover:underline">clear filter</button></>
          : ' · click a row for the case study'}
      </>}
      className={className}
    >
      <div className="thin-scroll -mx-5 overflow-x-auto px-5">
        <table className="w-full min-w-[640px] border-collapse text-left text-[13px]">
          <thead>
            <tr className="border-b border-hairline text-[11.5px] text-ink-muted">
              {head('title', 'Project')}
              {head('domain', 'Domain')}
              {head('layers', 'Layers', 'hidden sm:table-cell')}
              <th className="py-2.5 pr-2 font-medium uppercase tracking-[0.06em]">Headline</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(p => {
              const isOpen = open === p.slug
              return (
                <Fragment key={p.slug}>
                  <tr
                    className={`cursor-pointer border-b border-hairline/70 transition-colors hover:bg-surface-2 ${isOpen ? 'bg-surface-2' : ''}`}
                    onClick={() => setOpen(isOpen ? null : p.slug)}
                  >
                    <td className="py-3 pr-4">
                      <button type="button" aria-expanded={isOpen} aria-controls={`detail-${p.slug}`}
                              onClick={e => { e.stopPropagation(); setOpen(isOpen ? null : p.slug) }}
                              className="flex items-start gap-2 text-left">
                        <span aria-hidden="true" className={`mt-0.5 text-[10px] text-ink-muted transition-transform ${isOpen ? 'rotate-90 text-accent' : ''}`}>▶</span>
                        <span>
                          <span className="block font-medium text-ink">{p.title}</span>
                          <span className="block text-[12px] text-ink-muted">{p.org}</span>
                        </span>
                      </button>
                    </td>
                    <td className="py-3 pr-4">
                      <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-ink-2">
                        <span className="h-2 w-2 rounded-full" style={{ background: DOMAIN_COLOR[p.domain] }} />{p.domain}
                      </span>
                    </td>
                    <td className="hidden py-3 pr-4 sm:table-cell">
                      <span className="flex gap-1" aria-label={`Layers: ${p.layers.join(', ')}`}>
                        {LAYERS.map(l => (
                          <span key={l.name} title={l.name}
                                className={`h-3 w-3 rounded-[3px] ${p.layers.includes(l.name)
                                  ? (layer === l.name ? 'bg-accent' : 'bg-s1')
                                  : 'border border-axis'}`} />
                        ))}
                      </span>
                    </td>
                    <td className="py-3 pr-2 text-ink-2">{p.metric}</td>
                  </tr>
                  {isOpen && (
                    <tr id={`detail-${p.slug}`} className="border-b border-hairline/70 bg-surface-2">
                      <td colSpan={4} className="px-6"><Detail p={p} /></td>
                    </tr>
                  )}
                </Fragment>
              )
            })}
            {rows.length === 0 && (
              <tr><td colSpan={4} className="py-8 text-center text-ink-muted">No projects match these filters.</td></tr>
            )}
          </tbody>
        </table>
      </div>
      <p className="mt-3 flex items-center gap-2 text-[11.5px] text-ink-muted">
        Layers:
        {LAYERS.map(l => <span key={l.name}>{l.name}</span>).reduce<React.ReactNode[]>((a, n, i) => i ? [...a, '→', n] : [n], [])}
      </p>
    </Card>
  )
}
