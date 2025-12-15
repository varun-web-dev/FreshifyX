import React from 'react'
import Category from '../Category/Category.jsx'
import Heading from '../Heading/Heading.jsx'
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from 'react-icons/fa'
import basket from '../../assets/basket-full-vegetables.png'

const Values = () => {
    const leftValues = value.slice(0, 2).map(items => {
        return (
            <div key={items.id} className='flex md:flex-row-reverse items-center gap-7'>
                <div>
                    <span className='flex justify-center items-center text-white text-3xl bg-gradient-to-b from-green-400 to-green-600 w-15 h-15 rounded-full'>{items.icon}</span>
                </div>
                <div className='md:text-right'>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{items.title}</h3>
                    <p className='text-zinc-600 text-sm mt-2'>{items.paragraph}</p>
                </div>
            </div>
            )
    })

    const rightValues = value.slice(2).map(items => {
        return (
            <div key={items.id} className='flex flex-row items-center gap-7'>
                <div>
                    <span className='flex justify-center items-center text-white text-3xl bg-gradient-to-b from-green-400 to-green-600 w-15 h-15 rounded-full'>{items.icon}</span>
                </div>
                <div className='text-left'>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{items.title}</h3>
                    <p className='text-zinc-600 text-sm mt-2'>{items.paragraph}</p>
                </div>
            </div>
            )
    })


    return (
        <section>
            <div className='max-w-[1300px] mx-auto px-10 '>
                <Heading highlight="Our" heading="Values" />

                <div className='md:flex flex-row  gap-5  mt-15'>

                    {/* Left Values side */}
                    <div className="md:min-h-100 flex flex-col justify-between md:gap-0 gap-15 md:mb-0 mb-15">
                        {leftValues}
                    </div>

                    {/* basket image */}
                    <div  className="md:flex w-1/2 hidden ">
                        <img src={basket} alt="basket" />
                    </div>

                    {/* Right Values side */}
                    <div className='md:min-h-100 flex flex-col justify-between md:gap-0 gap-15 md:mb-0 mb-15'>
                        {rightValues}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Values

const value = [
    {
        id: 1,
        title: "Trust",
        paragraph: "It is a long established fact that a reader will be distracted by the readable.",
        icon: <FaHeart />
    },
    {
        id: 2,
        title: "Always Fresh",
        paragraph: "It is a long established fact that a reader will be distracted by the readable.",
        icon: <FaLeaf />
    },
    {
        id: 3,
        title: "Food Safety",
        paragraph: "It is a long established fact that a reader will be distracted by the readable.",
        icon: <FaShieldAlt />
    },
    {
        id: 4,
        title: "100% Organic",
        paragraph: "It is a long established fact that a reader will be distracted by the readable.",
        icon: <FaSeedling />
    }

]