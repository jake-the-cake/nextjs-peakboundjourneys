import React from 'react'
import type { Metadata } from 'next'
import '../globals.css'
import '../quiggle.css'
import './theme.css'
import UseNavMargin from '../_components/UseNavMargin'
import Navlink from './_components/NavLink'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Peak Bound Journeys - Online Thrift Store',
  description: 'My service company!',
}



export default function RootLayout({ children }: { children: React.ReactNode }) {
	const departments = [
		'Art',
		'Electronics'
	]
  return (
    <>
			<nav className='flex-col secondary-300 absolute w-100'>
				<div className='flex jc-between px-4 py-1'>
					<div className="flex ai-start gap-1">
						<div className="text-2xl text-dark ls-2 bold">Peak Bound Journeys</div>
						<div className="text-md text-accent italic pt-2 ls-12">Online Thrift Shop</div>
					</div>
					<div className="flex my-auto">
						<input placeholder='Find your treasure...' type="text" className='br-2 b-sm accent-200 text-dark bold p-0' />
						<button className='btn-sm ms-1 accent'>Search</button>
					</div>
				</div>
				<div className='primary flex jc-center'>
					{
						departments.map((dep: string, i: number) => <Navlink key={ `navlink-${ i }` } name={ dep } />)
					}
				</div>
			</nav>
			<UseNavMargin />
			<main className='f-1 py-8'>
				{/* Content goes here */}
				{ children }
			</main>
			<footer className='dark flex-col ai-center text-sm'>
				<div className="flex px-6 py-2 w-100 jc-between">
					<div>Link Tree</div>
					<div className='text-center'>
						<p>Peak Bound Journeys Online Thrift Store was established in 2023 in an effort to reduce waste by giving older items to have a second life at low prices.</p>
						<span className='text-xs italic'>Have items to sell? <Link className='text-secondary' href={'/shop/become-a-seller'}>Request To List With PBJ</Link></span>
					</div>
					<div>Affiliates</div>
				</div>
				<div className="primary w-100 text-center">&copy; 2023-2024 - Built by: <a href='https://peakboundjourneys.com/tech' className='bold text-light text-hover-secondary'>PBJ Tech</a> - All Rights Reserved</div>
			</footer>
		</>
  )
}