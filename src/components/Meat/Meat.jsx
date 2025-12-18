import React from 'react'
import bgMeat from '../../assets/seafood-banner.jpg'
import CategoryViewAll from '../CategoryViewAll/CategoryViewAll'

const Meat = () => {
  return (
    <div>
      <CategoryViewAll title="Meat & SeaFood" bgImage={bgMeat} tabs={["Meat","SeaFood"]}/>
    </div>
  )
}

export default Meat
