
import React from 'react'
import TopDeals from '../topDeals/TopDeals'
import SingleChart from '../SingleChart/SingleChart'
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data";
import Pichart from '../Pichart/Pichart';
import BarChartBox from '../BarChart/BarChart';
import BigChartBox from '../BigChartBox/BigChartBox';

const Dashbord = () => {
  return (
    <div className=''>
      <div className='grid grid-cols-4 gap-2'>
        <div className='border border-[#556178] rounded-md row-span-3 w-full h-full'>
          <TopDeals />
        </div>
        <div className='border border-[#556178] rounded-md  w-full h-[180px]'>
          <SingleChart chartBoxUser={chartBoxUser} />
        </div>
        <div className='border border-[#556178]  rounded-md  w-full h-[180px]'>
          <SingleChart chartBoxUser={chartBoxProduct} />
        </div>
        <div className='border border-[#556178] rounded-md row-span-3  w-full '>
          <Pichart />
        </div>
        <div className='border border-[#556178] rounded-md  w-full h-[180px]'>
          <SingleChart chartBoxUser={chartBoxConversion} />
        </div>
        <div className='border border-[#556178] rounded-md  w-full h-[180px]'> <SingleChart chartBoxUser={chartBoxRevenue} /></div>
        <div className='border border-[#556178] rounded-md col-span-2 row-span-2   h-[360px]'><BigChartBox/></div>
        <div className='border border-[#556178] rounded-md  w-full h-[180px]'><BarChartBox barChartBoxVisit={barChartBoxVisit} /></div>
        <div className='border border-[#556178] rounded-md  w-full h-[180px]'><BarChartBox barChartBoxVisit={barChartBoxRevenue} /></div>
      </div>
    </div>
  )
}

export default Dashbord