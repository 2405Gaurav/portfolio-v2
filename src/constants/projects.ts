export type Project = {
  slug: string
  name: string
  description: string
  homepage?: string
  github: string
  techstack: string[]
  selected: boolean
  dateCreated: string
  coverImage: string
}

export const PROJECTS: Project[] = [
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
    selected: true,
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