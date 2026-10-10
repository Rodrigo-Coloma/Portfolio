import Image from 'next/image'
import { PROFILE } from '@/lib/site'

export default function ProfileCard({ className = '' }: { className?: string }) {
  return (
    <section id="overview" aria-label="Profile" className={`relative overflow-hidden rounded-xl border border-hairline bg-surface ${className}`}>
      {/* soft mint glow behind the photo */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-16 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative flex h-full flex-col gap-5 p-5 sm:p-6">
        <div className="flex items-center gap-4">
          <div className="relative h-[88px] w-[88px] flex-shrink-0 overflow-hidden rounded-2xl ring-1 ring-accent/40">
            <Image src={PROFILE.photo} alt={PROFILE.name} fill sizes="88px" priority className="object-cover" />
          </div>
          <div className="min-w-0">
            <h1 className="text-[22px] font-semibold leading-tight tracking-[-0.015em]">{PROFILE.name}</h1>
            <p className="mt-1 text-[14px] text-accent">{PROFILE.role}</p>
            <p className="text-[13px] text-ink-2">{PROFILE.team}</p>
          </div>
        </div>

        <dl className="grid grid-cols-[88px_1fr] gap-y-1.5 text-[13px]">
          <dt className="text-ink-muted">Org</dt><dd className="text-ink-2">{PROFILE.org}</dd>
          <dt className="text-ink-muted">Reports to</dt><dd className="text-ink-2">Chief Data Officer</dd>
          <dt className="text-ink-muted">Based in</dt><dd className="text-ink-2">{PROFILE.location} · CET</dd>
          <dt className="text-ink-muted">Languages</dt><dd className="text-ink-2">Spanish · English C2 · German A1</dd>
        </dl>

        <p className="text-[14px] leading-relaxed text-ink-2">{PROFILE.intro}</p>
        <p className="text-[13px] leading-relaxed text-ink-muted">{PROFILE.background}</p>

        <div className="mt-auto flex flex-wrap gap-2 pt-1">
          <a href={`mailto:${PROFILE.email}`} className="rounded-lg bg-accent px-3.5 py-2 text-[13px] font-medium text-[#062a20] hover:brightness-110">
            Email me
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-hairline px-3.5 py-2 text-[13px] text-ink-2 hover:border-accent/50 hover:text-ink">
            LinkedIn ↗
          </a>
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-hairline px-3.5 py-2 text-[13px] text-ink-2 hover:border-accent/50 hover:text-ink">
            GitHub ↗
          </a>
          <a href={PROFILE.resume} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-hairline px-3.5 py-2 text-[13px] text-ink-2 hover:border-accent/50 hover:text-ink">
            Resume ↓
          </a>
        </div>
      </div>
    </section>
  )
}
