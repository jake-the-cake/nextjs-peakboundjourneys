import type { Metadata } from 'next'
import '../globals.css'
import '../quiggle.css'
import './theme.css'
import logo from '../_assets/logo.png'
import Image from 'next/image'
import UseNavMargin from '../_components/UseNavMargin'

export const metadata: Metadata = {
  title: 'PBJ Service Co',
  description: 'My service company!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	// useNavigationMargin()

  return (
    <>
			<nav className='shadow-sm-down-black px-8 py-2 shadow-sm-in-up-gray ai-center flex jc-between'>
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
				<div>
					<button type="button" className='btn-sm secondary bold'>Get Your Free Quote</button>
				</div>
			</nav>
			<UseNavMargin />
			<main className='f-1'>
			{/* Content goes here */}{ children }
			</main>
			<footer className='dark'>Footer</footer>
		</>
  )
}