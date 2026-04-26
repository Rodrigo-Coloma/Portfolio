'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 inset-x-0 z-50 h-12 bg-black/75 backdrop-blur-md border-b border-white/[0.06]">
      <div className="h-full flex items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <Link
          href="/"
          className="font-mono text-sm text-slate-500 hover:text-white transition-colors duration-200"
        >
          rcoloma.dev
        </Link>

        {/* Links */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-[11px] uppercase tracking-[0.18em] text-slate-500 hover:text-white transition-colors duration-200"
          >
            Homepage
          </Link>

          {/* Portfolio dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-slate-500 hover:text-white transition-colors duration-200"
              aria-expanded={open}
            >
              Portfolio
              <svg
                className={`w-2.5 h-2.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown */}
            <div
              className={`absolute right-0 top-full mt-2 w-48 bg-[#0e0e0e] border border-white/10
                          rounded-[3px] overflow-hidden shadow-xl transition-all duration-200
                          ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'}`}
            >
              <a
                href="/cvmachine"
                className="flex items-center justify-between px-4 py-3 group"
              >
                <span className="text-xs text-slate-300 group-hover:text-white transition-colors">
                  CVMACHINE
                </span>
                <span className="text-[10px] text-slate-600 group-hover:text-slate-400 transition-colors">
                  AI CV builder ↗
                </span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </nav>
  )
}
