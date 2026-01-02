import React, { useState, useEffect } from 'react'
import Heading from '../Heading/Heading.jsx'
import ProductList from '../ProductList/ProductList.js'
import Cards from '../Cards/Cards.jsx'
import Button from '../Button/Button.jsx'
import { Link } from 'react-router-dom'

const Product = () => {
    const tabs = ["All", "Vegetables", "Fruits", "Dairy", "Meat", "SeaFood"]

    const [activTab, setActiveTab] = useState("All")

    const filteredItems =
        activTab === "All"
            ? ProductList
            : ProductList.filter(item => item.category === activTab)

    const renderCards = filteredItems.slice(0, 8).map(items => (
        <div key={items.id}>
            <Cards
                product={items}
                image={items.image}
                name={items.name}
                price={items.price}
            />
        </div>
    ))

    return (
        <section>
            <div className='max-w-[1300px] mx-auto px-10 py-10'>
                <Heading highlight="Our" heading="Products" />

                {/* Tabs */}
                <div className='md:flex flex-wrap justify-center items-center'>
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(tab)}
                            className={`md:mx-4 mx-2 md:my-0 my-2 md:px-6 px-4 md:py-2 py-1 text-sm border border-green-500 text-green-500 rounded-full
                hover:bg-green-500 hover:text-white transition-all duration-300
                ${activTab === tab ? 'bg-green-500 text-white' : ''}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Product Cards */}
                <div className='grid md:grid-cols-4 grid-cols-1 gap-10 mt-16'>
                    {renderCards}
                </div>

                <div className='mt-15 mx-auto w-fit'>
                    <Link to="/allproducts">
                        <Button content="View All" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Product
