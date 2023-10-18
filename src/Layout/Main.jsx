import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import { useGetProductsQuery } from '../redux/api/productsApi'
import Loader from '../components/Loader/Loader'

const Main = () => {
    const { isLoading } = useGetProductsQuery()
    if (isLoading) {
        <Loader />
    }
    return (
        <main className='containe mxauto'>
            <Navbar />
            <Outlet />
            <Footer />
        </main>
    )
}

export default Main