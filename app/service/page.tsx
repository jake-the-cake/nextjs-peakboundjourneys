import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import CONFIG from '../_config'
import '../globals.css'
import '../quiggle.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PBJ Service Co',
  description: 'My service company!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const { bg } = CONFIG.css

  return (
		<div>Our Services:</div>
	)
}