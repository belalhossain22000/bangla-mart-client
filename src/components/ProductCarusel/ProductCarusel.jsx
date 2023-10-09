import React, { useRef } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Button from '@mui/material/Button';
import { mens_shirt } from './mens-shirt';
import HomeProductCard from '../HomeProudctCard/HomeProductCard';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 5 },
};

const items = mens_shirt.map((item, index) => <HomeProductCard key={index} item={item} />)


const ProductCarusel = () => {
    // Create a ref to access the carousel component
    const carouselRef = useRef(null);

    // Function to go to the previous slide
    const handlePrevClick = () => {
        if (carouselRef.current) {
            carouselRef.current.slidePrev();
        }
    };

    // Function to go to the next slide
    const handleNextClick = () => {
        if (carouselRef.current) {
            carouselRef.current.slideNext();
        }
    };
    return (
        <section className=' relative'>
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
                disableButtonsControls
                disableDotsControls
                // autoPlay
                // infinite
                autoPlayInterval={3000}
                ref={carouselRef}

            />
            <Button variant="contained" sx={{ position: "absolute", top: "8rem", left: '0rem', transform: "translateX(-50deg) rotate(-90deg)" }} onClick={handlePrevClick} className='rotate-90 translate-y-[50%]'>
                <KeyboardArrowRightIcon className='rotate-90'/>
            </Button>
            <Button variant="contained" sx={{ position: "absolute", top: "8rem", right: '0rem', transform: "translateX(50deg) rotate(90deg)" }} onClick={handleNextClick}  className='rotate-90 translate-y-[50%]'>
                <KeyboardArrowRightIcon  className='-rotate-90'/>
            </Button>

        </section>
    )
}

export default ProductCarusel