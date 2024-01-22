import Image from 'next/image'
import { Button } from '@/components/ui/button'

export const Social = () => {
  return (
    <div className="flex items-center w-full gap-x-4">
      <Button variant="link" size="login">
        <Image
          src="/kakao_login.png"
          alt="kakaoLogin"
          width={0}
          height={0}
          sizes="100vw"
          className="w-auto h-full"
        />
      </Button>
      <Button variant="link" size="login">
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
