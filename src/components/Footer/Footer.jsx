import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
        <div className='flex flex-wrap md:gap-0 gap-12 max-w-[1300px] mx-auto px-10 py-10 bg-zinc-200 md:mt-20 mt-10'>

            <div className='flex-1 basis-[300px]'>
                <Link to="/" className='text-3xl font-semibold '>Freshify<span className='text-green-500 text-4xl'>X</span></Link>

                <p className='text-zinc-600 mt-6 max-w-[350px]'>
                    Bred for a high content of beneficial substances. Our products are all fresh and healthy.
                </p>
                <p className='text-zinc-600 mt-6'>
                    2025 &copy; FreshifyX. All rights reserved.
                </p>
            </div>

            <ul className='flex-1 '>
                <li>
                    <h5 className='text-zinc-800 text-2xl font-semibold'>Company</h5>
                </li>
                <li className='mt-6 '>
                    <Link to="/about" className='hover:text-green-500 text-zinc-800 '>About Us</Link>
                </li>
                <li className='mt-6'>
                    <Link to="/faq" className='hover:text-green-500 text-zinc-800 '>FAQ's</Link>
                </li>
            </ul>

            <ul className='flex-1'>
                <li>
                    <h5 className='text-zinc-800 text-2xl font-semibold'>Support</h5>
                </li>
                <li className='mt-6'>
                    <Link to="/support" className='hover:text-green-500 text-zinc-800 '>Support Center</Link>
                </li>
                <li className='mt-6'>
                    <Link to="/feedback" className='hover:text-green-500 text-zinc-800 '>Feedback</Link>
                </li>
                <li className='mt-6'>
                    <Link to="/contact" className='hover:text-green-500 text-zinc-800 '>Contact Us</Link>
                </li>
            </ul>

            <div className='flex-1'>
                <h5 className='text-zinc-800 text-2xl font-semibold'>Stay Connected</h5>
                <p className='text-zinc-600 mt-6 '>
                    Questions or Feedbacks? <br /> We'd love to hear from you!
                </p>

                <div className='flex mt-6 bg-white rounded-lg'>
                    <input type="email" placeholder="Enter your email" autoComplete="off" className='w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500' />
                    <button className='bg-gradient-to-b from-green-400 to-green-500 text-white p-2 rounded-lg text-xl cursor-pointer hover:to-green-600'> 
                        <IoIosArrowForward />
                    </button>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer
