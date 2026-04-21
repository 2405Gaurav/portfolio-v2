'use client'

import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { SiGithub } from '@icons-pack/react-simple-icons'
import { StarIcon, GitForkIcon, UsersIcon, BookOpenIcon, GitCommitHorizontalIcon, CodeIcon } from 'lucide-react'
import Counter from '@/pc/counter'

type GitHubMetrics = {
  followers: number
  following: number
  publicRepos: number
  totalStars: number
  totalForks: number
  totalContributions: number
  topLanguages: { name: string; count: number }[]
}

// Language color mapping for visual flair
const LANG_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  Java: '#b07219',
  'C++': '#f34b7d',
  Go: '#00ADD8',
  Rust: '#dea584',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
  Ruby: '#701516',
  PHP: '#4F5D95',
  Kotlin: '#A97BFF',
  Swift: '#F05138',
  Dart: '#00B4AB',
}

const statCards = [
  {
    key: 'totalStars',
    label: 'Total Stars',
    icon: <StarIcon className='size-4' />,
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    key: 'publicRepos',
    label: 'Repositories',
    icon: <BookOpenIcon className='size-4' />,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    key: 'totalContributions',
    label: 'Contributions',
    icon: <GitCommitHorizontalIcon className='size-4' />,
    gradient: 'from-emerald-500 to-green-600',
  },
  {
    key: 'followers',
    label: 'Followers',
    icon: <UsersIcon className='size-4' />,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    key: 'totalForks',
    label: 'Total Forks',
    icon: <GitForkIcon className='size-4' />,
    gradient: 'from-rose-500 to-red-600',
  },
]

export default function GitHubMetricsCard() {
  const [metrics, setMetrics] = useState<GitHubMetrics | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const res = await fetch('/api/github-metrics')
        const data = await res.json()
        setMetrics(data)
      } catch (e) {
        console.error('Failed to fetch GitHub metrics', e)
      } finally {
        setLoading(false)
      }
    }
    fetchMetrics()
  }, [])

  if (loading) {
    return (
      <div className='rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm'>
        <div className='flex items-center gap-3 mb-6'>
          <div className='size-10 rounded-xl bg-muted animate-pulse' />
          <div className='h-6 w-40 rounded bg-muted animate-pulse' />
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
          {[...Array(5)].map((_, i) => (
            <div key={i} className='h-24 rounded-xl bg-muted animate-pulse' />
          ))}
        </div>
      </div>
    )
  }

  if (!metrics) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className='rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 p-6 sm:p-8 backdrop-blur-sm shadow-feature-card'
    >
      {/* Header */}
      <div className='flex items-center gap-3 mb-8'>
        <div className='flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 text-white dark:from-gray-200 dark:to-gray-400 dark:text-gray-900'>
          <SiGithub className='size-5' />
        </div>
        <div>
          <h3 className='text-lg font-semibold'>GitHub Activity</h3>
          <p className='text-xs text-muted-foreground'>Open source contributions & stats</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8'>
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.key}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
            className='group relative overflow-hidden rounded-xl border border-border/30 bg-background/50 p-4 transition-all duration-300 hover:border-border hover:shadow-md'
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-[0.06]`} />
            <div className='relative'>
              <div className={`mb-2 inline-flex rounded-lg bg-gradient-to-br ${stat.gradient} p-1.5 text-white`}>
                {stat.icon}
              </div>
              <div className='text-2xl font-bold tracking-tight'>
                <Counter value={metrics[stat.key as keyof GitHubMetrics] as number} />
              </div>
              <p className='text-xs text-muted-foreground mt-1'>{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Top Languages */}
      {metrics.topLanguages.length > 0 && (
        <div>
          <div className='flex items-center gap-2 mb-4'>
            <CodeIcon className='size-4 text-muted-foreground' />
            <h4 className='text-sm font-medium text-muted-foreground'>Top Languages</h4>
          </div>
          <div className='flex flex-wrap gap-2'>
            {metrics.topLanguages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                className='flex items-center gap-2 rounded-full border border-border/50 bg-background/50 px-3 py-1.5 text-sm transition-colors hover:border-border'
              >
                <span
                  className='size-2.5 rounded-full'
                  style={{ backgroundColor: LANG_COLORS[lang.name] || '#8b8b8b' }}
                />
                <span className='font-medium'>{lang.name}</span>
                <span className='text-xs text-muted-foreground'>
                  {lang.count} {lang.count === 1 ? 'repo' : 'repos'}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  )
}
