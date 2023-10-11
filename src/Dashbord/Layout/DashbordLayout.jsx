import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardNav from '../components/DashboardNav/DashboardNav'
import DashboardFooter from '../components/DashboardFooter/DashboardFooter'
import Menu from '../components/Menu/Menu'
import { Grid } from '@mui/material'


const DashbordLayout = () => {
  return (
    <div className=' bg-[#2a3447]'>
      <div className='container mx-auto px-5 bg-red-'>

        <Grid container >
          <Grid item xs={12} className=''>
            <DashboardNav />
          </Grid>
          <Grid item xs={8} md={2} className='bg-gren-600 p-5'>
            <Menu />
          </Grid>
          <Grid xs={12} md={10} item className=' '>
            <Outlet />
          </Grid>
          <Grid item xs={12} className=''>
            <DashboardFooter />
          </Grid>
        </Grid>
      </div>

    </div>
  )
}

export default DashbordLayout