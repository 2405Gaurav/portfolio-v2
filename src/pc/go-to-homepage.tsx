'use client'

import { buttonVariants } from '@/pc/components/button'
import { Link } from '@/pc/components/link'

const GoToHomepage = () => {
  return (
    <Link href='/' className={buttonVariants()}>
      Go to Homepage
    </Link>
  )
}

export default GoToHomepage