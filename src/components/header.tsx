import { Logo } from './logo'
import MobileNavbar from './mobile-navbar'
import { Navbar } from './navbar'

export const Header = () => {
  return (
    <header className="h-full w-full px-10 md:px-24 flex items-center justify-between bg-primary text-white">
      <Logo />
      <div className="flex md:hidden">
        <MobileNavbar />
      </div>
      <div className="hidden md:flex">
        <Navbar />
      </div>
    </header>
  )
}
