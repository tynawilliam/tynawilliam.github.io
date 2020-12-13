import React from 'react';
import '../styling/navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <a href='/' className='navlinks'>Home</a>
            <a href='/#about' className='navlinks'>About</a>
            <a href='/#skills' className='navlinks'>Skills</a>
            <a href='/#projects' className='navlinks'>Projects</a>
            <a href='/#contact' className='navlinks'>Contact</a>
        </div>
    )
}

export default Navbar
