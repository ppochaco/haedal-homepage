import Image from 'next/image'
import { signIn } from "next-auth/react"

import { Button } from '@/components/ui/button'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'

export const Social = () => {
  const onClick = (provider: "kakao" | "naver") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    })
  }
  return (
    <div className="flex items-center w-full gap-x-4">
      <Button 
        variant="link" 
        size="login"
        onClick={()=>onClick("kakao")}
      >
        <Image
          src="/kakao_login.png"
          alt="kakaoLogin"
          width={0}
          height={0}
          sizes="100vw"
          className="w-auto h-full"
        />
      </Button>
      <Button 
        variant="link" 
        size="login"
        onClick={()=>onClick("naver")}
      >
        <Image
          src="/naver_login.png"
          alt="naver"
          width={0}
          height={0}
          sizes="100vw"
          className="w-auto h-full"
        />
      </Button>
    </div>
  )
}
