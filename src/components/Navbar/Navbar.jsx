import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import React, { useState } from 'react'
import { BsBagHeartFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { TbMenu3 } from "react-icons/tb";
import Home from '../Home/Home.jsx'



const Navbar = () => {
  const[showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }
  return (
    <div>
      <header className=''>
        <nav className='max-w-[1300px] mx-auto px-10 fixed left-0 right-0 top-0 pt-9 pb-9 bg-white flex justify-between items-center md:h-[12vh] h-[10vh] max z-50'>
          {/* logo */}
          <Link to="/" className='text-3xl font-semibold '>Freshify<span className='text-green-500 text-4xl'>X</span></Link>

          {/* Desktop Links */}
          <ul className='md:flex items-center gap-8 font-medium  hidden'>
            <li><Link to="/" className='tracking-wider text-zinc-800 hover:text-green-500'>Home</Link></li>
            <li><Link to="/about" className='tracking-wider text-zinc-800 hover:text-green-500'>About Us</Link></li>
            <li><Link to="/process" className='tracking-wider text-zinc-800 hover:text-green-500'>Process</Link></li>
            <li><Link to="/contact" className='tracking-wider text-zinc-800 hover:text-green-500'>Contact Us</Link></li>
          </ul>

          {/* Nav Action */}

          <div className='flex item-center gap-x-5'>

            {/* input field */}
            <div className='md:flex pl-4 pr-1 py-1 rounded-full border border-green-300 hidden'>
              <input type="text" name="text" id='text' placeholder='Search' className='focus:outline-none' />
              <button className='bg-linear-to-b from-green-400 to-green-600 rounded-full text-white flex items-center justify-center text-lg w-9 h-9 p-2 '>
                <IoSearch />
              </button>
            </div>

            <Link to="/favourite" className='mt-2 text-3xl text-zinc-800 '><BsBagHeartFill /></Link>
            <Link to="/shoppingcart" className='mt-2 text-3xl text-zinc-800 '><FaShoppingCart /></Link>

            {/* HamBurger */}
            <button onClick={toggleMenu} className="mt-2 text-3xl text-zinc-800 md:hidden">
              {showMenu ? <TbMenu3 /> : <IoMenu />}
            </button> 
            

            </div>
            {/* Mobile Menu */}
          <ul className={`flex flex-col gap-y-10 p-10 bg-green-500/20 backdrop-blur-xl rounded-lg items-center gap-8 font-medium  md:hidden absolute top-20 transform left-[10%] right-[10%] transition-all duration-500 ${showMenu ? 'translate-x-0' : '-translate-x-169' }`}>
              <li><Link to="/" className='tracking-wider text-zinc-800 hover:text-green-500'>Home</Link></li>
              <li><Link to="/about" className='tracking-wider text-zinc-800 hover:text-green-500'>About Us</Link></li>
              <li><Link to="/process" className='tracking-wider text-zinc-800 hover:text-green-500'>Process</Link></li>
              <li><Link to="/contact" className='tracking-wider text-zinc-800 hover:text-green-500'>Contact Us</Link></li>

              <li className='flex pl-4 pr-1 py-1 rounded-full border border-green-300 md:hidden'>
              <input type="text" name="text" id='text' placeholder='Search' className='focus:outline-none' />
              <button className='bg-linear-to-b from-green-400 to-green-600 rounded-full text-white flex items-center justify-center text-lg w-9 h-9 p-2 '>
                <IoSearch />
              </button>
            </li>
            </ul>
            

          
        </nav>

      </header>
    </div>
  )
}

export default Navbar
