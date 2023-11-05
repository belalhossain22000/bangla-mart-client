import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import AddressCard from './AddressCard'
import { useUpdateUserAddressByEmailMutation } from '../../redux/api/usersApi'
import { useContext } from 'react'
import { AuthContext } from '../../provider/AuthProvider'
import { useNavigate } from 'react-router-dom'

const AddressForm = () => {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  const [updateUserAddressByEmail, { isLoading }] = useUpdateUserAddressByEmailMutation()

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const address = {
      firstName: data.get("fastName"),
      lastName: data.get("lastName"),
      address: data.get("address"),
      city: data.get("city"),
      village: data.get("village"),
      postCode: data.get("postCode"),
      phoneNumber: data.get("phoneNumber") 
    };
    updateUserAddressByEmail({ address, email: user?.email })
    console.log('address', address);
    navigate("/checkout?step=3")
  };
  return (
    <div className='py-16 container mx-auto'>
      <Grid container spacing={4}>
        <Grid xs={12} lg={4} item className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
          <div className=' py-7 p-5 border cursor-pointer'>
            <AddressCard />
            <Button sx={{ bgcolor: "purple", mt: 2 }} variant='contained' size='large'>Deliver Here </Button>
          </div>
        </Grid>
        {/* form */}
        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3} className=''>
                <Grid item xs={12} md={6} >
                  <TextField
                    required
                    id='fastName'
                    name="fastName"
                    label='First Name'
                    fullWidth
                    autoComplete='given Name'
                  />
                </Grid>
                <Grid item xs={12} md={6} >
                  <TextField
                    required
                    id='lastName'
                    name="lastName"
                    label='Last Name'
                    fullWidth
                    autoComplete='given Name'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id='address'
                    name="address"
                    label='Address'
                    fullWidth
                    autoComplete='given Name'
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12} md={6} >
                  <TextField
                    required
                    id='city'
                    name="city"
                    label='City'
                    fullWidth
                    autoComplete='given Name'
                  />
                </Grid>
                <Grid item xs={12} md={6} >
                  <TextField
                    required
                    id='village'
                    name="village"
                    label='Village'
                    fullWidth
                    autoComplete='given Name'
                  />
                </Grid>
                <Grid item xs={12} md={6} >
                  <TextField
                    required
                    id='postCode'
                    name="postCode"
                    label='Post Code'
                    fullWidth
                    autoComplete='given Name'
                  />
                </Grid>
                <Grid item xs={12} md={6} >
                  <TextField
                    required
                    id='phoneNumber'
                    name="phoneNumber"
                    label='Phone Number'
                    fullWidth
                    autoComplete='given Name'
                  />
                </Grid>
                <Grid item xs={12} md={6} >

                  <Button sx={{ bgcolor: "purple", mt: 2 }} variant='contained' size='large' type='submit'>{isLoading ? "Updating Address" : "Deliver Here"} </Button>

                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default AddressForm