'use server'

import bcrypt from 'bcryptjs'
import * as z from 'zod'

import { RegisterSchema } from '@/schemas'
import { db } from '@/lib/db'

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const fields = RegisterSchema.safeParse(values)

  if (!fields.success) {
    return { error: '입력된 정보를 다시 확인해주세요.' }
  }

  const { email, password, user } = fields.data

  // 이메일로 중복 회원 검사
  const existingUser = await db.user.findUnique({
    where: {
      email,
    },
  })
  if (existingUser) {
    return { error: '이미 가입된 회원입니다.' }
  }

  // DB에 회원 정보 추가하기
  const hashedPassword = await bcrypt.hash(password, 10)
  await db.user.create({
    data: {
      email,
      password: hashedPassword,
      user,
    },
  })
  // 추가 정보 입력 받아 DB에 추가하기

  // 이메일 보내기

  return { success: '회원가입에 성공했습니다!' }
}
