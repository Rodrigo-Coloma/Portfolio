/** Preview section with the editorial heading and its "file name" in the margin. */
export default function Section({
  id,
  title,
  file,
  children,
  last = false,
}: {
  id:        string
  title:     string
  file:      string
  children:  React.ReactNode
  last?:     boolean
}) {
  return (
    <section
      id={id}
      className={`px-6 py-12 sm:px-10 sm:py-14 lg:px-[72px] lg:py-14 ${last ? '' : 'border-b border-rule-soft'}`}
    >
      <div className="flex items-baseline gap-4 mb-7">
        <h2 className="text-[28px] sm:text-[36px] font-normal tracking-[-0.01em] leading-tight">{title}</h2>
        <span className="font-mono text-[12px] text-ink-faint">{file}</span>
      </div>
      {children}
    </section>
  )
}
