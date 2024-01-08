
import { useContext, useState } from 'react'

import { RadioGroup } from '@headlessui/react'
import { Box, Button, Grid, LinearProgress, Rating } from '@mui/material'
import ProductReview from './ProductReview'
import HomeProductCard from '../HomeProudctCard/HomeProductCard'
import { useGetProductByIdQuery, useGetProductsQuery } from '../../redux/api/productsApi'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'
import { usePostCartsMutation } from '../../redux/api/cartApi'
import { AuthContext } from '../../provider/AuthProvider'
import toast, { Toaster } from 'react-hot-toast';


const product = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Men', href: '#' },
        { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [

        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },

    ],
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const ProductDetail = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    const { id: _id } = useParams()

    const { data: items } = useGetProductsQuery()

    const [selectedSize, setSelectedSize] = useState(product.sizes[2])

    const { data, isLoading } = useGetProductByIdQuery(_id)
    console.log(data)
    const [postCarts, { isLoading: loading,}] = usePostCartsMutation()
    // loader
    if (isLoading) {
        return <Loader />
    }
    const similiarProducts = items?.filter(item => item?.thirdLavelCategory == data?.thirdLavelCategory)

    const cartItem = {
        ...data,
        productId: data?._id,
        quantity: 1,
        selectedSize: selectedSize,
        userEmail: user?.email,
        
    }
    const notify = () => toast('Please Login First');
    const addToCart = (e) => {
        e.preventDefault();
        if(!user){
            notify()
            return
        }
        postCarts(cartItem)

    }

    return (
        <div className="bg-white container mx-auto">
              <Toaster />
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        {product.breadcrumbs.map((breadcrumb) => (
                            <li key={breadcrumb.id}>
                                <div className="flex items-center">
                                    <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                                        {breadcrumb.name}
                                    </a>
                                    <svg
                                        width={16}
                                        height={20}
                                        viewBox="0 0 16 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        className="h-5 w-4 text-gray-300"
                                    >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>
                        ))}
                        <li className="text-sm">
                            <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                {product.name}
                            </a>
                        </li>
                    </ol>
                </nav>
                <section className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10'>

                    {/* Image gallery */}
                    <div className="flex items-center flex-col">
                        <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
                            <img
                                src={data?.imageUrl}
                                alt={data?.title}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="flex flex-wrap space-x-5 justify-center">
                            {[1, 1,]?.map((item, index) => <div key={index} className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4">
                                <img
                                    src={data.imageUrl}
                                    alt={data?.title}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>)}

                        </div>

                    </div>

                    {/* Product info */}
                    <div className="lg:col-span-1 max-auto max-2xl lg:max-w-7xl">
                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{data.brand}</h1>
                            <h1 className="text-lg font-bold tracking-tight text-gray-900 sm:text-md opacity-60 py-2">{data.title}</h1>
                        </div>

                        {/* Options */}
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 className="sr-only">Product information</h2>
                            <div className='flex items-center space-x-2 lg:text-xl mt-4'>
                                <p className='font-semibold'>{data.discountedPrice}</p>
                                <p className='line-through opacity-60'>{data.price}</p>
                                <p className='text-green-600 font-semibold'>{data.discountPersent} % off</p>
                            </div>

                            {/* Reviews */}
                            <div className="mt-6">
                                <div className='flex items-center space-x-3'>

                                    <Rating precision={.5} name="read-only" value={4.5} readOnly />
                                    <p className='opacity-60 text-sm'>344 Ratings</p>
                                    <p className='text-sm font-medium text-indigo-600 hover:text-indigo-500'>344 Reviews</p>
                                </div>
                            </div>

                            <form className="mt-10">
                                {/* Sizes */}
                                <div className="mt-10">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-medium text-gray-900">Size</h3>
                                        <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                            Size guide
                                        </a>
                                    </div>

                                    <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                                        <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                                        <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                                            {product.sizes.map((size) => (
                                                <RadioGroup.Option
                                                    key={size.name}
                                                    value={size}
                                                    disabled={!size.inStock}
                                                    className={({ active }) =>
                                                        classNames(
                                                            size.inStock
                                                                ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                                                : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                                            active ? 'ring-2 ring-indigo-500' : '',
                                                            'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                                                        )
                                                    }
                                                >
                                                    {({ active, checked }) => (
                                                        <>
                                                            <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                                                            {size.inStock ? (
                                                                <span
                                                                    className={classNames(
                                                                        active ? 'border' : 'border-2',
                                                                        checked ? 'border-indigo-500' : 'border-transparent',
                                                                        'pointer-events-none absolute -inset-px rounded-md'
                                                                    )}
                                                                    aria-hidden="true"
                                                                />
                                                            ) : (
                                                                <span
                                                                    aria-hidden="true"
                                                                    className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                                >
                                                                    <svg
                                                                        className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                                        viewBox="0 0 100 100"
                                                                        preserveAspectRatio="none"
                                                                        stroke="currentColor"
                                                                    >
                                                                        <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                                                    </svg>
                                                                </span>
                                                            )}
                                                        </>
                                                    )}
                                                </RadioGroup.Option>
                                            ))}
                                        </div>
                                    </RadioGroup>
                                </div>

                                <Button
                                    type='submit'
                                    onClick={addToCart}
                                    variant='contained' sx={{ py: "1rem", px: "2rem", bgcolor: 'purple', width: "100%", my: "20px" }}
                                >
                                    {loading ? "Adding to Cart" : " Add to Cart"}

                                </Button>
                            </form>
                        </div>

                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                            {/* Description and details */}
                            <div>
                                <h3 className="sr-only">Description</h3>

                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">{product.description}</p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                                <div className="mt-4">
                                    <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                        {product.highlights.map((highlight) => (
                                            <li key={highlight} className="text-gray-400">
                                                <span className="text-gray-600">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                                <div className="mt-4 space-y-6">
                                    <p className="text-sm text-gray-600">{product.details}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* rating and review */}
                <section>
                    <h1 className='font-semibold text-lg pb-4 '>Recent review and rating</h1>
                    <div className='border p-5'>
                        <Grid container spacing={7}>
                            <Grid item xs={7}>
                                <div className='space-y-8'>
                                    {
                                        [1, 1, 1,].map((item, index) => <ProductReview key={index} />)
                                    }

                                </div>
                            </Grid>
                            <Grid item xs={5}>
                                <div>
                                    <h1 className="text-lg font-semibold text-gray-800">Product Rating</h1>
                                    <div className='flex items-center gap-x-5'>
                                        <Rating readOnly value={4.5} precision={.5} />
                                        <p className='text-gray-800 opacity-80 font-medium'>5649 Review</p>
                                    </div>
                                </div>
                                <Box className="space-y-5 mt-5">
                                    <Grid container gap={2} className='flex items-center '>
                                        <Grid item xs={2}>
                                            <p>Excellent</p>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <LinearProgress variant="determinate" value={50} color='success' sx={{ bgcolor: "gray", height: 7, borderRadius: 4 }} />
                                        </Grid>
                                        <Grid item xs={2}>
                                            <p className='text-gray-800 opacity-80'  >1934</p>
                                        </Grid>
                                    </Grid>
                                    <Grid container gap={2} className='flex items-center '>
                                        <Grid item xs={2}>
                                            <p>Very Good</p>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <LinearProgress variant="determinate" value={40} color='primary' sx={{ bgcolor: "gray", height: 7, borderRadius: 4 }} />
                                        </Grid>
                                        <Grid item xs={2}>
                                            <p className='text-gray-800 opacity-80'  >1934</p>
                                        </Grid>
                                    </Grid>
                                    <Grid container gap={2} className='flex items-center '>
                                        <Grid item xs={2}>
                                            <p>Good</p>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <LinearProgress variant="determinate" value={30} color='secondary' sx={{ bgcolor: "gray", height: 7, borderRadius: 4 }} />
                                        </Grid>
                                        <Grid item xs={2}>
                                            <p className='text-gray-800 opacity-80'  >1934</p>
                                        </Grid>
                                    </Grid>
                                    <Grid container gap={2} className='flex items-center '>
                                        <Grid item xs={2}>
                                            <p>Avarage</p>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <LinearProgress variant="determinate" value={50} color='warning' sx={{ bgcolor: "gray", height: 7, borderRadius: 4 }} />
                                        </Grid>
                                        <Grid item xs={2}>
                                            <p className='text-gray-800 opacity-80'  >1934</p>
                                        </Grid>
                                    </Grid>
                                    <Grid container gap={2} className='flex items-center '>
                                        <Grid item xs={2}>
                                            <p>Poor</p>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <LinearProgress variant="determinate" value={50} color='error' sx={{ bgcolor: "gray", height: 7, borderRadius: 4 }} />
                                        </Grid>
                                        <Grid item xs={2}>
                                            <p className='text-gray-800 opacity-80'  >1934</p>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>

                        </Grid>

                    </div>

                </section>
                {/* similar product */}
                <section className='py-10'>
                    <h1 className='text-2xl text-gray-900 font-semibold'>Similar products</h1>
                    <div className='bg-gray-800 h-[1px] opacity-60 mt-5'></div>
                    <div className='flex flex-wrap my-10 gap-x-5 gap-y-10'>
                        {
                            similiarProducts?.map((item, index) => <HomeProductCard key={index} item={item} />)
                        }
                    </div>

                </section>

            </div>
        </div>
    )
}
export default ProductDetail