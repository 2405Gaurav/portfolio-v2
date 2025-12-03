import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { authClient } from '@/lib/auth-client'

type UseSignOutOptions = {
  redirectTo?: string
}

export const useSignOut = (options: UseSignOutOptions = {}) => {
  const { redirectTo } = options

  const router = useRouter()

  return async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          if (redirectTo) {
            router.push(redirectTo)
          } else {
            router.refresh()
          }
          toast.success('Signed out successfully')
        },
        onError: () => {
          toast.error('Failed to sign out')
        }
      }
    })
  }
}