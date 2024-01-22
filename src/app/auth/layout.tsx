import { Logo } from '@/components/logo'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <Logo mode="light"></Logo>
      <div>{children}</div>
    </div>
  )
}

export default AuthLayout
