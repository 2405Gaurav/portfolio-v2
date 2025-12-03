'use client'

import { Button } from '@/pc/components/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/pc/components/dropdown-menu'
import { Link } from '@/pc/components/link'
import { MenuIcon } from 'lucide-react'

import { HEADER_LINKS } from '@/config/links'

const MobileNav = () => {
  // Hardcoded translation function
  const getTranslation = (key: string): string => {
    const translations: Record<string, string> = {
      'layout.toggle-menu': 'Toggle menu',
      'layout.home': 'Home',
      'layout.about': 'About',
      'layout.blog': 'Blog',
      'layout.projects': 'Projects',
      'layout.guestbook': 'Guestbook',
      'layout.uses': 'Uses',
      'layout.resume': 'Resume'
      // Add more translations as needed based on your HEADER_LINKS
    }
    return translations[key] || key
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className='flex size-9 items-center justify-center p-0 md:hidden'
          aria-label={getTranslation('layout.toggle-menu')}
          variant='ghost'
        >
          <MenuIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' sideOffset={20} className='min-w-40'>
        {HEADER_LINKS.map((link) => (
          <DropdownMenuItem key={link.key} asChild>
            <Link href={link.href} className='flex items-center gap-4'>
              {link.icon}
              <div>{getTranslation(link.labelKey)}</div>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MobileNav