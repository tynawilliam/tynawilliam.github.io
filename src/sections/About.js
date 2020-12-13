import React from 'react';
import '../styling/aboutme.css'

function About() {
    return (
        <div id='about' className='section about-me'>
            <h1>About Me</h1>
            <div className='container'>
                <img className='about-me_pic' src={`${process.env.PUBLIC_URL}/images/tyna.jpeg`} alt='Not Found' />
                <div className='about-me_description'>
                    <p>
                    Hi, I'm Tyna - a software engineer and volleyball player.
                    So many people go through life without finding their passion, I've been fortunate
                    enough to find two. I spent my college years juggling a major in Computer Science and collegiate volleyball career,
                    and to be honest, I wouldn't trade that experience for anything. I've spent the past few months, improving my skills,
                    learning new ones, and becoming an overall better engineer.
                        Coding provides me with an avenue to express my individuality, and every day I'm able to feel excited about what I do.
                    I'm trilingual (Python, JavaScript, C++), passionate, driven, results oriented, and can quickly and effectively pick up new
                    technologies to stay on top of trends.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
