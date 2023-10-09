import { Grid } from '@mui/material'
import React from 'react'
import OrderCard from './OrderCard'
const orderStatus = [
    { label: "On the Way", value: "on_the_way" },
    { label: "Delivered", value: "delivered" },
    { label: "Cancelled", value: "cancelled" },
    { label: "Return", value: "return" },
]
const Order = () => {
    return (
        <div className='container mx-auto my-10'>
            <Grid container sx={{ justifyContent: "space-between" }} className='relative'>
                <Grid item xs={2.8} >
                    <div className='h-auto shadow-lg bg-white p-5 sticky top-20 border rounded-md'>
                        <h1 className='font-bold text-lg'>Filter</h1>
                        <div className='space-y-4 mt-10'>
                            <h1 className='font-semibold'>Order Status</h1>
                            {
                                orderStatus.map((option, index) => <div key={index} className='flex items-center'>
                                    <input defaultValue={option.value} type="checkbox" className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500  cursor-pointer' />
                                    <label className='text-gray-600 ml-3 text-sm' htmlFor={option.value}>{option.label}</label>
                                </div>)
                            }
                        </div>
                    </div>

                </Grid>
                <Grid xs={9}>
                    <div className='space-y-5'>

                        {
                            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => <OrderCard key={index} />)
                        }
                    </div>

                </Grid>
            </Grid>
        </div>
    )
}

export default Order