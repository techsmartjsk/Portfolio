import React, { useState, useEffect, useRef } from 'react'
import logo from '../assets/logo.png'
import '../assets/css/navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const drawerRef = useRef(null)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleClickOutside = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      setMenuOpen(false)
    }
  }

  useEffect(() => {
    const handleBodyScroll = () => {
      document.body.style.overflow = menuOpen ? 'hidden' : 'auto'
    }

    const handleBodyBackground = () => {
      document.body.style.backgroundColor = menuOpen
        ? 'rgba(0, 0, 0, 0.5)'
        : 'white'
    }

    document.addEventListener('click', handleClickOutside)
    document.addEventListener('scroll', handleBodyScroll)
    handleBodyBackground() // Set initial background color

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('scroll', handleBodyScroll)
    }
  }, [menuOpen])

  return (
    <>
      <div className='flex justify-between px-8 py-8 lg:px-32 lg:py-10 items-center relative'>
        <img src={logo} className='w-[45px]' alt='Jaskirat Singh'></img>
        <div className={`lg:hidden relative z-10`} ref={drawerRef}>
          {/* Hamburger Icon */}
          <div
            className='w-6 h-6 cursor-pointer flex flex-col justify-between transition-all duration-300'
            onClick={toggleMenu}
          >
            <div
              className={`bg-${
                menuOpen ? 'white' : 'black'
              } h-[2px] w-8 mb-1.5 transform ${
                menuOpen ? 'rotate-45 translate-y-2 delay-100' : 'translate-x-0'
              } transition-all ease-in-out`}
            ></div>
            <div
              className={`bg-${
                menuOpen ? 'white' : 'black'
              } h-[2px] w-6 mb-1.5 opacity-0 ${
                menuOpen ? 'opacity-0' : 'opacity-100 delay-100'
              } transition-all ease-in-out`}
            ></div>
            <div
              className={`bg-${
                menuOpen ? 'white' : 'black'
              } h-[2px] w-8 mb-1.5 transform ${
                menuOpen
                  ? '-rotate-45 -translate-y-2 delay-100'
                  : 'translate-x-0'
              } transition-all ease-in-out`}
            ></div>
          </div>
        </div>
        <div className='hidden lg:flex lg:gap-10'>
          {/* Your navigation links */}
          <a href='#about' className='text-lg'>
            01. About
          </a>
          <a href='#experience' className='text-lg'>
            02. Experience
          </a>
          <a href='#projects' className='text-lg'>
            03. Projects
          </a>
          <a href='#contact' className='text-lg'>
            04. Contact
          </a>
        </div>
      </div>

      {/* Drawer */}
      <div className={`drawer px-10 py-20 ${menuOpen ? 'open' : ''}`}>
        {/* Drawer Items */}
        <a href='#about' className='text-white text-lg block mb-4'>
          01. About
        </a>
        <a href='#experience' className='text-white text-lg block mb-4'>
          02. Experience
        </a>
        <a href='#projects' className='text-white text-lg block mb-4'>
          03. Projects
        </a>
        <a href='#contact' className='text-white text-lg block mb-4'>
          04. Contact
        </a>
      </div>
    </>
  )
}
