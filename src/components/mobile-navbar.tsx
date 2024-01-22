'use client'

import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa6'
import { Navbar } from '@/components/navbar'

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  const openMenu = () => {
    setIsOpen((isOpen) => !isOpen)
  }

  useEffect(() => {
    const closeMenu = (e: Event) => {
      if (
        isOpen &&
        !document.getElementById('mobileNavbar')?.contains(e.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', closeMenu)
    return () => {
      document.removeEventListener('click', closeMenu)
    }
  }, [isOpen])

  return (
    <div id="mobileNavbar">
      <FaBars onClick={openMenu} className="cursor-pointer fa-xl" />
      {isOpen && (
        <div className="absolute top-full right-0 w-32  z-1000 bg-primary">
          <Navbar />
        </div>
      )}
    </div>
  )
}
