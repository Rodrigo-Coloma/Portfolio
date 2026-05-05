import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { JetBrains_Mono } from 'next/font/google'
import { Homemade_Apple } from 'next/font/google'
import Navbar from '@/components/Navbar'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const homemadeApple = Homemade_Apple({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-signature',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://rcoloma.dev'),
  title: {
    default: 'Rodrigo Coloma Gutiérrez — Data Engineer · ML Practitioner · AI Builder',
    template: '%s — Rodrigo Coloma Gutiérrez',
  },
  description:
    'Rodrigo Coloma Gutiérrez — Data Engineer, Senior Data Scientist, and AI builder based in Madrid. Nine years shipping data platforms, ML systems, and LLM applications across pharma, hospitality, and clinical research.',
  keywords: [
    'Rodrigo Coloma',
    'Rodrigo Coloma Gutiérrez',
    'Rodrigo Coloma Gutierrez',
    'rcoloma',
    'rcoloma.dev',
    'Data Engineer Madrid',
    'Senior Data Scientist',
    'ML Engineer',
    'AI Engineer',
    'LLM Applications',
    'Databricks',
    'Azure',
    'Python',
    'Anthropic Claude',
  ],
  authors: [{ name: 'Rodrigo Coloma Gutiérrez', url: 'https://rcoloma.dev' }],
  creator: 'Rodrigo Coloma Gutiérrez',
  publisher: 'Rodrigo Coloma Gutiérrez',
  alternates: {
    canonical: 'https://rcoloma.dev',
  },
  openGraph: {
    title: 'Rodrigo Coloma Gutiérrez — Data Engineer · ML Practitioner · AI Builder',
    description:
      'Portfolio of Rodrigo Coloma Gutiérrez — data platforms, ML systems, and LLM applications. Madrid, Spain.',
    url: 'https://rcoloma.dev',
    siteName: 'rcoloma.dev',
    type: 'profile',
    locale: 'en_US',
    alternateLocale: ['es_ES'],
  },
  twitter: {
    card: 'summary',
    title: 'Rodrigo Coloma Gutiérrez — rcoloma.dev',
    description: 'Data Engineer · ML Practitioner · AI Builder · Madrid',
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
  jobTitle: 'Data Team Lead · Senior Data Scientist · AI Engineer',
  worksFor: { '@type': 'Organization', name: 'Grupo Ilunion' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Madrid',
    addressCountry: 'ES',
  },
  knowsAbout: [
    'Data Engineering',
    'Machine Learning',
    'LLM Applications',
    'Databricks',
    'Azure',
    'Python',
    'Anthropic Claude',
    'Power BI',
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${homemadeApple.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-paper text-stone-900">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
