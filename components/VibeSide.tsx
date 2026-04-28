'use client'

import { useState } from 'react'

/* ─── VS Code Dark+ token colors ──────────────────────────────────────── */
const Cm = ({ children }: { children: React.ReactNode }) => <span className="text-[#6a9955] italic">{children}</span>  // comment
const Kw = ({ children }: { children: React.ReactNode }) => <span className="text-[#c586c0]">{children}</span>          // keyword
const St = ({ children }: { children: React.ReactNode }) => <span className="text-[#ce9178]">{children}</span>          // string
const Nm = ({ children }: { children: React.ReactNode }) => <span className="text-[#b5cea8]">{children}</span>          // number
const Fn = ({ children }: { children: React.ReactNode }) => <span className="text-[#dcdcaa]">{children}</span>          // function
const Ty = ({ children }: { children: React.ReactNode }) => <span className="text-[#4ec9b0]">{children}</span>          // type
const Va = ({ children }: { children: React.ReactNode }) => <span className="text-[#9cdcfe]">{children}</span>          // variable / property
const Op = ({ children }: { children: React.ReactNode }) => <span className="text-[#d4d4d4]">{children}</span>          // plain / operator

/* ─── Code lines (rendered as JSX with indentation) ────────────────────── */
function CodeBody() {
  const lines = [
    <><Cm>{'// data platforms + ML systems that ship — and stay shipped'}</Cm></>,
    <><Cm>{'// nine years across pharma · hospitality · research · LLM apps'}</Cm></>,
    null,
    <><Kw>import</Kw>{' '}<Op>{'{ Idea, Production }'}</Op>{' '}<Kw>from</Kw>{' '}<St>{`'@core/types'`}</St><Op>{';'}</Op></>,
    <><Kw>import</Kw>{' '}<Op>{'{ build, ship }'}</Op>{'      '}<Kw>from</Kw>{' '}<St>{`'@core/pipeline'`}</St><Op>{';'}</Op></>,
    null,
    <><Kw>const</Kw>{' '}<Va>me</Va>{' '}<Op>=</Op>{' '}<Op>{'{'}</Op></>,
    <><span className="pl-6"><Va>name</Va><Op>:</Op>{'       '}<St>{`'Rodrigo Coloma'`}</St><Op>,</Op></span></>,
    <><span className="pl-6"><Va>role</Va><Op>:</Op>{'       '}<St>{`'AI Engineer · Builder'`}</St><Op>,</Op></span></>,
    <><span className="pl-6"><Va>location</Va><Op>:</Op>{'   '}<St>{`'Madrid, ES'`}</St><Op>,</Op></span></>,
    <><span className="pl-6"><Va>experience</Va><Op>:</Op>{' '}<Nm>9</Nm><Op>,</Op>{'  '}<Cm>{'// years shipping data + ML'}</Cm></span></>,
    <><Op>{'}'}</Op>{' '}<Kw>as</Kw>{' '}<Ty>Developer</Ty><Op>;</Op></>,
    null,
    <><Kw>const</Kw>{' '}<Va>stack</Va>{' '}<Op>=</Op>{' '}<Op>{'{'}</Op></>,
    <><span className="pl-6"><Va>llm</Va><Op>:</Op>{'   ['}<St>{`'claude-4.6'`}</St><Op>, </Op><St>{`'anthropic-sdk'`}</St><Op>{'],'}</Op></span></>,
    <><span className="pl-6"><Va>web</Va><Op>:</Op>{'   ['}<St>{`'next.js'`}</St><Op>, </Op><St>{`'react'`}</St><Op>, </Op><St>{`'typescript'`}</St><Op>{'],'}</Op></span></>,
    <><span className="pl-6"><Va>data</Va><Op>:</Op>{'  ['}<St>{`'python'`}</St><Op>, </Op><St>{`'databricks'`}</St><Op>, </Op><St>{`'azure'`}</St><Op>{'],'}</Op></span></>,
    <><span className="pl-6"><Va>ml</Va><Op>:</Op>{'    ['}<St>{`'pytorch'`}</St><Op>, </Op><St>{`'xgboost'`}</St><Op>, </Op><St>{`'mlflow'`}</St><Op>{'],'}</Op></span></>,
    <><Op>{'};'}</Op></>,
    null,
    <><Kw>const</Kw>{' '}<Va>projects</Va>{' '}<Op>=</Op>{' '}<Op>{'['}</Op></>,
    <><span className="pl-6"><Op>{'{ '}</Op><Va>name</Va><Op>: </Op><St>{`'CVMACHINE'`}</St><Op>,   </Op><Va>kind</Va><Op>: </Op><St>{`'AI CV optimizer'`}</St><Op>{' },'}</Op></span></>,
    <><span className="pl-6"><Op>{'{ '}</Op><Va>name</Va><Op>: </Op><St>{`'LinkedinMgr'`}</St><Op>, </Op><Va>kind</Va><Op>: </Op><St>{`'AI content engine'`}</St><Op>{' },'}</Op></span></>,
    <><span className="pl-6"><Op>{'{ '}</Op><Va>name</Va><Op>: </Op><St>{`'rcoloma.dev'`}</St><Op>, </Op><Va>kind</Va><Op>: </Op><St>{`'this site'`}</St><Op>{'         },'}</Op></span></>,
    <><Op>{'];'}</Op></>,
    null,
    <><Kw>function</Kw>{' '}<Fn>ship</Fn><Op>{'('}</Op><Va>idea</Va><Op>: </Op><Ty>Idea</Ty><Op>{'): '}</Op><Ty>Production</Ty>{' '}<Op>{'{'}</Op></>,
    <><span className="pl-6"><Kw>return</Kw>{' '}<Fn>build</Fn><Op>{'('}</Op><Va>idea</Va><Op>{').'}</Op><Fn>iterate</Fn><Op>{'().'}</Op><Fn>deploy</Fn><Op>{'();'}</Op></span></>,
    <><Op>{'}'}</Op></>,
  ]

  return (
    <>
      {lines.map((line, i) => (
        <div
          key={i}
          className="hover:bg-[#2a2d2e]/40 transition-colors min-h-[1.7em] px-3"
        >
          {line ?? ' '}
        </div>
      ))}
    </>
  )
}

