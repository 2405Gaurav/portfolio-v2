import { useMDXComponent } from '@content-collections/mdx/react'
import { CodeBlock } from '@/pc/components/code-block'
import { Link } from '@/pc/components/link'
import BlurImage from '@/pc/blur-image'
import '@/app/image-zoom.css'

import Heading from './heading'
import ItemGrid from './item-grid'
import LinkCard from './link-card'
import Logo from './logo'
import Table from './table'
import TreeView from './tree-view'

type MdxProps = {
  code: string
}

const components = {
  h2: (props: React.ComponentProps<'h2'>) => <Heading as='h2' {...props} />,
  h3: (props: React.ComponentProps<'h3'>) => <Heading as='h3' {...props} />,
  h4: (props: React.ComponentProps<'h4'>) => <Heading as='h4' {...props} />,
  h5: (props: React.ComponentProps<'h5'>) => <Heading as='h5' {...props} />,
  h6: (props: React.ComponentProps<'h6'>) => <Heading as='h6' {...props} />,
  a: (props: React.ComponentProps<'a'>) => {
    const { children, href, ...rest } = props

    if (!href) return <a {...props}>{children}</a>

    return (
      <Link 
        className='text-anchor no-underline transition-colors hover:text-foreground' 
        href={href}
        {...rest}
      >
        {children}
      </Link>
    )
  },
  Image: (props: React.ComponentProps<typeof BlurImage>) => {
    const { alt, ...rest } = props

    return (
      <>
        <BlurImage className='rounded-lg border image-zoom' alt={alt} {...rest} />
        <figcaption className='mt-4 text-center'>{alt}</figcaption>
      </>
    )
  },
  pre: CodeBlock,

  // Custom components
  Table,
  ItemGrid,
  LinkCard,
  Logo,
  TreeView
}

const Mdx = (props: MdxProps) => {
  const { code } = props
  const MDXContent = useMDXComponent(code)

  return (
    <div className='prose w-full'>
      <MDXContent components={components} />
    </div>
  )
}

export default Mdx