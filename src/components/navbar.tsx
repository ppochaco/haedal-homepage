import { navLinks } from '@/lib/data'
import { NavbarItem } from './navbar-item'

export const Navbar = () => {
  return (
    <ul className="flex gap-10">
      {navLinks.map((route) => (
        <li key={route.href}>
          <NavbarItem name={route.name} href={route.href} />
        </li>
      ))}
    </ul>
  )
}
