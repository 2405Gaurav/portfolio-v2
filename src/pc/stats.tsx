'use client'
import { SiGithub, SiWakatime, SiYoutube } from '@icons-pack/react-simple-icons'
import { Link } from '@/pc/components/link'
import { ArrowRightIcon, PencilIcon, StarIcon } from 'lucide-react'
import { useState, useEffect } from 'react'
import Counter from '@/pc/counter'

type StatData = {
  wakatime?: {
    hours: number
  }
  youtube?: {
    subscribers: number
    views: number
  }
  github?: {
    followers: number
    stars: number
  }
  blog?: {
    views: number
    likes: number
  }
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

  useEffect(() => {
    const fetchStats = async () => {
      try {
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
      }
    }

    fetchStats()
  }, [])

  const data: Card[] = [
    {
      title: 'Coding Hours',
      link: 'https://wakatime.com/@nelsonlaidev',
      value: stats.wakatime?.hours,
      icon: <SiWakatime />,
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
      icon: <SiYoutube />,
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
      icon: <SiYoutube />,
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
      icon: <SiGithub />,
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
      icon: <StarIcon />,
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
      icon: <PencilIcon />,
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
      icon: <PencilIcon />,
      linkText: 'Blog',
      gradient: {
        startColor: '#ff0f7b',
        endColor: '#f945ff'
      }
    }
  ]

  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
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
          <div
            key={title}
            className='group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-900'
          >
            <div className='mb-4 flex items-center justify-between'>
              {hasValue ? (
                <>
                  <div
                    className='flex h-12 w-12 items-center justify-center rounded-xl text-white'
                    style={{
                      background: `linear-gradient(135deg, ${startColor} 0%, ${endColor} 100%)`
                    }}
                  >
                    {icon}
                  </div>
                  <div className='text-right'>
                    <div className='flex items-baseline gap-1 text-3xl font-bold text-gray-900 dark:text-white'>
                      <Counter value={value} />
                      {suffix && <span className='text-lg text-gray-500'>{` ${suffix}`}</span>}
                    </div>
                  </div>
                </>
              ) : (
                <div className='text-3xl font-bold text-gray-400'>--</div>
              )}
            </div>

            <h3 className='mb-2 text-sm font-medium text-gray-600 dark:text-gray-400'>{title}</h3>

            <Link
              href={link}
              className='inline-flex items-center gap-1 text-sm font-medium text-gray-900 transition-colors hover:text-gray-600 dark:text-white dark:hover:text-gray-300'
            >
              {linkText}
              <ArrowRightIcon className='h-4 w-4 transition-transform group-hover:translate-x-1' />
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Stats