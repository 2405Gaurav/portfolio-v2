'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useAnimate, useInView } from 'motion/react'
import BlurImage from '@/pc/blur-image' // Ensure this path matches your project structure

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

const GetInTouch = () => {
  // --- Animation Hooks ---
  const [scope, animate] = useAnimate()
  const cardsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardsRef, { once: true, margin: '-100px' })

  // --- Form State ---
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  // --- Form Handlers ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('Sending...')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (data.success) {
        setStatus('Message sent successfully ✅')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('Failed to send message ❌')
      }
    } catch (error) {
      setStatus('Something went wrong ❌')
    } finally {
      setIsSubmitting(false)
    }
  }

  // --- Animation Logic ---
  useEffect(() => {
    animate(
      [
        ['#pointer', { left: 200, top: 60 }, { duration: 0 }],
        ['#javascript', { opacity: 1 }, { duration: 0 }],
        ['#pointer', { left: 50, top: 102 }, { at: '+0.5', duration: 0.5, ease: 'easeInOut' }],
        ['#javascript', { opacity: 0.4 }, { at: '-0.3', duration: 0.1 }],
        ['#react-js', { opacity: 1 }, { duration: 0.3 }],
        ['#pointer', { left: 224, top: 170 }, { at: '+0.5', duration: 0.5, ease: 'easeInOut' }],
        ['#react-js', { opacity: 0.4 }, { at: '-0.3', duration: 0.1 }],
        ['#typescript', { opacity: 1 }, { duration: 0.3 }],
        ['#pointer', { left: 88, top: 198 }, { at: '+0.5', duration: 0.5, ease: 'easeInOut' }],
        ['#typescript', { opacity: 0.4 }, { at: '-0.3', duration: 0.1 }],
        ['#next-js', { opacity: 1 }, { duration: 0.3 }],
        ['#pointer', { left: 200, top: 60 }, { at: '+0.5', duration: 0.5, ease: 'easeInOut' }],
        ['#next-js', { opacity: 0.4 }, { at: '-0.3', duration: 0.1 }],
        ['#javascript', { opacity: 1 }, { duration: 0.3 }]
      ],
      { repeat: Number.POSITIVE_INFINITY }
    )
  }, [animate])

  // Hardcoded translations
  const translations = {
    imageAlt: 'Nelson Lai avatar',
    title: 'Get in Touch',
    description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
  }

  return (
    <motion.div
      className='relative flex flex-col gap-8 rounded-xl p-5 shadow-feature-card'
      initial='initial'
      animate={isInView ? 'animate' : 'initial'}
      variants={variants}
      ref={cardsRef}
      transition={{
        duration: 0.5
      }}
    >
      {/* Top Section: Avatar Animation & Info */}
      <div className="flex flex-col gap-12 md:flex-row">
        <div className='relative size-64 max-md:mx-auto shrink-0' ref={scope}>
          <BlurImage
            src='/images/itsme2.png'
            width={1024}
            height={1024}
            className='absolute top-1/2 left-1/2 size-20 -translate-1/2 rounded-3xl'
            alt={translations.imageAlt}
          />
          <div
            id='next-js'
            className='absolute bottom-12 left-14 rounded-3xl border bg-accent px-2 py-1.5 text-xs opacity-40'
          >
            Next.js
          </div>
          <div
            id='react-js'
            className='absolute top-20 left-2 rounded-3xl border bg-accent px-2 py-1.5 text-xs opacity-40'
          >
            React.js
          </div>
          <div
            id='typescript'
            className='absolute right-1 bottom-20 rounded-3xl border bg-accent px-2 py-1.5 text-xs opacity-40'
          >
            TypeScript
          </div>
          <div
            id='javascript'
            className='absolute top-10 right-8 rounded-3xl border bg-accent px-2 py-1.5 text-xs opacity-40'
          >
            JavaScript
          </div>

          <div id='pointer' className='absolute'>
            <svg
              width='16.8'
              height='18.2'
              viewBox='0 0 12 13'
              className='fill-red-500'
              stroke='white'
              strokeWidth='1'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676V5.50676Z'
              />
            </svg>
            <span className='relative left-4 rounded-3xl bg-red-500 px-2 py-0.5 text-xs text-white'>GT</span>
          </div>
        </div>

        <div className='flex flex-col justify-center px-4'>
          <p className='mb-2 bg-linear-to-r from-black to-black/70 bg-clip-text text-3xl font-semibold text-transparent dark:from-zinc-100 dark:to-zinc-400'>
            {translations.title}
          </p>
          <p className='text-zinc-800 dark:text-zinc-300'>{translations.description}</p>
         <div className='my-8'>
  <a
    href='https://mail.google.com/mail/?view=cm&fs=1&to=gauravthakur83551@gmail.com'
    target='_blank'
    rel='noopener noreferrer'
    className='rounded-full bg-email-button px-4 py-2 text-sm text-white'
  >
    gauravthakur83551@gmail.com
  </a>
</div>

        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-zinc-200 dark:bg-zinc-700" />

      {/* Bottom Section: Contact Form */}
      <div className='flex flex-col px-4 pb-4'>
        <p className='mb-6 text-lg font-medium text-zinc-800 dark:text-zinc-200'>
          Get in touch or fill the form with the Message and send me
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 md:flex-row">
            <input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-zinc-200 bg-transparent px-4 py-3 text-sm text-zinc-800 outline-none transition-all placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200/50 dark:border-zinc-700 dark:text-zinc-200 dark:focus:border-zinc-500 dark:focus:ring-zinc-700/50"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-zinc-200 bg-transparent px-4 py-3 text-sm text-zinc-800 outline-none transition-all placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200/50 dark:border-zinc-700 dark:text-zinc-200 dark:focus:border-zinc-500 dark:focus:ring-zinc-700/50"
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full resize-none rounded-xl border border-zinc-200 bg-transparent px-4 py-3 text-sm text-zinc-800 outline-none transition-all placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200/50 dark:border-zinc-700 dark:text-zinc-200 dark:focus:border-zinc-500 dark:focus:ring-zinc-700/50"
          />

          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-email-button px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50 md:w-auto"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {status && (
              <p className={`text-sm ${status.includes('success') ? 'text-green-600' : 'text-red-500'}`}>
                {status}
              </p>
            )}
          </div>
        </form>
      </div>
    </motion.div>
  )
}

export default GetInTouch