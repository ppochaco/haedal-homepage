import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import Kakao from "next-auth/providers/kakao"
import Naver from "next-auth/providers/naver"

import { LoginSchema } from "@/schemas"
import { getUserByEmail } from "@/data/user"

export default {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Kakao({
      clientId: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_CLIENT_SECRET,
    }),
    // next-auth에서 naver 로그인 사용 불가
    // https://github.com/nextauthjs/next-auth/discussions/9313
    Naver({
      clientId: process.env.NAVER_CLIENT_ID,
      clientSecret: process.env.NAVER_CLIENT_SECRET,
    }),
    Credentials({
        async authorize(credentials) {
            const validatedFields = LoginSchema.safeParse(credentials)

            if (validatedFields.success) {
                const { email, password } = validatedFields.data

                const user = await getUserByEmail(email)
                if (!user || !user.password) return null

                const passwordMatch = await bcrypt.compare(
                    password,
                    user.password,
                )
                if (passwordMatch) return user
            } 
            
            return null
        }
    })
  ],
} satisfies NextAuthConfig