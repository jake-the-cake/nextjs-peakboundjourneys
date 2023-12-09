import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import CONFIG from './_config'
import './globals.css'
import './quiggle.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Peak Bound Journeys',
  description: 'The landing page for Peak Bound Journeys',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const { bg } = CONFIG.css

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        
        {/* Content goes here */}
        {children}

      </body>
    </html>
  )
}