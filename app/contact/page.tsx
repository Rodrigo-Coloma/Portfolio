import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Rodrigo Coloma',
  description: 'Get in touch with Rodrigo Coloma — data engineer, ML practitioner, and AI builder based in Madrid.',
}

const CONTACT: { label: string; value: string; href: string }[] = [
  { label: 'Email',    value: 'rjcolgut@gmail.com',                href: 'mailto:rjcolgut@gmail.com'                  },
  { label: 'LinkedIn', value: 'linkedin.com/in/rcoloma',           href: 'https://www.linkedin.com/in/rcoloma'        },
  { label: 'GitHub',   value: 'github.com/Rodrigo-Coloma',         href: 'https://github.com/Rodrigo-Coloma'          },
  { label: 'Phone',    value: '+34 691 668 700',                   href: 'tel:+34691668700'                           },
]

const META: [string, string][] = [
  ['Location',  'Madrid, ES · Open to remote EU'],
  ['Languages', 'Spanish (Native) · English (C2) · German (A1)'],
  ['Timezone',  'CET (UTC+1) · CEST in summer'],
  ['Best for',  'Data engineering · ML · LLM apps · Consulting'],
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FCF9EE] pt-12">

      {/* Subtle radial wash matching homepage pro side */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_30%,rgba(15,23,42,0.04),transparent)] pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-8 lg:px-12 py-20 lg:py-28">

        {/* Eyebrow */}
        <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#584C25]/70 mb-6">
          Get in touch
        </p>

        {/* Title */}
        <h1 className="text-5xl xl:text-6xl font-light text-stone-900 leading-[1] tracking-[-0.02em] mb-6">
          Let&apos;s build something.
        </h1>

        {/* Bio */}
        <p className="text-stone-600 text-[15px] leading-[1.7] font-light max-w-md mb-14">
          Building data systems and AI applications out of Madrid.
          Open to remote EU roles, technical consulting, and interesting collaborations.
          The fastest way to reach me is email.
        </p>

        {/* Accent line */}
        <div className="w-12 h-px bg-[#584C25]/40 mb-14" />

        {/* Contact methods */}
        <div className="mb-16">
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#584C25]/70 mb-6">
            Direct
          </p>
          <div className="space-y-4">
            {CONTACT.map(({ label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-baseline gap-6 -mx-3 px-3 py-2 rounded-sm hover:bg-[#584C25]/10 transition-colors"
              >
                <span className="text-stone-400 text-[11px] uppercase tracking-[0.18em] w-20 flex-shrink-0">
                  {label}
                </span>
                <span className="text-stone-800 text-[15px] font-light flex-1">
                  {value}
                </span>
                <span className="text-stone-400 group-hover:text-stone-700 group-hover:translate-x-1 transition-all text-sm">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Meta */}
        <div className="mb-12">
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#584C25]/70 mb-6">
            Details
          </p>
          <div className="space-y-3">
            {META.map(([label, value]) => (
              <div key={label} className="flex items-baseline gap-6">
                <span className="text-stone-400 text-[11px] uppercase tracking-[0.18em] w-20 flex-shrink-0">
                  {label}
                </span>
                <span className="text-stone-600 text-[14px] font-light">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer mark */}
        <div className="pt-12 border-t border-[#584C25]/15">
          <p className="text-[10px] text-stone-400 tracking-widest">
            ⏤ Reply within 24 hours, usually faster
          </p>
        </div>

      </div>
    </main>
  )
}
