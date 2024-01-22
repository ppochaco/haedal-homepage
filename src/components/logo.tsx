import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  mode?: 'dark' | 'light'
}

export const Logo = ({ mode = 'dark' }: LogoProps) => {
  return (
    <Link href="/">
      <Image
        height={100}
        width={100}
        priority
        alt="logo"
        src={`/mainLogo-${mode}.png`}
      />
    </Link>
  )
}
