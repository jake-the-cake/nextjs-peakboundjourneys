'use client'

import { MouseEvent } from "react"

type SearchByProps = {
	department?: string
} & StringIndexToString

function handleSearch(by: SearchByProps) {
	return function(e: MouseEvent) {
		const search = new URLSearchParams(by).toString()
		window.location.href = '/shop/products?' + search
	}
}

export default function Navlink({ name }: { name: string }) {
	return (
		<div className='px-4 b-sm b-dark light-200 pointer' onClick={ handleSearch({department: name.toLowerCase()}) }>{ name }</div>
	)
}