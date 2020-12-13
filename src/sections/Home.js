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
  function downloadCanvasAsPNG(){
    var link = document.createElement("a");
    link.download = "drawing.png";
    link.href = document.querySelector("canvas").toDataURL();
    link.click();
}
    return (
        <div id='home' className='section home'>
            <Pic />
            <Title />
            <div id='home-buttons' className='home-buttons'>
              <a id='btn1' href={`${process.env.PUBLIC_URL}/images/resume.pdf`} download='Tyna William Resume'>Download Resume</a>
              <a id='btn2' href='#contact'>Contact</a>
            </div>
            <Slides />
        </div>
    )
}

export default Home
