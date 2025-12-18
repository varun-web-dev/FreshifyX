import React from 'react'

const Banner = ({title, bgImage}) => {
  return (
    <div className='max-w-[1300px] mx-auto px-10 bg-center md:bg-cover bg-contain md:h-[50vh] h-[30vh] mt-25 flex justify-center items-center' style={{backgroundImage: `url(${bgImage})`}}>
      <h2 className='md:text-5xl text-2xl text-zinc-800 bg-white p-5 rounded-xl font-bold'>
        {title}
      </h2>
    </div>
  )
}

export default Banner
