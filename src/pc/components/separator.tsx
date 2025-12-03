import * as SeparatorPrimitive from '@radix-ui/react-separator'
import { cn } from '@/lib/utils'

type SeparatorProps = React.ComponentProps<typeof SeparatorPrimitive.Root>

const Separator = (props: SeparatorProps) => {
  const { className, orientation = 'horizontal', decorative = true, ...rest } = props

  return (
    <SeparatorPrimitive.Root
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0 bg-border',
        orientation === 'horizontal'
          ? 'h-px w-full'
          : 'w-px h-full',
        className
      )}
      {...rest}
    />
  )
}

export { Separator }
