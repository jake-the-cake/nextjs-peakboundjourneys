import type { Metadata } from 'next'
import CONFIG from '../_config'
import '../globals.css'
import '../quiggle.css'

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
    <>
			<nav className='primary bb-sm shadow-sm-down-black px-10 py-2 shadow-sm-in-up-gray'>PBJ</nav>
			{/* Content goes here */}{ children }
		</>
  )
}