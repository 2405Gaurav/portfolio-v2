'use client'

import { BikeIcon } from 'lucide-react'

const CurrentBike = () => {
  // Your current bike
  const bike = 'Royal Enfiel   GT 650'

  return (
    <div className='flex flex-col gap-6 rounded-xl p-4 shadow-feature-card lg:p-6'>
      <div className='flex items-center gap-2'>
        <BikeIcon className='size-4.5' />
        <h2 className='text-sm'>Current Bike</h2>
      </div>
      <div className='flex grow items-center justify-center text-4xl font-semibold'>
        {bike}
      </div>
    </div>
  )
}

export default CurrentBike