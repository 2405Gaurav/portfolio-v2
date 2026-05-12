export type Project = {
  slug: string
  name: string
  description: string
  homepage?: string
  github: string
  techstack: string[]
  selected: boolean
  featured?: boolean
  dateCreated: string
  coverImage: string
}

export const PROJECTS: Project[] = [
  {
    slug: 'deeprecall',
    name: 'DeepRecall — AI Flashcard Engine',
    description:
      'Turn any PDF into a smart, practice-ready flashcard deck. Built for the Cuemath AI Builder Challenge, DeepRecall uses Google Gemini to generate teacher-quality flashcards with SM-2 inspired spaced repetition, 3D card flips, streak tracking with 13 milestone badges, confetti celebrations, and a full analytics dashboard. Features active recall, growing review intervals, mascot reactions, and gamification that makes learning addictive.',
    homepage: 'https://deeprecallcm.thegauravthakur.in/',
    github: 'https://github.com/2405Gaurav/DeepRecall---PDF-to-smart-Flashcards',
    techstack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Gemini API', 'Spaced Repetition'],
    selected: true,
    featured: true,
    dateCreated: '2026-04-15',
    coverImage: '/project-image/deeprecall.png'
  },
  {
    slug: 'golf-charity-platform',
    name: 'Golf Charity Subscription Platform',
    description:
      'A production-grade subscription platform combining golf performance tracking, charity allocation, and a probabilistic reward engine. Built with Next.js, Prisma, and PostgreSQL, it features Razorpay-based payments, a weighted draw system, rolling score logic (latest 5 entries), and an admin control panel for simulations and payout verification. Designed to model real-world financial flows and user engagement loops.',
    homepage: 'https://digitalhero-golf.thegauravthakur.in/',
    github: 'https://github.com/2405Gaurav/production-golf-site',
    techstack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Razorpay', 'Tailwind CSS'],
    selected: false,
    dateCreated: '2026-03-01',
    coverImage: '/project-image/golf.png'
  },
  {
    slug: 'nextflow',
    name: 'NextFlow — LLM Workflow Builder',
    description:
      'A visual DAG-based workflow builder for designing and executing multimodal LLM pipelines. Features a React Flow canvas, type-safe node connections, and a custom execution engine using topological sorting with parallel branch execution. Integrates Gemini APIs, Trigger.dev for async compute (FFmpeg, Sharp), and PostgreSQL for persistence. Supports import/export, execution history, and real-time node state tracking.',
    homepage: 'https://nextflow-galaxyai.thegauravthakur.in/',
    github: 'https://github.com/2405Gaurav',
    techstack: ['Next.js', 'TypeScript', 'React Flow', 'Zustand', 'Trigger.dev', 'PostgreSQL', 'Gemini API'],
    selected: true,
    featured: true,
    dateCreated: '2026-03-20',
    coverImage: '/project-image/nextflow.png'
  },
  
  {
    slug: 'placementgpt',
    name: 'PlacementGPT — AI Placement Mentor',
    description:
      'A multi-mode AI interview preparation system tailored for Indian placements. Built using Gemini 2.0 Flash and Vercel AI SDK, it supports DSA interviews, HR evaluation, mock interview simulations, and resume analysis. Uses structured prompt engineering to simulate real interview environments with scoring, feedback loops, and role-specific evaluation metrics.',
    homepage: 'https://thinkly-chatbot.thegauravthakur.in/',
    github: 'https://github.com/2405Gaurav/thinkly-chatbot-',
    techstack: ['Next.js', 'TypeScript', 'Gemini API', 'Vercel AI SDK', 'Tailwind CSS'],
    selected: false,
    dateCreated: '2026-02-25',
    coverImage: '/project-image/placementgpt.png'
  },
  {
    slug: 'tars-chat',
    name: 'Tars Chat — Real-time Messaging System',
    description:
      'A real-time chat application built with Convex for reactive backend infrastructure. Supports one-on-one and group messaging, typing indicators, presence tracking, message reactions, and unread state management. Implements event-driven updates, optimistic UI patterns, and responsive layouts for production-grade chat UX.',
    homepage: 'https://tarschat.thegauravthakur.in',
    github: 'https://github.com/2405Gaurav/Tars-Chat_Assignment',
    techstack: ['Next.js', 'TypeScript', 'Convex', 'Clerk', 'Tailwind CSS', 'Realtime Systems'],
    selected: false,
    dateCreated: '2026-02-10',
    coverImage: '/project-image/tars.png'
  },

  {
    slug: 'interviewprep-ai',
    name: 'InterviewPrep.AI (PREPGT)',
    description:
      'A distributed AI interview system using LangChain and LangGraph for orchestrating structured interview pipelines. Includes resume analysis, coding IDE integration, behavioral evaluation, and LLM-based scoring. Built with a Go microservice backend and MongoDB, enabling scalable, modular AI-driven interview workflows.',
    homepage: 'https://interview-prep-gt.vercel.app/',
    github: 'https://github.com/2405Gaurav/prepgt',
    techstack: [
      'React',
      'Go',
      'MongoDB',
      'LangChain',
      'LangGraph',
      'Gemini API',
      'REST APIs'
    ],
    selected: false,
    dateCreated: '2026-02-01',
    coverImage: '/project-image/prepgt.png'
  },

  {
    slug: 'divide-and-conquer',
    name: 'Divide and Conquer',
    description:
      'A real-time expense sharing system with optimized settlement algorithms. Built on Convex with event-driven architecture and Inngest for background processing. Features automated insights, notification workflows, and minimized transaction graphs for efficient debt resolution.',
    homepage: 'https://dac-gt.thegauravthakur.in/',
    github: 'https://github.com/2405Gaurav/Divide-and-Conquer',
    techstack: [
      'Next.js',
      'Convex',
      'Inngest',
      'Event-driven Architecture',
      'WebSockets'
    ],
    selected: false,
    dateCreated: '2026-02-05',
    coverImage: '/project-image/divide-conquer.png'
  },

  {
    slug: 'juryx',
    name: 'JuryX - Blockchain Hackathon Management',
    description:
      'A decentralized hackathon judging platform using Solidity smart contracts for immutable scoring. Ensures tamper-proof evaluation with weighted judge metrics, on-chain verification, and real-time leaderboards. Designed to eliminate bias and enforce trustless decision-making.',
    homepage: 'https://gt-juryx.thegauravthakur.in/',
    github: 'https://github.com/2405Gaurav/GT-juryx',
    techstack: ['Next.js', 'Solidity', 'Blockchain', 'IPFS', 'Docker', 'AWS'],
    selected: false,
    dateCreated: '2024-11-20',
    coverImage: '/project-image/jrx.png'
  },
    {
    slug: 'Code-And-Collab',
    name: 'Code & Collab',
    description:
      'Code & Collab is a collaborative coding platform that enables developers to work together in real-time on shared projects. It features live code editing, version control integration, and seamless collaboration tools for teams of all sizes.',
    homepage: 'https://code-collab.thegauravthakur.in/',
    github: 'https://github.com/2405Gaurav/Collab-And-Code',
    techstack: ['Next.js', 'Firebase-Auth', 'Firebase', 'TypeScript', 'Tailwind CSS', 'RealtimeDB','AWS'],
    selected: false,
    dateCreated: '2025-11-20',
    coverImage: '/project-image/codecollab.png'
  },

  {
    slug: 'voicademy',
    name: 'Voicademy',
    description:
      'Voicademy is an AI-powered personal learning assistant designed to help students study smarter and learn faster. It offers voice-interactive sessions, dynamic note generation, concept explanations, and personalized learning recommendations. Built to replicate the feel of having a private tutor available 24/7, Voicademy transforms the traditional study workflow into an intelligent, adaptive experience tailored to each learner.',
    homepage: 'https://voicademy.thegauravthakur.in/',
    github: 'https://github.com/2405Gaurav/Study-AI',
    techstack: ['Next.js', 'AI/ML', 'TypeScript', 'Tailwind CSS','Vapi','Supabase','Clerk'],
    selected: false,
    dateCreated: '2024-01-15',
    coverImage: '/project-image/ai-study.png'
  },

  {
    slug: 'gtools',
    name: 'GTools – The Best Online Tools',
    description:
      'GTools is a comprehensive suite of modern, fast, and beautifully crafted online tools built to enhance productivity. From file converters to code formatters and utility applications, every tool is designed with precision, accessibility, and performance in mind. The platform is continuously expanding and aims to serve as a one-stop destination for developers, designers, and everyday users who need reliable web-based utilities without clutter or complexity.',
    homepage: 'https://web-gtools.vercel.app/',
    github: 'https://github.com/2405Gaurav/tools',
    techstack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    selected: false,
    dateCreated: '2025-01-15',
    coverImage: '/project-image/gtools.png'
  },

  {
    slug: 'ironpulse',
    name: 'IronPulse',
    description:
      'IronPulse is a fitness-focused web platform that guides users on their journey toward strength and wellness. It provides curated workout routines, exercise breakdowns, tracking utilities, and motivational insights to help individuals stay consistent. With a clean UI and data-driven structure, IronPulse bridges the gap between wellness apps and real-world fitness planning, making it simple to build and maintain a personalized training routine.',
    homepage: 'https://iron-pulse-one.vercel.app/',
    github: 'https://github.com/2405Gaurav/IronPulse',
    techstack: ['React', 'Node.js', 'Fitness API', 'Tailwind CSS'],
    selected: false,
    dateCreated: '2024-02-20',
    coverImage: '/project-image/ironpulse.png'
  },

  {
    slug: 'game-nation',
    name: 'Game Nation',
    description:
      'Game Nation is a visually immersive game discovery platform built with high-end GSAP animations and a refined UI. It showcases trending and upcoming games through cinematic transitions, dynamic previews, and smooth motion design. The goal of Game Nation is to elevate browsing into an engaging, interactive experience where users feel immersed in a digital arcade of curated game titles.',
    homepage: 'https://web-game01-nine.vercel.app/',
    github: 'https://github.com/2405Gaurav/webGame01',
    techstack: ['React', 'GSAP', 'JavaScript', 'CSS3'],
    selected: false,
    dateCreated: '2024-03-10',
    coverImage: '/project-image/game-nation.png'
  },
  {
    slug: 'Sweetshop(Springboot)',
    name: 'Sweetshop(Springboot)',
    description:
      'Sweetshop(Springboot) is a full-stack web application built with Spring Boot and Next.js, designed for managing and showcasing sweet treats. It features a clean UI, product listings, and an intuitive admin panel for managing inventory and orders.',
    homepage: 'https://incubyte-sweet.thegauravthakur.in/',
    github: 'https://github.com/2405Gaurav/golden-rush',
    techstack: ['Next.js', 'Spring Boot', 'JavaScript', 'CSS3','railways','vercel','postgresSQL'],
    selected: false,
    dateCreated: '2024-03-10',
    coverImage: '/project-image/springboot.png'
  },

  {
    slug: 'iste-technicia-25',
    name: 'ISTE-Technicia 25',
    description:
      'ISTE-Technicia\'25 is a full-stack event management platform developed for a large-scale university technical festival, enabling 5,000–6,000+ participant registrations from across India.The platform supports end-to-end workflows including participant onboarding, secure payment gateway integration, dynamic event scheduling, and automated notifications using NodeMailer for registration confirmations and updates.It also features an advanced admin dashboard for real-time monitoring, data management, and operational control, ensuring scalable, reliable, and production-ready deployment for real-world festival logistics.',
    homepage: 'https://technicia25.thegauravthakur.in/',
    github: 'https://github.com/2405Gaurav/TECH25',
    techstack: ['Next.js', 'TypeScript', 'Payment Gateway', 'MongoDB', 'Tailwind CSS','Nodemailer','Express.js'],
    selected: false,
    dateCreated: '2024-04-05',
    coverImage: '/project-image/technisia.png'
  },
  {
    slug: 'pdf-parser',
    name: 'PDF Parser',
    description:
      'PDF Parser is a robust tool designed to extract and analyze text from PDF documents, offering features like text extraction, metadata retrieval, and structured data output. It supports various PDF formats and provides a clean API for developers to integrate into their applications.',
    homepage: 'https://pdf-parser.vercel.app/',
    github: 'https://github.com/2405Gaurav/pdf-parser',
    techstack: ['React.js', 'JavaScript', 'Docker', 'Qdrant(VectorDB)', 'Embedding','Node.js','Express.js'],
    selected: false,
    dateCreated: '2024-04-05',
    coverImage: '/project-image/pdf.png'
  },
  {
    slug: 'resume-editor',
    name: 'Resume Editor',
    description:
      'Resume Editor is a powerful web application that enables users to create polished, job-ready resumes within minutes. It provides real-time preview, customizable templates, intuitive form-based editing, and instant PDF export. Designed for students and professionals alike, the tool focuses on simplicity and elegance, ensuring that anyone can produce a clean, professional resume without design experience.',
    homepage: 'https://resume-editorr.vercel.app/',
    github: 'https://github.com/2405Gaurav/ResumeEditor',
    techstack: ['React', 'JavaScript', 'PDF Generation', 'Tailwind CSS'],
    selected: false,
    dateCreated: '2024-06-18',
    coverImage: '/project-image/icn.png'
  },

  {
    slug: 'og-image-generator',
    name: 'OG Image Generator',
    description:
      'The OG Image Generator is a customizable design tool for creating open-graph preview images used in blogs, websites, social media posts, and SEO optimization. It leverages the Canvas API and dynamic templates to let users generate branded, visually consistent images with custom text, backgrounds, layouts, and themes. It removes the need for graphic design software, allowing creators to produce professional assets instantly.',
    homepage: 'https://g-teditor-u2jz.vercel.app/',
    github: 'https://github.com/2405Gaurav/GTeditor',
    techstack: ['Next.js', 'Canvas API', 'TypeScript', 'Image Processing'],
    selected: false,
    dateCreated: '2024-07-22',
    coverImage: '/project-image/editor.png'
  },
  {
    slug: 'GT-Sweets',
    name: 'GT-Sweets',
    description:
      'GT-Sweets is a modern, responsive web application designed for managing and showcasing sweet treats. It features a clean UI, product listings, and an intuitive admin panel for managing inventory and orders.',
    homepage: 'https://incubyte-sweet.thegauravthakur.in/',
    github: 'https://github.com/2405Gaurav/GT-TDD-sweets-incobyte-hiring',
    techstack: ['React.js', 'Node.js', 'TypeScript', 'TDD-Kata','Tailwind CSS'],
    selected: false,
    dateCreated: '2024-07-22',
    coverImage: '/project-image/gtsweets.png'
  },

  {
    slug: 'resume-analyser',
    name: 'Resume Analyser',
    description:
      'Resume Analyser is an intelligent AI-powered platform that evaluates resumes in real time, providing detailed feedback on structure, formatting, keyword optimization, and job-role alignment. It helps job seekers identify strengths and weaknesses using NLP-based analysis and ATS (Applicant Tracking System) simulation. Designed for professionals, students, and recruiters, it streamlines the resume review process with precision and actionable insights.',
    homepage: 'https://g-tanalyse.vercel.app/',
    github: 'https://github.com/2405Gaurav/GTanalyse',
    techstack: ['Next.js', 'AI/NLP', 'TypeScript', 'Tailwind CSS'],
    selected: false,
    dateCreated: '2025-02-10',
    coverImage: '/project-image/gtr.png'
  },
  {
    slug: 'medrag-agent',
    name: 'MedRAG-Agent',
    description:
      'A multi-agent Retrieval-Augmented Generation system enhanced with knowledge graphs for medical reasoning. Coordinates retrieval, validation, and synthesis agents to deliver high-accuracy, context-aware clinical responses.',
    homepage: 'https://medical-assistant.thegauravthakur.in/',
    github: 'https://github.com/2405Gaurav/med-RAG',
    techstack: ['Python', 'RAG', 'Knowledge Graph', 'FastAPI'],
    selected: false,
    dateCreated: '2024-05-12',
    coverImage: '/project-image/med-RAG.png'
  },

  {
    slug: 'GT-OS',
    name: 'GT-OS',
    description:
      'A custom 32-bit x86 operating system kernel built from scratch with support for preemptive multitasking, virtual memory, ELF loading, and a modular monolithic architecture. Demonstrates low-level systems programming and OS internals.',
    homepage: 'https://github.com/2405Gaurav/GT-OS',
    github: 'https://github.com/2405Gaurav/GT-OS',
    techstack: ['C', 'x86 Assembly', 'Operating Systems', 'Kernel Development'],
    selected: false,
    dateCreated: '2024-04-05',
    coverImage: '/project-image/GTOS.png'
  }
]

export const getSelectedProjects = () => {
  return PROJECTS.filter(project => project.selected)
}

export const getAllProjects = () => {
  return PROJECTS
}

export const getProjectBySlug = (slug: string) => {
  return PROJECTS.find(project => project.slug === slug)
}

export const getLatestProjects = (limit?: number) => {
  const sorted = PROJECTS.sort((a, b) =>
    new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime()
  )
  return limit ? sorted.slice(0, limit) : sorted
}

export const getFeaturedProjects = () => {
  return PROJECTS.filter(project => project.featured)
}
