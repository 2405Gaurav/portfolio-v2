'use client'

import type { Post } from '@/constants/posts'

import NumberFlow from '@number-flow/react'
import { Link } from '@/pc/components/link'
import { useState, useEffect } from 'react'

import BlurImage from '@/pc/blur-image'
import { useFormattedDate } from '@/hooks/use-formatted-date'
import { MY_NAME } from '@/lib/constants'

type BlogHeaderProps = {
  post: Post
}

const BlogHeader = ({ post }: BlogHeaderProps) => {
  const formattedDate = useFormattedDate(post.date)
  const [views, setViews] = useState(0)
  const [comments, setComments] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch view count and increment it
        const viewRes = await fetch(`/api/posts/${post.slug}/views`, {
          method: 'POST' // POST to increment
        })
        
        // Fetch comment count
        const commentRes = await fetch(`/api/posts/${post.slug}/comments`)

        if (viewRes.ok) {
          const viewData = await viewRes.json()
          setViews(viewData.views || 0)
        }

        if (commentRes.ok) {
          const commentData = await commentRes.json()
          setComments(commentData.count || 0)
        }
      } catch (error) {
        console.error('Error fetching blog stats:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchStats()
  }, [post.slug])

  return (
    <div className="space-y-16 py-16">
      <div className="space-y-16 sm:px-8">
        <h1 className="bg-linear-to-b from-black via-black/90 to-black/70 to-90% bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl md:leading-16 dark:from-white dark:via-white/90 dark:to-white/70">
          {post.title}
        </h1>

        <div className="grid grid-cols-2 text-sm max-md:gap-4 md:grid-cols-4">
          {/* Author */}
          <div className="space-y-1 md:mx-auto">
            <div className="text-muted-foreground">Written by</div>
            <Link href="https://github.com/yourgithub" className="flex items-center gap-2">
              <BlurImage
                src="/images/avatar.png"
                className="size-6 rounded-full"
                width={1024}
                height={1024}
                alt={`${MY_NAME}'s Avatar`}
              />
              {MY_NAME}
            </Link>
          </div>

          {/* Published date */}
          <div className="space-y-1 md:mx-auto">
            <div className="text-muted-foreground">Published on</div>
            <div>{formattedDate}</div>
          </div>

          {/* Views */}
          <div className="space-y-1 md:mx-auto">
            <div className="text-muted-foreground">Views</div>
            {isLoading ? '--' : <NumberFlow value={views} data-testid="view-count" />}
          </div>

          {/* Comments */}
          <div className="space-y-1 md:mx-auto">
            <div className="text-muted-foreground">Comments</div>
            {isLoading ? '--' : <NumberFlow value={comments} data-testid="comment-count" />}
          </div>
        </div>
      </div>

      {/* Cover Image - Removed ImageZoom wrapper */}
      <BlurImage
        src={`/images/blog/${post.slug}/cover.png`}
        className="rounded-lg"
        width={1200}
        height={630}
        lazy={false}
        fetchPriority="high"
        alt={post.title}
      />
    </div>
  )
}

export default BlogHeader