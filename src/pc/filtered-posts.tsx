'use client'

import type { Post } from '@/constants/posts'

import { Input } from '@/pc/components/input'
import { Label } from '@/pc/components/label'
import { SearchIcon } from 'lucide-react'
import { useState } from 'react'

import PostCards from './post-cards'

type FilteredPostsProps = {
  posts: Post[]
}

const FilteredPosts = (props: FilteredPostsProps) => {
  const { posts } = props
  const [searchValue, setSearchValue] = useState('')

  // Hardcoded translations
  const translations = {
    searchPlaceholder: 'Search posts...',
    noPostsFound: 'No posts found'
  }

  const filteredPosts = posts.filter((post) => post.title.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <>
      <div className='relative mb-8'>
        <Input
          type='text'
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value)
          }}
          placeholder={translations.searchPlaceholder}
          aria-label={translations.searchPlaceholder}
          className='w-full pl-12'
          id='search'
        />
        <Label htmlFor='search'>
          <SearchIcon className='absolute top-1/2 left-4 size-4 -translate-y-1/2' />
        </Label>
      </div>
      {filteredPosts.length === 0 && (
        <div className='my-24 text-center text-xl'>{translations.noPostsFound}</div>
      )}
      <PostCards posts={filteredPosts} />
    </>
  )
}

export default FilteredPosts