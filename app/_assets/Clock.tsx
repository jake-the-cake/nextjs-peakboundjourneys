// 'use client'
import React from 'react'

type ClockProps = {
	width?: number | string
	color?: string
}

export default function Clock({ width, color = 'dark' }: ClockProps) {
	color = `hsl(var(--${ color }), .2)`

	return (
		<svg className='svg-behind' fill={ color } width={ width } version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488.7 488.7">
			<g>
				<path d="M145.512,284.7c0,7-5.6,12.8-12.7,12.8c-3.5,0-6.7-1.4-9-3.7c-2.3-2.3-3.7-5.5-3.7-9c0-7,5.6-12.8,12.7-12.8
					C139.712,272,145.512,277.7,145.512,284.7z M154.012,348.2c-5,5-4.9,13,0,18l0,0c5,4.9,13.1,4.9,18-0.1c5-5,4.9-13.1-0.1-18
					C167.012,343.2,158.913,343.2,154.012,348.2z M235.313,194.5c7,0,12.8-5.7,12.8-12.8s-5.7-12.8-12.8-12.8s-12.8,5.7-12.8,12.8
					c0,3.5,1.4,6.7,3.7,9C228.613,193.1,231.813,194.5,235.313,194.5z M153.512,221.2c5,4.9,13.1,4.9,18-0.1l0.1-0.1
					c0.1-0.1,0.1-0.1,0.2-0.2c5-5,5-13,0-18s-13.1-5-18,0c-0.1,0.1-0.1,0.1-0.2,0.2c-0.1,0.1-0.1,0.1-0.2,0.2
					C148.512,208.1,148.512,216.2,153.512,221.2L153.512,221.2z M235.613,374.3c-7.1,0-12.7,5.7-12.7,12.8c0,3.5,1.4,6.7,3.7,9
					s5.5,3.7,9.1,3.7c7,0,12.7-5.7,12.7-12.8C248.413,380,242.712,374.3,235.613,374.3z M299.112,347.8c-5,5-5,13.1,0,18
					c5,5,13.1,5,18,0c5-5,4.9-13.1,0-18.1C312.112,342.8,304.013,342.8,299.112,347.8z M338.013,271.5c-7.1,0-12.8,5.7-12.8,12.8
					c0,3.5,1.4,6.7,3.7,9c2.3,2.3,5.5,3.8,9,3.7c7.1,0,12.7-5.7,12.8-12.8C350.813,277.2,345.112,271.5,338.013,271.5z M235.913,488.7
					c-112.5,0-204.1-91.6-204.1-204.1c0-104.4,78.9-190.7,180.2-202.6V51.1h-12.7c-6.4,0-11.5-5.2-11.5-11.5V11.5
					c0-6.4,5.2-11.5,11.5-11.5h73.2c6.4,0,11.5,5.2,11.5,11.5v28.1c0,6.4-5.2,11.5-11.5,11.5h-12.7v30.8
					c38.5,4.5,73.7,19.8,102.6,42.7l16.6-16.6l-1.5-1.5c-4.5-4.5-4.5-11.8,0-16.3l22.8-22.8c4.5-4.5,11.8-4.5,16.3,0l36.9,36.9
					c4.5,4.5,4.5,11.8,0,16.3l-22.8,22.8c-4.5,4.5-11.8,4.5-16.3,0l-1.5-1.5l-16.6,16.6c27.4,34.7,43.7,78.5,43.7,126
					C440.013,397.1,348.413,488.7,235.913,488.7z M392.612,284.6c0-86.4-70.3-156.7-156.7-156.7s-156.7,70.3-156.7,156.7
					s70.2,156.7,156.7,156.7C322.313,441.3,392.612,371,392.612,284.6z M317.913,201.8c4.7,4.7,5,12.3,0.7,17.3l-52,60.9
					c1.3,9.5-1.6,19.4-8.9,26.7c-12.3,12.3-32.3,12.3-44.7,0c-12.3-12.3-12.3-32.3,0-44.7c7.3-7.3,17.2-10.2,26.7-8.9l60.9-52
					C305.712,196.8,313.212,197.1,317.913,201.8L317.913,201.8z M244.413,275.4c-5-5-13.1-5-18,0c-5,5-5,13.1,0,18c5,5,13.1,5,18,0
					C249.413,288.4,249.413,280.4,244.413,275.4z"/>
			</g>
		</svg>
	)
}
