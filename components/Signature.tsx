'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Animated cursive signature — the closing flourish at the bottom of the page.
 * Uses Google Font "Homemade Apple" loaded via app/layout.tsx (--font-signature).
 *
 * Reveals left-to-right via clip-path the first time it scrolls into view.
 * Triggers exactly once at threshold 0.4 (40% visible).
 *
 * Swap to a real handwritten asset later by replacing the inner <span> with an
 * inline <svg> whose <path> is traced from a scanned signature, keeping the
 * same clip-path animation on the wrapper.
 */
export default function Signature({
  text = 'Rodrigo Coloma',
  className = '',
}: {
  text?:      string
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    if (revealed) return
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setRevealed(true)
            obs.disconnect()
          }
        })
      },
      { threshold: 0.4 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [revealed])

  return (
    <div ref={ref} className={`relative inline-block leading-none ${className}`}>
      <span
        className="block"
        style={{
          fontFamily: 'var(--font-signature), cursive',
          clipPath:   revealed ? 'inset(0 0 -10% 0)' : 'inset(0 100% -10% 0)',
          transition: 'clip-path 1.6s cubic-bezier(0.55, 0.05, 0.4, 1)',
          willChange: 'clip-path',
          paddingBottom: '0.15em',  // give descenders room
        }}
      >
        {text}
      </span>
    </div>
  )
}
