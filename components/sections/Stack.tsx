import Section from '@/components/sections/Section'
import { STACK, EXPERIENCE, EDUCATION, LANGUAGES } from '@/lib/site'

export default function Stack() {
  return (
    <Section id="stack" title="Stack" file="stack.md">
      <div className="grid sm:grid-cols-3 gap-x-10 gap-y-6 font-mono text-[12.5px] leading-[1.9] mb-8">
        {STACK.map(g => (
          <div key={g.key} className="flex flex-col">
            <span className="text-ink-faint tracking-[0.08em] uppercase">{g.name}</span>
            {g.items.map(i => <span key={i}>{i}</span>)}
          </div>
        ))}
      </div>

      <div className="border-t border-rule-soft">
        {EXPERIENCE.map(j => (
          <div
            key={`${j.org}-${j.years}`}
            className="grid grid-cols-[1fr_auto] sm:grid-cols-[200px_120px_minmax(0,1fr)] gap-x-4 gap-y-0.5 py-2.5 border-b border-rule-soft text-[15px]"
          >
            <span className="font-semibold">{j.org}</span>
            <span className="font-mono text-[12px] text-ink-faint self-baseline">{j.years}</span>
            <span className="text-ink-body col-span-2 sm:col-span-1">{j.role}</span>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6 mt-8 text-[15px]">
        <div>
          {EDUCATION.map(e => (
            <div key={e.title} className="grid grid-cols-[72px_minmax(0,1fr)] gap-x-4 py-1.5">
              <span className="font-mono text-[12px] text-ink-faint self-baseline">{e.years}</span>
              <span>
                <span className="font-semibold">{e.title}</span>
                <span className="text-ink-body"> · {e.org}</span>
                {e.note && <span className="block text-[13px] text-ink-faint italic">{e.note}</span>}
              </span>
            </div>
          ))}
        </div>
        <div className="font-mono text-[12.5px] leading-[1.9]">
          {LANGUAGES.map(l => (
            <div key={l.name} className="flex gap-4">
              <span className="w-16">{l.name}</span>
              <span className="text-ink-faint">{l.level}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
