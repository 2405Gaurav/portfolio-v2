import Image from 'next/image'

type LogoProps = {
  width?: number
  height?: number
  className?: string
  'aria-hidden'?: boolean
}

const Logo = ({ width = 20, height, className, ...props }: LogoProps) => {
  return (
    <Image
      src='/images/icn.png'
      alt='Logo'
      width={width}
      height={height || width}
      className={className}
      priority
      {...props}
    />
  )
}

export { Logo }