import React from 'react'

export default function page() {
	return (
		<div className='flex-col ai-center jc-center text-dark'>
			<div className="flex-col mx-10 primary-100 p-4">
				<h3>Become A Seller</h3>
				<p className='text-accent italic text-sm'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus perferendis doloribus dignissimos. Numquam veniam sit odit soluta quos vitae. Temporibus eum nemo error expedita assumenda impedit in enim ad dolorem.
				</p>
				<form className='mt-6 flex jc-center gap-6' action="">
					<div className="flex-col">
						<label htmlFor="company">Company Name</label>
						<input className='accent-500' type="text" />
						<div className="flex gap-4">
							<input type="checkbox" name="no-business" id="no-business" />
							<span>I am a personal seller</span>
						</div>
					</div>
					<div>More</div>
				</form>
			</div>
		</div>
	)
}
