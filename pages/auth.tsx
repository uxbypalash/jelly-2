import Input from '@/components/Input'
import React from 'react'

const auth = () => {
  return (
    <div className='relative h-full w-full bg-[url("/images/loginbanner.png")] bg-no-repeat bg-center bg-fixed'>
        <div className='bg-black w-full h-full lg:bg-opacity-40'>
            <nav className='px-12 py-5'>
                <h1 className='text-[24px] text-white'>Jelly</h1>
            </nav>

            <div className='flex justify-center'>
                <div className='bg-black bg-opacity-90 p-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full'>
                    <h2 className='text-white text-4xl mb-8 font-semibold'>
                        Log in
                    </h2>
                    <div className='flex flex-col gap-4'>
                        <Input />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default auth