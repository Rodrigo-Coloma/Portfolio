'use client'

import { useState } from 'react'
import Image from 'next/image'
import ProfessionalSide from '@/components/ProfessionalSide'
import VibeSide from '@/components/VibeSide'

type Hovered = 'pro' | 'vibe' | null

const EASING = 'cubic-bezier(0.4, 0, 0.2, 1)'

function getDividerStyle(hovered: Hovered) {
  if (hovered === 'pro')  return 'bg-gradient-to-b from-transparent via-blue-400/50 to-transparent'
  if (hovered === 'vibe') return 'bg-gradient-to-b from-transparent via-green-500/40 to-transparent'
  return 'bg-gradient-to-b from-transparent via-slate-700/50 to-transparent'
}

// Clip paths for the split-avatar animation
function proClip(h: Hovered): string {
  if (h === 'pro')  return 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'       // full
  if (h === 'vibe') return 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'           // collapsed left
  return 'polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)'                           // left half
}

function vibeClip(h: Hovered): string {
  if (h === 'vibe') return 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'       // full
  if (h === 'pro')  return 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)'   // collapsed right
  return 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)'                       // right half
}

function ringStyle(h: Hovered): string {
  if (h === 'pro')  return '0 0 0 2px rgba(96,165,250,0.55), 0 0 24px rgba(96,165,250,0.18)'
  if (h === 'vibe') return '0 0 0 2px rgba(74,222,128,0.55), 0 0 24px rgba(74,222,128,0.18)'
  return '0 0 0 1px rgba(100,116,139,0.35)'
}

export default function Home() {
  const [hovered, setHovered] = useState<Hovered>(null)

  const proWidth  = hovered === 'vibe' ? '30%' : hovered === 'pro' ? '70%' : '50%'
  const vibeWidth = hovered === 'pro'  ? '30%' : hovered === 'vibe' ? '70%' : '50%'
  const wTransition = `width 680ms ${EASING}`

  return (
    <>
      {/* ── Desktop: side-by-side split ── */}
      <main
        className="hidden md:flex h-screen w-screen overflow-hidden bg-black pt-12 relative"
        aria-label="Portfolio — Rodrigo Coloma"
      >
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
        <div className="relative w-px flex-shrink-0 z-20 overflow-visible">
          <div className={`absolute inset-0 transition-all duration-700 ${getDividerStyle(hovered)}`} />
        </div>

        {/* Vibe / builder side */}
        <section
          aria-label="Builder and AI developer profile"
          style={{ width: vibeWidth, transition: wTransition, flexShrink: 0 }}
          className="relative overflow-hidden cursor-default"
          onMouseEnter={() => setHovered('vibe')}
          onMouseLeave={() => setHovered(null)}
        >
          <VibeSide shrunk={hovered === 'pro'} />
        </section>

        {/* ── Centered split-avatar cluster ── */}
        <div
          className="fixed top-14 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
          aria-hidden="true"
        >
          {/* Glow ring */}
          <div
            className="absolute -inset-1 rounded-full"
            style={{
              boxShadow: ringStyle(hovered),
              transition: `box-shadow 700ms ${EASING}`,
            }}
          />

          {/* Avatar container */}
          <div className="w-36 h-36 relative rounded-full overflow-hidden">

            {/* Professional photo — left half default, full on hover pro */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: proClip(hovered),
                transition: `clip-path 700ms ${EASING}`,
              }}
            >
              <Image
                src="/photo.png"
                alt="Rodrigo Coloma — Professional"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Vibe photo — right half default, full on hover vibe */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: vibeClip(hovered),
                transition: `clip-path 700ms ${EASING}`,
              }}
            >
              <Image
                src="/photo-vibe.png"
                alt="Rodrigo Coloma — Builder"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Centre split line — only visible at resting state */}
            <div
              className="absolute inset-y-0 left-1/2 w-px bg-black/40 z-10"
              style={{
                opacity: hovered ? 0 : 1,
                transition: `opacity 400ms ${EASING}`,
              }}
            />
          </div>
        </div>

        {/* Hover hint */}
        <div
          className={`absolute bottom-5 inset-x-0 flex items-center justify-center
                       text-[10px] text-slate-700 uppercase tracking-[0.25em] pointer-events-none
                       transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
        >
          ← hover to explore →
        </div>
      </main>

      {/* ── Mobile: stacked layout ── */}
      <main className="md:hidden flex flex-col bg-black pt-12" aria-label="Portfolio — Rodrigo Coloma">

        {/* Mobile avatar — shown once, centred above content */}
        <div className="flex justify-center pt-10 pb-2">
          <div className="w-28 h-28 relative rounded-full overflow-hidden ring-1 ring-slate-700/60">
            <Image src="/photo.png" alt="Rodrigo Coloma" fill className="object-cover object-top" priority />
          </div>
        </div>

        <section className="min-h-screen" aria-label="Professional profile">
          <ProfessionalSide shrunk={false} />
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-slate-700/60 to-transparent" />

        <section className="min-h-screen" aria-label="Builder and AI developer profile">
          <VibeSide shrunk={false} />
        </section>
      </main>
    </>
  )
}
