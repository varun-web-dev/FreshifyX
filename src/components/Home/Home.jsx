import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import Hero from '../Hero/Hero.jsx'
import Category from '../Category/Category.jsx'

const Home = () => {
  return (
    <div className="max-w-[1300px] mx-auto px-10">
      <Hero />
      <Category highlight="Shop" heading="By Category" />
    </div>
  )
}

export default Home
