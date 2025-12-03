import type { Metadata } from 'next'
import type { AboutPage, WithContext } from 'schema-dts'

import JsonLd from '@/pc/json-ld'
import PageHeader from '@/pc/page-header'
import { Link } from '@/pc/components/link'
import {
  MY_NAME,
  SITE_GITHUB_URL,
  SITE_INSTAGRAM_URL,
  SITE_X_URL
} from '@/lib/constants'
import { createMetadata } from '@/lib/metadata'
import { getBaseUrl } from '@/utils/get-base-url'

export const metadata: Metadata = createMetadata({
  pathname: '/about',
  title: 'About',
  description: 'Learn more about me, my journey, and what I do',
  locale: 'en',
  openGraph: {
    type: 'profile'
  }
})

const Page = () => {
  const title = 'About'
  const description = 'Hi! I\'m a passionate web developer creating innovative projects with modern technologies. Explore my portfolio, skills, and journey in building user-friendly apps. Let\'s connect!'
  const url = `${getBaseUrl()}/about`

  const jsonLd: WithContext<AboutPage> = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: title,
    description,
    url,
    mainEntity: {
      '@type': 'Person',
      name: MY_NAME,
      description: 'A passionate full-stack developer building amazing web applications',
      url: getBaseUrl(),
      sameAs: [SITE_INSTAGRAM_URL, SITE_X_URL, SITE_GITHUB_URL]
    },
    inLanguage: 'en'
  }

  return (
    <>
      <JsonLd json={jsonLd} />
      <PageHeader title={title} description={description} />
      
      <div className='prose prose-lg dark:prose-invert max-w-3xl mx-auto mt-6 space-y-12'>
        
        {/* WHO AM I Section */}
        <section>
          <h2 className='text-3xl font-bold mb-6'>WHO AM I</h2>
          <p className='text-lg leading-relaxed'>
            I'm a Full Stack Engineer passionate about crafting exceptional web experiences. 
            Currently mastering TypeScript, Next.js, React.js, Node.js, and database management. 
            I have a deep passion for learning UI/UX design and creating seamless user experiences.
          </p>
          <p className='text-lg leading-relaxed mt-4'>
            I started my web development journey on <span className='font-semibold'>December 5, 2020</span>. 
            It's been an incredible challenge, and I'm completely self-taught through YouTube and hands-on projects. 
            One of my favorite resources has been{' '}
            <Link 
              href='https://www.youtube.com/@NetNinja' 
              className='text-red-500 hover:text-red-600 transition-colors'
            >
              The Net Ninja
            </Link>
            , where I learned a lot of fundamental web development skills.
          </p>
          <p className='text-lg leading-relaxed mt-4'>
            I love using{' '}
            <Link href='https://nextjs.org' className='text-blue-500 hover:text-blue-600 transition-colors'>
              Next.js
            </Link>
            {' '}to create websites, then use{' '}
            <Link href='https://github.com' className='text-purple-500 hover:text-purple-600 transition-colors'>
              GitHub
            </Link>
            {' '}to host my codebase. After that, I use{' '}
            <Link href='https://vercel.com' className='text-cyan-500 hover:text-cyan-600 transition-colors'>
              Vercel
            </Link>
            {' '}to deploy my websites with lightning-fast performance.
          </p>
        </section>

        {/* About This Site Section */}
        <section>
          <h2 className='text-3xl font-bold mb-6'>About this site</h2>
          <ul className='space-y-3 text-lg'>
            <li>
              <span className='font-semibold'>Framework:</span>{' '}
              <Link href='https://nextjs.org' className='text-blue-500 hover:text-blue-600 transition-colors'>
                Next.js
              </Link>
            </li>
            <li>
              <span className='font-semibold'>Styling:</span>{' '}
              <Link href='https://tailwindcss.com' className='text-cyan-500 hover:text-cyan-600 transition-colors'>
                Tailwind CSS
              </Link>
            </li>
            <li>
              <span className='font-semibold'>Animations:</span>{' '}
              <Link href='https://motion.dev' className='text-purple-500 hover:text-purple-600 transition-colors'>
                Motion
              </Link>
              {' '}& GSAP
            </li>
            <li>
              <span className='font-semibold'>Deployment:</span>{' '}
              <Link href='https://vercel.com' className='text-cyan-500 hover:text-cyan-600 transition-colors'>
                Vercel
              </Link>
            </li>
            <li>
              <span className='font-semibold'>Code Repository:</span>{' '}
              <Link href={SITE_GITHUB_URL} className='text-purple-500 hover:text-purple-600 transition-colors'>
                GitHub
              </Link>
            </li>
          </ul>
          <p className='text-sm text-muted-foreground mt-6 italic'>
            Note: My code isn't like the starter code because I changed a lot of code to make it truly mine! 😊
          </p>
        </section>

        {/* Inspiration Section */}
        <section>
          <h2 className='text-3xl font-bold mb-6'>Inspiration</h2>
          <p className='text-lg leading-relaxed'>
            Here are some websites and developers that inspired me a lot to build this fantastic portfolio. 
            Their creativity and attention to detail motivated me to push my boundaries and create something unique.
          </p>
          <p className='mt-4'>
            <span className='text-muted-foreground'>Refer to </span>
            <Link 
              href='https://github.com/2405Gaurav' 
              className='text-red-500 hover:text-red-600 transition-colors font-semibold'
            >
              README
            </Link>
            <span className='text-muted-foreground'> for more details on inspirations and credits.</span>
          </p>
        </section>

        {/* Social Links Section */}
        <section>
          <h2 className='text-3xl font-bold mb-6'>Social links</h2>
          <ul className='space-y-3 text-lg'>
            <li>
              <Link 
                href={SITE_GITHUB_URL} 
                className='text-purple-500 hover:text-purple-600 transition-colors font-medium'
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link 
                href={SITE_INSTAGRAM_URL} 
                className='text-pink-500 hover:text-pink-600 transition-colors font-medium'
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link 
                href={SITE_X_URL} 
                className='text-blue-400 hover:text-blue-500 transition-colors font-medium'
              >
                X (Twitter)
              </Link>
            </li>
          </ul>
        </section>

        {/* Logo Section Note */}
        <section className="border-t pt-8">
  <h2 className="text-3xl font-bold mb-4">Logo</h2>
  <p className="text-muted-foreground mb-6">
    My personal logo represents my journey as a developer — constantly evolving, learning, and building.
  </p>

  <div className="flex items-center justify-center">
    <div className="rounded-xl border p-4 bg-muted/20 shadow-sm">
      <img
        src="/images/icn1.png"
        alt="Personal Logo"
        className="h-32 w-auto object-contain"
      />
    </div>
  </div>
</section>


      </div>
    </>
  )
}

export default Page