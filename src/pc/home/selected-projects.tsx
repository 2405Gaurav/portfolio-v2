'use client'

import { ArrowUpRightIcon, LightbulbIcon } from 'lucide-react'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { type Project } from '@/constants/projects'
import { cn } from '@/lib/utils'

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

type CardProps = {
  project: Project
}

type SelectedProjectsProps = {
  projects: Project[]
}

const SelectedProjects = (props: SelectedProjectsProps) => {
  const { projects } = props
  const projectsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(projectsRef, { once: true, margin: '-100px' })

  return (
    <motion.div
      initial='initial'
      animate={isInView ? 'animate' : 'initial'}
      variants={variants}
      ref={projectsRef}
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
        Selected Projects
      </motion.h2>
      <motion.div
        className='mt-12 grid gap-4 md:grid-cols-2'
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
        {projects.map((project) => (
          <Card key={project.slug} project={project} />
        ))}
      </motion.div>
      <div className='my-8 flex items-center justify-center'>
        <Link
          href='/projects'
          className={cn(
            'inline-flex items-center justify-center rounded-xl border border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50'
          )}
        >
          View All Projects
        </Link>
      </div>
    </motion.div>
  )
}

const Card = (props: CardProps) => {
  const { project } = props
  const { slug, name, description, coverImage } = project

  return (
    <Link 
      href={`/projects/${slug}`} 
      className='group relative overflow-hidden rounded-xl shadow-feature-card transition-transform hover:scale-[1.02]'
    >
      <div className='flex items-center justify-between p-4 relative z-10'>
        <div className='flex items-center gap-3'>
          <LightbulbIcon className='size-[18px]' />
          <h2 className='text-sm font-medium'>Featured Project</h2>
        </div>
        <ArrowUpRightIcon className='size-[18px] opacity-0 transition-opacity group-hover:opacity-100' />
      </div>
      
      <div className='relative'>
        <Image
          width={1200}
          height={630}
          src={coverImage}
          alt={description}
          className='rounded-lg w-full h-auto'
          priority
        />
        
        {/* Gradient overlay for better text visibility */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-lg' />
        
        {/* Text content */}
        <div className='absolute bottom-0 left-0 right-0 p-6 transition-all duration-300 group-hover:pb-8'>
          <h3 className='text-2xl font-semibold text-white mb-2'>{name}</h3>
          <p className='text-sm text-gray-200 line-clamp-2'>{description}</p>
        </div>
      </div>
    </Link>
  )
}

export default SelectedProjects