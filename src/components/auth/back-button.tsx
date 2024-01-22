'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface backButtonProps {
  href: string
  label: string
}

export const BackButton = ({ href, label }: backButtonProps) => {
  return (
    <Button size="sm" variant="link" className="w-full font-normal" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  )
}
