import { Logo } from '@/components/logo'
import MobileNavbar from '@/components/mobile-navbar'
import { Navbar } from '@/components/navbar'
import { LoginButton } from '@/components/login-button'

export const Header = () => {
  return (
    <header className="h-full w-full px-10 md:px-24 flex items-center justify-between bg-primary text-white">
      <Logo />
      <div className="flex items-center gap-4 md:hidden">
        <LoginButton>Sign In</LoginButton>
        <MobileNavbar />
      </div>
      <div className="hidden md:flex items-center gap-8">
        <Navbar />
        <LoginButton>Sign In</LoginButton>
      </div>
    </header>
  )
}
