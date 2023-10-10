import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const DashbordLayout = () => {
  return (
    <div className='grid grid-cols-4 container mx-auto gap-x-5'>
        <div className='bg-green-600 p-5'>
            <Link to={'/dashboard'}>Dashboard</Link> <br />
            <Link to={'/dashboard/products'}>Products</Link>
        </div>
        <div className='col-span-3 bg-red-500 p-5'>
            <Outlet/>
        </div>
    </div>
  )
}

export default DashbordLayout