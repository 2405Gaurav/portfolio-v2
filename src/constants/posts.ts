export type Post = {
  slug: string
  title: string
  date: string
  modifiedTime: string
  summary: string
  coverImage: string
}

export const POSTS: Post[] = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js 15',
    date: '2024-03-15',
    modifiedTime: '2024-03-15',
    summary:
      'A comprehensive guide to building modern web applications with Next.js 15 and the App Router.',
    coverImage: '/images/blog/getting-started-with-nextjs/cover.png'
  },
  {
    slug: 'typescript-best-practices',
    title: 'TypeScript Best Practices for 2024',
    date: '2024-02-20',
    modifiedTime: '2024-02-22',
    summary:
      'Learn the best practices and patterns for writing clean, maintainable TypeScript code.',
    coverImage: '/images/blog/typescript-best-practices/cover.png'
  },
  {
    slug: 'building-scalable-apis',
    title: 'Building Scalable REST APIs',
    date: '2024-01-10',
    modifiedTime: '2024-01-10',
    summary:
      'Design patterns and architecture decisions for building robust, scalable APIs.',
    coverImage: '/images/blog/building-scalable-apis/cover.png'
  }
]

// -------------------------
// SORTED POSTS (latest first)
// -------------------------
export const getLatestPosts = (limit?: number): Post[] => {
  const sorted = [...POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return limit ? sorted.slice(0, limit) : sorted
}

// -------------------------
// FIND POST BY SLUG
// -------------------------
export const getPostBySlug = (slug: string): Post | undefined => {
  return POSTS.find((post) => post.slug === slug)
}
