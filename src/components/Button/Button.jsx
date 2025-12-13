import React from 'react'

const Button = ({content}) => {
    return (
        <div>
            <button className='bg-linear-to-b from-green-400 to-green-500 text-white px-5 py-2 rounded-lg  hover:from-green-600 hover:scale-3d transition duration-300 cursor-pointer mt-4'>
                {content}
                </button>
        </div>
    )
}

export default Button
