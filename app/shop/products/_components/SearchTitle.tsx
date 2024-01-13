'use client'
import React, { useEffect, useState } from 'react'

export default function SearchTitle() {
	const [ search, setSearch ] = useState<any>(null)
	useEffect(() => {
		const obj: any = {}
		const q = window.location.search.toString()
		console.log(q)
		// q.forEach(([key, value]) => {
			// obj[key] = value
			// console.log(key, value)
		// })
		if (!search) setSearch(obj)
	}, [])
	console.log(search)
	return (
		<div className="text-lg text-dark">Products in { search?.department ?? '' }</div>
	)
}
