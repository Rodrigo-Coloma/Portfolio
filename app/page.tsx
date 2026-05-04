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
  const transition = `all 600ms ${EASING}`

  return (
    <>
      {/* ════════ DESKTOP — fixed right sidebar (hover) ════════ */}
      <aside
        className="hidden md:block fixed top-[58px] right-0 bottom-0 z-30 cursor-default"
        style={{
          width:      vibeExpanded ? '50%' : '56px',
          transition: `width 680ms ${EASING}`,
        }}
        onMouseEnter={() => setVibeExpanded(true)}
        onMouseLeave={() => setVibeExpanded(false)}
        aria-label="Developer profile sidebar"
      >
        <div
          className={`absolute left-0 inset-y-0 w-px z-10 transition-all duration-700 ${
            vibeExpanded
              ? 'bg-gradient-to-b from-transparent via-[#0e639c]/70 to-transparent'
              : 'bg-gradient-to-b from-transparent via-stone-400/40 to-transparent'
          }`}
        />
        <VibeSide collapsed={!vibeExpanded} orientation="vertical" />
      </aside>

      {/* ════════ MOBILE — fixed bottom bar (tap to expand) ════════ */}
      <aside
        className={`md:hidden fixed inset-x-0 bottom-0 z-30 overflow-hidden ${!vibeExpanded ? 'cursor-pointer' : ''}`}
        style={{
          height:     vibeExpanded ? '70vh' : '52px',
          transition,
        }}
        onClick={!vibeExpanded ? () => setVibeExpanded(true) : undefined}
        role={!vibeExpanded ? 'button' : undefined}
        tabIndex={!vibeExpanded ? 0 : -1}
        aria-label={!vibeExpanded ? 'Expand developer profile' : 'Developer profile'}
      >
        {/* Top accent line at the panel boundary */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0e639c]/60 to-transparent z-30" />

        {/* Drag-handle / collapse button — only visible when expanded */}
        {vibeExpanded && (
          <button
            type="button"
            onClick={e => { e.stopPropagation(); setVibeExpanded(false) }}
            className="absolute top-0 inset-x-0 h-7 flex items-center justify-center bg-[#1e1e1e] z-40 border-b border-[#2d2d2d]"
            aria-label="Collapse developer profile"
          >
            <span className="w-12 h-1 bg-[#454545] rounded-full" />
          </button>
        )}

        {/* The IDE itself — collapsed = horizontal bar, expanded = full IDE */}
        <div className={vibeExpanded ? 'absolute inset-0 pt-7' : 'h-full'}>
          <VibeSide
            collapsed={!vibeExpanded}
            orientation={vibeExpanded ? 'vertical' : 'horizontal'}
          />
        </div>
      </aside>

      {/* ════════ MAIN ════════ */}
      <main
        className="bg-[#FCFAF3] pt-[58px] pb-[52px] md:pb-0 md:pr-[56px] transition-opacity duration-700"
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
