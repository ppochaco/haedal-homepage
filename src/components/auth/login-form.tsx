'use client'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { CardWraper } from '@/components/auth/card-wrapper'

const formSchema = z.object({
  userid: z.string().min(5, {
    message: '아이디는 최소 5글자 이상이어야 합니다.',
  }),
  password: z.string().min(6, {
    message: '비밀번호는 최소 6글자 이상이어야 합니다.',
  }),
})

export const LoginForm = () => {
  // 1. form 정의
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userid: '',
      password: '',
    },
  })

  // 2. submit handler 정의
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  return (
    <div>
      <CardWraper
        headerTitle="Sign in to Headal"
        headerDescription="경북대학교 프로그래밍동아리 해달"
        buttonLabel="회원가입하기"
        buttonHref="/auth/register"
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="userid"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>아이디</FormLabel>
                    <FormControl>
                      <Input placeholder="haedal" {...field} />
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
                      <Input {...field} placeholder="******" type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full">
              로그인하기
            </Button>
          </form>
        </Form>
      </CardWraper>
    </div>
  )
}
