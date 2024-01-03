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
		<div className='flex m-auto ai-center p-10 gap-8 max-w-700'>
      <div className="flex-col gap-1 relative pt-10">
        <h1 className='primary px-2 ms-auto shadow-sm-down-black'>On Time.</h1>
        <h1 className='accent px-2 shadow-sm-down-black'>Every Time.</h1>
        <Clock
          width={ '70%' }
          color={ 'secondary' }
        />
      </div>
      <p className='f-1 text-dark ls-12 lh-15 text-center'>
        We pride ourselves on our consistent track record of delivering services on time, every time. Timeliness is at the core of our operations, reflecting our dedication to ensuring that your experience with us is not only seamless but also punctual. When you choose PBJ, you are choosing a partner committed to meeting deadlines and surpassing expectations.
      </p>
    </div>
    <div className='flex m-auto ai-center p-10 pt-0 gap-8 max-w-700'>
      <p className='f-1 text-dark ls-12 lh-15 text-center'>
        We've redefined what "Full Service" truly means. It's not just about completing the task at hand - it's about going above and beyond. Our commitment to excellence includes leaving no trace that we were there after each job is completed, fully understanding the importance of those finishing touches. Moreover, our dedication doesn't stop there; we're open to additional tasks upon request, provided our schedule allows.
      </p>
      <div className="flex-col gap-1 relative pt-10">
        <h1 className='primary px-2 me-auto shadow-sm-down-black'>Beyond</h1>
        <h1 className='accent px-2 shadow-sm-down-black'>Full Service</h1>
        <Clock
          width={ '70%' }
          color={ 'secondary' }
        />
      </div>
    </div>
		<div className='p-4 light'>Services</div>
    <div className="accent flex-center bold p-8 text-center">Our website is currently under construction.</div>
    </>
	)
}