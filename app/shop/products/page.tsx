import { useSearchParams } from 'next/navigation'
import React from 'react'
import SearchTitle from './_components/SearchTitle'

export default function page() {

	return (
		<div className='flex-col'>
			<SearchTitle />
		</div>
	)
}
