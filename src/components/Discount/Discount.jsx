import React from 'react'
import Button from '../Button/Button.jsx'
import FreshFruits from '../../assets/fresh-fruits.png'

const Discount = () => {
  return (
    <section className='bg-zinc-200 bg-right bg-contain bg-no-repeat' style={{backgroundImage: `url(${FreshFruits})`}}>
        <div className='md:flex md:bg-transparent bg-zinc-200 flex-cols max-w-[1300px] mx-auto px-10 py-10'>
            <span className='md:text-9xl text-6xl text-green-500 font-bold transform md:-rotate-90 self-center'>20%</span>
            <div className='max-w-[600px] '>
                <h3 className='md:text-7xl text-4xl text-zinc-800 font-bold '>First Order Discount!</h3>
                <p className='text-zinc-600 my-5 text-sm '>Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big on your first purchase. Fast delivery and quality guaranteed.</p>
                <Button content="Get a Discount" />
            </div>
        </div>
    </section>
  )
}

export default Discount
