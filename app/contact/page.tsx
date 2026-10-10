import type { Metadata } from 'next'
import Link from 'next/link'
import { PROFILE, CONTACT_BLURB } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Rodrigo Coloma — Data Team Lead in Madrid. Data governance, semantic models, data platforms.',
}

const ROWS: { label: string; value: string; href: string }[] = [
  { label: 'Email',    value: PROFILE.email,               href: `mailto:${PROFILE.email}` },
  { label: 'LinkedIn', value: 'linkedin.com/in/rcoloma',   href: PROFILE.linkedin },
  { label: 'GitHub',   value: 'github.com/Rodrigo-Coloma', href: PROFILE.github },
  { label: 'Phone',    value: '+34 691 668 700',           href: 'tel:+34691668700' },
]

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-[720px] px-5 py-16 sm:py-24">
      <Link href="/" className="text-[13px] text-ink-muted hover:text-accent">← Back to the report</Link>
      <h1 className="mt-6 text-[40px] font-semibold tracking-[-0.02em]">Let&apos;s talk.</h1>
      <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{CONTACT_BLURB}</p>
      <div className="mt-10 overflow-hidden rounded-xl border border-hairline bg-surface">
        {ROWS.map(r => (
          <a key={r.label} href={r.href}
             target={r.href.startsWith('http') ? '_blank' : undefined}
             rel={r.href.startsWith('http') ? 'noopener noreferrer' : undefined}
             className="grid grid-cols-[96px_minmax(0,1fr)_auto] items-center gap-4 border-b border-hairline px-5 py-4 last:border-b-0 hover:bg-surface-2">
            <span className="text-[12.5px] text-ink-muted">{r.label}</span>
            <span className="truncate text-[15px] text-ink">{r.value}</span>
            <span className="text-accent">→</span>
          </a>
        ))}
      </div>
      <p className="mt-8 text-[12.5px] text-ink-muted">Reply within 24 hours, usually faster.</p>
    </main>
  )
}
