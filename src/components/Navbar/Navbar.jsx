import React from 'react'
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { BsBagHeartFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";



const Navbar = () => {
  return (
    <div>
      <header className=''>
        <nav className='max-w-[1300px] mx-auto mt-5 px-10 flex justify-between items-center h-[10vh] max'>
            {/* logo */}
            <Link to="/" className='text-3xl font-semibold '>Freshify<span className='text-green-600'>X</span></Link>

            {/* Desktop Links */}
            <ul className='flex items-center gap-8 font-medium'>
                <li><Link to="/" className='tracking-wider text-zinc-800 hover:text-green-500'>Home</Link></li>
                <li><Link to="/about" className='tracking-wider text-zinc-800 hover:text-green-500'>About Us</Link></li>
                <li><Link to="/process" className='tracking-wider text-zinc-800 hover:text-green-500'>Process</Link></li>
                <li><Link to="/contact" className='tracking-wider text-zinc-800 hover:text-green-500'>Contact Us</Link></li>
            </ul>

            {/* Nav Action */}

              <div className='flex item-center gap-x-5'>

                {/* input field */}
                <div className='flex pl-4 pr-1 py-1 rounded-full border border-green-300 '>
                  <input type="text" name="text" id='text' placeholder='Search' className='focus:outline-none'/>
                  <button className='bg-gradient-to-t from-green-400 to-green-600 rounded-full text-white flex items-center justify-center text-2xl w-10 h-10 p-2 '>
                    <IoSearch />
                  </button>
                </div>

                <Link to="/favourite" className='mt-2 text-3xl text-zinc-800 '><BsBagHeartFill /></Link>
                <Link to="/shoppingcart" className='mt-2 text-3xl text-zinc-800 '><FaShoppingCart /></Link>
                
              </div>
            
        </nav>
        <Routes>
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="/about" element={<h1>About Us Page</h1>} />
            <Route path="/process" element={<h1>Process Page</h1>} />
            <Route path="/contact" element={<h1>Contact Us Page</h1>} />
        </Routes>
      </header>
    </div>
  )
}

export default Navbar
