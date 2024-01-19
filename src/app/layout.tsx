import type { Metadata } from 'next'
import './globals.css'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata: Metadata = {
  title: 'KNU HAEDAL',
  description: '경북대학교 IT대학 프로그래밍 동아리 해달',
  icons: [
    {
      rel: 'icon',
      media: '(prefers-color-scheme: light)',
      url: '/logo.svg',
    },
    {
      rel: 'icon',
      media: '(prefers-color-scheme: dark)',
      url: '/logo-dark.svg',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
