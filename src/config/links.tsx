import { SiFacebook, SiGithub, SiInstagram, SiX, SiYoutube } from '@icons-pack/react-simple-icons'
import { BarChartIcon, FlameIcon, MessageCircleIcon, MonitorIcon, PencilIcon, UserCircleIcon } from 'lucide-react'

import {  SITE_GITHUB_URL, SITE_INSTAGRAM_URL, SITE_X_URL,CODO } from '@/lib/constants'

type HeaderLinks = Array<{
  icon: React.ReactNode
  href: string
  key: string
  label: string
  labelKey: string
}>

export const HEADER_LINKS: HeaderLinks = [
  {
    icon: <PencilIcon className='size-3.5' />,
    href: '/blog',
    key: 'blog',
    label: 'Blog',
    labelKey: 'common.labels.blog'
  },
  {
    icon: <MessageCircleIcon className='size-3.5' />,
    href: '/guestbook',
    key: 'guestbook',
    label: 'Guestbook',
    labelKey: 'common.labels.guestbook'
  },
  {
    icon: <BarChartIcon className='size-3.5' />,
    href: '/dashboard',
    key: 'dashboard',
    label: 'Dashboard',
    labelKey: 'common.labels.dashboard'
  },
  {
    icon: <FlameIcon className='size-3.5' />,
    href: '/projects',
    key: 'projects',
    label: 'Projects',
    labelKey: 'common.labels.projects'
  },
  {
    icon: <UserCircleIcon className='size-3.5' />,
    href: '/about',
    key: 'about',
    label: 'About',
    labelKey: 'common.labels.about'
  },
]

type FooterLinks = Array<{
  id: number
  links: Array<{
    href: string
    label: string
    labelKey: string
  }>
}>

export const FOOTER_LINKS: FooterLinks = [
  {
    id: 1,
    links: [
      { href: '/', label: 'Home', labelKey: 'common.labels.home' },
      { href: '/blog', label: 'Blog', labelKey: 'common.labels.blog' },
      { href: '/about', label: 'About', labelKey: 'common.labels.about' },
      { href: '/dashboard', label: 'Dashboard', labelKey: 'common.labels.dashboard' }
    ]
  },
  {
    id: 2,
    links: [
      { href: '/guestbook', label: 'Guestbook', labelKey: 'common.labels.guestbook' },
      { href: '/uses', label: 'Uses', labelKey: 'common.labels.uses' },
      { href: '/projects', label: 'Projects', labelKey: 'common.labels.projects' },
    ]
  },
  {
    id: 3,
    links: [
      { href: SITE_INSTAGRAM_URL, label: 'Instagram', labelKey: 'common.labels.instagram' },
      { href: SITE_GITHUB_URL, label: 'GitHub', labelKey: 'common.labels.github' },
      { href: CODO, label: 'codo', labelKey: 'common.labels.codo' },
    ]
  },
  {
    id: 4,
    links: [
      { href: '/terms', label: 'Terms', labelKey: 'common.labels.terms' },
      { href: '/privacy', label: 'Privacy', labelKey: 'common.labels.privacy' }
    ]
  }
]

type SocialLinks = Array<{
  href: string
  title: string
  icon: React.ReactNode
}>

export const SOCIAL_LINKS: SocialLinks = [
  {
    href: SITE_GITHUB_URL,
    title: 'GitHub',
    icon: <SiGithub />
  },
  
  {
    href: SITE_INSTAGRAM_URL,
    title: 'Instagram',
    icon: <SiInstagram />
  },
  {
    href: SITE_X_URL,
    title: 'X',
    icon: <SiX />
  },
  {
    href: CODO,
    title: 'CODE',
    icon: <SiX />
  },
 
]

type AccountSidebarLinks = Array<{
  href: string
  label: string
  labelKey: string
}>

export const ACCOUNT_SIDEBAR_LINKS: AccountSidebarLinks = [
  {
    href: '/account',
    label: 'Account',
    labelKey: 'common.labels.account'
  },
  {
    href: '/account/settings',
    label: 'Settings',
    labelKey: 'common.labels.settings'
  }
]