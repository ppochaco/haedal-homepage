'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export const LoginButton = ({ children }: { children?: React.ReactNode }) => {
  const router = useRouter()

  const onClick = () => {
    router.push('/auth/login')
  }

  return (
    <Button
      variant={'secondary'}
      size={'sm'}
      onClick={onClick}
      className="text-sm"
    >
      {children}
    </Button>
  )
}
