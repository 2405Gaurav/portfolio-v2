'use client'

import { useEffect, useMemo, useState } from 'react'
import CalendarHeatmap from 'react-calendar-heatmap'
import 'react-calendar-heatmap/dist/styles.css'
// Using SiGithub to match your icon pack usage, or you can use Github from lucide-react
import { SiGithub } from '@icons-pack/react-simple-icons' 

type ContributionDay = {
  date: string
  contributionCount: number
  color: string
}

export default function GithubContributionsBox() {
  const [loading, setLoading] = useState(true)
  const [total, setTotal] = useState(0)
  const [days, setDays] = useState<ContributionDay[]>([])

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch('/api/github-contri')
        const data = await res.json()
        setTotal(data.totalContributions || 0)
        setDays(data.contributions || [])
      } catch (e) {
        console.error('Failed to fetch contributions', e)
      } finally {
        setLoading(false)
      }
    }
    run()
  }, [])

  const values = useMemo(() => {
    return days.map((d) => ({
      date: d.date,
      count: d.contributionCount,
      color: d.color
    }))
  }, [days])

  // Get start/end dates for the heatmap
  const today = new Date()
  const oneYearAgo = new Date()
  oneYearAgo.setFullYear(today.getFullYear() - 1)

  const startDate = values.length ? values[0].date : oneYearAgo
  const endDate = values.length ? values[values.length - 1].date : today

  return (
    // Matches the FavoriteFramework styling exactly
    <div className='flex flex-col gap-6 rounded-xl p-4 shadow-feature-card lg:p-6 bg-card'>
      
      {/* Header Section */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <SiGithub className='size-4.5' />
          <h2 className='text-sm'>GitHub Contributions</h2>
        </div>
        <span className='text-xs text-muted-foreground'>
          {loading ? '...' : `${total} last year`}
        </span>
      </div>

      {/* Heatmap Container */}
      <div className='w-full overflow-hidden'>
        {loading ? (
            <div className="flex h-[100px] w-full animate-pulse items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <span className="text-xs text-muted-foreground">Loading...</span>
            </div>
        ) : (
          <CalendarHeatmap
            startDate={startDate}
            endDate={endDate}
            values={values}
            showWeekdayLabels={false}
            showMonthLabels={true}
            gutterSize={2}
            transformDayElement={(element, value, index) => {
                // Apply rounded corners to the squares
                return (
                    <rect
                        {...element.props}
                        rx={2}
                        ry={2}
                    />
                )
            }}
            classForValue={(value: any) => {
              if (!value || value.count === 0) return 'color-empty'
              // Simple logic to determine color intensity class
              if (value.count < 3) return 'color-scale-1'
              if (value.count < 6) return 'color-scale-2'
              if (value.count < 10) return 'color-scale-3'
              return 'color-scale-4'
            }}
            tooltipDataAttrs={(value: any) => {
              if (!value?.date) return {}
              return {
                'data-tip': `${value.date}: ${value.count} contributions`,
              }
            }}
          />
        )}
      </div>

      {/* Global Styles for the Heatmap Colors */}
      <style jsx global>{`
        .react-calendar-heatmap {
            width: 100%;
            font-family: inherit;
        }
        .react-calendar-heatmap text {
            font-size: 10px;
            fill: currentColor;
            opacity: 0.5;
        }
        
        /* Dark Mode / Default Colors matching GitHub */
        .react-calendar-heatmap .color-empty {
            fill: #161b22; /* Dark grey for empty */
        }
        /* Light mode overrides if your app uses a class like 'light' or 'dark' on html/body */
        :global(.light) .react-calendar-heatmap .color-empty {
            fill: #ebedf0;
        }

        .react-calendar-heatmap .color-scale-1 { fill: #0e4429; }
        .react-calendar-heatmap .color-scale-2 { fill: #006d32; }
        .react-calendar-heatmap .color-scale-3 { fill: #26a641; }
        .react-calendar-heatmap .color-scale-4 { fill: #39d353; }
      `}</style>
    </div>
  )
}