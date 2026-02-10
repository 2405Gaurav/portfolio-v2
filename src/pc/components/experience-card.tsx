'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Experience } from './experience-timeline'

interface ExperienceCardProps {
  experience: Experience
  isExpanded: boolean
  onToggleExpand: () => void
}

const ExperienceCard = ({ experience, isExpanded, onToggleExpand }: ExperienceCardProps) => {
  return (
    <motion.div
      layout
      className="group relative"
    >
      {/* Card Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl border border-neutral-700 group-hover:border-neutral-600 transition-colors" />

      {/* Gradient Accent */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${experience.color} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`} />

      {/* Content */}
      <div className="relative p-6 md:p-8">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{experience.company}</h3>
          <p className="text-sm text-neutral-400 font-medium uppercase tracking-wide">{experience.role}</p>
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-3 mb-4 text-sm text-neutral-400">
          <div className="flex items-center gap-1">
            <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r ${experience.color}`} />
            {experience.location}
          </div>
          <span className="text-neutral-600">•</span>
          <div>{experience.duration}</div>
        </div>

        {/* Description */}
        <p className="text-neutral-300 text-base leading-relaxed mb-6">
          {experience.description}
        </p>

        {/* Expandable Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-neutral-700">
                {/* Long Description */}
                {experience.longDescription && (
                  <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                    {experience.longDescription}
                  </p>
                )}

                {/* Technologies */}
                {experience.technologies && experience.technologies.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-3">Technologies & Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          className="px-3 py-1.5 rounded-full bg-neutral-800 border border-neutral-700 text-xs font-medium text-neutral-300 hover:border-neutral-600 hover:text-white transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand Button */}
        <motion.button
          onClick={onToggleExpand}
          className="mt-6 flex items-center gap-2 text-sm font-medium text-amber-500 hover:text-amber-400 transition-colors group/btn"
        >
          <span>{isExpanded ? 'Show less' : 'Read more'}</span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.button>
      </div>

      {/* Hover Effect Border */}
      <motion.div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${experience.color} opacity-0 group-hover:opacity-20 pointer-events-none blur-xl -z-10`}
        animate={{ opacity: isExpanded ? 0.15 : 0 }}
      />
    </motion.div>
  )
}

export default ExperienceCard