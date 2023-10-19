import React from 'react'
import { Link } from 'react-router-dom'

const HomeProductCard = ({ item }) => {

    function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', 
        });
      }

    return (
        <Link to={`/product-details/${item._id}`} onClick={() => scrollToTop()}>
        <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 my-10'>
            <div className='w-[10rem] h-[13rem]'>
                <img className='object-cover w-full h-full object-top' src={item?.imageUrl} alt="" />
            </div>
            <div className='p-4'>
                <h3 className='text-lg font-medium text-gray-800'>{item.brand}</h3>
                <p className='text-sm mt-2 text-gray-500'>{item.title}</p>
            </div>

        </div>
        </Link>
    )
}

export default HomeProductCard