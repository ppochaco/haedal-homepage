'use server'

import * as z from 'zod'

import { LoginSchema } from '@/schemas'

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const fields = LoginSchema.safeParse(values)

  if (!fields.success) {
    return { error: '입력하신 내용을 다시 확인해주세요.' }
  }

  return { success: '로그인 성공' }
}
