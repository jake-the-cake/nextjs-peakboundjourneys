'use client'
import { QString } from '@/app/_quiggle/string'
import React, { useEffect, useState } from 'react'

export default function SearchTitle() {
	const [ search, setSearch ] = useState<any>(null)
	useEffect(() => {
		const obj: any = {}
		const q = Array.from(new URLSearchParams(window.location.search))
		q.forEach(([key, value]) => obj[key] = value)
		setSearch(obj)
	}, [])
	return (
		<div className="px-4 text-lg text-dark">Products in { search ? new QString((Object.entries(search)[0][1] + ' ' + Object.entries(search)[0][0])).slug : '' }</div>
	)
}
