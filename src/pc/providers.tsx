'use client'

import { ThemeProvider } from 'next-themes'
import { Toaster } from '@/pc/components/toaster'
import { TooltipProvider } from '@/pc/components/tooltip'

type ProvidersProps = {
  children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      enableColorScheme
      disableTransitionOnChange
    >
      <TooltipProvider>
        {children}
        <Toaster
          toastOptions={{ duration: 2500 }}
          visibleToasts={5}
          expand
        />
      </TooltipProvider>
    </ThemeProvider>
  )
}