/* ─── File tabs ────────────────────────────────────────────────────────── */
const TABS = [
  { name: 'profile.ts',      icon: 'TS', iconBg: '#3178c6', iconFg: '#ffffff' },
  { name: 'case-studies.ts', icon: 'TS', iconBg: '#3178c6', iconFg: '#ffffff' },
  { name: 'projects.json',   icon: '{}', iconBg: '#cbcb41', iconFg: '#000000' },
  { name: 'README.md',       icon: 'md', iconBg: '#519aba', iconFg: '#ffffff' },
]

export default function VibeSide({
  collapsed   = false,
  orientation = 'vertical',
}: {
  collapsed?:   boolean
  orientation?: 'vertical' | 'horizontal'
}) {
  const [activeTab, setActiveTab] = useState(0)

  // ── Collapsed: horizontal bar mode (mobile bottom bar) ──────────
  if (collapsed && orientation === 'horizontal') {
    return (
      <div className="h-full bg-[#1e1e1e] relative overflow-hidden flex items-center justify-between px-5 select-none">
        {/* Top turquoise accent stripe */}
        <div className="absolute top-0 inset-x-3 h-px bg-[#14B8A6]/70" />

        <div className="flex items-center gap-3">
          <span className="font-mono text-[#14B8A6] text-base">{'</>'}</span>
          <div className="flex items-center gap-1.5">
            {TABS.map(t => (
              <span
                key={t.name}
                className="text-[8px] font-bold w-5 h-5 rounded-sm flex items-center justify-center"
                style={{ background: t.iconBg, color: t.iconFg }}
              >
                {t.icon}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.3em]">
          <span className="text-[#dcdcaa]/80">DEVELOPER · TAP</span>
          <span className="text-[#14B8A6] text-sm">↑</span>
        </div>
      </div>
    )
  }

  // ── Collapsed: vertical sidebar mode (desktop right edge) ───────
  if (collapsed) {
    return (
      <div className="h-full bg-[#1e1e1e] relative overflow-hidden flex flex-col items-center pt-5 pb-4 select-none">
        {/* Top turquoise accent stripe */}
        <div className="absolute top-0 inset-x-2 h-px bg-[#14B8A6]/70" />

        {/* Code icon */}
        <div className="font-mono text-[#14B8A6] text-base mb-6">{'</>'}</div>

        {/* Stacked tab icons (vertical activity bar style) */}
        <div className="flex flex-col items-center gap-2.5 mb-8">
          {TABS.map(t => (
            <span
              key={t.name}
              className="text-[8px] font-bold w-5 h-5 rounded-sm flex items-center justify-center"
              style={{ background: t.iconBg, color: t.iconFg }}
              title={t.name}
            >
              {t.icon}
            </span>
          ))}
        </div>

        {/* Vertical "DEVELOPER" label */}
        <div
          className="font-mono text-[10px] tracking-[0.4em] text-[#dcdcaa]/80 mt-auto mb-4"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          DEVELOPER · HOVER
        </div>

        {/* Bottom expand arrow */}
        <div className="font-mono text-[#14B8A6] text-xs">←</div>
      </div>
    )
  }

  // ── Expanded full IDE mode ──────────────────────────────────────
  return (
    <div
      className="h-full bg-[#1e1e1e] relative overflow-hidden font-mono flex flex-col"
      style={{
        opacity: 1,
        transform: 'scale(1)',
        transition: 'opacity 600ms ease, transform 600ms ease',
        transformOrigin: 'top right',
      }}
    >

      {/* ── Tab bar ─────────────────────────────────────────────── */}
      <div className="flex items-end bg-[#252526] flex-shrink-0">
        {TABS.map((tab, i) => {
          const active = i === activeTab
          return (
            <button
              key={tab.name}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2 px-4 py-2 text-[12px] border-r border-[#1e1e1e] transition-colors ${
                active
                  ? 'bg-[#1e1e1e] text-[#ffffff] border-t border-t-[#0e639c]'
                  : 'text-[#969696] hover:text-[#cccccc]'
              }`}
            >
              <span
                className="text-[9px] font-bold w-4 h-4 rounded-sm flex items-center justify-center"
                style={{ background: tab.iconBg, color: tab.iconFg }}
              >
                {tab.icon}
              </span>
              {tab.name}
              {active && <span className="text-[#cccccc] text-[8px]">●</span>}
            </button>
          )
        })}
      </div>

      {/* ── Body ────────────────────────────────────────────────── */}
      <div className="flex-1 flex overflow-hidden">

        {/* Line numbers gutter */}
        <div className="flex-shrink-0 py-4 pl-4 pr-3 text-right text-[#858585] text-[12px] leading-[1.7] select-none font-mono tabular-nums">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>

        {/* Code area */}
        <div className="flex-1 py-4 text-[12px] leading-[1.7] overflow-hidden whitespace-pre">
          {activeTab === 0 && <CodeBody />}
          {activeTab === 1 && <CaseStudiesTS />}
          {activeTab === 2 && <ProjectsJSON />}
          {activeTab === 3 && <ReadmeMD />}
        </div>
      </div>

      {/* ── Status bar ──────────────────────────────────────────── */}
      <div className="flex-shrink-0 flex items-center justify-between bg-[#007acc] text-white text-[11px] px-3 py-1 font-sans">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">⎇ main</span>
          <span>↑ 0 ↓ 0</span>
          <span className="flex items-center gap-1">⊘ 0 ⚠ 0</span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Rodrigo-Coloma"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-white/15 px-1.5 py-0.5 rounded-sm transition-colors"
          >
            → github
          </a>
          <a
            href="/cvmachine"
            className="hover:bg-white/15 px-1.5 py-0.5 rounded-sm transition-colors"
          >
            → cvmachine
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-white/15 px-1.5 py-0.5 rounded-sm transition-colors"
          >
            → resume.pdf
          </a>
          <span className="opacity-80">TypeScript</span>
          <span className="opacity-80">UTF-8</span>
          <span className="opacity-80">LF</span>
          <span className="opacity-80">Ln 28, Col 1</span>
        </div>
      </div>
    </div>
  )
}

/* ─── Alt tabs content ─────────────────────────────────────────────────── */
function CaseStudiesTS() {
  // Each row links to its anchor in the SelectedWork section below the hero.
  const studies: { name: string; impact: string; anchor: string }[] = [
    { name: 'CVMACHINE',         impact: 'live · full-stack · auth + AI parsing',     anchor: '#cvmachine'      },
    { name: 'Forecasting',       impact: '+5% accuracy · XGBoost ensemble',           anchor: '#forecasting'    },
    { name: 'Azure Platform',    impact: '2 LLM apps in prod · 4 BI products',        anchor: '#azure-platform' },
    { name: 'Macrogen Stack',    impact: 'green-field · DW + ETL + reporting',        anchor: '#macrogen'       },
  ]
  return (
    <>
      <div className="px-3"><Cm>{'// scroll below the hero for the full write-ups'}</Cm></div>
      <div className="px-3"><Cm>{'// each row jumps to a Problem / Solution / Impact / Stack card'}</Cm></div>
      <div className="px-3">&nbsp;</div>
      <div className="px-3">
        <Kw>export const</Kw>{' '}<Va>caseStudies</Va>{' '}<Op>=</Op>{' '}<Op>{'['}</Op>
      </div>
      {studies.map(s => (
        <a
          key={s.anchor}
          href={s.anchor}
          className="block px-3 pl-6 hover:bg-[#094771]/40 transition-colors group"
        >
          <Op>{'{ '}</Op>
          <Va>name</Va><Op>: </Op><St>{`'${s.name}'`}</St><Op>, </Op>
          <Va>impact</Va><Op>: </Op><St>{`'${s.impact}'`}</St>
          <Op>{' },'}</Op>
          <span className="text-[#3794ff] opacity-0 group-hover:opacity-100 transition-opacity">  {' '}{s.anchor}</span>
        </a>
      ))}
      <div className="px-3"><Op>{'];'}</Op></div>
    </>
  )
}

function ProjectsJSON() {
  return (
    <>
      <div className="px-3"><Op>{'['}</Op></div>
      <div className="px-3 pl-6">
        <Op>{'{ '}</Op><Va>&quot;name&quot;</Va><Op>: </Op><St>&quot;CVMACHINE&quot;</St><Op>, </Op>
        <Va>&quot;type&quot;</Va><Op>: </Op><St>&quot;AI CV optimizer&quot;</St><Op>, </Op>
        <Va>&quot;url&quot;</Va><Op>: </Op><St>&quot;/cvmachine&quot;</St><Op>{' },'}</Op>
      </div>
      <div className="px-3 pl-6">
        <Op>{'{ '}</Op><Va>&quot;name&quot;</Va><Op>: </Op><St>&quot;LinkedinMgr&quot;</St><Op>, </Op>
        <Va>&quot;type&quot;</Va><Op>: </Op><St>&quot;AI LinkedIn engine&quot;</St><Op>{' },'}</Op>
      </div>
      <div className="px-3 pl-6">
        <Op>{'{ '}</Op><Va>&quot;name&quot;</Va><Op>: </Op><St>&quot;rcoloma.dev&quot;</St><Op>, </Op>
        <Va>&quot;type&quot;</Va><Op>: </Op><St>&quot;portfolio&quot;</St><Op>, </Op>
        <Va>&quot;current&quot;</Va><Op>: </Op><Kw>true</Kw><Op>{' }'}</Op>
      </div>
      <div className="px-3"><Op>{']'}</Op></div>
    </>
  )
}

function ReadmeMD() {
  const Md  = ({ children }: { children: React.ReactNode }) => <span className="text-[#d4d4d4]">{children}</span>
  const H   = ({ children }: { children: React.ReactNode }) => <span className="text-[#569cd6] font-semibold">{children}</span>
  const Lk  = ({ children }: { children: React.ReactNode }) => <span className="text-[#3794ff] underline">{children}</span>
  return (
    <>
      <div className="px-3"><H># rcoloma.dev</H></div>
      <div className="px-3"><Md>&nbsp;</Md></div>
      <div className="px-3"><Md>Portfolio of Rodrigo Coloma — data engineer,</Md></div>
      <div className="px-3"><Md>ML practitioner, AI builder. Madrid, ES.</Md></div>
      <div className="px-3"><Md>&nbsp;</Md></div>
      <div className="px-3"><H>## Stack</H></div>
      <div className="px-3"><Md>- TypeScript · Next.js · Tailwind</Md></div>
      <div className="px-3"><Md>- Claude API · Anthropic SDK</Md></div>
      <div className="px-3"><Md>- Python · Databricks · Azure</Md></div>
      <div className="px-3"><Md>&nbsp;</Md></div>
      <div className="px-3"><H>## Links</H></div>
      <div className="px-3"><Md>- <Lk>github.com/Rodrigo-Coloma</Lk></Md></div>
      <div className="px-3"><Md>- <Lk>linkedin.com/in/rcoloma</Lk></Md></div>
      <div className="px-3"><Md>- <Lk>rcoloma.dev/cvmachine</Lk></Md></div>
    </>
  )
}
