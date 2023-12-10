'use client'
import { PointerEventHandler } from "react"

interface SmallCardProps {
	label: string
	href: string
	color?: string
}

function goToPage(pathname: string): void {
	window.location.href = pathname
}

export function SmallCard({ label, href, color }: SmallCardProps) {
	// color = ' ' + (color ? color : 'error')
	// return (
		// <div className={'min-w-250 btn f-1 p-4 br-2 pointer' + color } onClick={ () => goToPage(href) }>{ label }</div>
	// )
	return <>hi</>
}