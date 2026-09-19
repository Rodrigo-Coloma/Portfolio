import type { Metadata } from 'next'
import TabBar from '@/components/editor/TabBar'
import StatusBar from '@/components/editor/StatusBar'
import { PROFILE, CONTACT_BLURB } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Rodrigo Coloma — Data Team Lead in Madrid. Semantic models, Power BI governance, data engineering.',
}

const CONTACT: { label: string; value: string; href: string }[] = [
  { label: 'email',    value: PROFILE.email,             href: `mailto:${PROFILE.email}` },
  { label: 'linkedin', value: 'linkedin.com/in/rcoloma', href: PROFILE.linkedin },
  { label: 'github',   value: 'github.com/Rodrigo-Coloma', href: PROFILE.github },
  { label: 'phone',    value: '+34 691 668 700',         href: 'tel:+34691668700' },
]

const META: [string, string][] = [
  ['location',  'Madrid, ES · open to remote EU'],
  ['languages', 'Spanish (native) · English (C2) · German (A1)'],
  ['timezone',  'CET (UTC+1) · CEST in summer'],
  ['best for',  'semantic models · Power BI governance · data engineering · LLM apps'],
]

export default function ContactPage() {
  return (
    <>
      <TabBar active="contact.md" home={false} />
      <main className="min-h-screen pt-[var(--chrome-top)] pb-[var(--chrome-bottom)] bg-paper-preview font-serif prose-preview">
        <div className="max-w-[720px] px-6 py-12 sm:px-10 sm:py-16 lg:px-[72px]">
          <p className="font-mono text-[12px] tracking-[0.08em] text-ink-faint uppercase mb-6">contact.md</p>
          <h1 className="text-[44px] sm:text-[56px] leading-[1.02] font-normal tracking-[-0.02em] mb-7">
            Let&apos;s talk.
          </h1>
          <p className="text-[17px] leading-[1.5] text-ink-body max-w-[560px] mb-12">{CONTACT_BLURB}</p>

          <div className="border-t border-rule-soft mb-12">
            {CONTACT.map(c => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="grid grid-cols-[88px_minmax(0,1fr)_auto] items-baseline gap-4 py-3 plain border-b border-rule-soft hover:bg-paper transition-colors"
              >
                <span className="font-mono text-[12px] text-ink-faint">{c.label}</span>
                <span className="text-[16px] text-ink">{c.value}</span>
                <span className="text-ink-faint">→</span>
              </a>
            ))}
          </div>

          <div className="font-mono text-[12.5px] leading-[1.9] text-ink-body">
            {META.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[88px_minmax(0,1fr)] gap-4">
                <span className="text-ink-faint">{k}</span>
                <span>{v}</span>
              </div>
            ))}
          </div>

          <p className="mt-12 font-mono text-[11.5px] text-ink-faint">Reply within 24 hours, usually faster.</p>
        </div>
      </main>
      <StatusBar />
    </>
  )
}
