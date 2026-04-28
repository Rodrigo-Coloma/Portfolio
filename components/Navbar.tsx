'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 inset-x-0 z-50 h-12 bg-[#1e1e1e] border-b border-[#2d2d2d]">
      <div className="h-full flex items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <Link
          href="/"
          className="font-mono text-sm text-[#9d9d9d] hover:text-white transition-colors duration-200"
        >
          rcoloma.dev
        </Link>

        {/* Links */}
        <div className="flex items-center gap-5 sm:gap-8">
          <Link
            href="/"
            className="hidden sm:inline-block text-[11px] uppercase tracking-[0.18em] text-[#9d9d9d] hover:text-white transition-colors duration-200"
          >
            Homepage
          </Link>

          <Link
            href="/contact"
            className="text-[11px] uppercase tracking-[0.18em] text-[#9d9d9d] hover:text-white transition-colors duration-200"
          >
            Contact
          </Link>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block text-[11px] uppercase tracking-[0.18em] text-[#9d9d9d] hover:text-white transition-colors duration-200"
          >
            Resume ↓
          </a>

          {/* Portfolio dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-[#9d9d9d] hover:text-white transition-colors duration-200"
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

            {/* Dropdown wrapper — pt-1 keeps hover hit-area continuous with the button */}
            <div
              className={`absolute right-0 top-full pt-1 w-48 transition-all duration-200
                          ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'}`}
            >
              <div className="bg-[#252526] border border-[#454545] rounded-[3px] overflow-hidden shadow-xl">
                <a
                  href="/cvmachine"
                  className="flex items-center justify-between px-4 py-3 group hover:bg-[#094771]"
                >
                  <span className="text-xs text-[#cccccc] group-hover:text-white transition-colors">
                    CVMACHINE
                  </span>
                  <span className="text-[10px] text-[#858585] group-hover:text-[#cccccc] transition-colors">
                    AI CV builder ↗
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </nav>
  )
}
