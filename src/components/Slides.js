import React from 'react';

function Slides() {

    return (
        <div className='carousel'>
            <div className='slide'><a href='https://github.com/tynawilliam' target='_blank'><img id='icon-home' src={`${process.env.PUBLIC_URL}/images/github.svg`} alt='Not Found' className='icon'/></a></div>
            <div className='slide'><a href='https://www.linkedin.com/in/tynadwilliam/' target='_blank'><img id='icon-home' src={`${process.env.PUBLIC_URL}/images/linkedIn.svg`} alt='Not Found' className='icon'/></a></div>
            <div className='slide'><a href='https://angel.co/u/tynawilliam' target='_blank'><img id='icon-home' src={`${process.env.PUBLIC_URL}/images/angelList.svg`} alt='Not Found' className='icon'/></a></div>
        </div>

    )
}

export default Slides
