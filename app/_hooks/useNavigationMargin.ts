'use client'
import { useEffect } from "react";

export function useNavigationMargin() {
	useEffect(() => {
		const nav: HTMLElement | null = document.querySelector('nav')
		const navMargin: HTMLElement | null = document.querySelector('#nav-margin')
		if (!nav || !navMargin) return
		navMargin.style.height = nav.offsetHeight + 'px'
	}, [])
}