'use client'

import Link from 'next/link'
import { PROFILE } from '@/lib/site'

/** Top bar: report identity, refresh stamp, primary actions. */
export default function ReportBar({ refreshed }: { refreshed: string }) {
  return (
    <header className="fixed inset-x-0 top-0 z-30 h-[var(--chrome-top)] border-b border-hairline bg-plane/90 backdrop-blur">
      <div className="mx-auto flex h-full max-w-[1480px] items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg bg-accent text-[14px] font-bold tracking-[-0.04em] text-[#062a20]">rc</span>
          <span className="min-w-0">
            <span className="block truncate text-[14px] font-medium text-ink">{PROFILE.short}</span>
            <span className="block truncate text-[11.5px] text-ink-muted">Profile report · rcoloma.dev</span>
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-1.5 text-[12px] text-ink-muted md:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Last refreshed {refreshed} · no gateway errors
          </span>
          <a href={PROFILE.resume} target="_blank" rel="noopener noreferrer"
             className="hidden rounded-lg border border-hairline px-3 py-1.5 text-[12.5px] text-ink-2 hover:border-accent/50 hover:text-ink sm:inline-block">
            Export resume ↓
          </a>
          <a href={`mailto:${PROFILE.email}`}
             className="rounded-lg bg-accent px-3 py-1.5 text-[12.5px] font-medium text-[#062a20] hover:brightness-110">
            Contact
          </a>
        </div>
      </div>
    </header>
  )
}
