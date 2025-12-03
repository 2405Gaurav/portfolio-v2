// import type { Metadata } from 'next'
// import type { WebPage, WithContext } from 'schema-dts'

// import { type Locale, useTranslations } from 'next-intl'
// import { getTranslations, setRequestLocale } from 'next-intl/server'
// import { use } from 'react'

// import MessageBoard from '@/pc/guestbook/message-board'
// import JsonLd from '@/pc/json-ld'
// import PageHeader from '@/pc/page-header'
// import { MY_NAME } from '@/lib/constants'
// import { createMetadata } from '@/lib/metadata'
// import { getBaseUrl } from '@/utils/get-base-url'
// import { getLocalizedPath } from '@/utils/get-localized-path'

// export const generateMetadata = async (props: PageProps<'/[locale]/guestbook'>): Promise<Metadata> => {
//   const { params } = props
//   const { locale } = await params

//   const t = await getTranslations({ locale: locale as Locale })
//   const title = t('common.labels.guestbook')
//   const description = t('guestbook.description')

//   return createMetadata({
//     pathname: '/guestbook',
//     title,
//     description,
//     locale
//   })
// }

// const Page = (props: PageProps<'/[locale]/guestbook'>) => {
//   const { params } = props
//   const { locale } = use(params)

//   setRequestLocale(locale as Locale)

//   const t = useTranslations()
//   const title = t('common.labels.guestbook')
//   const description = t('guestbook.description')
//   const url = getLocalizedPath({ locale, pathname: '/guestbook' })

//   const jsonLd: WithContext<WebPage> = {
//     '@context': 'https://schema.org',
//     '@type': 'WebPage',
//     name: title,
//     description,
//     url,
//     isPartOf: {
//       '@type': 'WebSite',
//       name: MY_NAME,
//       url: getBaseUrl()
//     },
//     inLanguage: locale
//   }

//   return (
//     <>
//       <JsonLd json={jsonLd} />
//       <PageHeader title={title} description={description} />
//       <MessageBoard />
//     </>
//   )
// }

// export default Page


import type { Metadata } from 'next'
import type { WebPage, WithContext } from 'schema-dts'

import { MailIcon, ClockIcon } from 'lucide-react'
import Link from 'next/link'

import JsonLd from '@/pc/json-ld'
import PageHeader from '@/pc/page-header'
import { MY_NAME } from '@/lib/constants'
import { createMetadata } from '@/lib/metadata'
import { getBaseUrl } from '@/utils/get-base-url'

export const metadata: Metadata = createMetadata({
  pathname: '/guestbook',
  title: 'Guestbook',
  description: 'Sign my guestbook and leave your thoughts',
  locale: 'en'
})

const Page = () => {
  const title = 'Guestbook'
  const description = 'Sign my guestbook and leave your thoughts'
  const url = `${getBaseUrl()}/guestbook`

  const jsonLd: WithContext<WebPage> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    isPartOf: {
      '@type': 'WebSite',
      name: MY_NAME,
      url: getBaseUrl()
    },
    inLanguage: 'en'
  }

  return (
    <>
      <JsonLd json={jsonLd} />
      <PageHeader title={title} description={description} />
      
      <div className='max-w-2xl mx-auto mt-12'>
        {/* Coming Soon Card */}
        <div className='rounded-xl border bg-card p-8 shadow-feature-card text-center space-y-6'>
          <div className='flex justify-center'>
            <div className='rounded-full bg-primary/10 p-4'>
              <ClockIcon className='size-12 text-primary' />
            </div>
          </div>
          
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold'>Coming Soon!</h2>
            <p className='text-muted-foreground text-lg'>
              The guestbook feature is currently under development. 
              I'm working hard to bring you an amazing experience to share your thoughts and messages.
            </p>
          </div>

          <div className='pt-4 space-y-4'>
            <p className='text-sm text-muted-foreground'>
              In the meantime, feel free to reach out to me directly via email!
            </p>
            
            <Link
              href='mailto:gauravthakur83551@gmail.com'
              className='inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
            >
              <MailIcon className='size-4' />
              Email Me Your Thoughts
            </Link>
          </div>

        
        </div>

      </div>
    </>
  )
}

export default Page