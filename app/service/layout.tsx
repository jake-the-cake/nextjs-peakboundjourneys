import type { Metadata } from 'next'
import CONFIG from '../_config'
import '../globals.css'
import '../quiggle.css'
import logo from '../_assets/logo.png'
import Image from 'next/image'

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
			<nav className='primary bb-sm shadow-sm-down-black px-8 py-2 shadow-sm-in-up-gray ai-center flex jc-between'>
				<div className="flex gap-2 ai-center">

				<Image
					className='primary-image'
					src={ logo }
					alt='PBJ Logo'
					width={ 32 }
				/>
				<span className='bold text-lg ls-12 italic'>
					PBJ Service Co
				</span>
				</div>
			</nav>
			{/* Content goes here */}{ children }
		</>
  )
}