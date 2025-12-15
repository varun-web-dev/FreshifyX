import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import Hero from '../Hero/Hero.jsx'
import Category from '../Category/Category.jsx'
import Values from '../Values/Values.jsx'
import Heading from '../Heading/Heading.jsx'

const Home = () => {
  return (
    <div className="max-w-[1300px] mx-auto px-10 py-10">
      <Hero />
      <Category />
      <Values />
    </div>
  )
}

export default Home
