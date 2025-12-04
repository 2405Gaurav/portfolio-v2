import type { Metadata } from 'next'
import type { CollectionPage, WithContext } from 'schema-dts'

import JsonLd from '@/pc/json-ld'
import PageHeader from '@/pc/page-header'
import ProjectCards from '@/pc/project-cards'
import { MY_NAME } from '@/lib/constants'
import { getLatestProjects } from '@/lib/content'
import { createMetadata } from '@/lib/metadata'
import { getBaseUrl } from '@/utils/get-base-url'

export const metadata: Metadata = createMetadata({
  pathname: '/projects',
  title: 'Projects',
  description: 'Explore my latest projects and work',
  locale: 'en'
})

const Page = () => {
  const title = 'Projects'
  const description = 'Explore my latest projects and work'
  const url = `${getBaseUrl()}/projects`

  const projects = getLatestProjects()

  const jsonLd: WithContext<CollectionPage> = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': url,
    name: title,
    description,
    url,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: projects.map((project, index) => ({
        '@type': 'SoftwareSourceCode',
        name: project.name,
        description: project.description,
        url: `${url}/${project.slug}`,
        position: index + 1
      }))
    },
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
      <div className='px-4 sm:px-6'>
        <PageHeader title={title} description={description} />
        <ProjectCards projects={projects} />
      </div>
    </>
  )
}

export default Page