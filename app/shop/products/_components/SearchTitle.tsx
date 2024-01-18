'use client'
import { QString } from '@/app/_quiggle/string'
import React, { useEffect, useState } from 'react'

export default function SearchTitle() {
	const [ search, setSearch ] = useState<any>(null)
	useEffect(() => {
		const obj: any = {}
		const q = Array.from(new URLSearchParams(window.location.search))
		q.forEach(([key, value]) => obj[key] = value)
		setSearch(Object.entries(obj)[0])
	}, [])
	return (
		<div className="px-4 text-lg text-dark">Products in { search ? new QString(search[1] + ' ' + search[0]).title : 'All Products' }</div>
	)
}
