import { useSearchParams } from 'next/navigation'
import React from 'react'
import SearchTitle from './_components/SearchTitle'

export default function page() {

	return (
		<div className='flex-col text-dark'>
			<SearchTitle />
			<div className="text-sm text-accent italic mx-4">Viewing 1-20 of 34234 results.</div>
			<div className='flex-center text-center m-4 primary-100'>s</div>
			<div className="flex m-auto gap-2">
				<div>&lt;</div>
				<div>1</div>
				<div>&gt;</div>
			</div>
		</div>
	)
}
