import { PROFILE, CONTACT_BLURB } from '@/lib/site'

export default function ContactCard({ className = '' }: { className?: string }) {
  return (
    <section id="contact" aria-label="Contact"
             className={`relative overflow-hidden rounded-xl border border-accent/30 bg-surface p-6 sm:p-8 ${className}`}>
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-[620px]">
          <h2 className="text-[26px] font-semibold tracking-[-0.015em] sm:text-[30px]">Let&apos;s talk.</h2>
          <p className="mt-2 text-[14.5px] leading-relaxed text-ink-2">{CONTACT_BLURB}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a href={`mailto:${PROFILE.email}`} className="rounded-lg bg-accent px-4 py-2.5 text-[14px] font-medium text-[#062a20] hover:brightness-110">
            {PROFILE.email}
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer"
             className="rounded-lg border border-hairline px-4 py-2.5 text-[14px] text-ink-2 hover:border-accent/50 hover:text-ink">LinkedIn ↗</a>
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer"
             className="rounded-lg border border-hairline px-4 py-2.5 text-[14px] text-ink-2 hover:border-accent/50 hover:text-ink">GitHub ↗</a>
        </div>
      </div>
    </section>
  )
}
