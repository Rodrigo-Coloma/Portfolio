'use client'

import { createContext, useContext, useMemo, useState } from 'react'
import type { Domain, Layer } from '@/lib/site'
import { PROJECTS, type Project } from '@/lib/projects'

/** Domain → categorical slot. Colour follows the entity in every visual. */
export const DOMAIN_COLOR: Record<Domain, string> = {
  'Grupo Ilunion': 'var(--s1)',
  'Hotels':        'var(--s2)',
  'Life sciences': 'var(--s3)',
  'Side projects': 'var(--s4)',
}
export const NEUTRAL = '#46524f'

type Filters = {
  layer:    Layer | null
  setLayer: (l: Layer | null) => void
  /** Projects that pass the current filter. */
  projects: Project[]
}

const Ctx = createContext<Filters | null>(null)

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [layer, setLayer] = useState<Layer | null>(null)

  const value = useMemo<Filters>(() => ({
    layer,
    setLayer,
    projects: PROJECTS.filter(p => !layer || p.layers.includes(layer)),
  }), [layer])

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useFilters() {
  const v = useContext(Ctx)
  if (!v) throw new Error('useFilters outside FilterProvider')
  return v
}
