'use server'

import * as z from 'zod'
import { AuthError } from 'next-auth'

import { LoginSchema } from '@/schemas'
import { signIn } from '@/auth'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const fields = LoginSchema.safeParse(values)

  if (!fields.success) {
    return { error: '입력하신 내용을 다시 확인해주세요.' }
  }

  const { email, password } = fields.data

  try {
    await signIn("credentials", {
      email,
      password,
      // redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    })
  } catch (error){
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "이메일 또는 비밀번호를 잘못 입력했습니다."}
        default:
          return { error: "잘못된 접근입니다."}
      }
    }

    throw error
  }

  return { success: '로그인 성공' }
}
