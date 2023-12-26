import type { Metadata } from 'next'
import Clock from '../_assets/Clock'
import Tools from '../_assets/Tools'

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
          className={ 'svg-behind right-neg-25' }
        />
      </div>
      <p className='f-1 text-dark ls-12 lh-15 text-center'>
        We pride ourselves on our consistent track record of delivering services on time, every time. Timeliness is at the core of our operations, reflecting our dedication to ensuring that your experience with us is not only seamless but also punctual. When you choose PBJ, you are choosing a partner committed to meeting deadlines and surpassing expectations.
      </p>
    </div>
    <div className='flex m-auto ai-center p-10 pt-0 gap-8 max-w-700'>
      <p className='f-1 text-dark ls-12 lh-15 text-center'>
        We know what &quot;Full Service&quot; truly means. It&apos;s not just about completing the job - it&apos;s about going beyond expectations. Our services include thorough cleanup, and trash removal, understanding the importance of those finishing touches. Moreover, we&apos;re open to additional tasks upon request, provided our schedule allows. With PBJ, you get a partner committed to true satisfaction.
      </p>
      <div className="flex-col gap-1 relative pt-10">
        <h1 className='primary px-2 me-auto shadow-sm-down-black'>Full Service</h1>
        <h1 className='accent px-2 shadow-sm-down-black'>Means FULL</h1>
        <Tools
          width={ '70%' }
          color={ 'secondary' }
          className={ 'svg-behind left-neg-25' }
        />
      </div>
    </div>
		<div className='p-4 light'>Services</div>
    <div className="accent flex-center bold p-8 text-center">Our website is currently under construction.</div>
    </>
	)
}