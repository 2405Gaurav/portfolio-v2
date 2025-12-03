import { Button } from '@/pc/components/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/pc/components/dropdown-menu'
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

const ThemeSwitcher = () => {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          className='size-9 p-0'
          aria-label='Toggle theme'
          data-testid='theme-toggle'
        >
          <SunIcon className='dark:hidden' />
          <MoonIcon className='hidden dark:block' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem
          className='gap-2'
          onClick={() => {
            setTheme('light')
          }}
          data-testid='theme-light-button'
        >
          <SunIcon className='size-4.5' /> Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className='gap-2'
          onClick={() => {
            setTheme('dark')
          }}
          data-testid='theme-dark-button'
        >
          <MoonIcon className='size-4.5' /> Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className='gap-2'
          onClick={() => {
            setTheme('system')
          }}
          data-testid='theme-system-button'
        >
          <MonitorIcon className='size-4.5' /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ThemeSwitcher