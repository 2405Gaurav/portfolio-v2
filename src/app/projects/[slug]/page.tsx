import type { Metadata } from 'next'
import type { SoftwareSourceCode, WithContext } from 'schema-dts'

import { notFound } from 'next/navigation'

import BlurImage from '@/pc/blur-image'
import JsonLd from '@/pc/json-ld'
import ProjectHeader from '@/pc/project-header'
import { MY_NAME } from '@/lib/constants'
import { getProjectBySlug, getLatestProjects } from '@/lib/content'
import { createMetadata } from '@/lib/metadata'
import { getBaseUrl } from '@/utils/get-base-url'

type PageProps = {
  params: Promise<{ slug: string }>
}

export const generateStaticParams = async () => {
  const projects = getLatestProjects()
  return projects.map((project) => ({
    slug: project.slug
  }))
}

export const generateMetadata = async (props: PageProps): Promise<Metadata> => {
  const { params } = props
  const { slug } = await params

  const project = getProjectBySlug(slug)

  if (!project) {
    return {}
  }

  const { name, description } = project

  return createMetadata({
    pathname: `/projects/${slug}`,
    title: name,
    description,
    locale: 'en'
  })
}

const Page = async (props: PageProps) => {
  const { params } = props
  const { slug } = await params

  const project = getProjectBySlug(slug)
  const url = `${getBaseUrl()}/projects/${slug}`

  if (!project) {
    notFound()
  }

  const { name, description, github, dateCreated, coverImage } = project
  const baseUrl = getBaseUrl()

  const jsonLd: WithContext<SoftwareSourceCode> = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name,
    description,
    url,
    codeRepository: github,
    license: 'https://opensource.org/licenses/MIT',
    programmingLanguage: 'TypeScript',
    dateCreated,
    author: {
      '@type': 'Person',
      name: MY_NAME,
      url: baseUrl
    },
    thumbnailUrl: `${baseUrl}${coverImage}`,
    inLanguage: 'en'
  }

  return (
    <>
      <JsonLd json={jsonLd} />
      <div className='mx-auto max-w-3xl'>
        <ProjectHeader {...project} />
        <BlurImage
          src={coverImage}
          width={1200}
          height={630}
          alt={name}
          className='my-12 rounded-lg'
          lazy={false}
        />
        {/* Add project content here - you'll need to add a content field to your Project type */}
        <div className='prose prose-lg dark:prose-invert'>
          <h2>About This Project</h2>
          <p>{description}</p>
          
          <h3>Tech Stack</h3>
          <ul>
            {project.techstack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Page