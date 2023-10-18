import React from 'react'
import Hero from '../../components/Hero/Hero'
import ProductCarusel from '../../components/ProductCarusel/ProductCarusel'
import { Button } from '@mui/material'
import { useGetProductsQuery } from '../../redux/api/productsApi'
import Loader from '../../components/Loader/Loader'

const Home = () => {
    const { data, isLoading } = useGetProductsQuery()
    console.log(data)
if(isLoading){
    return <Loader/>
}
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
                <ProductCarusel data={data}/>
            </div>
            {/* mens t shirt sections */}
            <div>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3xl font-semibold'>Mens T-shirt</h1>
                    <Button className=''>See All</Button>
                </div>
                <ProductCarusel data={data}/>
            </div>
            {/* mens t shirt sections */}
            <div>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3xl font-semibold'>Mens T-shirt</h1>
                    <Button className=''>See All</Button>
                </div>
                <ProductCarusel data={data}/>
            </div>

        </main>
    )
}

export default Home