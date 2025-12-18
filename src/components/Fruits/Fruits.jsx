import React from 'react'
import bgFruits from '../../assets/fruits-banner.jpg'
import CategoryViewAll from '../CategoryViewAll/CategoryViewAll'

const Fruits = () => {
  return (
    <div>
     <CategoryViewAll title="Fruits & Veggies" bgImage={bgFruits} tabs={["Fruits","Vegetables"]}/>
    </div>
  )
}

export default Fruits
