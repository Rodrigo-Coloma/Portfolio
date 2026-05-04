import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'Menlo', 'monospace'],
      },
      colors: {
        paper: {
          DEFAULT: '#FCFAF3',  // main bg
          soft:    '#F6F0E1',  // alternate section
          card:    '#FFFDF7',  // card surface
        },
        ink: {
          stamp:   '#574726',  // stamp / label sepia
        },
        accent: {
          DEFAULT: '#0D9488',  // teal-600 — primary accent
          soft:    '#5EEAD4',  // teal-300 — for dark surfaces
          deep:    '#0F766E',  // teal-700 — hover / pressed
        },
      },
      animation: {
        'blink': 'blink 1.1s step-end infinite',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-up': 'slideUp 0.5s ease forwards',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
