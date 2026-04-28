const ACTIONS: { label: string; sub: string; href: string; external?: boolean }[] = [
  { label: 'Email',    sub: 'rjcolgut@gmail.com',          href: 'mailto:rjcolgut@gmail.com'                    },
  { label: 'LinkedIn', sub: 'linkedin.com/in/rcoloma',     href: 'https://www.linkedin.com/in/rcoloma', external: true },
  { label: 'GitHub',   sub: 'github.com/Rodrigo-Coloma',   href: 'https://github.com/Rodrigo-Coloma',   external: true },
  { label: 'Resume',   sub: 'PDF · 1 page',                href: '/resume.pdf',                          external: true },
]

export default function FinalCTA() {
  return (
    <section className="bg-[#FCF9EE] border-t border-[#14B8A6]/30 py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-8 lg:px-12 text-center">

        {/* Eyebrow */}
        <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#584C25]/70 mb-5">
          What&apos;s next
        </p>

        {/* Headline */}
        <h2 className="text-stone-900 text-5xl lg:text-6xl font-light tracking-[-0.02em] leading-[1.05] mb-6">
          Let&apos;s <span className="text-[#0F8B7C]">build</span><br className="hidden sm:inline" /> something.
        </h2>

        {/* Sub */}
        <p className="text-stone-600 text-[15px] leading-[1.7] font-light max-w-md mx-auto mb-12">
          Open to remote EU roles, technical consulting, and interesting collaborations.
          Email is the fastest path; the rest are equally welcome.
        </p>

        {/* Action grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {ACTIONS.map(({ label, sub, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="group flex flex-col items-center justify-center gap-1
                         border border-[#584C25]/20 hover:border-[#584C25]/60 bg-white/40 hover:bg-white
                         rounded-sm px-4 py-5 transition-colors"
            >
              <span className="text-stone-900 text-[13px] font-medium tracking-wide">
                {label} {external ? '↗' : '→'}
              </span>
              <span className="text-stone-400 group-hover:text-stone-600 text-[11px] font-light tracking-wide truncate max-w-full transition-colors">
                {sub}
              </span>
            </a>
          ))}
        </div>

        {/* Footer mark */}
        <p className="text-[10px] text-stone-400 tracking-[0.25em] uppercase mt-16">
          Reply within 24 hours, usually faster
        </p>

      </div>
    </section>
  )
}
