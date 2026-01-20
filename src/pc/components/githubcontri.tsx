'use client'

import React, { useEffect, useMemo, useState } from 'react'
// @ts-ignore: Suppress error if @types/react-calendar-heatmap is missing
import CalendarHeatmap from 'react-calendar-heatmap'
import 'react-calendar-heatmap/dist/styles.css'
import { SiGithub } from '@icons-pack/react-simple-icons'

interface HeatmapValue {
  date: string
  count: number
}

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

  const values: HeatmapValue[] = useMemo(() => {
    return days.map((d) => ({
      date: d.date,
      count: d.contributionCount,
    }))
  }, [days])

  const today = new Date()
  const oneYearAgo = new Date()
  oneYearAgo.setFullYear(today.getFullYear() - 1)

  const startDate = values[0]?.date ?? oneYearAgo
  const endDate = values[values.length - 1]?.date ?? today

  return (
    <div className='flex flex-col gap-6 rounded-xl p-4 shadow-feature-card lg:p-6'>
      
      {/* Header */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <SiGithub className='size-5' />
          <h2 className='text-sm font-medium'>GitHub Contributions</h2>
        </div>
        <span className='text-xs text-muted-foreground'>
          {loading ? '...' : `${total} last year`}
        </span>
      </div>

      {/* Heatmap */}
      <div className='w-full overflow-hidden'>
        {loading ? (
          <div className='flex h-[100px] w-full animate-pulse items-center justify-center rounded-lg bg-muted'>
            <span className='text-xs text-muted-foreground'>Loading...</span>
          </div>
        ) : (
          <CalendarHeatmap
            startDate={startDate}
            endDate={endDate}
            values={values}
            showWeekdayLabels={false}
            showMonthLabels={true}
            gutterSize={2}
            transformDayElement={(element: any) => {
              return React.cloneElement(element, {
                rx: 2,
                ry: 2,
              } as any)
            }}
            classForValue={(value: any) => {
              if (!value || !value.count) return 'color-empty'
              if (value.count < 3) return 'color-scale-1'
              if (value.count < 6) return 'color-scale-2'
              if (value.count < 10) return 'color-scale-3'
              return 'color-scale-4'
            }}
            tooltipDataAttrs={(value: any) => {
              return {
                'data-tip': value?.date ? `${value.date}: ${value.count || 0} contributions` : ''
              } as any
            }}
          />
        )}
      </div>

      {/* Custom Styles for Heatmap - Theme-aware */}
      <style jsx global>{`
        .react-calendar-heatmap {
          width: 100%;
          font-family: inherit;
        }
        .react-calendar-heatmap text {
          font-size: 11px;
          fill: #ffffff;
          font-weight: 500;
        }
        
        /* Empty cells: Match background with subtle border */
        .react-calendar-heatmap .color-empty {
          fill: hsl(var(--background));
          stroke: hsl(var(--border));
          stroke-width: 1px;
        }

        /* GitHub Green Shades */
        .react-calendar-heatmap .color-scale-1 { 
          fill: #0e4429;
        }
        .react-calendar-heatmap .color-scale-2 { 
          fill: #006d32;
        }
        .react-calendar-heatmap .color-scale-3 { 
          fill: #26a641;
        }
        .react-calendar-heatmap .color-scale-4 { 
          fill: #39d353;
        }
      `}</style>
    </div>
  )
}