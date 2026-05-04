/**
 * Replaces the standard `<p className="text-[10px] tracking-[...] uppercase">…</p>`
 * eyebrow pattern with a slightly rotated, ink-bled "rubber stamp" treatment.
 * Visual delta is intentionally subtle — recruiters still scan the text fast,
 * the personality lives in the tilt + soft shadow.
 *
 * Pass `boxed` for the full stamp look with a thin border (used on the larger
 * eyebrows that sit above section H2s).
 */
export default function StampLabel({
  children,
  boxed = false,
  className = '',
  rotate = -1.5,
}: {
  children:   React.ReactNode
  boxed?:     boolean
  className?: string
  rotate?:    number
}) {
  const base =
    'inline-block font-medium text-[10px] tracking-[0.3em] uppercase ' +
    'text-[#574726]/70'

  const stampStyle: React.CSSProperties = {
    transform: `rotate(${rotate}deg)`,
    textShadow: '0 0 1px rgba(87, 71, 38, 0.35)',
  }

  if (boxed) {
    return (
      <span
        className={`${base} ${className} border border-[#574726]/30 rounded-[1px] px-2 py-0.5`}
        style={stampStyle}
      >
        {children}
      </span>
    )
  }

  return (
    <span className={`${base} ${className}`} style={stampStyle}>
      {children}
    </span>
  )
}
