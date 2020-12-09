import React from 'react';
import '../styling/skills.css'

function Skills() {
    return (
        <div id='skills' className='section skills'>
            <h1>Skills</h1>
            <div className='container'>
                <div className='new-skill'>
                    <img src={`${process.env.PUBLIC_URL}/images/python.png`} alt='Not Found'/>
                    <p>I've developed a number of projects in python including, A Python Flask backend for
                        <a href='http://nvision-app.herokuapp.com/'> nVision</a> and <a href='https://petstagram2.herokuapp.com/'>Petstagram</a>
                    </p>
                </div>
                <div className='new-skill'>
                    <img src={`${process.env.PUBLIC_URL}/images/js.png`} alt='Not Found'/>
                    <p>I've worked with JavaScript as one of my primary languages on all of my web
                        applications, including <a href='http://nvision-app.herokuapp.com/'> nVision</a>,
                        <a href='https://petstagram2.herokuapp.com/'> Petstagram</a> and <a href='http://boba-with-buddies.herokuapp.com/'>Boba with Buddies</a>
                    </p>
                </div>
                <div className='new-skill'>
                    <img src={`${process.env.PUBLIC_URL}/images/react.png`} alt='Not Found'/>
                    <p>React has been an integral part of my web development projects. The following projects implement
                        React: <a href='http://nvision-app.herokuapp.com/'> nVision</a>
                        , <a href='http://boba-with-buddies.herokuapp.com/'>Boba with Buddies</a>
                        and <a href='https://petstagram2.herokuapp.com/'>Petstagram</a>

                    </p>
                </div>
                <div className='new-skill'>
                    <img src={`${process.env.PUBLIC_URL}/images/redux.png`} alt='Not Found'/>
                    <p>Redux has provided an effective way for me to maintain state throughout larger applications.
                        My <a href='/'>Seabnb </a> project incorporates Redux.
                    </p>
                </div>
                <div className='new-skill'>
                    <img src={`${process.env.PUBLIC_URL}/images/html.png`} alt='Not Found'/>
                    <p>I have implemented HTML5 in all of the projects listed throughtout this site</p>
                </div>
                <div className='new-skill'>
                    <img style={{
                        height: "13vh"
                    }} src={`${process.env.PUBLIC_URL}/images/css.svg`} alt='Not Found'/>
                    <p>This website as well as the followung projects use raw CSS:
                        <a href='http://nvision-app.herokuapp.com/'> nVision</a>
                        , <a href='http://boba-with-buddies.herokuapp.com/'>Boba with Buddies</a>
                        and <a href='https://petstagram2.herokuapp.com/'>Petstagram</a>
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Skills
