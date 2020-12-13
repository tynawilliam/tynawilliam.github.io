import React from 'react';
import '../styling/skills.css'

function Skills() {
    return (
        <div id='skills' className='section skills'>
            <h1>Skills</h1>

            <div className='container'>
                <div id='skill' className='new-skill'>
                    <img src={`${process.env.PUBLIC_URL}/images/python.png`} alt='Not Found'/>
                    <p> Projects Used:
                        <a href='http://nvision-app.herokuapp.com/'> nVision</a> and <a href='https://petstagram2.herokuapp.com/'>Petstagram</a>
                    </p>
                </div>

                <div id='skill' className='new-skill'>
                    <img src={`${process.env.PUBLIC_URL}/images/js.png`} alt='Not Found'/>
                    <p>Projects Used: <a href='http://nvision-app.herokuapp.com/'> nVision</a>,
                        <a href='https://petstagram2.herokuapp.com/'> Petstagram</a> and <a href='http://boba-with-buddies.herokuapp.com/'>Boba with Buddies</a>
                    </p>
                </div>
                <div id='skill'  className='new-skill'>
                    <img src={`${process.env.PUBLIC_URL}/images/react.png`} alt='Not Found'/>
                    <p>Projects Used: <a href='http://nvision-app.herokuapp.com/'> nVision</a>
                        , <a href='http://boba-with-buddies.herokuapp.com/'>Boba with Buddies</a>
                        and <a href='https://petstagram2.herokuapp.com/'>Petstagram</a>

                    </p>
                </div>

                <div id='skill'  className='new-skill'>
                    <img src={`${process.env.PUBLIC_URL}/images/html.png`} alt='Not Found'/>
                    <p>Projects Used: All</p>
                </div>
                <div id='skill'  className='new-skill css'>
                    <img style={{
                        height: "13vh"
                    }} src={`${process.env.PUBLIC_URL}/images/css.svg`} alt='Not Found'/>
                    <p>Projects used: All<br /> Raw CSS:
                        <a href='http://nvision-app.herokuapp.com/'> nVision</a>
                        , <a href='http://boba-with-buddies.herokuapp.com/'>Boba with Buddies</a>
                        and <a href='https://petstagram2.herokuapp.com/'>Petstagram</a>
                    </p>

                </div>
                <div id='skill'  className='new-skill node'>
                    <img src={`${process.env.PUBLIC_URL}/images/node2.svg`} alt='Not Found'/>
                    <p>Projects Used:
                        <a href='http://nvision-app.herokuapp.com/'> nVision</a>, <a href='http://boba-with-buddies.herokuapp.com/'>Boba with Buddies</a> and <a href='https://petstagram2.herokuapp.com/'>Petstagram</a>
                    </p>
                </div>
                <div id='skill'  className='new-skill'>
                    <img src={`${process.env.PUBLIC_URL}/images/docker.png`} alt='Not Found'/>
                    <p>Projects Used:
                        <a href='http://nvision-app.herokuapp.com/'> nVision</a> and <a href='https://petstagram2.herokuapp.com/'>Petstagram</a>
                    </p>
                </div>
                <div id='skill'  className='new-skill'>
                    <img src={`${process.env.PUBLIC_URL}/images/aws.png`} alt='Not Found'/>
                    <p>Projects Used:
                        <a href='http://nvision-app.herokuapp.com/'> nVision</a> and <a href='https://petstagram2.herokuapp.com/'>Petstagram</a>
                    </p>
                </div>
                <div id='skill'  className='new-skill'>
                    <img style={{
                        width: "200px"
                    }} src={`${process.env.PUBLIC_URL}/images/expressLogo.svg`} alt='Not Found'/>
                    <p>Projects Used:
                        <a href='http://boba-with-buddies.herokuapp.com/'>Boba with Buddies</a>
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Skills
