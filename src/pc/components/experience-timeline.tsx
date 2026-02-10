'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import ExperienceCard from './experience-card'

export interface Experience {
  id: string
  company: string
  role: string
  location: string
  duration: string
  description: string
  longDescription?: string
  technologies?: string[]
  icon?: string
  color: string
}

const experiences: Experience[] = [
  {
    id: '1',
    company: 'DripVive Creative',
    role: 'Full Stack Developer Intern',
    location: 'Remote',
    duration: 'Jan 2025 - April 2025',
    description:
      'Building full-stack applications with modern web technologies. Developing responsive interfaces and robust backend systems.',
    longDescription:
      'At DripVive Creative, I work on full-stack development projects, focusing on creating seamless user experiences and scalable backend architectures. Worked with Next.js, React, and Node.js to deliver high-quality web applications.',
    technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: '2',
    company: 'ISTE',
    role: 'Tech Under Secretary',
    location: 'Chandigarh University, India',
    duration: 'April 2025 - Present',
    description:
      'Leading technical initiatives and organizing tech events. Managing teams and coordinating workshops and hackathons.',
    longDescription:
      'As Tech Under Secretary at ISTE, I oversee the technical direction of various initiatives. Responsible for organizing coding competitions, technical workshops, and mentoring fellow developers.',
    technologies: ['Event Management', 'Team Leadership', 'Technical Planning'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: '3',
    company: 'ISTE CUSB',
    role: 'Core Committee Member',
    location: 'Chandigarh University, India',
    duration: 'April 2025 - Present',
    description:
      'Contributing to the growth of student community. Organizing events and fostering collaboration among developers.',
    longDescription:
      'Active member of ISTE CUSB (Christ University Student Branch) core committee. Participate in organizing technical talks, coding events, and mentorship programs for students.',
    technologies: ['Community Building', 'Event Organization', 'Mentoring'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: '4',
    company: 'Self-Employed',
    role: 'Freelance Developer',
    location: 'Remote',
    duration: 'Dec 2025 - Present',
    description:
      'Taking on freelance projects for startups and small businesses. Building custom web solutions and consulting on technical decisions.',
    longDescription:
      'Running a freelance development business where I work with clients to deliver tailored web applications. Specializing in full-stack development, UI/UX implementation, and technical consultation.',
    technologies: ['Web Development', 'UI/UX Design', 'Client Consultation', 'Project Management'],
    color: 'from-orange-500 to-red-500'
  }
]

const ExperienceTimeline = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set())
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const newVisible = new Set(visibleItems)
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            newVisible.add(entry.target.id)
          }
        })
        setVisibleItems(newVisible)
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    const items = containerRef.current?.querySelectorAll('[data-experience-item]')
    items?.forEach(item => observer.observe(item))

    return () => observer.disconnect()
  }, [visibleItems])

  return (
    <div className="relative w-full">
      {/* Timeline Container */}
      <div ref={containerRef} className="max-w-4xl mx-auto px-4 py-12">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-amber-500 to-transparent" />

        <div className="space-y-8 md:space-y-16">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              id={experience.id}
              data-experience-item
              initial={{ opacity: 0, y: 50 }}
              animate={
                visibleItems.has(experience.id)
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 50 }
              }
              transition={{
                duration: 0.6,
                delay: visibleItems.has(experience.id) ? 0 : 0.2
              }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Content */}
              <div className={`w-full ${index % 2 === 0 ? 'md:w-1/2 md:pr-12' : 'md:w-1/2 md:pl-12'}`}>
                <ExperienceCard
                  experience={experience}
                  isExpanded={expandedId === experience.id}
                  onToggleExpand={() =>
                    setExpandedId(expandedId === experience.id ? null : experience.id)
                  }
                />
              </div>

              {/* Timeline Dot */}
              <div className="hidden md:flex w-full md:w-auto items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={visibleItems.has(experience.id) ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className={`relative w-6 h-6 rounded-full border-4 border-neutral-950 bg-gradient-to-br ${experience.color} shadow-lg`}
                >
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${experience.color} opacity-30`}
                  />
                </motion.div>
              </div>

              {/* Mobile Dot */}
              <div className="md:hidden flex justify-start ml-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={visibleItems.has(experience.id) ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className={`relative w-5 h-5 rounded-full border-3 border-neutral-950 bg-gradient-to-br ${experience.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="flex justify-center mt-8"
      >
        <ChevronDown className="w-6 h-6 text-neutral-500" />
      </motion.div>
    </div>
  )
}

export default ExperienceTimeline