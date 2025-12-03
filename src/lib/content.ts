import 'server-only'

import { POSTS } from '@/constants/posts'
import { PROJECTS } from '@/constants/projects'

export const getLatestPosts = (limit: number = POSTS.length) => {
  return POSTS
    .toSorted((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    .slice(0, limit)
}

export const getLatestProjects = (limit: number = PROJECTS.length) => {
  return PROJECTS
    .toSorted((a, b) => {
      return new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime()
    })
    .slice(0, limit)
}

export const getSelectedProjects = () => {
  return PROJECTS.filter((project) => project.selected)
}

export const getPostBySlug = (slug: string) => {
  return POSTS.find((p) => p.slug === slug)
}

export const getProjectBySlug = (slug: string) => {
  return PROJECTS.find((p) => p.slug === slug)
}