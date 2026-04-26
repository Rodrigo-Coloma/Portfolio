'use client'

import { useState } from 'react'
import ProfessionalSide from '@/components/ProfessionalSide'
import VibeSide from '@/components/VibeSide'

type Hovered = 'pro' | 'vibe' | null

const EASING = 'cubic-bezier(0.4, 0, 0.2, 1)'

function getDividerStyle(hovered: Hovered) {
  if (hovered === 'pro')  return 'bg-gradient-to-b from-transparent via-blue-400/50 to-transparent'
  if (hovered === 'vibe') return 'bg-gradient-to-b from-transparent via-green-500/40 to-transparent'
  return 'bg-gradient-to-b from-transparent via-slate-700/50 to-transparent'
}

export default function Home() {
  const [hovered, setHovered] = useState<Hovered>(null)

  const proWidth  = hovered === 'vibe' ? '30%' : hovered === 'pro' ? '70%' : '50%'
  const vibeWidth = hovered === 'pro'  ? '30%' : hovered === 'vibe' ? '70%' : '50%'
  const widthTransition = `width 680ms ${EASING}`

  return (
    <>
      {/* ── Desktop: side-by-side split ── */}
      <main
        className="hidden md:flex h-screen w-screen overflow-hidden bg-black pt-12"
        aria-label="Portfolio — Rodrigo Coloma"
      >
        {/* Professional side */}
        <section
          aria-label="Professional profile"
          style={{ width: proWidth, transition: widthTransition, flexShrink: 0 }}
          className="relative overflow-hidden cursor-default"
          onMouseEnter={() => setHovered('pro')}
          onMouseLeave={() => setHovered(null)}
        >
          <ProfessionalSide shrunk={hovered === 'vibe'} />
        </section>

        {/* Divider */}
        <div className="relative w-px flex-shrink-0 z-20 overflow-visible">
          <div
            className={`absolute inset-0 transition-all duration-700 ${getDividerStyle(hovered)}`}
          />
          {/* Glow orb in the middle of the divider */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
                         w-1 h-1 rounded-full transition-all duration-700
                         ${hovered === 'pro'  ? 'bg-blue-400 shadow-[0_0_12px_4px_rgba(96,165,250,0.5)]' :
                           hovered === 'vibe' ? 'bg-green-400 shadow-[0_0_12px_4px_rgba(74,222,128,0.5)]' :
                                               'bg-slate-600 shadow-none'}`}
          />
        </div>

        {/* Vibe / builder side */}
        <section
          aria-label="Builder and AI developer profile"
          style={{ width: vibeWidth, transition: widthTransition, flexShrink: 0 }}
          className="relative overflow-hidden cursor-default"
          onMouseEnter={() => setHovered('vibe')}
          onMouseLeave={() => setHovered(null)}
        >
          <VibeSide shrunk={hovered === 'pro'} />
        </section>

        {/* Hover hint — fades once user interacts */}
        <div
          className={`absolute bottom-5 inset-x-0 flex items-center justify-center gap-2
                       text-[10px] text-slate-700 uppercase tracking-[0.25em] pointer-events-none
                       transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
        >
          <span>← hover to explore →</span>
        </div>
      </main>

      {/* ── Mobile: stacked layout ── */}
      <main className="md:hidden flex flex-col bg-black pt-12" aria-label="Portfolio — Rodrigo Coloma">
        <section className="min-h-screen" aria-label="Professional profile">
          <ProfessionalSide shrunk={false} />
        </section>

        {/* Horizontal divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700/60 to-transparent" />

        <section className="min-h-screen" aria-label="Builder and AI developer profile">
          <VibeSide shrunk={false} />
        </section>
      </main>
    </>
  )
}
