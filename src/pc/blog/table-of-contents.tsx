'use client'

import type { TOC } from '@/mdx-plugins'

import { SegmentGroup, SegmentGroupItem } from '@/pc/components/segment-group'
import { useRouter } from 'next/navigation'

import { useScrollspy } from '@/hooks/use-scrollspy'

type TableOfContentsProps = {
  toc: TOC[]
}

const TableOfContents = (props: TableOfContentsProps) => {
  const { toc } = props
  const activeId = useScrollspy(
    toc.map((item) => item.url),
    { rootMargin: '0% 0% -80% 0%' }
  )
  const router = useRouter()

  return (
    <div className='hidden pl-4 lg:block'>
      <div className='mb-4'>On this page</div>
      <SegmentGroup
        orientation='vertical'
        value={activeId}
        onValueChange={(details) => {
          router.push(`#${details.value}`)
        }}
        className='text-sm'
      >
        {toc.map((item) => (
          <SegmentGroupItem
            key={item.url}
            value={item.url}
            style={{
              paddingLeft: (item.depth - 1) * 12
            }}
          >
            {item.title}
          </SegmentGroupItem>
        ))}
      </SegmentGroup>
    </div>
  )
}

export default TableOfContents