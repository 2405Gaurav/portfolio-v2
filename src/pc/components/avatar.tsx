import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cn } from "@/lib/utils"

type AvatarProps = React.ComponentProps<typeof AvatarPrimitive.Root>

export const Avatar = ({ className, ...props }: AvatarProps) => {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn("relative flex size-8 shrink-0 overflow-hidden rounded-full", className)}
      {...props}
    />
  )
}

type AvatarImageProps = React.ComponentProps<typeof AvatarPrimitive.Image>

export const AvatarImage = ({ className, ...props }: AvatarImageProps) => {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

type AvatarFallbackProps = React.ComponentProps<typeof AvatarPrimitive.Fallback>

export const AvatarFallback = ({ className, ...props }: AvatarFallbackProps) => {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn("flex size-full items-center justify-center rounded-full bg-muted", className)}
      {...props}
    />
  )
}
