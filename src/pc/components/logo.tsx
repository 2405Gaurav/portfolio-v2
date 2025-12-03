import Image from 'next/image'

type LogoProps = {
  width?: number
  height?: number
  className?: string
  'aria-hidden'?: boolean
}

const Logo = ({ width = 20, height, className, ...props }: LogoProps) => {
  return (
    <div className='relative rounded-lg bg-background/50 p-1.5 backdrop-blur-sm'>
      <Image
        src='/images/g1.png'
        alt='Logo'
        width={width}
        height={height || width}
        className={className}
        priority
        {...props}
      />
    </div>
  )
}

export { Logo }