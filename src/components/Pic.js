import React from 'react'

function Pic() {
    return (
        <div>

            <img id='my-pic' src={`${process.env.PUBLIC_URL}/images/tyna.jpeg`} alt='Not Found' className='pic'/>
        </div>
    )
}

export default Pic
