import type { MetadataRoute } from 'next'

const BASE = 'https://rcoloma.dev'
const NOW = new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`,        lastModified: NOW, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE}/contact`, lastModified: NOW, changeFrequency: 'yearly',  priority: 0.7 },
  ]
}
