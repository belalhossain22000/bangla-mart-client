import { Box, Button, Grid, TextField, } from '@mui/material'


import { Link } from 'react-router-dom'

const AddProductsForm = () => {




  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const address = {
      firstName: data.get("fastName"),
      lastName: data.get("lastName"),
      address: data.get("address"),
      city: data.get("city"),
      village: data.get("village"),
      postCode: data.get("postCode"),
      phoneNumber: data.get("phonNumber")

    }
    console.log('first', address)
  }
  return (
    <div className='py-16 container mx-auto bg-white'>
      <Grid container spacing={4}>

        {/* form */}
        <Grid item xs={12} >
          <Box className="border rounded-s-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3} className=''>
                <Grid item xs={12} md={6} >
                  <TextField
                    required
                    id='title'
                    name="title"
                    label='Title'
                    fullWidth
                    autoComplete='given Name'
                  />
                </Grid>
                <Grid item xs={12} md={6} >
                  <TextField
                    required
                    id='title'
                    name="title"
                    label='Title'
                    fullWidth
                    autoComplete='given Name'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id='description'
                    name="description"
                    label='Description'
                    fullWidth
                    autoComplete='given Name'
                    multiline
                    rows={3}
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
                    name="phonNumber"
                    label='Phone Number'
                    fullWidth
                    autoComplete='given Name'
                  />
                </Grid>
                <Grid item xs={12} >
                  <Link to='/checkout?step=3'>
                    <Button className='w-full py-3' sx={{ bgcolor: "purple", mt: 2, py: "20px" }} variant='contained' type='submit'> Add Product </Button>
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default AddProductsForm