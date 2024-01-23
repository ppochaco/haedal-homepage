'use client'

import * as z from 'zod'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { RegisterSchema } from '@/schemas'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { CardWraper } from '@/components/auth/card-wrapper'
import { register } from '@/actions/register'

export const RegisterForm = () => {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")

  // 1. form 정의
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  })

  // 2. submit handler 정의
  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    startTransition(() => {
      register(values).then((data) => {
        setError(data.error)
        setSuccess(data.success)
      })
    })
  }

  return (
    <CardWraper
      headerTitle="Sign up to Headal"
      headerDescription="경북대학교 프로그래밍동아리 해달"
      buttonLabel="로그인하기"
      buttonHref="/auth/login"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이름</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="홍길동"
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이메일</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="haedal@gamil.com"
                      disabled={isPending}
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>비밀번호</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="******"
                      disabled={isPending}
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {error && (
            <div className="flex items-center justify-center rounded-lg border p-4 text-sm bg-red-50 text-red-600 font-semibold">
              {error}
            </div>
          )}
          {success && (
            <div className="flex items-center justify-center rounded-lg border p-4 text-sm bg-green-50 text-teal-600 font-semibold">
              {success}
            </div>
          )}
          <Button type="submit" disabled={isPending} className="w-full">
            회원가입하기
          </Button>
        </form>
      </Form>
    </CardWraper>
  )
}
