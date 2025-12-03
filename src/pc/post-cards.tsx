import type { Post } from '@/constants/posts'

import { Link } from '@/pc/components/link'
import BlurImage from '@/pc/blur-image'
import { format } from 'date-fns'

type PostCardsProps = {
  posts: Post[]
}

type PostCardProps = Post

const PostCards = (props: PostCardsProps) => {
  const { posts } = props

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {posts.map((post) => (
        <PostCard key={post.slug} {...post} />
      ))}
    </div>
  )
}

const PostCard = (props: PostCardProps) => {
  const { slug, title, summary, date } = props

  // Server-safe date formatting
  const formattedDate = format(new Date(date), 'PPP')

  return (
    <Link href={`/blog/${slug}`} className="group rounded-xl px-2 py-4 shadow-feature-card">
      <BlurImage
        src={`/images/blog/${slug}/cover.png`}
        className="rounded-lg"
        width={1200}
        height={630}
        imageClassName="transition-transform group-hover:scale-105"
        alt={title}
      />

      <div className="flex items-center justify-between gap-2 px-2 pt-4 text-sm text-zinc-500">
        {formattedDate}
        {/* Removed view/like queries (they require client hooks) */}
      </div>

      <div className="flex flex-col px-2 py-4">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{summary}</p>
      </div>
    </Link>
  )
}

export default PostCards
