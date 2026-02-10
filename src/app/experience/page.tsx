"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Calendar, MapPin } from "lucide-react";

// --- Types ---
export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  duration: string;
  description: string;
  longDescription?: string;
  technologies?: string[];
  color: string;
}

// --- Data ---
const experiences: Experience[] = [
  {
    id: "1",
    company: "DripVive Creative",
    role: "Full Stack Developer Intern",
    location: "Remote",
    duration: "Jan 2025 - April 2025",
    description:
      "Building full-stack applications with modern web technologies. Developing responsive interfaces and robust backend systems.",
    longDescription:
      "At DripVive Creative, I work on full-stack development projects, focusing on creating seamless user experiences and scalable backend architectures. Worked with Next.js, React, and Node.js to deliver high-quality web applications.",
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "2",
    company: "ISTE",
    role: "Tech Under Secretary",
    location: "Chandigarh University, India",
    duration: "April 2025 - Present",
    description:
      "Leading technical initiatives and organizing tech events. Managing teams and coordinating workshops and hackathons.",
    longDescription:
      "As Tech Under Secretary at ISTE, I oversee the technical direction of various initiatives. Responsible for organizing coding competitions, technical workshops, and mentoring fellow developers.",
    technologies: ["Event Management", "Team Leadership", "Technical Planning"],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "3",
    company: "ISTE CUSB",
    role: "Core Committee Member",
    location: "Chandigarh University, India",
    duration: "April 2025 - Present",
    description:
      "Contributing to the growth of student community. Organizing events and fostering collaboration among developers.",
    longDescription:
      "Active member of ISTE CUSB (Christ University Student Branch) core committee. Participate in organizing technical talks, coding events, and mentorship programs for students.",
    technologies: ["Community Building", "Event Organization", "Mentoring"],
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "4",
    company: "Self-Employed",
    role: "Freelance Developer",
    location: "Remote",
    duration: "Dec 2025 - Present",
    description:
      "Taking on freelance projects for startups and small businesses. Building custom web solutions and consulting on technical decisions.",
    longDescription:
      "Running a freelance development business where I work with clients to deliver tailored web applications. Specializing in full-stack development, UI/UX implementation, and technical consultation.",
    technologies: [
      "Web Development",
      "UI/UX Design",
      "Client Consultation",
      "Project Management",
    ],
    color: "from-orange-500 to-red-500",
  },
];

// --- Sub-Component: Experience Card ---
interface ExperienceCardProps {
  experience: Experience;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

const ExperienceCard = ({
  experience,
  isExpanded,
  onToggleExpand,
}: ExperienceCardProps) => {
  return (
    <motion.div
      layout
      className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 transition-colors duration-300"
    >
      {/* Subtle Gradient Accent on Hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${experience.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`}
      />

      <div className="relative p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-col gap-1 mb-4">
          <h3 className="text-2xl font-bold text-neutral-100 tracking-tight">
            {experience.company}
          </h3>
          <p
            className={`text-sm font-medium bg-gradient-to-r ${experience.color} bg-clip-text text-transparent w-fit uppercase tracking-wider`}
          >
            {experience.role}
          </p>
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-4 mb-5 text-sm text-neutral-500">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            {experience.location}
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {experience.duration}
          </div>
        </div>

        {/* Description */}
        <p className="text-neutral-400 leading-relaxed text-base">
          {experience.description}
        </p>

        {/* Expandable Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="pt-6 mt-6 border-t border-neutral-800">
                {experience.longDescription && (
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                    {experience.longDescription}
                  </p>
                )}

                {experience.technologies && (
                  <div>
                    <h4 className="text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-neutral-800/80 border border-neutral-700/50 text-xs font-medium text-neutral-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand Button */}
        <button
          onClick={onToggleExpand}
          className="mt-6 flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors group/btn"
        >
          <span>{isExpanded ? "Collapse" : "Read details"}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
    </motion.div>
  );
};

// --- Main Component: Experience Timeline ---
export default function ExperienceTimeline() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);

  // FIXED: Added 'as const' to ease property to solve TypeScript error
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const newVisible = new Set(visibleItems);
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            newVisible.add(entry.target.id);
          }
        });
        setVisibleItems(newVisible);
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    const items = containerRef.current?.querySelectorAll(
      "[data-experience-item]"
    );
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [visibleItems]);

  return (
    <section className="relative w-full py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section with First Launch Effect */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headerVariants}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-5xl font-bold tracking-tight text-foreground mb-4">
            Experience.
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl leading-relaxed">
            A timeline of my professional journey, building software and
            community.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative">
          {/* Vertical Line - Clean & Minimal */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-neutral-700 to-transparent ml-4 md:ml-0" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                id={experience.id}
                data-experience-item
                initial={{ opacity: 0, y: 30 }}
                animate={
                  visibleItems.has(experience.id)
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: visibleItems.has(experience.id) ? 0 : 0.2,
                }}
                className={`flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 mt-8 md:mt-0 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={
                      visibleItems.has(experience.id)
                        ? { scale: 1 }
                        : { scale: 0 }
                    }
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className={`w-3 h-3 rounded-full bg-gradient-to-r ${experience.color} ring-4 ring-neutral-950 z-10`}
                  />
                </div>

                {/* Content Card Wrapper */}
                <div
                  className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <ExperienceCard
                    experience={experience}
                    isExpanded={expandedId === experience.id}
                    onToggleExpand={() =>
                      setExpandedId(
                        expandedId === experience.id ? null : experience.id
                      )
                    }
                  />
                </div>

                {/* Empty spacer for the other side of the timeline */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 5, 0] }}
          transition={{ delay: 2, duration: 2, repeat: Infinity }}
          className="flex justify-center mt-16"
        >
          <ChevronDown className="w-5 h-5 text-neutral-600" />
        </motion.div>
      </div>
    </section>
  );
}