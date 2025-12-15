import React from 'react'

const Heading = ({highlight,heading}) => {
  return (
    <div className='flex flex-col items-center md:gap-3 gap-2 mb-10'>
                <h2 className='md:text-4xl text-3xl font-bold text-center '>
                    <span className='text-green-500'>{highlight}</span> {heading}
                    </h2>
                <div className='bg-green-500 md:w-35 w-29 h-1'></div>

            </div>
  )
}

export default Heading
