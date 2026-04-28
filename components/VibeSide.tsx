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
    <><Cm>{'// rodrigo coloma — ai builder · vibe coder'}</Cm></>,
    <><Cm>{'// madrid · open to remote EU'}</Cm></>,
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
  { name: 'profile.ts',    icon: 'TS', iconBg: '#3178c6', iconFg: '#ffffff' },
  { name: 'projects.json', icon: '{}', iconBg: '#cbcb41', iconFg: '#000000' },
  { name: 'README.md',     icon: 'md', iconBg: '#519aba', iconFg: '#ffffff' },
]

export default function VibeSide({ shrunk }: { shrunk: boolean }) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div
      className="h-full bg-[#1e1e1e] relative overflow-hidden font-mono flex flex-col"
      style={{
        opacity:    shrunk ? 0.4 : 1,
        transform:  shrunk ? 'scale(0.97)' : 'scale(1)',
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
          {activeTab === 1 && <ProjectsJSON />}
          {activeTab === 2 && <ReadmeMD />}
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
