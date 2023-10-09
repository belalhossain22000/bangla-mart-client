import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

const Main = () => {
    return (
        <main className='containe mxauto'>
            <Navbar />
            <Outlet />
            <Footer />
        </main>
    )
}

export default Main