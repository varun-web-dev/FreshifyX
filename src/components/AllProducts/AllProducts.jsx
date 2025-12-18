import CategoryViewAll from '../CategoryViewAll/CategoryViewAll'
import bgAll from '../../assets/all-banner.jpg'

const AllProducts = () => {
  return (
    <div>
      <CategoryViewAll title={"All Products"} bgImage={bgAll} tabs={["All"]}/>
    </div>
  )
}

export default AllProducts
