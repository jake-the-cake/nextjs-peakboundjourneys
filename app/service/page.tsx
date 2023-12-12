import type { Metadata } from 'next'
import '../globals.css'
import '../quiggle.css'
import Clock from '../_assets/Clock'

export const metadata: Metadata = {
  title: 'PBJ Service Co',
  description: 'My service company!',
}

export default function Home() {
  return (
    <>
		<div className='flex ai-center p-10 gap-6'>
      <div className='f-1'></div>
      <div className="flex-center m-auto">
        <div className="flex-col gap-1 relative pt-10">
          <h1 className='primary px-2 ms-auto shadow-sm-down-black'>On Time.</h1>
          <h1 className='accent px-2 shadow-sm-down-black'>Every Time.</h1>
          <Clock
            width={ '70%' }
            color={ 'secondary' }
          />
        </div>
      </div>
      <p className='f-3 text-dark ls-12 lh-15'>
        We pride ourselves on our consistent track record of delivering services on time, every time. Timeliness is at the core of our operations, reflecting our dedication to ensuring that your experience with us is not only seamless but also punctual. When you choose PBJ, you are choosing a partner committed to meeting deadlines and surpassing expectations.
      </p>
      <div className='f-1'></div>
    </div>
		<div className='p-4 light'>Services</div>
    <div className="accent flex-center bold p-8 text-center">Our website is currently under construction.</div>
    </>
	)
}