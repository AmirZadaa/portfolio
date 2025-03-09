import React from 'react'

export default function Address() {
  return (
    <div className='grow text-card space-y-8 px-4 py-4 h-fit shadow-[4px_4px_0px_hsl(var(--background-800)),-4px_-4px_0px_hsl(var(--background-800))]   rounded-2xl'>
      <div >
        <h1 className='font-semibold'>Address</h1>
        <p className='text-sm'>lahore,faisal town</p>
      </div>
      <div>
        <h1 className='font-semibold'>Phone </h1>
        <p className='text-sm text-primary-600'>+92-3443319545</p>
      </div>
      <div>
        <h1 className="font-semibold">Email Address </h1>
        <p className='text-sm text-primary-600'>zadaa3322@gmail.com</p>
      </div>
      
    </div>
  )
}
