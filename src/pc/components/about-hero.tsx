'use client'

import { motion } from 'motion/react'
import BlurImage from '@/pc/blur-image'
import { MY_NAME } from '@/lib/constants'

const AboutHeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='relative flex flex-col sm:flex-row items-center gap-8 rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 p-6 sm:p-8 backdrop-blur-sm shadow-feature-card'
    >
      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className='relative shrink-0'
      >
        <div className='relative size-32 sm:size-40'>
          <BlurImage
            src='/images/itsme4.png'
            className='size-32 sm:size-40 rounded-2xl object-cover'
            width={160}
            height={160}
            alt={`${MY_NAME}'s photo`}
            lazy={false}
          />
          {/* Glow effect behind image */}
          <div className='absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-purple-500/30 to-orange-500/30 blur-2xl' />
        </div>
        {/* Status indicator */}
        <div className='absolute -bottom-2 -right-2 flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium shadow-sm'>
          <span className='size-2 rounded-full bg-emerald-500 animate-pulse' />
          Open to collab
        </div>
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='flex flex-col gap-3 text-center sm:text-left'
      >
        <h2 className='text-2xl sm:text-3xl font-bold tracking-tight'>
          Hey, I&apos;m {MY_NAME} 👋
        </h2>
        <p className='text-muted-foreground leading-relaxed max-w-lg'>
          I&apos;m a Full Stack Engineer who loves building products that people actually want to use. 
          I care deeply about clean code, great UX, and shipping fast.
        </p>
        <div className='flex flex-wrap items-center gap-2 mt-1 justify-center sm:justify-start'>
          {['TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL'].map((tech) => (
            <span
              key={tech}
              className='rounded-full border border-border/50 bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground hover:border-border'
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default AboutHeroSection
