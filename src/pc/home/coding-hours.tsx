'use client'

import { BriefcaseIcon, MailIcon } from 'lucide-react'

const OpenToWork = () => {
  const email = 'gauravthakur83551@gmail.com'

  return (
    <div className='flex h-full flex-col gap-3 rounded-xl p-4 shadow-feature-card'>
      <div className='flex items-center gap-2'>
        <span className='relative flex size-2.5'>
          <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75' />
          <span className='relative inline-flex size-2.5 rounded-full bg-green-500' />
        </span>
        <BriefcaseIcon className='size-4' />
        <h2 className='text-sm'>Open to Work</h2>
      </div>

      <div className='flex grow items-center justify-center text-lg font-semibold leading-tight text-center'>
        Available for new opportunities
      </div>

      <a
        href={'mailto:' + email}
        className='flex items-center justify-center gap-2 rounded-lg border px-3 py-1.5 text-xs transition-colors hover:bg-muted'
      >
        <MailIcon className='size-3.5' />
        Email me
      </a>
    </div>
  )
}

export default OpenToWork