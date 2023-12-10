'use client'
import { PointerEventHandler } from "react"

interface SmallCardProps {
	label: string
	href: string
	color?: string
}

function goToPage(pathname: string): PointerEventHandler<HTMLDivElement> {
	return (e) => window.location.href = pathname
}

export function SmallCard({ label, href, color }: SmallCardProps) {
	return (
		<div className={`min-w-250 btn f-1 p-4 br-2 pointer` + (color ? ` ${ color }` : ' error')} onPointerDown={ goToPage(href) }>{ label }</div>
	)
}