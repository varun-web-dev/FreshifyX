import React from 'react'
import ProductList from '../ProductList/ProductList'
import Banner from '../Banner/Banner'
import Cards from '../Cards/Cards'

const CategoryViewAll = ({title, bgImage, tabs=[]}) => {

    let filteredItems = tabs.includes("All")
    ? ProductList
    : ProductList.filter(items=> tabs.includes(items.category))

    const renderProducts = filteredItems.map(items => {
        return (
            <Cards image={items.image} name={items.name} price={items.price} />
        )
    })
    return (
        <div>
            <Banner title={title} bgImage={bgImage}/>
            <div className='max-w-[1300px] mx-auto px-10 grid md:grid-cols-4 grid-cols-1 gap-9'>
                {renderProducts}
            </div>


        </div>

    )
}

export default CategoryViewAll
