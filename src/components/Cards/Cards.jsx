import React from 'react'
import { FaPlus, FaHeart } from 'react-icons/fa'
import Button from '../Button/Button.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFavorite } from '../../redux/favoriteSlice.js'

const Cards = ({ image, name, price, product }) => {

  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.items);

  const isFav = product && favorites.some(item => item.id === product.id);

  return (
    <div className='bg-zinc-100 p-5 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer'>

      {/* Card Icons */}
      <div className='flex justify-between'>
        <span
          onClick={() => dispatch(toggleFavorite(product))}
          className={`text-3xl cursor-pointer transition-all duration-300
            ${isFav ? 'text-red-500 scale-110' : 'text-zinc-300 '}
          `}
        >
          <FaHeart />
        </span>

        <button className='bg-gradient-to-b from-green-400 to-green-500 text-white p-2 rounded-md hover:shadow-lg hover:scale-105 transition-all duration-300'>
          <FaPlus />
        </button>
      </div>

      {/* Card Image */}
      <div className='w-full h-40'>
        <img src={image} alt={name} className='w-full h-full object-contain' />
      </div>

      {/* Card Details */}
      <div className='text-center'>
        <h3 className='text-xl font-semibold'>{name}</h3>
        <p className='text-xl font-bold mt-4 mb-1'>${price.toFixed(2)}</p>
        <Button content="Shop Now" />
      </div>
    </div>
  )
}

export default Cards
