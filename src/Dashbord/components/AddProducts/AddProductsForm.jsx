import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, } from '@mui/material'


import { Link } from 'react-router-dom'

const AddProductsForm = () => {




  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const address = {
      imageUrl: data.get("fastName"),
      brand: data.get("lastName"),
      title: data.get("address"),
      color: data.get("city"),
      quantity: data.get("village"),
      price: data.get("postCode"),
      discountedPrice: data.get("discountedPrice"),
      discountedPercentage: data.get("discountPercentage"),

    }
    console.log('first', address)
  }
  return (
    <div className='py-16 container mx-auto bg-white'>
      <h1 className="text-4xl font-semibold text-center pb-5">Add a Product</h1>
      <Grid container spacing={4}>

        {/* form */}
        <Grid item xs={12} >
          <Box className="border rounded-s-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3} className=''>
                <Grid item xs={12}>
                  <TextField
                    required
                    id='imageUrl'
                    name="imageUrl"
                    label='Image Url'
                    fullWidth
                    autoComplete='given url'
                  />
                </Grid>
                <Grid item xs={12} md={6} >
                  <TextField
                    required
                    id='brand'
                    name="brand"
                    label='Brand'
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
                <Grid item xs={12} md={6} >
                  <TextField
                    required
                    id='color'
                    name="color"
                    label='Color'
                    fullWidth
                    autoComplete='given Name'
                  />
                </Grid>
                <Grid item xs={12} md={6} >
                  <TextField
                    required
                    id='quantity'
                    name="quantity"
                    label='Quantity'
                    fullWidth
                    autoComplete='given Name'
                  />
                </Grid>
                <Grid item xs={12} md={4} >
                  <TextField
                    required
                    id='price'
                    name="price"
                    label='Price'
                    fullWidth
                    autoComplete='given Name'
                  />
                </Grid>
                <Grid item xs={12} md={4} >
                  <TextField
                    required
                    id='discountedPrice'
                    name="discountedPrice"
                    label='Discounted Price'
                    fullWidth
                    autoComplete='given Name'
                  />
                </Grid>
                <Grid item xs={12} md={4} >
                  <TextField
                    required
                    id='discountPercentage'
                    name="discountPercentage"
                    label='Discount Percentage'
                    fullWidth
                    autoComplete='given Name'
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormControl fullWidth>
                    <InputLabel id="topLableCategory">Top Level Category</InputLabel>
                    <Select
                      labelId="topLableCategory"
                      id="topLevel"
                      // value={age}
                      label="Top Level Category"
                    // onChange={handleChange}
                    >
                      <MenuItem value={10}>Men</MenuItem>
                      <MenuItem value={20}>Women</MenuItem>
                      <MenuItem value={30}>Third</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormControl fullWidth>
                    <InputLabel id="topLableCategory">Top Level Category</InputLabel>
                    <Select
                      labelId="topLableCategory"
                      id="topLevel"
                      // value={age}
                      label="Top Level Category"
                    // onChange={handleChange}
                    >
                      <MenuItem value={10}>Men</MenuItem>
                      <MenuItem value={20}>Women</MenuItem>
                      <MenuItem value={30}>Third</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormControl fullWidth>
                    <InputLabel id="topLableCategory">Top Level Category</InputLabel>
                    <Select
                      labelId="topLableCategory"
                      id="topLevel"
                      // value={age}
                      label="Top Level Category"
                    // onChange={handleChange}
                    >
                      <MenuItem value={10}>Men</MenuItem>
                      <MenuItem value={20}>Women</MenuItem>
                      <MenuItem value={30}>Third</MenuItem>
                    </Select>
                  </FormControl>
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
                    id='s'
                    name="s"
                    label='S'
                    fullWidth
                    autoComplete='given Name'
                  />
                </Grid>
                <Grid item xs={12} md={6} >
                  <TextField
                    required
                    id='quantity'
                    name="quantity"
                    label='Quantity'
                    fullWidth
                    autoComplete='given Name'
                  />
                </Grid>
                <Grid item xs={12} md={6} >
                  <TextField
                    required
                    id='m'
                    name="m"
                    label='M'
                    fullWidth
                    autoComplete='given Name'
                  />
                </Grid>
                <Grid item xs={12} md={6} >
                  <TextField
                    required
                    id='quantity'
                    name="quantity"
                    label='Quantity'
                    fullWidth
                    autoComplete='given Name'
                  />
                </Grid>
                <Grid item xs={12} md={6} >
                  <TextField
                    required
                    id='l'
                    name="l"
                    label='L'
                    fullWidth
                    autoComplete='given Name'
                  />
                </Grid>
                <Grid item xs={12} md={6} >
                  <TextField
                    required
                    id='quantity'
                    name="quantity"
                    label='Quantity'
                    fullWidth
                    autoComplete='given Name'
                  />
                </Grid>

                <Grid item xs={12} >
                  <Button  type='submit' className='w-full py-3' sx={{ bgcolor: "purple", mt: 2, py: "20px" }} variant='contained' type='submit'> Add Product </Button>
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