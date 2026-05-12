'use client'

import { BookOpenIcon } from 'lucide-react'

const FavoriteFramework = () => {
  return (
    <div className='flex flex-col gap-4 rounded-xl p-4 shadow-feature-card lg:p-6'>
      <div className='flex items-center gap-2'>
        <BookOpenIcon className='size-4.5' />
        <h2 className='text-sm'>Currently Learning</h2>
      </div>
      <div className='flex flex-col items-center justify-center gap-2 flex-1'>
        <div className='flex items-center justify-center size-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/20'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-7 text-emerald-500">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </div>
        <span className='text-sm font-medium text-center leading-tight'>
          API Optimisation
        </span>
        <span className='text-xs text-muted-foreground text-center'>Backend</span>
      </div>
    </div>
  )
}

export default FavoriteFramework
