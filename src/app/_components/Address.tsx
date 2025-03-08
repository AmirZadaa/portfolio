import React from 'react'

export default function Address() {
  return (
    <div className='grow text-card space-y-8 px-4 py-4 h-fit shadow-[4px_4px_0px_hsl(var(--background-800)),-4px_-4px_0px_hsl(var(--background-800))]   rounded-2xl'>
      <div >
        <h1 className='font-semibold'>Address</h1>
        <p className='text-sm'>203 Fake St. Mountain View, San Francisco, California, USA</p>
      </div>
      <div>
        <h1 className='font-semibold'>Phone </h1>
        <p className='text-sm text-primary-600'>+1 232 3235 324</p>
      </div>
      <div>
        <h1 className="font-semibold">Email Address </h1>
        <p className='text-sm text-primary-600'>youremail@domain.com</p>
      </div>
      
    </div>
  )
}
