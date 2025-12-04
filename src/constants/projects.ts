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
    slug: 'voicademy',
    name: 'Voicademy',
    description: 'AI Powered Personal Assistant Learning Platform',
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
    'A powerful collection of productivity and conversion tools designed to streamline workflows, automate tasks, and boost efficiency. Built and maintained by gauravthakur.',
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
    description: 'Your Personal Guide To Fitness and Greatness.',
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
    description: 'A Beautiful Game listing Platform made with GSAP.',
    homepage: 'https://web-game01-nine.vercel.app/',
    github: 'https://github.com/2405Gaurav/webGame01',
    techstack: ['React', 'GSAP', 'JavaScript', 'CSS3'],
    selected: false,
    dateCreated: '2024-03-10',
    coverImage: '/project-image/game-nation.png'
  },
  {
    slug: 'iste-technicia-25',
    name: "ISTE-Technicia'25",
    description: 'Full-Stack event website with registration and payment gateway.',
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
    description: 'A Multi-Agent, Knowledge Graph-Enhanced RAG Framework for High-Fidelity Medical Query Resolution',
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
    description: 'A resume editor tool where you can create your resume in minutes.',
    homepage: 'https://resume-editorr.vercel.app/',
    github: 'https://github.com/2405Gaurav/ResumeEditor',
    techstack: ['React', 'JavaScript', 'PDF Generation', 'Tailwind CSS'],
    selected: false,
    dateCreated: '2024-06-18',
    coverImage: '/project-image/ai-study.png' // Update with actual image path
  },
  {
    slug: 'og-image-generator',
    name: 'OG Image Generator',
    description: 'An OG image generator tool where you can create OG images in minutes.',
    homepage: 'https://og-image-generators.vercel.app/',
    github: 'https://github.com/2405Gaurav/OgImageGenerator',
    techstack: ['Next.js', 'Canvas API', 'TypeScript', 'Image Processing'],
    selected: false,
    dateCreated: '2024-07-22',
    coverImage: '/project-image/ai-study.png' // Update with actual image path
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