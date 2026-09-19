import { PROFILE, PRINCIPLES, EXPERIENCE, STACK, CONTACT_BLURB } from '@/lib/site'
import { PROJECTS } from '@/lib/projects'

/**
 * The Markdown "source" of the page, generated from the same data the
 * preview renders. Each line carries a kind so the source pane can colour
 * it like an editor would, and headings carry the anchor of the section
 * they open so clicking them scrolls the preview.
 */
export type SourceLine = {
  n:       number
  text:    string
  kind:    'fence' | 'heading' | 'code' | 'text' | 'blank'
  anchor?: string
}

const WIDTH = 46

/** Greedy word wrap to the source pane's column width. */
function wrap(text: string, width = WIDTH, indent = ''): string[] {
  const words = text.split(' ')
  const out: string[] = []
  let line = ''
  for (const w of words) {
    const next = line ? `${line} ${w}` : w
    if (next.length > width && line) {
      out.push(line)
      line = indent + w
    } else {
      line = next
    }
  }
  if (line) out.push(line)
  return out
}

function tick(items: string[]) {
  return wrap(items.map(i => `\`${i}\``).join(' '), WIDTH)
}

export function buildSource(): SourceLine[] {
  const raw: Omit<SourceLine, 'n'>[] = []
  const blank = () => raw.push({ text: ' ', kind: 'blank' })
  const text  = (s: string, indent = '') => wrap(s, WIDTH, indent).forEach(t => raw.push({ text: t, kind: 'text' }))
  const code  = (items: string[]) => tick(items).forEach(t => raw.push({ text: t, kind: 'code' }))
  const h     = (s: string, anchor: string) => raw.push({ text: s, kind: 'heading', anchor })

  // front matter
  raw.push({ text: '---', kind: 'fence' })
  text(`title: ${PROFILE.name}`)
  text(`role: ${PROFILE.role}`)
  text(`location: ${PROFILE.location}`)
  raw.push({ text: '---', kind: 'fence' })
  blank()

  h(`# ${PROFILE.headline}`, '#top')
  blank()
  text(PROFILE.intro)
  blank()
  text('[Projects](#projects) · [How I work](#work)')
  blank(); blank()

  h('## How I work', '#work')
  blank()
  for (const p of PRINCIPLES) {
    text(`- **${p.title}** — ${p.source.join(' ')}`, '  ')
  }
  blank(); blank()

  h('## Selected projects', '#projects')
  blank()
  for (const p of PROJECTS) {
    h(`### ${p.title}`, `#${p.slug}`)
    code(p.tags)
    text(p.summary)
    blank()
  }
  blank()

  h('## Stack', '#stack')
  blank()
  for (const g of STACK) {
    const label = `${g.key}:`.padEnd(13)
    g.items.forEach((item, i) => {
      raw.push({ text: (i === 0 ? label : ' '.repeat(13)) + item, kind: 'text' })
    })
  }
  blank()
  const orgW = Math.max(...EXPERIENCE.map(j => j.org.length))
  const yrW  = Math.max(...EXPERIENCE.map(j => j.years.length))
  for (const j of EXPERIENCE) {
    raw.push({ text: `| ${j.org.padEnd(orgW)} | ${j.years.padEnd(yrW)} | ${j.role}`, kind: 'text' })
  }
  blank(); blank()

  h("## Let's talk", '#contact')
  blank()
  text(CONTACT_BLURB)
  blank()
  text(`[${PROFILE.email}](mailto:${PROFILE.email})`)
  text('[LinkedIn](linkedin) · [GitHub](github)')

  return raw.map((l, i) => ({ ...l, n: i + 1 }))
}
