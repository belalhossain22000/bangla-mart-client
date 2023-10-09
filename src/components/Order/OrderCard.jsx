import { AdjustOutlined } from '@mui/icons-material'
import { Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const OrderCard = () => {
    return (
        <Link to='/tracker?step=3'>

            <div className="shadow-lg border rounded-md p-4 container mx-auto  hover:shadow-2xl">
                <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                    <Grid item xs={6}>
                        <div className="flex cursor-pointer">

                            <img className='h-[5rem] w-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70" alt="" />
                            <div className='ml-5 space-y-2'>
                                <p>Men slim mid rise black jens</p>
                                <p className='opacity-50 text-xs font-semibold'>Size:m</p>
                                <p className='opacity-50 text-xs font-semibold'>Color:Black</p>
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={2}>
                        <p>$ 533</p>
                    </Grid>
                    <Grid item xs={4}>
                        <p className='flex items-center'> <AdjustOutlined className='w-4 h-4 text-sm text-green-600 mr-2' /> <span>Expected Delivery on march 3</span></p>
                        <p className='text-xs'>Your Item Delivered</p>
                    </Grid>
                </Grid>
            </div>
        </Link>
    )
}

export default OrderCard