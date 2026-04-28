'use client'

import { useState } from 'react'
import ProfessionalSide from '@/components/ProfessionalSide'
import VibeSide from '@/components/VibeSide'
import ImpactStrip from '@/components/sections/ImpactStrip'
import SelectedWork from '@/components/sections/SelectedWork'
import About from '@/components/sections/About'
import EduLanguages from '@/components/sections/EduLanguages'
import FinalCTA from '@/components/sections/FinalCTA'

type Hovered = 'pro' | 'vibe' | null

const EASING = 'cubic-bezier(0.4, 0, 0.2, 1)'

function dividerStyle(hovered: Hovered) {
  if (hovered === 'pro')  return 'bg-gradient-to-b from-transparent via-stone-400/60 to-transparent'
  if (hovered === 'vibe') return 'bg-gradient-to-b from-transparent via-[#0e639c]/70 to-transparent'
  return 'bg-gradient-to-b from-transparent via-stone-300/70 to-transparent'
}

export default function Home() {
  const [hovered, setHovered] = useState<Hovered>(null)

  const proWidth  = hovered === 'vibe' ? '30%' : hovered === 'pro' ? '70%' : '50%'
  const vibeWidth = hovered === 'pro'  ? '30%' : hovered === 'vibe' ? '70%' : '50%'
  const wTransition = `width 680ms ${EASING}`

  return (
    <main className="bg-[#FCF9EE] pt-12" aria-label="Portfolio — Rodrigo Coloma">

      {/* ═════════ HERO ═════════ */}

      {/* Desktop: split-screen, exactly one viewport tall */}
      <div className="hidden md:flex h-[calc(100vh-3rem)] w-full overflow-hidden bg-black relative">

        {/* Professional side */}
        <section
          aria-label="Professional profile"
          style={{ width: proWidth, transition: wTransition, flexShrink: 0 }}
          className="relative overflow-hidden cursor-default"
          onMouseEnter={() => setHovered('pro')}
          onMouseLeave={() => setHovered(null)}
        >
          <ProfessionalSide shrunk={hovered === 'vibe'} />
        </section>

        {/* Divider */}
        <div className="relative w-px flex-shrink-0 z-20">
          <div className={`absolute inset-0 transition-all duration-700 ${dividerStyle(hovered)}`} />
        </div>

        {/* Developer / IDE side */}
        <section
          aria-label="Developer profile"
          style={{ width: vibeWidth, transition: wTransition, flexShrink: 0 }}
          className="relative overflow-hidden cursor-default"
          onMouseEnter={() => setHovered('vibe')}
          onMouseLeave={() => setHovered(null)}
        >
          <VibeSide shrunk={hovered === 'pro'} />
        </section>

        {/* Hover hint */}
        <div
          className={`absolute bottom-16 inset-x-0 flex items-center justify-center
                       text-[10px] uppercase tracking-[0.25em] pointer-events-none mix-blend-difference
                       text-white/40 transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
        >
          ← hover to explore →
        </div>

        {/* Scroll indicator */}
        <a
          href="#below-the-fold"
          aria-label="Scroll to content"
          className="absolute bottom-4 inset-x-0 flex items-center justify-center
                     text-[10px] uppercase tracking-[0.3em] mix-blend-difference text-white/60
                     hover:text-white/90 transition-colors"
        >
          ↓ scroll
        </a>
      </div>

      {/* Mobile: professional side only — IDE side hidden for readability */}
      <div className="md:hidden flex flex-col">
        <section className="min-h-screen" aria-label="Professional profile">
          <ProfessionalSide shrunk={false} />
        </section>
      </div>

      {/* ═════════ BELOW THE FOLD ═════════ */}

      <div id="below-the-fold" className="scroll-mt-12">
        <ImpactStrip />
        <SelectedWork />
        <About />
        <EduLanguages />
        <FinalCTA />
      </div>

    </main>
  )
}
