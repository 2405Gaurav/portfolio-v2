// Inspired by: https://fig.io
'use client'

import { SiGithub, SiWakatime, SiYoutube } from '@icons-pack/react-simple-icons'
import { Link } from '@/pc/components/link'
import { ArrowRightIcon, PencilIcon, StarIcon } from 'lucide-react'
import { useState, useEffect } from 'react'

import Counter from '@/pc/counter'

type StatData = {
  wakatime?: { hours: number }
  youtube?: { subscribers: number; views: number }
  github?: { followers: number; stars: number }
  blog?: { views: number; likes: number }
}

type Card = {
  icon: React.ReactNode
  title: string
  link: string
  value: number | undefined
  linkText: string
  gradient: {
    startColor: string
    endColor: string
  }
  suffix?: string
}

const Stats = () => {
  const [stats, setStats] = useState<StatData>({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setIsLoading(true)
        
        // Fetch all stats in parallel
        const [wakatimeRes, youtubeRes, githubRes, blogRes] = await Promise.allSettled([
          fetch('/api/wakatime-stats'),
          fetch('/api/youtube-stats'),
          fetch('/api/github-stats'),
          fetch('/api/blog-stats')
        ])

        const newStats: StatData = {}

        if (wakatimeRes.status === 'fulfilled' && wakatimeRes.value.ok) {
          newStats.wakatime = await wakatimeRes.value.json()
        }

        if (youtubeRes.status === 'fulfilled' && youtubeRes.value.ok) {
          newStats.youtube = await youtubeRes.value.json()
        }

        if (githubRes.status === 'fulfilled' && githubRes.value.ok) {
          newStats.github = await githubRes.value.json()
        }

        if (blogRes.status === 'fulfilled' && blogRes.value.ok) {
          newStats.blog = await blogRes.value.json()
        }

        setStats(newStats)
      } catch (error) {
        console.error('Error fetching stats:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchStats()
  }, [])

  const data: Card[] = [
    {
      title: 'Coding Hours',
      link: 'https://wakatime.com/@nelsonlaidev',
      value: stats.wakatime?.hours,
      icon: <SiWakatime className='text-[#0061ff]' />,
      linkText: 'WakaTime',
      gradient: {
        startColor: '#0061ff',
        endColor: '#6f7bf7'
      },
      suffix: 'hrs'
    },
    {
      title: 'YouTube Subscribers',
      link: 'https://www.youtube.com/@nelsonlaidev',
      value: stats.youtube?.subscribers,
      icon: <SiYoutube className='text-[#ff0000]' />,
      linkText: 'YouTube',
      gradient: {
        startColor: '#ff0000',
        endColor: '#ca1a1a'
      }
    },
    {
      title: 'YouTube Views',
      link: 'https://www.youtube.com/@nelsonlaidev',
      value: stats.youtube?.views,
      icon: <SiYoutube className='text-[#ff0000]' />,
      linkText: 'YouTube',
      gradient: {
        startColor: '#ff0000',
        endColor: '#ca1a1a'
      }
    },
    {
      title: 'GitHub Followers',
      link: 'https://github.com/2405Gaurav',
      value: stats.github?.followers,
      icon: <SiGithub className='text-[#fee000]' />,
      linkText: 'GitHub',
      gradient: {
        startColor: '#fee000',
        endColor: '#ffce63'
      }
    },
    {
      title: 'GitHub Stars',
      link: 'https://github.com/nelsonlaidev',
      value: stats.github?.stars,
      icon: <StarIcon className='size-6 text-[#fee000]' />,
      linkText: 'GitHub',
      gradient: {
        startColor: '#fee000',
        endColor: '#ffce63'
      }
    },
    {
      title: 'Blog Total Views',
      link: 'https://nelsonlai.dev',
      value: stats.blog?.views,
      icon: <PencilIcon className='size-6 text-[#ff0f7b]' />,
      linkText: 'Blog',
      gradient: {
        startColor: '#ff0f7b',
        endColor: '#f945ff'
      }
    },
    {
      title: 'Blog Total Likes',
      link: 'https://nelsonlai.dev',
      value: stats.blog?.likes,
      icon: <PencilIcon className='size-6 text-[#ff0f7b]' />,
      linkText: 'Blog',
      gradient: {
        startColor: '#ff0f7b',
        endColor: '#f945ff'
      }
    }
  ]

  return (
    <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3'>
      {data.map((stat) => {
        const {
          icon,
          link,
          title,
          value,
          linkText,
          gradient: { startColor, endColor },
          suffix
        } = stat

        const hasValue = value === 0 || value !== undefined

        return (
          <Link
            key={stat.title}
            href={link}
            className='group relative overflow-hidden rounded-lg border p-4 shadow-xs transition-colors hover:bg-zinc-100 dark:bg-zinc-900/50 dark:hover:bg-zinc-900'
          >
            <div className='flex flex-col items-center justify-center gap-2 transition-transform group-hover:-translate-y-24 group-focus:-translate-y-24'>
              <div className='flex items-center gap-2 text-3xl font-semibold'>
                {hasValue ? (
                  <>
                    <span>{icon}</span>
                    <div
                      style={{
                        background: `linear-gradient(122.25deg, ${startColor} 12.16%, ${endColor} 70.98%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      <Counter value={value} />
                      {suffix && <span>{` ${suffix}`}</span>}
                    </div>
                  </>
                ) : (
                  '--'
                )}
              </div>
              <div className='text-xl font-medium'>{title}</div>
            </div>
            <span className='absolute top-1/2 left-1/2 flex -translate-x-1/2 translate-y-24 items-center gap-1 text-2xl font-semibold opacity-0 transition group-hover:-translate-y-1/2 group-hover:opacity-100 group-focus:-translate-y-1/2 group-focus:opacity-100'>
              {linkText}
              <ArrowRightIcon className='size-6' />
            </span>
          </Link>
        )
      })}
    </div>
  )
}

export default Stats