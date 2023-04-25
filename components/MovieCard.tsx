import React from 'react'

interface MovieCardProps {
    data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({
    data
}) => {
  return (
    <div className='group bg-[#000018] col-span relative h-[12vw]'>
        <img className='cursor-pointer object-cover transition duration shadow-xl rounded-md gropu-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw]' src={data.thumbnailUrl} alt="Thumbnail" />

        <div className='opacity-0 absolute top-0 transition duration-200 z-50 invisible sm:invisible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[16px] group-hover:translate-x-[8px] group-hover:visible group-hover:opacity-100'>
            <img className='cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]' src={data.thumbnailUrl} alt="Thumbnail" />
            <div className='z-10 bg-indigo-950 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md'>
                
            </div>
        </div>
    </div>
  )
}

export default MovieCard