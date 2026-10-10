'use client'

import { createContext, useContext, useMemo, useState } from 'react'
import type { Domain, Layer, View } from '@/lib/site'
import { PROJECTS, type Project } from '@/lib/projects'

/** Domain → categorical slot. Colour follows the entity in every visual. */
export const DOMAIN_COLOR: Record<Domain, string> = {
  'Grupo Ilunion': 'var(--s1)',
  'Hotels':        'var(--s2)',
  'Life sciences': 'var(--s3)',
  'Side projects': 'var(--s4)',
}
export const NEUTRAL = '#46524f'

/** Colour of each domain view (education uses the neutral the timeline gives it). */
export const VIEW_COLOR: Record<View, string> = {
  'Grupo Ilunion': DOMAIN_COLOR['Grupo Ilunion'],
  'Hotels':        DOMAIN_COLOR['Hotels'],
  'Life sciences': DOMAIN_COLOR['Life sciences'],
  'Education':     '#7d8a87',
}

type Filters = {
  /** Domain view driving the job card, KPIs and radar. */
  view:     View
  setView:  (v: View) => void
  layer:    Layer | null
  setLayer: (l: Layer | null) => void
  /** Projects that pass the current filter. */
  projects: Project[]
}

const Ctx = createContext<Filters | null>(null)

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [layer, setLayer] = useState<Layer | null>(null)
  const [view, setView] = useState<View>('Grupo Ilunion')

  const value = useMemo<Filters>(() => ({
    view,
    setView,
    layer,
    setLayer,
    projects: PROJECTS.filter(p => !layer || p.layers.includes(layer)),
  }), [layer, view])

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useFilters() {
  const v = useContext(Ctx)
  if (!v) throw new Error('useFilters outside FilterProvider')
  return v
}
