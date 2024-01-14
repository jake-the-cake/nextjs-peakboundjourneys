import { useSearchParams } from 'next/navigation'
import React from 'react'
import SearchTitle from './_components/SearchTitle'

export default function page() {

	return (
		<div className='flex-col text-dark'>
			<SearchTitle />
			Search for me!
		</div>
	)
}
