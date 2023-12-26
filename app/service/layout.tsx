import React from 'react'
import type { Metadata } from 'next'
import '../globals.css'
import '../quiggle.css'
import './theme.css'
import UseNavMargin from '../_components/UseNavMargin'
import Logo from '../_assets/Logo'

export const metadata: Metadata = {
  title: 'PBJ Service Co',
  description: 'My service company!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
			<nav className='shadow-sm-down-black-in-up-gray px-6 py-2 ai-center flex jc-between'>
				<div className="flex ai-center">
					<Logo
						width={ 60 }
						circleColor={ 'secondary' }
						letterColor={ 'light'}
					/>
					<span className='bold text-lg ls-12 italic'>
						Service Co
					</span>
				</div>
				<div className='flex gap-6 ai-center'>
					<ul className='flex gap-4'>
						<li>Hauling</li>
						<li>Installation</li>
						<li>Seasonal</li>
						<li>Odd Jobs</li>
					</ul>
					<button type="button" className='btn-sm secondary bold'>Get Your Free Quote</button>
				</div>
			</nav>
			<UseNavMargin />
			<main className='f-1'>
			{/* Content goes here */}{ children }
			</main>
			<footer className='dark flex-col ai-center text-sm'>
				<div className="flex px-6 py-2 w-100 jc-between">
					<div>Link Tree</div>
					<div>Company info</div>
					<div>Affiliates</div>
				</div>
				<div className="primary w-100 text-center">&copy; 2023-2024 - Built by: <a href='https://peakboundjourneys.com/tech' className='bold text-light text-hover-secondary'>PBJ Tech</a> - All Rights Reserved</div>
			</footer>
		</>
  )
}