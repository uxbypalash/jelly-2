import React from 'react';
import { useState, useCallback } from 'react';
import NavbarItem from './NavbarItem'
import { BsChevronDown, BsSearch, BsBell } from 'react-icons/bs';
import MobileMenu from './MobileMenu';
import AccountMenu from './AccountMenu';

const Navbar = () => {
  const [showMobileMenu, SetShowMobileMenu] = useState(false);
  const [showAccountMenu, SetShowAccountMenu] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    SetShowMobileMenu((current) => !current);
  }, []);

  const toggleAccountMenu = useCallback(() => {
    SetShowAccountMenu((current) => !current);
  }, []);

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

        <div onClick={toggleMobileMenu} className='lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative'>
          <p className='text-white text-sm'>Browse</p>
          <BsChevronDown className={`text-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`} />
          <MobileMenu visible={showMobileMenu} />
        </div>

        <div className='flex flex-row ml-auto gap-7 items-center'>
          <div className='text-gray-200 hover:text-gray-300 cursor-pointer transition'>
            <BsSearch />
          </div>
          <div className='text-gray-200 hover:text-gray-300 cursor-pointer transition'>
            <BsBell />
          </div>

          <div onClick={toggleAccountMenu} className='flex flex-row items-center gap-2 cursor-pointer relative'>
            <div className='w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden'>
            <img src="/images/defaultpurple.png" alt="" />
            </div>
            <BsChevronDown className={`text-white transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`} />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar