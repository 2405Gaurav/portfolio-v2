'use client'

import { Link } from '@/pc/components/link'
import { StarIcon } from 'lucide-react'
import { useState, useEffect } from 'react'

import { FOOTER_LINKS } from '@/config/links'

import NowPlaying from './now-playing'

const LayoutFooter = () => {
  const [repoStars, setRepoStars] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  // Hardcoded translation function
  const getTranslation = (key: string): string => {
    const translations: Record<string, string> = {
      'common.error': 'Error',
      'layout.general': 'General',
      'layout.home': 'Home',
      'layout.about': 'About',
      'layout.blog': 'Blog',
      'layout.projects': 'Projects',
      'layout.guestbook': 'Guestbook',
      'layout.social': 'Social',
      'layout.github': 'GitHub',
      'layout.twitter': 'Twitter',
      'layout.linkedin': 'LinkedIn',
      'layout.other': 'Other',
      'layout.rss': 'RSS',
      'layout.sitemap': 'Sitemap'
      // Add more translations as needed based on your FOOTER_LINKS
    }
    return translations[key] || key
  }

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        setIsLoading(true)
        setIsError(false)
        
        // Replace with your actual API endpoint
        const response = await fetch('/api/github-stats')
        
        if (!response.ok) {
          throw new Error('Failed to fetch GitHub stats')
        }
        
        const data = await response.json()
        setRepoStars(data.repoStars)
      } catch (error) {
        console.error('Error fetching GitHub stats:', error)
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchGitHubStats()
  }, [])

  return (
    <footer className='relative mx-auto mb-6 flex w-full max-w-5xl flex-col rounded-2xl bg-background/30 p-8 shadow-xs saturate-100 backdrop-blur-md'>
      <NowPlaying />
      <div className='mt-12 grid grid-cols-2 sm:grid-cols-3'>
        {FOOTER_LINKS.map((list) => (
          <div key={list.id} className='mb-10 flex flex-col items-start gap-4 pr-4'>
            {list.links.map((link) => {
              const { href, label } = link

              return (
                <Link key={href} href={href} variant='muted'>
                  {getTranslation(label)}
                </Link>
              )
            })}
          </div>
        ))}
      </div>
      <div className='mt-20 flex flex-col gap-4'>
        
        <div className='flex items-center justify-between text-sm'>
          <div>&copy; {new Date().getFullYear()} Gaurav</div>
          <Link
            href='https://nelsonlai.link/s/github-portfolio'
            className='flex items-center justify-center overflow-hidden rounded-md border'
          >
            <div className='flex h-8 items-center gap-2 border-r bg-muted px-2'>
              <StarIcon className='size-4' />
              <span className='font-medium'>Star</span>
            </div>
            <div className='flex h-8 items-center bg-background px-3'>
              {!isLoading && !isError && repoStars !== null &&
                Intl.NumberFormat('en', {
                  notation: 'compact',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 1
                }).format(repoStars)}
              {isLoading && '--'}
              {isError && getTranslation('common.error')}
            </div>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default LayoutFooter