import React from 'react'
import Heading from '../Heading/Heading.jsx'
import { useState } from 'react'
import ProductList from '../ProductList/ProductList.js'
import Cards from '../Cards/Cards.jsx'
import Button from '../Button/Button.jsx'

const Product = () => {
    const tabs =["All","Vegetables","Fruits","Dairy","Meat"]

    const [activTab,setActiveTab]=useState("All")

    const filteredItems = activTab === "All" ? ProductList : ProductList.filter(item => item.category === activTab);

    const renderCards = filteredItems.slice(0,8).map((items)=>{
        return(
            <div key={items.id}>
                <Cards image={items.image} name={items.name} price={items.price}/>
            </div>
        )
    })



  return (
    <section>
        <div className='max-w-[1300px] mx-auto px-10 py-10'>
            <Heading highlight="Our" heading="Products"/>

            {/* Tabs */}
            <div className='md:flex flex-wrap justify-center items-center'>
                {
                    tabs.map((tab,index)=>(
                        <button key={index} className={`md:mx-4 mx-2 md:my-0 my-2 md:px-6 px-4 md:py-2 py-1 text-sm border border-green-500 text-green-500 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 cursor-pointer ${activTab===tab ? 'bg-green-500 text-white':''}`} onClick={()=>setActiveTab(tab)}>
                            {tab}
                        </button>
                    ))
                }
            </div>

            {/* Product Cards */}
            <div className='grid grid-cols-4 gap-10 mt-16'>
                {renderCards}
            </div>

            <div className='mt-15 mx-auto w-fit'>
                <Button content="View All" />
            </div>
        </div>
    </section>
  )
}

export default Product
