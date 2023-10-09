import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <footer className=' bg-gray-900 text-white text-center mt-10 pt-24'>
      <Grid container className='container mx-auto space-y-10 xl:space-y-0 '>
        <Grid item xs={12} md={12} lg={4}>
          <img
            className="h-16 w-auto"
            src="data:image/jpeg;base64,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K78FPtqikkMSZEmXiEREQBERAEREASDJkYgGC5tlqKVcZB/WZT9RsGoPg71PZbgR3eMu+JgurdaqFHGQflzlLMw43x9pLhljHyHU/gokTb1Cweg2DvUn0W7/AB5zUnM2VyhJxktNG7hOM13R4EREwMhERAEREAREQBETHWrKil3YKqjJJhLb0g3oV6y01L1CFVRkkz0dB0FrhlubxCEUhre3YdXEVag+93Lw8eqdn9Dau63V2hVFIa3t24HrFWoPvdy8PGXMCdDg4Kr/ANSfP9Goysrv+mPAE+oibUoiIiAIiIAiIgCIiAIiIBEGTEA17igtRSrjIP6zKjqWntQbB3oey30POXWYbigtVSjjKmUsvDjkR9pLhljHvlU/gocTe1PTmoN3oey30POaM5myuVcu2S8o3cJxnHuiIiJgZCIiAIiY7iutNC7noqu8n6AcTynqTfhBtLkV6y01LuwVV6yf1vM9LQNDau63V4hVFIa3tmHUeFWoPvdy8PGfWz2hNVZbq8QqF9K3tm9TuqOOL9w9XxlynQYOAq/rn+b+jUZWV3/THj+yMSZMTalEREQBERAEREAREQBERAEREAREQBIkxAMFxQWopVxkGVHU9Oag3eh6m+h5y6GYq9BailXGQ24iU8vEjkR+Vwyei+VUvgoUT09R0epSJZFLp+HtqOa8fETyPPpnolgG4q3osPFTvE5y3GtqepRNzXdCxbizJEx1KyJ23VfaYD85joXDVj0bWm9durKDFMc2qH0R7szGFNk3qMWzKVkYrbZ93FdKal3OFHvyeAA4nlPW2f0BnZbm9TBGGoWzbxS7ncdRqf2+M2NE2aKOte9ZalZd9OmuTRok8RntN+I+7EtIm+wsBU/XP839Gqycp2fTHgCJMTZlIREQBERAEREAREQBERAEREAREQBERAEREASMSYgEYmvXs6dTdVpo47nRW/MTZiAedT0S0TetrRU5zlaFMHPfuE3lQDcAAO4DAn3E80kCMSYiegREQBERAEREAREQBERAP//Z"
            alt=""
          />
          <Typography variant='h6' className='py-10 text-left text-gray-400'>Making the world a better place through constructing elegant hierarchies.</Typography>
          <div className='flex items-center gap-8 '>
            <FacebookIcon fontSize="large" className='text-gray-400 hover:text-gray-200 cursor-pointer' />
            <InstagramIcon fontSize="large" className='text-gray-400 hover:text-gray-200 cursor-pointer' />
            <TwitterIcon fontSize="large" className='text-gray-400 hover:text-gray-200 cursor-pointer' />
            <GitHubIcon fontSize="large" className='text-gray-400 hover:text-gray-200 cursor-pointer' />
            <YouTubeIcon fontSize="large" className='text-gray-400 hover:text-gray-200 cursor-pointer' />
          </div>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={2}>
          <Typography variant='h5' className='pb-5 text-xl'>Company</Typography>
          <Link to="/"> <Typography variant='h6' className='pb-5 text-gray-400'>About</Typography></Link>
          <Link to="/"> <Typography variant='h6' className='pb-5 text-gray-400'>Blog</Typography></Link>
          <Link to="/"> <Typography variant='h6' className='pb-5 text-gray-400'>jobs</Typography></Link>
          <Link to="/"> <Typography variant='h6' className='pb-5 text-gray-400'>Press</Typography></Link>
          <Link to="/"> <Typography variant='h6' className='pb-5 text-gray-400'>Partners</Typography></Link>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={2}>
          <Typography variant='h5' className='pb-5 text-xl'>Solutions</Typography>
          <Link to="/"> <Typography variant='h6' className='pb-5 text-gray-400'>Marketing</Typography></Link>
          <Link to="/"> <Typography variant='h6' className='pb-5 text-gray-400'>Analytics</Typography></Link>
          <Link to="/"> <Typography variant='h6' className='pb-5 text-gray-400'>Commerce</Typography></Link>
          <Link to="/"> <Typography variant='h6' className='pb-5 text-gray-400'>Insights</Typography></Link>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={2}>
          <Typography variant='h5' className='pb-5 text-xl'>Support</Typography>
          <Link to="/"> <Typography variant='h6' className='pb-5 text-gray-400'>Pricing</Typography></Link>
          <Link to="/"> <Typography variant='h6' className='pb-5 text-gray-400'>Documentation</Typography></Link>
          <Link to="/"> <Typography variant='h6' className='pb-5 text-gray-400'>Guides</Typography></Link>
          <Link to="/"> <Typography variant='h6' className='pb-5 text-gray-400'>API Status</Typography></Link>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={2}>
          <Typography variant='h5' className='pb-5 text-xl'>Legal</Typography>
          <Link to="/"> <Typography variant='h6' className='pb-5 text-gray-400'>Claim</Typography></Link>
          <Link to="/"> <Typography variant='h6' className='pb-5 text-gray-400'>Privacy</Typography></Link>
          <Link to="/"> <Typography variant='h6' className='pb-5 text-gray-400'>Terms</Typography></Link>
        </Grid>
        <Grid item xs={12} className=' pt-20 pb-10'>
          <hr className='py-8 text-gray-500 '/>
          <Typography variant='small' className='pb-5 text-sm text-gray-400'>   © 2020 Your Company, Inc. All rights reserved.</Typography>

        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer