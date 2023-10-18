import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, } from '@mui/material'

const AddProductsForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const productsData = {
      imageUrl: data.get("imageUrl"),
      brand: data.get("brand"),
      title: data.get("title"),
      color: data.get("color"),
      quantity: data.get("quantity"),
      price: data.get("price"),
      discountedPrice: data.get("discountedPrice"),
      discountPercentage: data.get("discountPercentage"),
      topLevelCategory: data.get("topLevelCategory"),
      secondLevelCategory: data.get("secondLevelCategory"),
      thirdLevelCategory: data.get("thirdLevelCategory"),
      description: data.get("description"),
    };
    console.log('Form Data', productsData);
  };
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
                    <InputLabel id="topLevelCategory">Top Level Category</InputLabel>
                    <Select
                      labelId="topLevelCategory"
                      id="topLevelCategory"
                      name="topLevelCategory"
                      label="Top Level Category"
                    >
                      <MenuItem value="men">Men</MenuItem>
                      <MenuItem value="women">Women</MenuItem>
                      <MenuItem value="third">Third</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormControl fullWidth>
                    <InputLabel id="secondLevelCategory">Second Level Category</InputLabel>
                    <Select
                      labelId="secondLevelCategory"
                      id="secondLevelCategory"
                      name="secondLevelCategory"
                      label="Second Level Category"
                    >
                      <MenuItem value="clothing">Clothing</MenuItem>
                      <MenuItem value="accessories">Accessories</MenuItem>
                      <MenuItem value="brands">Brands</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormControl fullWidth>
                    <InputLabel id="thirdLevelCategory">Third Level Category</InputLabel>
                    <Select
                      labelId="thirdLevelCategory"
                      id="thirdLevelCategory"
                      name="thirdLevelCategory"
                      label="Third Level Category"
                    >
                      <MenuItem value="tops">Tops</MenuItem>
                      <MenuItem value="t-shirt">T-shirt</MenuItem>
                      <MenuItem value="shirt">Shirt</MenuItem>
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
                <Grid item xs={12} >
                  <Button type='submit' className='w-full py-3' sx={{ bgcolor: "purple", mt: 2, py: 3 }} variant='contained'>Add Product</Button>

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