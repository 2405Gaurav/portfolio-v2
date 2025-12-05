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
    slug: 'juryx',
    name: 'JuryX - Blockchain Hackathon Management',
    description:
      'JuryX is a decentralized, blockchain-powered judging and voting platform engineered to eliminate bias and ensure 100% fair, verifiable results for hackathons and competitions. Built with Solidity smart contracts for immutable scoring and a modern Next.js frontend, JuryX guarantees that once a score is locked on-chain, it cannot be altered—not even by organizers. The platform features secure judge panels with weighted metrics, real-time leaderboards, live project previews using WebContainers, and comprehensive organizer dashboards for event management. JuryX transforms traditional hackathon judging by leveraging blockchain transparency, decentralization, and cryptographic verification to create a trustless system where pure merit determines winners.',
    homepage: 'https://gt-juryx.vercel.app/',
    github: 'https://github.com/2405Gaurav/GT-juryx',
    techstack: ['Next.js', 'Solidity', 'Blockchain', 'Smart Contracts', 'Web3', 'TypeScript', 'Tailwind CSS', 'IPFS'],
    selected: true,
    dateCreated: '2024-11-20',
    coverImage: '/project-image/jrx.png'
  },

  {
    slug: 'voicademy',
    name: 'Voicademy',
    description:
      'Voicademy is an AI-powered personal learning assistant designed to help students study smarter and learn faster. It offers voice-interactive sessions, dynamic note generation, concept explanations, and personalized learning recommendations. Built to replicate the feel of having a private tutor available 24/7, Voicademy transforms the traditional study workflow into an intelligent, adaptive experience tailored to each learner.',
    homepage: 'https://voicademy-gt.vercel.app/',
    github: 'https://github.com/2405Gaurav/Study-AI',
    techstack: ['Next.js', 'AI/ML', 'TypeScript', 'Tailwind CSS'],
    selected: true,
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
    selected: true,
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
    slug: 'iste-technicia-25',
    name: 'ISTE-Technicia 25',
    description:
      'ISTE-Technicia 25 is a full-stack event management platform built for a large-scale university technical festival. It features participant registration, integrated payment gateway, event schedules, notifications, and an advanced admin dashboard. Designed for real-world deployment, it streamlines festival logistics by providing organizers and attendees with a seamless, efficient, and user-friendly experience.',
    homepage: 'https://tech-25-z8qu.vercel.app/',
    github: 'https://github.com/2405Gaurav/TECH25',
    techstack: ['Next.js', 'TypeScript', 'Payment Gateway', 'PostgreSQL'],
    selected: false,
    dateCreated: '2024-04-05',
    coverImage: '/project-image/technisia.png'
  },

  {
    slug: 'medrag-agent',
    name: 'MedRAG-Agent',
    description:
      'MedRAG-Agent is an advanced multi-agent, knowledge-graph-enhanced Retrieval-Augmented Generation (RAG) system engineered to deliver context-aware, medically accurate query resolution. The architecture orchestrates specialized agents for retrieval, reasoning, validation, and synthesis of clinical knowledge. It is built for high-fidelity medical information workflows such as healthcare analytics, clinical support, and biomedical research.',
    homepage: 'https://med-rag-xvoz.vercel.app/',
    github: 'https://github.com/2405Gaurav/med-RAG',
    techstack: ['Python', 'RAG', 'AI/ML', 'Knowledge Graph', 'FastAPI'],
    selected: false,
    dateCreated: '2024-05-12',
    coverImage: '/project-image/med-RAG.png'
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