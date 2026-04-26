'use client'

import { useEffect, useRef, useState } from 'react'

type LineType = 'cmd' | 'output' | 'data' | 'success' | 'blank' | 'prompt'

interface TermLine {
  delay: number
  text:  string
  type:  LineType
}

const LINES: TermLine[] = [
  { delay: 300,  text: '$ whoami',                                      type: 'cmd'     },
  { delay: 750,  text: '  rodrigo — builder · ai dev · vibe coder',     type: 'output'  },
  { delay: 1150, text: '',                                               type: 'blank'   },
  { delay: 1250, text: '$ ls ~/projects',                               type: 'cmd'     },
  { delay: 1650, text: '  CVMACHINE/     # AI-powered CV optimizer',    type: 'output'  },
  { delay: 1950, text: '  LINKEDIN-MGR/  # AI content engine',          type: 'output'  },
  { delay: 2250, text: "  rcoloma.dev/   # you're here",                type: 'output'  },
  { delay: 2750, text: '',                                               type: 'blank'   },
  { delay: 2850, text: '$ cat stack.json',                              type: 'cmd'     },
  { delay: 3250, text: '  "llm"   → ["claude", "anthropic-sdk"]',       type: 'data'    },
  { delay: 3450, text: '  "web"   → ["typescript", "react", "next"]',   type: 'data'    },
  { delay: 3650, text: '  "data"  → ["python", "databricks", "azure"]', type: 'data'    },
  { delay: 3850, text: '  "ml"    → ["pytorch", "xgboost", "mlflow"]',  type: 'data'    },
  { delay: 4150, text: '',                                               type: 'blank'   },
  { delay: 4250, text: '$ git log --oneline',                           type: 'cmd'     },
  { delay: 4650, text: '  ✓ shipped 2 LLM apps to production',          type: 'success' },
  { delay: 4950, text: '  ✓ built cvmachine end-to-end',                type: 'success' },
  { delay: 5250, text: '  ✓ 9 years of commits, still going',           type: 'success' },
  { delay: 5650, text: '',                                               type: 'blank'   },
  { delay: 5750, text: '',                                               type: 'prompt'  },
]

const LINE_COLORS: Record<LineType, string> = {
  cmd:     'text-green-400 glow-green',
  output:  'text-green-700',
  data:    'text-cyan-800',
  success: 'text-emerald-500',
  blank:   '',
  prompt:  '',
}

export default function VibeSide({ shrunk }: { shrunk: boolean }) {
  const [visibleCount, setVisibleCount] = useState(0)
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    LINES.forEach((line, i) => {
      setTimeout(() => setVisibleCount(c => Math.max(c, i + 1)), line.delay)
    })
  }, [])

  return (
    <div className="h-full bg-[#060606] relative overflow-hidden font-mono scanlines">

      {/* Top glow line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-green-500/25 to-transparent pointer-events-none" />

      {/* Centre radial green glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(0,255,80,0.04),transparent)] pointer-events-none" />

      {/* ── Main content ── */}
      <div
        className="relative z-10 h-full flex flex-col justify-center px-12 lg:px-16 xl:px-20"
        style={{
          opacity:    shrunk ? 0.35 : 1,
          transform:  shrunk ? 'scale(0.96)' : 'scale(1)',
          transition: 'opacity 600ms ease, transform 600ms ease',
        }}
      >

        {/* macOS-style title bar */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-[#2a2a2a] text-[11px] tracking-wide">rodrigo@dev — zsh</span>
        </div>

        {/* Terminal output */}
        <div className="space-y-[3px] mb-10">
          {LINES.slice(0, visibleCount).map((line, i) => {
            if (line.type === 'blank') return <div key={i} className="h-2" />

            if (line.type === 'prompt') {
              return (
                <div key={i} className="flex items-center gap-1 text-xs text-green-500">
                  <span>$</span>
                  <span className="w-[7px] h-[14px] bg-green-500 cursor-blink rounded-[1px]" />
                </div>
              )
            }

            return (
              <div
                key={i}
                className={`text-[12px] leading-5 ${LINE_COLORS[line.type]}`}
              >
                {line.text}
              </div>
            )
          })}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com/Rodrigo-Coloma"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 border border-green-700/40
                       text-green-600 hover:text-green-400 hover:border-green-500/60
                       hover:bg-green-500/5 text-xs transition-all duration-200 rounded-[3px]"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            ~/github ↗
          </a>
          <a
            href="https://cvmachine.rcoloma.dev"
            className="flex items-center gap-1.5 px-4 py-2 bg-green-500/10 border border-green-600/30
                       text-green-500 hover:bg-green-500/15 hover:border-green-500/50
                       text-xs transition-all duration-200 rounded-[3px]"
          >
            try cvmachine →
          </a>
          <a
            href="mailto:rjcolgut@gmail.com"
            className="flex items-center gap-1.5 px-4 py-2 border border-[#1a1a1a]
                       text-[#2e2e2e] hover:text-green-700 hover:border-green-900/40
                       text-xs transition-all duration-200 rounded-[3px]"
          >
            ./contact
          </a>
        </div>

      </div>

      {/* Side label hint */}
      <div
        className="absolute bottom-6 right-12 lg:right-16 xl:right-20 text-[10px] text-[#1c1c1c] uppercase tracking-widest"
        style={{ opacity: shrunk ? 0 : 1, transition: 'opacity 400ms ease' }}
      >
        Builder
      </div>
    </div>
  )
}
