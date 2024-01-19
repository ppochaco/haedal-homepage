import { navLinks } from '@/lib/data'
import { NavbarItem } from '@/components/navbar-item'

export const Navbar = () => {
  return (
    <ul className="flex flex-col items-center py-4 md:flex-row gap-10">
      {navLinks.map((route) => (
        <li key={route.href}>
          <NavbarItem name={route.name} href={route.href} />
        </li>
      ))}
    </ul>
  )
}
