'use client'

import { useCallback, useRef, useState } from 'react'

type Tip = { x: number; y: number; content: React.ReactNode } | null

/**
 * Pointer-following tooltip scoped to a relatively positioned container.
 * `show` accepts a mouse event or an element (keyboard focus) as anchor.
 */
export function useTooltip() {
  const box = useRef<HTMLDivElement>(null)
  const [tip, setTip] = useState<Tip>(null)

  const show = useCallback((anchor: React.MouseEvent | Element, content: React.ReactNode) => {
    const el = box.current
    if (!el) return
    const r = el.getBoundingClientRect()
    let cx: number, cy: number
    if ('clientX' in anchor) {
      cx = anchor.clientX; cy = anchor.clientY
    } else {
      const a = anchor.getBoundingClientRect()
      cx = a.left + a.width / 2; cy = a.top
    }
    setTip({ x: cx - r.left, y: cy - r.top, content })
  }, [])

  const hide = useCallback(() => setTip(null), [])

  const node = tip ? (
    <div
      role="tooltip"
      className="pointer-events-none absolute z-20 w-max max-w-[260px] rounded-lg border border-hairline bg-[#0d1312]/95
                 px-3 py-2 text-[12.5px] leading-snug text-ink-2 shadow-[0_8px_24px_rgba(0,0,0,0.45)] backdrop-blur"
      style={{
        left: tip.x,
        top: tip.y,
        transform: `translate(${tip.x > (box.current?.clientWidth ?? 0) * 0.6 ? 'calc(-100% - 12px)' : '12px'}, calc(-100% - 10px))`,
      }}
    >
      {tip.content}
    </div>
  ) : null

  return { box, show, hide, node }
}

export function TipTitle({ children }: { children: React.ReactNode }) {
  return <div className="mb-0.5 font-medium text-ink">{children}</div>
}
