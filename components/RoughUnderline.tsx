'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Wraps inline text and renders a hand-drawn-style wobble underline beneath it.
 * The line draws itself the first time it scrolls into view (~700ms).
 *
 *   <RoughUnderline>shipped</RoughUnderline>
 *   <RoughUnderline color="#0F8B7C" animate={false}>built</RoughUnderline>
 */
export default function RoughUnderline({
  children,
  color  = '#0D9488',
  animate = true,
  thickness = 2,
}: {
  children:   React.ReactNode
  color?:     string
  animate?:   boolean
  thickness?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [drawn, setDrawn] = useState(!animate)

  useEffect(() => {
    if (!animate || drawn) return
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setDrawn(true)
            obs.disconnect()
          }
        })
      },
      { threshold: 0.6 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [animate, drawn])

  return (
    <span ref={ref} className="relative inline-block whitespace-nowrap">
      <span className="relative z-10">{children}</span>
      {/* Wobble underline — viewBox stretches to fit */}
      <svg
        aria-hidden="true"
        viewBox="0 0 100 6"
        preserveAspectRatio="none"
        className="absolute left-0 -bottom-[3px] w-full h-[6px] pointer-events-none"
      >
        <path
          d="M 1 4 Q 18 1, 35 3.5 T 68 3 T 99 3.5"
          fill="none"
          stroke={color}
          strokeWidth={thickness}
          strokeLinecap="round"
          strokeDasharray="120"
          strokeDashoffset={drawn ? 0 : 120}
          style={{ transition: 'stroke-dashoffset 700ms ease-out' }}
        />
      </svg>
    </span>
  )
}
