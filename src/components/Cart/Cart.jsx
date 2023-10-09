import React from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Cart = () => {
    return (
        <div className='container mx-auto mt-10'>
            <div className='lg:grid grid-cols-3 lg:px-16 relative'>
                <div className='col-span-2 space-y-5'>
                    {
                        [1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => <CartItem key={index} />)
                    }

                </div>
                <div className='col-span-1 px-5 sticky top-10 h-[100vh] mt-5 lg:mt-0'>
                    <div className='border p-3'>
                        <h6 className='text-gray-900 opacity-80 text-lg mb-3'>Price Details</h6>
                        <hr />
                        <div className='font-semibold text-black flex items-center justify-between space-y-5'>
                            <p>Price</p>
                            <p className='text-green-600'>$ 576</p>
                        </div>
                        <div className='font-semibold text-black flex items-center justify-between space-y-5'>
                            <p>Discount</p>
                            <p className='text-green-600'>$ 376</p>
                        </div>
                        <div className='font-semibold text-black flex items-center justify-between space-y-5'>
                            <p>Delivery Charge</p>
                            <p className='text-green-600'>Free</p>
                        </div>
                        <hr className='my-3' />
                        <div className='font-bold text-xl text-black flex items-center justify-between space-y-5'>
                            <p className='text-gray-900'>Total Amount</p>
                            <p className='text-green-600'>$ 576</p>
                        </div>
                        <Link to="/checkout?step=2">
                        <Button variant='contained' sx={{ bgcolor: "purple", py: ".8rem", my: ".7rem" }} className='w-full'>Check Out</Button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cart