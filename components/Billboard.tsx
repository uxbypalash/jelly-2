import useBillboard from '@/hooks/useBillboard'
import React from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const Billboard = () => {
    const { data } = useBillboard();

  return (
    <div className='relative mb-8'>
      <video className='w-full h-[660px] object-cover brightness-[60%]' autoPlay muted loop poster={data?.thumbnailUrl} src={data?.videoUrl}></video>
      <div className='absolute top-[50%] md:top-[30%] ml-4 md:ml-16'>
        <p className='text-white text-3xl md:text-5xl h-full w-auto lg:text-6xl font-bold drop-shadow-xl'>
          {data?.title}
        </p>
        <p className='text-white text-[14px] font-medium sm:text-[16px] mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl'>
          {data?.description}
        </p>
        <div className='flex flex-row items-center mt-3 md:mt-4 gap-3'>
          <button className='bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition'>
              <AiOutlineInfoCircle className='mr-1' />
              More Info
          </button>
        </div>
      </div>
    </div>
  )
}

export default Billboard