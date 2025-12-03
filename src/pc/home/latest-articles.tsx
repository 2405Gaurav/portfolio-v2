'use client'

import { type Post } from '@/constants/posts'

import { buttonVariants } from '@/pc/components/button'
import { Link } from '@/pc/components/link'
import { cn } from '@/lib/utils'
import { ArrowUpRightIcon, PencilIcon } from 'lucide-react'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

import BlurImage from '@/pc/blur-image'
import { useFormattedDate } from '@/hooks/use-formatted-date'

const variants = {
  initial: {
    y: 40,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1
  }
}

type LatestArticlesProps = {
  posts: Post[]
}

const LatestArticles = ({ posts }: LatestArticlesProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      variants={variants}
      ref={ref}
      transition={{
        duration: 0.5
      }}
      className="my-24"
    >
      <motion.h2
        className="text-center text-3xl font-semibold"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        Latest Articles
      </motion.h2>

      <motion.div
        className="mt-12 grid gap-4 md:grid-cols-2"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {posts.map((post) => (
          <Card key={post.slug} post={post} />
        ))}
      </motion.div>

      <div className="my-8 flex items-center justify-center">
        <Link
          href="/blog"
          className={cn(
            buttonVariants({ variant: 'outline' }),
            'rounded-xl'
          )}
        >
          View All Articles
        </Link>
      </div>
    </motion.div>
  )
}

type CardProps = {
  post: Post
}

const Card = ({ post }: CardProps) => {
  const formattedDate = useFormattedDate(post.date)

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative rounded-xl p-2 shadow-feature-card"
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <PencilIcon className="size-4.5" />
          <h2>Article</h2>
        </div>
        <ArrowUpRightIcon className="size-4.5 opacity-0 transition-opacity group-hover:opacity-100" />
      </div>

      <BlurImage
        width={1200}
        height={630}
        src={post.coverImage}
        alt={post.title}
        className="rounded-lg"
      />

      <div className="flex items-center justify-between gap-2 px-2 pt-4 text-sm text-zinc-500">
        {formattedDate}
      </div>

      <div className="flex flex-col px-2 py-4 transition-transform ease-out group-hover:translate-x-0.5">
        <h3 className="text-2xl font-semibold">{post.title}</h3>
        <p className="mt-2 text-muted-foreground">{post.summary}</p>
      </div>
    </Link>
  )
}

export default LatestArticles
