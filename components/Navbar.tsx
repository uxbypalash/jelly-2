import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <nav className='mt-10 w-full flex items-center justify-center fixed z-40 px-4'>
        <div className='px-4 md:px-16 py-4 w-[1280px] flex flex-row items-center transition duration-500 bg-indigo-950 bg-opacity-60 rounded-2xl'>
            <h1 className='text-white font-semibold text-[24px]'>Jelly</h1>
            <div className='flex-row ml-8 gap-7 hidden lg:flex'>
                <NavbarItem label='Home' />
                <NavbarItem label='Series' />
                <NavbarItem label='My List' />
                <NavbarItem label='Browse by languages' />
                <NavbarItem label='Anime' />
            </div>
        </div>
    </nav>
  )
}

export default Navbar