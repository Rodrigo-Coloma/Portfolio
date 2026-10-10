import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const sans = Geist({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const mono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })

export const viewport: Viewport = { themeColor: '#0a0f0e', colorScheme: 'dark' }

export const metadata: Metadata = {
  metadataBase: new URL('https://rcoloma.dev'),
  title: {
    default: 'Rodrigo Coloma Gutiérrez — Data Team Lead · Internal data product development',
    template: '%s — Rodrigo Coloma Gutiérrez',
  },
  description:
    'Rodrigo Coloma Gutiérrez — leads the internal data product development team at Grupo Ilunion, Madrid. Governance and a coherent stack from Azure and Databricks to the semantic layer, Power BI and LLM agents; validated clinical reporting under GxP.',
  keywords: [
    'Rodrigo Coloma', 'Rodrigo Coloma Gutiérrez', 'Rodrigo Coloma Gutierrez', 'rcoloma', 'rcoloma.dev',
    'Data Team Lead Madrid', 'Data governance', 'Power BI', 'DAX', 'TMDL', 'Semantic model',
    'Databricks', 'Azure Data Factory', 'Clinical data', 'GxP', 'LLM Applications',
  ],
  authors: [{ name: 'Rodrigo Coloma Gutiérrez', url: 'https://rcoloma.dev' }],
  creator: 'Rodrigo Coloma Gutiérrez',
  alternates: { canonical: 'https://rcoloma.dev' },
  openGraph: {
    title: 'Rodrigo Coloma Gutiérrez — Data Team Lead · Madrid',
    description:
      'Data leadership as a dashboard: governance, platform and technical coherence across Azure, Databricks, Power BI and LLM agents.',
    url: 'https://rcoloma.dev',
    siteName: 'rcoloma.dev',
    type: 'profile',
    locale: 'en_US',
    alternateLocale: ['es_ES'],
    images: [{ url: '/rodrigo.jpg', width: 432, height: 432, alt: 'Rodrigo Coloma Gutiérrez' }],
  },
  twitter: {
    card: 'summary',
    title: 'Rodrigo Coloma Gutiérrez — rcoloma.dev',
    description: 'Data Team Lead · Internal data product development · Madrid',
    images: ['/rodrigo.jpg'],
  },
  robots: { index: true, follow: true },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rodrigo Coloma Gutiérrez',
  alternateName: ['Rodrigo Coloma', 'Rodrigo Coloma Gutierrez', 'rcoloma'],
  url: 'https://rcoloma.dev',
  image: 'https://rcoloma.dev/rodrigo.jpg',
  email: 'mailto:rjcolgut@gmail.com',
  jobTitle: 'Data Team Lead, Internal Data Product Development',
  worksFor: { '@type': 'Organization', name: 'Grupo Ilunion' },
  address: { '@type': 'PostalAddress', addressLocality: 'Madrid', addressCountry: 'ES' },
  knowsAbout: ['Data governance', 'Semantic modeling', 'Power BI', 'DAX', 'Databricks', 'Azure', 'Clinical data', 'Machine Learning', 'LLM Applications'],
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Complutense University of Madrid' },
    { '@type': 'EducationalOrganization', name: 'Ironhack' },
  ],
  sameAs: ['https://www.linkedin.com/in/rcoloma', 'https://github.com/Rodrigo-Coloma'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </head>
      <body className="font-sans bg-plane text-ink">{children}</body>
    </html>
  )
}
