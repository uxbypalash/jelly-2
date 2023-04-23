import React from 'react'

const Navbar = () => {
  return (
    <nav className='mt-10 w-full flex items-center justify-center fixed z-40 px-4'>
        <div className='px-4 md:px-16 py-6 w-[1280px] flex flex-row items-center transition duration-500 bg-indigo-950 bg-opacity-60 rounded-2xl'>
            <h1 className='text-white font-semibold text-24'>Jelly</h1>
        </div>
    </nav>
  )
}

export default Navbar