import type { Metadata } from 'next'
import CONFIG from '../_config'
import '../globals.css'
import '../quiggle.css'

export const metadata: Metadata = {
  title: 'PBJ Service Co',
  description: 'My service company!',
}

export default function Home() {

  const { bg } = CONFIG.css

  return (
		<div>Our Services:</div>
	)
}