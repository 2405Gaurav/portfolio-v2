'use client'

import { BriefcaseIcon, MailIcon } from 'lucide-react'

const OpenToWork = () => {
  const email = 'gauravthakur83551@gmail.com'

  return (
    <div className='flex flex-col gap-6 rounded-xl p-4 shadow-feature-card lg:p-6'>
      <div className='flex items-center gap-2'>
        <span className='relative flex size-2.5'>
          <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75' />
          <span className='relative inline-flex size-2.5 rounded-full bg-green-500' />
        </span>
        <BriefcaseIcon className='size-4.5' />
        <h2 className='text-sm'>Open to Work</h2>
      </div>

      <div className='flex grow items-center justify-center text-4xl font-semibold'>
        Available for new opportunities
      </div>

      <p className='text-center text-sm text-muted-foreground'>
        Think I&apos;d be a good fit? Drop me a message or an email.
      </p>

      <a
        href={'mailto:' + email}
        className='flex items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm transition-colors hover:bg-muted'
      >
        <MailIcon className='size-4' />
        Email me
      </a>
    </div>
  )
}

export default OpenToWork