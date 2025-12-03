import { POSTS } from '@/constants/posts'
import { PROJECTS } from '@/constants/projects'

export const getPathnames = () => {
  return [
    '/',  
    '/blog',
    '/projects',
    '/guestbook',
    '/dashboard',

    // Generate blog post paths
    ...POSTS.map((post) => `/blog/${post.slug}`),

    // Generate project paths
    ...PROJECTS.map((project) => `/projects/${project.slug}`)
  ]
}
