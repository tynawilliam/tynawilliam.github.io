import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ButtonPlay } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

function Slides() {
    return (
        <div className='carousel'>
            <div className='slide'><img src={`${process.env.PUBLIC_URL}/images/python.png`} alt='Not Found' className='icon'/></div>
            <div className='slide'><img src={`${process.env.PUBLIC_URL}/images/js.png`} alt='Not Found' className='icon'/></div>
            <div className='slide'><img src={`${process.env.PUBLIC_URL}/images/react.png`} alt='Not Found' className='icon'/></div>
            <div className='slide'><img src={`${process.env.PUBLIC_URL}/images/redux.png`} alt='Not Found' className='icon'/></div>
            <div className='slide'><img src={`${process.env.PUBLIC_URL}/images/html.png`} alt='Not Found' className='icon'/></div>
            <div className='slide'><img src={`${process.env.PUBLIC_URL}/images/aws.png`} alt='Not Found' className='icon'/></div>
            <div className='slide'><img src={`${process.env.PUBLIC_URL}/images/docker.png`} alt='Not Found' className='icon'/></div>
        </div>

    )
}

export default Slides
