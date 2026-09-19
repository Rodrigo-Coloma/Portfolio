import Section from '@/components/sections/Section'
import { PROJECTS, type Project } from '@/lib/projects'

function CaseStudy({ p }: { p: Project }) {
  const hasStudy = p.problem || p.solution || p.impact || p.stack || p.links
  if (!hasStudy) return null
  return (
    <details className="group mt-3">
      <summary className="inline-flex items-center gap-2 font-mono text-[12px] text-accent hover:text-accent-deep">
        <span aria-hidden="true" className="inline-block transition-transform group-open:rotate-90">▸</span>
        <span className="group-open:hidden">read the case study</span>
        <span className="hidden group-open:inline">collapse</span>
      </summary>
      <div className="mt-4 grid sm:grid-cols-2 gap-x-8 gap-y-5 text-[14.5px] leading-[1.6] text-ink-body">
        {p.problem && (
          <div>
            <h4 className="font-mono text-[11px] text-ink-faint mb-1.5">problem</h4>
            <p>{p.problem}</p>
          </div>
        )}
        {p.solution && (
          <div>
            <h4 className="font-mono text-[11px] text-ink-faint mb-1.5">solution</h4>
            <p>{p.solution}</p>
          </div>
        )}
        {p.impact && (
          <div className={p.solution ? '' : 'sm:col-span-2'}>
            <h4 className="font-mono text-[11px] text-ink-faint mb-1.5">impact</h4>
            <ul className="space-y-1.5">
              {p.impact.map(i => (
                <li key={i} className="flex gap-2.5">
                  <span aria-hidden="true" className="text-accent flex-shrink-0">–</span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {(p.stack || p.links) && (
          <div>
            {p.stack && (
              <>
                <h4 className="font-mono text-[11px] text-ink-faint mb-1.5">stack</h4>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.stack.map(t => (
                    <span key={t} className="font-mono text-[11.5px] px-2 py-0.5 border border-rule rounded bg-paper">
                      {t}
                    </span>
                  ))}
                </div>
              </>
            )}
            {p.links && (
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-[15px]">
                {p.links.map(l => (
                  <a
                    key={l.href}
                    href={l.href}
                    target={l.external ? '_blank' : undefined}
                    rel={l.external ? 'noopener noreferrer' : undefined}
                  >
                    {l.label} {l.external ? '↗' : '→'}
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </details>
  )
}

export default function Projects() {
  return (
    <Section id="projects" title="Selected projects" file="projects.md">
      <div className="border-t border-rule-soft">
        {PROJECTS.map(p => (
          <article
            key={p.slug}
            id={p.slug}
            className="grid sm:grid-cols-[180px_minmax(0,1fr)] gap-x-6 gap-y-2 py-[22px] border-b border-rule-soft scroll-mt-[var(--chrome-top)]"
          >
            <div className="font-mono text-[12px] leading-[1.7] text-ink-faint">
              {p.org}
              <br className="hidden sm:inline" />
              <span className="sm:hidden"> · </span>
              {p.tags.join(' · ')}
            </div>
            <div>
              <h3 className="text-[22px] font-semibold leading-snug">{p.title}</h3>
              <p className="mt-1.5 text-[15.5px] leading-[1.55] text-ink-body">{p.summary}</p>
              <CaseStudy p={p} />
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
