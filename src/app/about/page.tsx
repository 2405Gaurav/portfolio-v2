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
import GitHubMetricsCard from '@/pc/components/github-metrics'
import AboutHeroSection from '@/pc/components/about-hero'

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
  const description = 'Engineer · Builder · Problem Solver'
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
      
      {/* Hero section with image */}
      <AboutHeroSection />
      
      <div className='prose prose-lg dark:prose-invert max-w-3xl mx-auto mt-8 space-y-16'>
        
        {/* WHO AM I Section */}
        <section>
          <div className='flex items-center gap-3 mb-6'>
            <div className='h-px flex-1 bg-gradient-to-r from-border to-transparent' />
            <h2 className='text-2xl font-bold tracking-tight m-0'>WHO AM I</h2>
            <div className='h-px flex-1 bg-gradient-to-l from-border to-transparent' />
          </div>
          <p className='text-lg leading-relaxed'>
            I'm an Engineer passionate about crafting exceptional web experiences. 
            Currently mastering TypeScript, Next.js, React.js, Node.js, and database management. 
            I have a deep passion for learning UI/UX design and creating seamless user experiences.
          </p>
          <p className='text-lg leading-relaxed mt-4'>
            As an eager engineer, I believe in learning every approach that solves real-world problems. 
            Whether it's building microservices with <span className='font-semibold'>Spring Boot</span>, 
            creating AI solutions with <span className='font-semibold'>Python and LangChain</span>, 
            or exploring any technology that drives innovation — I'm always ready to dive in and master it.
          </p>
          <p className='text-lg leading-relaxed mt-4'>
            I started my web development journey in <span className='font-semibold'>2024</span>. 
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
            For backend development, I learned from first principles through{' '}
            <Link
              href='https://www.youtube.com/@sriniously'
              className='text-orange-500 hover:text-orange-600 transition-colors'
            >
              Sriniously
            </Link>
            's incredible{' '}
            <Link
              href='https://www.youtube.com/watch?v=0Rwb4Xmlcwc&list=PLui3EUkuMTPgZcV0QhQrOcwMPcBCcd_Q1'
              className='text-orange-500 hover:text-orange-600 transition-colors font-semibold'
            >
              &quot;Backend from First Principles&quot;
            </Link>
            {' '}playlist. It completely changed how I think about servers, APIs, and databases — 
            going deep into the &quot;why&quot; behind every concept rather than just the &quot;how&quot;.
          </p>
          <p className='text-lg leading-relaxed mt-4'>
            Beyond web development, I'm deeply passionate about problem-solving. 
            I've solved <span className='font-semibold'>500+ coding problems</span> across platforms like LeetCode, 
            GeeksforGeeks, and others. Check out my coding journey on{' '}
            <Link 
              href='https://codolio.com/profile/EREN_01' 
              className='text-emerald-500 hover:text-emerald-600 transition-colors'
            >
              Codolio
            </Link>
            .
          </p>
          <p className='text-lg leading-relaxed mt-4'>
            Currently expanding my horizons into <span className='font-semibold'>DevOps and GenAI</span>. 
            I'm fascinated by how Docker and Kubernetes orchestrate the infrastructure that powers today's internet. 
            <span className='italic block mt-2 text-muted-foreground'>
              "The best way to predict the future is to build it."
            </span>
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

        {/* GitHub Metrics Section */}
        <section className='not-prose'>
          <div className='flex items-center gap-3 mb-6'>
            <div className='h-px flex-1 bg-gradient-to-r from-border to-transparent' />
            <h2 className='text-2xl font-bold tracking-tight'>GitHub Metrics</h2>
            <div className='h-px flex-1 bg-gradient-to-l from-border to-transparent' />
          </div>
          <GitHubMetricsCard />
        </section>

        {/* About This Site Section */}
        <section>
          <div className='flex items-center gap-3 mb-6'>
            <div className='h-px flex-1 bg-gradient-to-r from-border to-transparent' />
            <h2 className='text-2xl font-bold tracking-tight m-0'>About this site</h2>
            <div className='h-px flex-1 bg-gradient-to-l from-border to-transparent' />
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 not-prose'>
            {[
              { label: 'Framework', value: 'Next.js', href: 'https://nextjs.org', emoji: '⚡' },
              { label: 'Styling', value: 'Tailwind CSS', href: 'https://tailwindcss.com', emoji: '🎨' },
              { label: 'Animations', value: 'Motion + GSAP', href: 'https://motion.dev', emoji: '✨' },
              { label: 'Deployment', value: 'Vercel', href: 'https://vercel.com', emoji: '🚀' },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className='group flex flex-col rounded-xl border border-border/50 bg-card/50 p-4 transition-all duration-300 hover:border-border hover:shadow-md no-underline'
              >
                <span className='text-xs text-muted-foreground mb-1'>{item.label}</span>
                <span className='text-sm font-semibold'>
                  {item.emoji} {item.value}
                </span>
              </Link>
            ))}
          </div>
          <p className='text-sm text-muted-foreground mt-6 italic'>
            Note: My code isn't like the starter code because I changed a lot of code to make it truly mine! 😊
          </p>
        </section>

        {/* Social Links Section */}
        <section className='not-prose'>
          <div className='flex items-center gap-3 mb-6'>
            <div className='h-px flex-1 bg-gradient-to-r from-border to-transparent' />
            <h2 className='text-2xl font-bold tracking-tight'>Connect</h2>
            <div className='h-px flex-1 bg-gradient-to-l from-border to-transparent' />
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-3'>
            {[
              { name: 'GitHub', href: SITE_GITHUB_URL, icon: '🐙', gradient: 'hover:border-gray-500' },
              { name: 'Instagram', href: SITE_INSTAGRAM_URL, icon: '📸', gradient: 'hover:border-pink-500' },
              { name: 'X (Twitter)', href: SITE_X_URL, icon: '🐦', gradient: 'hover:border-blue-400' },
              { name: 'Codolio', href: 'https://codolio.com/profile/EREN_01', icon: '🧩', gradient: 'hover:border-emerald-500' },
            ].map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className={`flex items-center gap-3 rounded-xl border border-border/50 bg-card/50 p-4 transition-all duration-300 ${social.gradient} hover:shadow-md no-underline`}
              >
                <span className='text-xl'>{social.icon}</span>
                <span className='text-sm font-medium'>{social.name}</span>
              </Link>
            ))}
          </div>
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