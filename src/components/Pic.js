import React from 'react'

function Pic() {
    return (
        <div>

            <img src={`${process.env.PUBLIC_URL}/images/face.jpg`} alt='Not Found' className='pic'/>
        </div>
    )
}

export default Pic
