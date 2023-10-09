import React from 'react'
import Hero from '../../components/Hero/Hero'
import ProductCarusel from '../../components/ProductCarusel/ProductCarusel'
import { Button } from '@mui/material'

const Home = () => {
    return (
        <main className='container mx-auto space-y-12'>
            <div className=''>
                <Hero />
            </div>
            
            {/* mens t shirt sections */}
            <div>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3xl font-semibold'>Mens T-shirt</h1>
                    <Button className=''>See All</Button>
                </div>
                <ProductCarusel />
            </div>
            {/* mens t shirt sections */}
            <div>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3xl font-semibold'>Mens T-shirt</h1>
                    <Button className=''>See All</Button>
                </div>
                <ProductCarusel />
            </div>
            {/* mens t shirt sections */}
            <div>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3xl font-semibold'>Mens T-shirt</h1>
                    <Button className=''>See All</Button>
                </div>
                <ProductCarusel />
            </div>

        </main>
    )
}

export default Home