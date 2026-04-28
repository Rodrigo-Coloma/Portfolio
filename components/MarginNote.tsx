/**
 * Small typewriter-style note that reads as marginalia next to a piece of
 * content. Italic monospace, slight rotation, muted color — feels like a
 * note pencilled into the margin of a lab notebook.
 *
 *   <MarginNote>← measured on held-out seasonal periods</MarginNote>
 */
export default function MarginNote({
  children,
  className = '',
  rotate = -0.6,
}: {
  children:   React.ReactNode
  className?: string
  rotate?:    number
}) {
  return (
    <span
      className={`block font-mono text-[11px] italic text-stone-500/80 leading-tight ${className}`}
      style={{
        transform: `rotate(${rotate}deg)`,
        transformOrigin: 'left center',
      }}
    >
      {children}
    </span>
  )
}
