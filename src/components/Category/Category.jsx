import React from 'react'
import FruitsCat from '../../assets/fruits-and-veggies.png'
import DairyCat from '../../assets/dairy-and-eggs.png'
import MeatCat from '../../assets/meat-and-seafood.png'
import Button from '../Button/Button.jsx'
import Heading from '../Heading/Heading.jsx'
import {Link} from 'react-router-dom'

const Category = () => {
    const renderCards = category.map(items => {
        return (
                // cards
                <div key={items.id} className='flex-1 '>

                    {/* Card Image */}
                    <div className=' w-full min-h-60 relative -mb-10'>
                        <img src={items.image} alt={items.title} className='absolute bottom-0'/>
                    </div>

                    {/* Card content */}
                    <div className=' bg-zinc-300 p-10 pt-15 rounded-2xl'>
                        <h3 className='md:text-3xl text-xl font-bold '>{items.title}</h3>
                        <p className=" md:text-[0.8rem] text-[0.7rem] mt-3 md:mb-7 mb-0">{items.description}</p>
                        <Link to={items.path} ><Button content="See All"/></Link>
                    </div>
                </div>
        )
    })
        
  return (
    <section>
        <div className='max-w-[1300px] mx-auto px-10 py-10 '>
            {/* Heading */}
            <Heading highlight="Shop" heading="By Category" />

            {/* category cards */}
            <div className='md:flex flex-wrap gap-6 md:mt-10 -mt-30 '>
                {renderCards}
            </div>
            
        </div>
    </section>
  )
}

export default Category

const category =[
    {
        id:1,
        title:"Fruits & Veggies",
        description: "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
        image: FruitsCat,
        path: "/fruits"
    },
    {
        id:2,
        title:"Dairy & Eggs",
        description: "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
        image: DairyCat,
        path: "/dairy"
    },
    {
        id:3,
        title:"Meat & SeaFood",
        description: "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
        image: MeatCat,
        path: "/meat"
    }
]
