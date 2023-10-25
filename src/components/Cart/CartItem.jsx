import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material'
import { Button, IconButton } from '@mui/material'
import React, { useContext } from 'react'
import { useDeleteCartItemMutation, useUpdateProductQuantityMutation } from '../../redux/api/cartApi'
import { AuthContext } from '../../provider/AuthProvider'

const CartItem = ({ item }) => {
    const { user } = useContext(AuthContext)
    const { _id, imageUrl, title, selectedSize, color, discountedPrice, price, discountPersent, quantity } = item || {}
    const [deleteCartItem, { isLoading }] = useDeleteCartItemMutation()

    const [updateProductQuantity,] = useUpdateProductQuantityMutation()

    const handleUpdateProductQuantity = (productId, changeType) => {

        const variables = {
            productId: productId,
            change: changeType,
            email: user?.email
        }

        updateProductQuantity(variables)
    };


    const handleCartItemDelete = (_id) => {
        const itemDetails = { email: user.email, _id }

        deleteCartItem(itemDetails)
    }

   
    return (
        <div className="p-5 shadow-lg rounded-md border">
            <div className="flex items-center">
                <div className="w-[5rem] h-[5rem] lg:h-[9rem] lg:w-[9rem]">
                    <img className="w-full h-full object-cover object-left-top" src={imageUrl} />
                </div>
                <div className='ml-5 space-y-1'>
                    <h6 className='font-semibold'>{title}</h6>
                    <p className='opacity-70 font-semibold'>Size: {selectedSize?.name},{color}</p>
                    {/* <p className='opacity-70 mt-2 font-semibold'>Seller : Cristian Mahi</p> */}
                    <div className='flex items-center space-x-2 lg:text-xl mt-4'>
                        <p className='font-semibold'>$ {discountedPrice}</p>
                        <p className='line-through opacity-60'>$ {price}</p>
                        <p className='text-green-600 font-semibold'>{discountPersent} % off</p>
                    </div>

                </div>
            </div>
            <div className='lg:flex items-center lg:space-x-10 pt-4'>
                <div className='flex items-center space-x-2'>
                    <IconButton onClick={() => handleUpdateProductQuantity(item.productId, 'decrease')}>
                        <RemoveCircleOutline sx={{ color: "purple" }} />
                    </IconButton>
                    <span className='py-1 px-7 border rounded-md font-semibold text-lg opacity-80'>{quantity}</span>
                    <IconButton onClick={() => handleUpdateProductQuantity(item.productId, 'increase')}>
                        <AddCircleOutline sx={{ color: "purple" }} />
                    </IconButton>
                    <Button onClick={() => handleCartItemDelete(_id)} sx={{ color: "purple" }}>{isLoading ? "Removing" : "Remove"}</Button>
                </div>

            </div>
        </div>
    )
}

export default CartItem