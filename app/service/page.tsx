import type { Metadata } from 'next'
import Clock from '../_assets/Clock'
import Tools from '../_assets/Tools'
import ChangingDisplay from '../_components/ChangingDisplay'
import services from './services'

export const metadata: Metadata = {
  title: 'PBJ Service Co',
  description: 'My service company!',
} 

export default function Home() {
  // const display = useChangingDisplay()
  services

  return (
    <>
		<div className='flex m-auto ai-center py-10 gap-8 max-w-700'>
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
    <div className='flex m-auto ai-center pb-10 gap-8 max-w-700'>
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
		<div className='p-10 light flex-col gap-6'>
      <div className="flex-col ai-center primary-200 br-2 py-2 px-10 max-w-700 m-auto">
        <p className="m-auto text-primary bold text-xl">What Can We Do For You?</p>
        <span className='text-md ls-10 italic'>Click on a category to learn more about what we offer.</span>
      </div>
      <div className="flex gap-4 jc-between m-auto w-100 max-w-700">
        <button className="f-auto secondary text-light shadow-sm">Hauling</button>
        <button className="f-auto accent text-light shadow-sm">Installation</button>
        <button className="f-auto secondary text-light shadow-sm">Seasonal</button>
        <button className="f-auto secondary text-light shadow-sm">Odd Jobs</button>
      </div>
      <div id="service-desc" className="w-100 max-w-700 m-auto p-6 flex jc-center ai-center dark text-light">
        <ChangingDisplay />
      </div>
    </div>
    <div className="accent flex-center bold p-8 text-center">Our website is currently under construction.</div>
    </>
	)
}