import React from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    // console.log(product)
    function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', 
        });
      }
    
    return (
        <Link to={`/product-details/${product._id}`} onClick={() => scrollToTop()}>
            <div className='productCard w-[15rem] m-3 transition-all cursor-pointer rounded-md'>
                <div className='h-[20rem]'>
                    <img className='h-full w-full object-cover object-left-top rounded-md' src={product.imageUrl} alt="" />
                </div>
                <div className='textPart bg-white p-3'>
                    <div>
                        <p className='font-bold opacity-60'>{product.brand}</p>
                        <p>{product.title}</p>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <p className='font-semibold'>$ {product.discountedPrice}</p>
                        <p className='line-through opacity-60'>$ {product.price}</p>
                        <p className='text-green-600 font-semibold'>{product.discountPrice} % off</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard