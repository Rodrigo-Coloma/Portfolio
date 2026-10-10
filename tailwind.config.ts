import type { Config } from 'tailwindcss'

const v = (name: string) => `var(--${name})`
/** Channel-based token so opacity modifiers (bg-accent/10) work. */
const a = (name: string) => `rgb(var(--${name}-rgb) / <alpha-value>)`

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        plane:    a('plane'),
        surface:  { DEFAULT: a('surface'), 2: a('surface-2') },
        hairline: a('hairline'),
        grid:     v('grid'),
        axis:     v('axis'),
        ink:      { DEFAULT: v('ink'), 2: v('ink-2'), muted: v('muted') },
        accent:   { DEFAULT: a('accent'), dim: v('accent-dim') },
        s1: v('s1'), s2: v('s2'), s3: v('s3'), s4: v('s4'), s5: v('s5'),
      },
    },
  },
  plugins: [],
}

export default config
