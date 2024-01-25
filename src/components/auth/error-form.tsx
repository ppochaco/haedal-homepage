'use client'
import { CardWraper } from '@/components/auth/card-wrapper'

export const ErrorForm = () => {

  return (
    <div>
      <CardWraper
        headerTitle="KNU HAEDAL"
        headerDescription="잘못된 접근입니다."
        buttonLabel="로그인하기"
        buttonHref="/auth/login"
      >
       <div></div>
      </CardWraper>
    </div>
  )
}
