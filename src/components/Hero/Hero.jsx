import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { heroData } from './heroData';

const items = [
    <img className='w-full h-auto object-cover' src="https://media.istockphoto.com/id/1335393841/photo/horizontal-banner-image-of-group-of-multiracial-teenage-high-school-students-ready-to-go-back.webp?b=1&s=170667a&w=0&k=20&c=YY06_vt_AwJSz5-4mvShh-BIDPoUgoSyi3YmWdzOBas=" alt="" />,
    <img className='w-full h-auto object-cover' src="https://media.istockphoto.com/id/1335393841/photo/horizontal-banner-image-of-group-of-multiracial-teenage-high-school-students-ready-to-go-back.webp?b=1&s=170667a&w=0&k=20&c=YY06_vt_AwJSz5-4mvShh-BIDPoUgoSyi3YmWdzOBas=" alt="" />,
    <img className='w-full h-auto object-cover' src="https://media.istockphoto.com/id/1335393841/photo/horizontal-banner-image-of-group-of-multiracial-teenage-high-school-students-ready-to-go-back.webp?b=1&s=170667a&w=0&k=20&c=YY06_vt_AwJSz5-4mvShh-BIDPoUgoSyi3YmWdzOBas=" alt="" />
]

const Hero = () => {
    return (
        <section className='my-10 container mx-auto'>
            <AliceCarousel
                mouseTracking
                items={items}
                disableButtonsControls
            //   autoPlay
              autoPlayInterval={3000}
              infinite
            />
        </section>
    )
}

export default Hero