import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import CONFIG from './_config'
import './globals.css'

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
      <body className={`${inter.className} ${CONFIG.css.bg.secondary}`}>
        <div className={ bg.light }>
          test
        </div>
        <div className='bg-zinc-100'>
          test
        </div>
        
        {/* Content goes here */}
        {children}

      </body>
    </html>
  )
}