import React from 'react'
import bgDairy from '../../assets/dairy-banner.jpg'
import CategoryViewAll from '../CategoryViewAll/CategoryViewAll'

const Dairy = () => {
  return (
    <div>
      <CategoryViewAll title="Dairy & Eggs" bgImage={bgDairy} tabs={["Dairy"]}/>
    </div>
  )
}

export default Dairy
