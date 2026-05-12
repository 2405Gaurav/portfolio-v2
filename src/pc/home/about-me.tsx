'use client'

import { buttonVariants } from '@/pc/components/button'
import { Link } from '@/pc/components/link'
import { cn } from '@/lib/utils'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

import CurrentBike from './coding-hours'
import Connect from './connect'
import FavoriteFramework from './favorite-framework'
import LocationCard from './location-card'
import StacksCard from './stacks-card'

import GithubContributionsBox from "../components/githubcontri"

const variants = {
  initial: {
    y: 40,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1
  }
}

const AboutMe = () => {
  const cardsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardsRef, { once: true, margin: '-100px' })

  return (
    <motion.div
      initial='initial'
      animate={isInView ? 'animate' : 'initial'}
      variants={variants}
      ref={cardsRef}
      transition={{
        duration: 0.5
      }}
      className='relative my-24'
    >
      <motion.h2
        className='text-center text-3xl font-semibold'
        initial={{
          y: 30,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.3
        }}
      >
        About Me
      </motion.h2>
      <motion.div
        className='mt-12 grid gap-4'
        initial={{
          y: 40,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.3
        }}
      >
        {/* Top row: Location + Connect */}
        <div className='grid gap-4 md:grid-cols-2'>
          <LocationCard />
          <Connect />
        </div>
        {/* Bottom row: Tech Stack (large) + Open to Work (small) + Currently Learning (small) */}
        <div className='grid gap-4 grid-cols-1 md:grid-cols-[1fr_auto_auto]'>
          <StacksCard />
          <div className='md:w-52'>
            <CurrentBike />
          </div>
          <div className='md:w-44'>
            <FavoriteFramework />
          </div>
        </div>
      </motion.div>
      <div className='py-3'>
        
            <GithubContributionsBox/>
      </div>
      <div className='my-8 flex items-center justify-center'>
        <Link href='/about' className={cn(buttonVariants({ variant: 'outline' }), 'rounded-xl')}>
          Learn More About Me
        </Link>
      </div>
    </motion.div>
  )
}

export default AboutMe
