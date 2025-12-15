import React from 'react'
import grocery from '../../assets/grocery.png'
import Button from '../Button/Button.jsx'

const Hero = () => {
  return (
    <section >
        <div className="max-w-[1300px] mx-auto px-10 md:pt-20 pt-35  min-h-screen bg-white md:flex flex-row items-center justify-between gap-10 py-10">
            {/* hero content */}
            <div className='flex-1'>
                <span className='bg-green-200 text-green-500 text-md rounded-full px-4 py-2 '>Export Best Quality...</span>
                <h1 className=' md:text-6xl/17 text-4xl font-bold mt-3 '>
                    Taste Organic <span className='text-green-500'>Fruits</span> & <span className='text-green-500'>Veggies</span> <br /> In Your City
                    </h1>
                    <p className='text-zinc-800 md:text-md text-sm mt-3'>
                        Bred for a high content of beneficial substances. Our products are all fresh and healthy.
                    </p>
                    <Button content="Shop Now" />
            </div>

            {/* hero image */}
            <div className='flex-1 md:mt-0 mt-30 '>
                <img src={grocery} alt="hero image" />
            </div>
        </div>
    </section>
  )
}

export default Hero
