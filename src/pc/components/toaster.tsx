"use client"

import { Toaster as SonnerToaster } from "sonner"

export function Toaster(props: React.ComponentProps<typeof SonnerToaster>) {
  return (
    <SonnerToaster
      position="top-center"
      toastOptions={{
        duration: 2000,
      }}
      {...props}
    />
  )
}
