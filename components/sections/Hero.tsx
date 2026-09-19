import { PROFILE } from '@/lib/site'

export default function Hero() {
  return (
    <section id="top" className="px-6 pt-10 pb-12 sm:px-10 sm:pt-14 lg:px-[72px] lg:pt-16 lg:pb-14 border-b border-rule-soft">
      <p className="font-mono text-[11px] sm:text-[12px] tracking-[0.08em] text-ink-faint uppercase mb-6">
        {PROFILE.name} · Data Team Lead · {PROFILE.location}
      </p>
      <h1 className="text-[44px] sm:text-[56px] lg:text-[64px] leading-[1.02] font-normal tracking-[-0.02em] mb-7">
        Models people <em className="text-accent">trust</em>.
      </h1>
      <p className="text-[17px] sm:text-[19px] leading-[1.5] text-ink-body max-w-[600px] mb-7">
        {PROFILE.intro}
      </p>
      <div className="flex flex-wrap gap-x-5 gap-y-2 text-[16px]">
        <a href="#projects">Projects →</a>
        <a href="#work">How I work →</a>
        <a href={`mailto:${PROFILE.email}`}>Email →</a>
      </div>
    </section>
  )
}
