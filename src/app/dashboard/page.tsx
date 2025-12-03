import type { Metadata } from 'next'
import type { WebPage, WithContext } from 'schema-dts'

import JsonLd from '@/pc/json-ld'
import PageHeader from '@/pc/page-header'
import Stats from '@/pc/stats'
import { MY_NAME } from '@/lib/constants'
import { createMetadata } from '@/lib/metadata'
import { getBaseUrl } from '@/utils/get-base-url'
import { getLocalizedPath } from '@/utils/get-localized-path'

// Hardcoded translations
const translations = {
  title: 'Dashboard',
  description: 'Track my coding journey, YouTube growth, GitHub contributions, and blog engagement all in one place.'
}

export const generateMetadata = async (): Promise<Metadata> => {
  return createMetadata({
    pathname: '/dashboard',
    title: translations.title,
    description: translations.description
  })
}

const Page = () => {
  const title = translations.title
  const description = translations.description
  const url = getLocalizedPath({ pathname: '/dashboard' })

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
      <Stats />
    </>
  )
}

export default Page