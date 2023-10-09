import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReview = () => {
    return (
        <div>
            <Grid container spacing={2} gap={3}>
                <Grid item xs={1}>
                    <Box>
                        <Avatar className='text-wite' sx={{ width: 56,height:56, bgcolor: "#9155fd" }}></Avatar>
                    </Box>

                </Grid>
                <Grid item xs={9}>
                    <div className='space-y-2'>
                        <div>
                            <p className='text-lg font-semibold'>Belal Hossain</p>
                            <p className='opacity-70'>April 6, 2023</p>
                        </div>
                    </div>
                    <Rating value={4.5} readOnly precision={4} name="half rating" />
                    <p>Lorem ipsum dolor sit amet consectetur  </p>

                </Grid>
            </Grid>
        </div>
    )
}

export default ProductReview