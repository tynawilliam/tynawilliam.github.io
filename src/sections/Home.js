import React from 'react';
import Pic from '../components/Pic';
import Title from '../components/Title';
import '../styling/home.css'
import Slides from '../components/Slides';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 700 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

function Home() {
    return (
        <div id='home' className='section home'>
            <Pic />
            <Title />
            <Slides />
        </div>
    )
}

export default Home
