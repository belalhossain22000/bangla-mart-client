import React from 'react'
import Hero from '../../components/Hero/Hero'
import ProductCarusel from '../../components/ProductCarusel/ProductCarusel'
import { Button } from '@mui/material'
import { useGetProductsQuery } from '../../redux/api/productsApi'
import Loader from '../../components/Loader/Loader'

const Home = () => {
    const { data, isLoading } = useGetProductsQuery()
    const shirt = data?.filter(item => item.thirdLavelCategory == "shirt");
    const jeans = data?.filter(item => item.thirdLavelCategory == "men_jeans");
    const punjabi = data?.filter(item => item.thirdLavelCategory == "mens_kurta");
    const womenDress = data?.filter(item => item.thirdLavelCategory == "women_dress");
    const tops = data?.filter(item => item.thirdLavelCategory == "top");
    const womenJeans = data?.filter(item => item.thirdLavelCategory == "women_jeans");
    const lenghaCholi = data?.filter(item => item.thirdLavelCategory == "lengha_choli");
    console.log(shirt)
    if (isLoading) {
        return <Loader />
    }
    return (
        <main className='container mx-auto space-y-12'>
            <div className=''>
                <Hero />
            </div>

            {/* mens shirt sections */}
            <div>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3xl font-semibold'>Mens Shirt</h1>
                    <Button className=''>See All</Button>
                </div>
                <ProductCarusel data={shirt} />
            </div>
            {/* Punjabi mens sections */}
            <div>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3xl font-semibold'>Mens Punjabi</h1>
                    <Button className=''>See All</Button>
                </div>
                <ProductCarusel data={punjabi} />
            </div>
            {/* mens Jeans sections */}
            <div>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3xl font-semibold'>Mens Jeans</h1>
                    <Button className=''>See All</Button>
                </div>
                <ProductCarusel data={jeans} />
            </div>
            {/* women dress sections */}
            <div>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3xl font-semibold'>Women Dress</h1>
                    <Button className=''>See All</Button>
                </div>
                <ProductCarusel data={womenDress} />
            </div>
            {/* Women tops sections */}
            <div>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3xl font-semibold'>Women Tops</h1>
                    <Button className=''>See All</Button>
                </div>
                <ProductCarusel data={tops} />
            </div>
            {/* women jeans sections */}
            <div>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3xl font-semibold'>Women Jeans</h1>
                    <Button className=''>See All</Button>
                </div>
                <ProductCarusel data={womenJeans} />
            </div>
            {/* Women lehenga sections */}
            <div>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3xl font-semibold'>Women Lehenga</h1>
                    <Button className=''>See All</Button>
                </div>
                <ProductCarusel data={lenghaCholi} />
            </div>

        </main>
    )
}

export default Home