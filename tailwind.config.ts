import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono:  ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      colors: {
        // Source / Preview palette — warm paper, ink, amber accent
        paper: {
          DEFAULT: '#f4f1ea',  // source pane
          preview: '#faf8f3',  // preview pane
          chrome:  '#ebe7de',  // tab bar / status bar
        },
        rule: {
          DEFAULT: '#d9d3c6',  // chrome borders
          soft:    '#e6e1d6',  // section dividers
        },
        ink: {
          DEFAULT: '#2a2723',  // headings
          body:    '#4d4840',  // body copy / source text
          muted:   '#6b665c',  // chrome text
          faint:   '#8a8478',  // meta, code fences
          gutter:  '#b3ad9f',  // line numbers
        },
        accent: {
          DEFAULT: '#b45309',  // amber-700
          deep:    '#92400e',  // amber-800 — hover
        },
      },
    },
  },
  plugins: [],
}

export default config
