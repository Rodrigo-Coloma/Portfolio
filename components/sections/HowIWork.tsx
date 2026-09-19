import Section from '@/components/sections/Section'
import { PRINCIPLES } from '@/lib/site'

export default function HowIWork() {
  return (
    <Section id="work" title="How I work" file="how-i-work.md">
      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-7">
        {PRINCIPLES.map(p => (
          <div key={p.title}>
            <h3 className="text-[20px] font-semibold mb-2">{p.title}</h3>
            <p className="text-[15.5px] leading-[1.55] text-ink-body">{p.body}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
