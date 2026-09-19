import type { Metadata } from 'next'
import { JetBrains_Mono, Fraunces } from 'next/font/google'
import './globals.css'

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

const serif = Fraunces({
  subsets: ['latin'],
  weight: 'variable',
  style: ['normal', 'italic'],
  axes: ['opsz'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://rcoloma.dev'),
  title: {
    default: 'Rodrigo Coloma Gutiérrez — Data Team Lead · Semantic models people trust',
    template: '%s — Rodrigo Coloma Gutiérrez',
  },
  description:
    'Rodrigo Coloma Gutiérrez — Data Team Lead in Madrid. Semantic layers, Power BI and DAX, Databricks and Azure data engineering, GxP clinical reporting, and LLM applications on top of governed data.',
  keywords: [
    'Rodrigo Coloma',
    'Rodrigo Coloma Gutiérrez',
    'Rodrigo Coloma Gutierrez',
    'rcoloma',
    'rcoloma.dev',
    'Data Team Lead Madrid',
    'Power BI',
    'DAX',
    'TMDL',
    'Semantic model',
    'Databricks',
    'Azure Data Factory',
    'Clinical data',
    'GxP',
    'LLM Applications',
    'Anthropic Claude',
  ],
  authors: [{ name: 'Rodrigo Coloma Gutiérrez', url: 'https://rcoloma.dev' }],
  creator: 'Rodrigo Coloma Gutiérrez',
  publisher: 'Rodrigo Coloma Gutiérrez',
  alternates: { canonical: 'https://rcoloma.dev' },
  openGraph: {
    title: 'Rodrigo Coloma Gutiérrez — Data Team Lead · Madrid',
    description:
      'Semantic models, Power BI governance, Databricks and Azure, GxP clinical reporting, LLM applications. Portfolio of Rodrigo Coloma Gutiérrez.',
    url: 'https://rcoloma.dev',
    siteName: 'rcoloma.dev',
    type: 'profile',
    locale: 'en_US',
    alternateLocale: ['es_ES'],
  },
  twitter: {
    card: 'summary',
    title: 'Rodrigo Coloma Gutiérrez — rcoloma.dev',
    description: 'Data Team Lead · Semantic models people trust · Madrid',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rodrigo Coloma Gutiérrez',
  alternateName: ['Rodrigo Coloma', 'Rodrigo Coloma Gutierrez', 'rcoloma'],
  givenName: 'Rodrigo',
  familyName: 'Coloma Gutiérrez',
  url: 'https://rcoloma.dev',
  email: 'mailto:rjcolgut@gmail.com',
  jobTitle: 'Data Team Lead',
  worksFor: { '@type': 'Organization', name: 'Grupo Ilunion' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Madrid',
    addressCountry: 'ES',
  },
  knowsAbout: [
    'Semantic modeling',
    'Power BI',
    'DAX',
    'Data Engineering',
    'Databricks',
    'Azure',
    'Clinical data',
    'Machine Learning',
    'LLM Applications',
    'Python',
  ],
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Complutense University of Madrid' },
    { '@type': 'EducationalOrganization', name: 'Ironhack' },
  ],
  sameAs: [
    'https://www.linkedin.com/in/rcoloma',
    'https://github.com/Rodrigo-Coloma',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${mono.variable} ${serif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="font-mono antialiased bg-paper text-ink">
        {children}
      </body>
    </html>
  )
}
