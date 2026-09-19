import { PROFILE } from '@/lib/site'

export default function StatusBar({ lines, files }: { lines?: number; files?: number }) {
  return (
    <footer
      className="fixed bottom-0 inset-x-0 z-40 h-[var(--chrome-bottom)] bg-paper-chrome border-t border-rule
                 flex items-center justify-between px-4 text-[11.5px] text-ink-muted"
    >
      <div className="flex gap-4">
        <span>⎇ main</span>
        <span className="hidden sm:inline">markdown</span>
        {lines ? <span className="hidden sm:inline">{lines} lines</span> : null}
        {files ? <span className="hidden sm:inline">{files} files</span> : null}
      </div>
      <div className="flex gap-4">
        <span className="hidden sm:inline">{PROFILE.location} · CET</span>
        <span>© {new Date().getFullYear()} {PROFILE.short}</span>
      </div>
    </footer>
  )
}
