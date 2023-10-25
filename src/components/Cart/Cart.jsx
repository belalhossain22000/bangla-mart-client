import React, { useContext } from 'react'
import CartItem from './CartItem'
import { Button, } from '@mui/material'
import { Link } from 'react-router-dom'
import { useGetCartByEmailQuery, } from '../../redux/api/cartApi'
import { AuthContext } from '../../provider/AuthProvider'
import Loader from '../Loader/Loader'

const Cart = () => {
    const { user } = useContext(AuthContext)
    const { data: cartItem, isLoading, } = useGetCartByEmailQuery(user?.email)
    // console.log(cartItem)
    const totalPrice = cartItem?.reduce((total, product) => {
        return total + product.discountedPrice * product.quantity;
    }, 0);
    console.log(totalPrice)
    const deliveryFee = 50

    // Calculate the total discount
    const totalDiscount = cartItem?.reduce((total, product) => {
        const discount = (product.price - product.discountedPrice) * product.quantity;
        return total + discount;
    }, 0);
    if (isLoading && cartItem?.length == 0 && !cartItem.length) {
        return <Loader />
    }
    return (
        <div className='container mx-auto mt-10'>
            <div className='lg:grid grid-cols-3 lg:px-16 relative'>
                <div className='col-span-2 space-y-5'>
                    {
                        cartItem?.length == 0 ? <h1 className="text-2xl font-bold text-center h-[100vh]">Plese add your product and see your cart</h1> : cartItem?.map((item, index) => <CartItem key={index} item={item} />)
                    }

                </div>
                {cartItem?.length && <div className='col-span-1 px-5 sticky top-10 h-[100vh] mt-5 lg:mt-0'>
                    <div className='border p-3'>
                        <h6 className='text-gray-900 opacity-80 text-lg mb-3'>Price Details</h6>
                        <hr />
                        <div className='font-semibold text-black flex items-center justify-between space-y-5'>
                            <p>Total Price</p>
                            <p className='text-green-600'>$ {totalPrice}</p>
                        </div>
                        <div className='font-semibold text-black flex items-center justify-between space-y-5'>
                            <p> Total Discount</p>
                            <p className='text-green-600'>$ {totalDiscount}</p>
                        </div>
                        <div className='font-semibold text-black flex items-center justify-between space-y-5'>
                            <p>Delivery Charge</p>
                            <p className='text-green-600'>$ {totalPrice > 1000 ? 'Free' : deliveryFee}</p>
                        </div>
                        <hr className='my-3' />
                        <div className='font-bold text-xl text-black flex items-center justify-between space-y-5'>
                            <p className='text-gray-900'>Total Amount</p>
                            <p className='text-green-600'>$ {totalPrice&&totalPrice > 1000 ? totalPrice : totalPrice + deliveryFee}</p>
                        </div>
                        <Link to={user ? "/checkout?step=2" : "/login"}>
                            <Button variant='contained' sx={{ bgcolor: "purple", py: ".8rem", my: ".7rem" }} className='w-full'>Check Out</Button>
                        </Link>
                    </div>

                </div>}
            </div>
        </div>
    )
}

export default Cart