'use client'

import type { Post } from '@/constants/posts'
import { Link } from '@/pc/components/link'
import { useFormattedDate } from '@/hooks/use-formatted-date'

type BlogFooterProps = {
  post: Post
}

const BlogFooter = ({ post }: BlogFooterProps) => {
  const formattedDate = useFormattedDate(post.modifiedTime)

  // Optional GitHub link (this is now generic — no locale)
  const editURL = `https://github.com/yourusername/yourrepo/edit/main/content/${post.slug}.mdx`

  return (
    <div className="my-8 flex w-full items-center justify-between py-4 text-sm">
      <Link href={editURL} className="text-muted-foreground hover:underline">
        Edit this article on GitHub
      </Link>

      <div className="text-muted-foreground">
        Last updated: {formattedDate}
      </div>
    </div>
  )
}

export default BlogFooter
