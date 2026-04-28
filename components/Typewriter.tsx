'use client'

import { useEffect, useState } from 'react'

/**
 * Renders text one character at a time with a blinking caret that follows the
 * typing cursor. After typing completes, the caret fades out.
 *
 * Layout-stable: a hidden ghost layer reserves the final width so the rest of
 * the page doesn't reflow during the animation. The visible layer is absolutely
 * positioned over the ghost.
 *
 *   <Typewriter text="Rodrigo Coloma" />
 */
export default function Typewriter({
  text,
  speed = 90,
  startDelay = 250,
  className = '',
}: {
  text:        string
  speed?:      number   // ms per character
  startDelay?: number   // ms before first character appears
  className?:  string
}) {
  const [count, setCount] = useState(0)
  const done = count >= text.length

  useEffect(() => {
    if (done) return
    const t = setTimeout(
      () => setCount(c => c + 1),
      count === 0 ? startDelay : speed,
    )
    return () => clearTimeout(t)
  }, [count, done, speed, startDelay])

  return (
    <span className={`relative inline-block align-baseline ${className}`} aria-label={text}>
      {/* Ghost layer — reserves layout width / line wrapping */}
      <span aria-hidden="true" className="invisible whitespace-pre-wrap">
        {text}
      </span>
      {/* Visible typed layer */}
      <span
        aria-hidden="true"
        className="absolute inset-0 whitespace-pre-wrap"
      >
        {text.slice(0, count)}
        <span
          className={`typewriter-caret ${done ? 'typewriter-caret--fade' : ''}`}
          aria-hidden="true"
        />
      </span>
    </span>
  )
}
