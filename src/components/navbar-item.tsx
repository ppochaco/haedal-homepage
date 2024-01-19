'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface NavbarItemProps {
  name: string
  href: string
}

export const NavbarItem = ({ name, href }: NavbarItemProps) => {
  const pathname = usePathname()

  const isActive =
    (pathname === '/' && href === '/') || //메인 페이지
    pathname === href ||
    pathname?.startsWith(`${href}/`)

  return (
    <Link
      href={href}
      className={cn(
        'hover:text-slate-300 font-normal pb-1',
        isActive && 'font-medium border-b',
      )}
    >
      {name}
    </Link>
  )
}
