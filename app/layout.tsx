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
  title: 'Rodrigo Coloma — Data Engineer · ML Practitioner · Builder',
  description:
    'Portfolio of Rodrigo Coloma: Data Engineer, Senior Data Scientist, and AI builder based in Madrid. Nine years shipping data systems, ML models, and LLM applications.',
  keywords: ['Data Engineer', 'ML Practitioner', 'AI Developer', 'Databricks', 'Azure', 'Python', 'LLM'],
  authors: [{ name: 'Rodrigo Coloma', url: 'https://rcoloma.dev' }],
  openGraph: {
    title: 'Rodrigo Coloma',
    description: 'Data Engineer · ML Practitioner · Builder',
    url: 'https://rcoloma.dev',
    siteName: 'rcoloma.dev',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Rodrigo Coloma — rcoloma.dev',
    description: 'Data Engineer · ML Practitioner · Builder',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${homemadeApple.variable}`}>
      <body className="font-sans antialiased bg-black">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
