import * as z from 'zod'

export const LoginSchema = z.object({
  email: z.string().email({
    message: '이메일 형식이 아닙니다.',
  }),
  password: z.string().min(6, {
    message: '비밀번호는 최소 6글자 이상이어야 합니다.',
  }),
})

export const RegisterSchema = z.object({
  username: z.string().min(2, {
    message: '이름은 최소 2글자 이상이어야 합니다.',
  }),
  email: z.string().email({
    message: '이메일 형식이 아닙니다.',
  }),
  password: z.string().min(6, {
    message: '비밀번호는 최소 6글자 이상이어야 합니다.',
  }),
})
