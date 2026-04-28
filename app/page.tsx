'use client'

import { useState } from 'react'
import ProfessionalSide from '@/components/ProfessionalSide'
import VibeSide from '@/components/VibeSide'
import ImpactStrip from '@/components/sections/ImpactStrip'
import SelectedWork from '@/components/sections/SelectedWork'
import About from '@/components/sections/About'
import EduLanguages from '@/components/sections/EduLanguages'
import FinalCTA from '@/components/sections/FinalCTA'

const EASING = 'cubic-bezier(0.4, 0, 0.2, 1)'

export default function Home() {
  const [vibeExpanded, setVibeExpanded] = useState(false)
  const wTransition = `width 680ms ${EASING}`

  return (
    <>
      {/* ════════ FIXED DEV SIDEBAR — desktop only, persists across scroll ════════ */}
      <aside
        className="hidden md:block fixed top-[58px] right-0 bottom-0 z-30 cursor-default"
        style={{
          width: vibeExpanded ? '50%' : '56px',
          transition: wTransition,
        }}
        onMouseEnter={() => setVibeExpanded(true)}
        onMouseLeave={() => setVibeExpanded(false)}
        aria-label="Developer profile sidebar"
      >
        {/* Divider on the left edge of the sidebar */}
        <div
          className={`absolute left-0 inset-y-0 w-px z-10 transition-all duration-700 ${
            vibeExpanded
              ? 'bg-gradient-to-b from-transparent via-[#0e639c]/70 to-transparent'
              : 'bg-gradient-to-b from-transparent via-stone-400/40 to-transparent'
          }`}
        />
        <VibeSide collapsed={!vibeExpanded} />
      </aside>

      {/* ════════ MAIN ════════ */}
      <main
        className="bg-[#FFFCF6] pt-[58px] md:pr-[56px] transition-opacity duration-700"
        style={{ opacity: vibeExpanded ? 0.45 : 1 }}
        aria-label="Portfolio — Rodrigo Coloma"
      >

        {/* ── Desktop hero — pro side, full width minus sidebar ── */}
        <div className="hidden md:block h-[calc(100vh-58px)] w-full overflow-hidden relative">
          <ProfessionalSide shrunk={vibeExpanded} />

          {/* Scroll indicator */}
          <a
            href="#below-the-fold"
            aria-label="Scroll to content"
            className="absolute bottom-4 inset-x-0 flex items-center justify-center
                       text-[10px] uppercase tracking-[0.3em] text-stone-500/60
                       hover:text-stone-700 transition-colors"
          >
            ↓ scroll
          </a>
        </div>

        {/* ── Mobile hero ── */}
        <div className="md:hidden flex flex-col">
          <section className="min-h-screen" aria-label="Professional profile">
            <ProfessionalSide shrunk={false} />
          </section>
        </div>

        {/* ── Below the fold ── */}
        <div id="below-the-fold" className="scroll-mt-[58px]">
          <ImpactStrip />
          <SelectedWork />
          <About />
          <EduLanguages />
          <FinalCTA />
        </div>

      </main>
    </>
  )
}
