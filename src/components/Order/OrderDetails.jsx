import React from 'react'
import AddressCard from '../CheckOut/AddressCard'
import OrderTracker from './OrderTracker'
import { Button, Grid } from '@mui/material'
import { StarRateRounded } from '@mui/icons-material'

const OrderDetails = () => {
    return (
        <div className='px-5 container mx-auto'>
            <div>
                <h1 className='font-bold text-gray-900 text-xl py-5'>Delivery Address</h1>
                <AddressCard />
            </div>
            <div className='my-10'>
                <OrderTracker activeStep={3} />
            </div>
            <div className="space-y-5">
                {[1, 1, 1, 1, 1].map((item, index) => <div key={index} className='border p-5 cursor-pointer shadow-lg hover:shadow-xl rounded-md'>
                    <Grid container sx={{ justifyContent: "space-between", alignItems: "center", }}>
                        <Grid item xs={6}>
                            <div className='flex items-center gap-x-5'>
                                <img className='h-[8rem] w-[6rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70" alt="" />
                                <div className='space-y-1'>
                                    <p className='font-semibold'>Mens slim mid black shirt</p>
                                    <p className='flex gap-x-5 opacity-60'><span>Color:black</span>  <span>Size:L</span></p>
                                    <p className="text-lg">Seller:Jahid</p>
                                    <p className='text-xl'>$ 999</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item >
                            <div className="flex items-center gap-x-2">
                                <StarRateRounded className='text-lg text-purple-600' />
                                <Button sx={{ color: "purple" }} className='font-semibold'>Rate & Review Product</Button>
                            </div>
                        </Grid>
                    </Grid>
                </div>)}
            </div>

        </div>
    )
}

export default OrderDetails