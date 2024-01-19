import { Logo } from './logo'
import { Navbar } from './navbar'

export const Header = () => {
  return (
    <header className="h-full w-full px-24 flex items-center justify-between bg-primary text-white">
      <Logo />
      <Navbar />
    </header>
  )
}
