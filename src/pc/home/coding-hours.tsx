'use client'

import { ClockIcon } from 'lucide-react'

const CodingHours = () => {
  // Hardcoded hours - update this value as needed
  const hours = 'Continental GT 650'

  return (
    <div className='flex flex-col gap-6 rounded-xl p-4 shadow-feature-card lg:p-6'>
      <div className='flex items-center gap-2'>
        <ClockIcon className='size-4.5' />
        <h2 className='text-sm'>Bike</h2>
      </div>
      <div className='flex grow items-center justify-center text-4xl font-semibold'>
        {hours}
      </div>
    </div>
  )
}

export default CodingHours