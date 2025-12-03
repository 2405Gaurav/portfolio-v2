import type { Metadata } from 'next'
import type { BlogPosting, WithContext } from 'schema-dts'

import { POSTS, getPostBySlug } from '@/constants/posts'
import { notFound } from 'next/navigation'

import BlogFooter from '@/pc/blog/blog-footer'
import BlogHeader from '@/pc/blog/blog-header'
import LikeButton from '@/pc/blog/like-button'
import ProgressBar from '@/pc/blog/progress-bar'
import CommentSection from '@/pc/comment-section'
import JsonLd from '@/pc/json-ld'
import { MY_NAME } from '@/lib/constants'
import { getBaseUrl } from '@/utils/get-base-url'

// ----------------------------------------
// 1. STATIC PARAMS — BASED ON POSTS ARRAY
// ----------------------------------------
export const generateStaticParams = () => {
  return POSTS.map((post) => ({
    slug: post.slug
  }))
}

// ----------------------------------------
// 2. METADATA — NOW SIMPLE + STATIC
// ----------------------------------------
export const generateMetadata = async ({
  params
}: {
  params: { slug: string }
}): Promise<Metadata> => {
  const { slug } = params
  const post = getPostBySlug(slug)

  if (!post) return {}

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.modifiedTime,
      images: [
        {
          url: post.coverImage
        }
      ]
    }
  }
}

// ----------------------------------------
// 3. BLOG PAGE — NO MDX, NO TOC
// ----------------------------------------
export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  const url = `/blog/${slug}`
  const baseUrl = getBaseUrl()

  // JSON-LD (still useful)
  const jsonLd: WithContext<BlogPosting> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    image: post.coverImage,
    datePublished: post.date,
    dateModified: post.modifiedTime,
    author: {
      '@type': 'Person',
      name: MY_NAME,
      url: baseUrl
    },
    publisher: {
      '@type': 'Person',
      name: MY_NAME,
      url: baseUrl
    },
    inLanguage: 'en'
  }

  return (
    <>
      <JsonLd json={jsonLd} />

      <BlogHeader post={post} />

      <div className="mt-8 flex flex-col justify-between lg:flex-row">
        {/* ARTICLE CONTENT — SINCE NO MDX, USE TITLE + SUMMARY */}
        <article className="w-full lg:max-w-2xl space-y-6">
          <h1 className="text-4xl font-bold">{post.title}</h1>

          <p className="text-muted-foreground text-lg">{post.summary}</p>

          <img
            src={post.coverImage}
            alt={post.title}
            className="rounded-xl shadow"
          />

          <p className="text-sm text-zinc-500">
            Published on {post.date}
          </p>
        </article>

        <aside className="w-full lg:w-68">
          <div className="sticky top-24">
            <LikeButton slug={slug} />
          </div>
        </aside>
      </div>

      <ProgressBar />

      <BlogFooter post={post} />

      <CommentSection slug={slug} />
    </>
  )
}
