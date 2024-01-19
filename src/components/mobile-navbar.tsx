'use client'

import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
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
      <FontAwesomeIcon icon={faBars as IconProp} onClick={openMenu} />
      {isOpen && (
        <div className="absolute top-full right-0 w-32  z-1000 bg-primary">
          <Navbar />
        </div>
      )}
    </div>
  )
}
