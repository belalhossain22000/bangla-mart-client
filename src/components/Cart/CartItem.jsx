import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material'
import { Button, IconButton } from '@mui/material'
import React from 'react'

const CartItem = () => {
    return (
        <div className="p-5 shadow-lg rounded-md border">
            <div className="flex items-center">
                <div className="w-[5rem] h-[5rem] lg:h-[9rem] lg:w-[9rem]">
                    <img className="w-full h-full" src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/j/a/r/l-poch521835-peter-england-original-imag7jg47g7cxhg3-bb.jpeg?q=70" />
                </div>
                <div className='ml-5 space-y-1'>
                    <h6 className='font-semibold'> Men slim mid rise black jens</h6>
                    <p className='opacity-70 font-semibold'>Size: L , White</p>
                    <p className='opacity-70 mt-2 font-semibold'>Seller : Cristian Mahi</p>
                    <div className='flex items-center space-x-2 lg:text-xl mt-4'>
                        <p className='font-semibold'>$ 500</p>
                        <p className='line-through opacity-60'>$ 800</p>
                        <p className='text-green-600 font-semibold'>30 % off</p>
                    </div>

                </div>
            </div>
            <div className='lg:flex items-center lg:space-x-10 pt-4'>
                <div className='flex items-center space-x-2'>
                    <IconButton>
                        <RemoveCircleOutline sx={{color:"purple"}} />
                    </IconButton>
                    <span className='py-1 px-7 border rounded-md font-semibold text-lg opacity-80'>0</span>
                    <IconButton>
                        <AddCircleOutline sx={{color:"purple"}} />
                    </IconButton>
                    <Button sx={{color:"purple"}}>Remove</Button>
                </div>

            </div>
        </div>
    )
}

export default CartItem