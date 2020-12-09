import React from 'react';
import '../styling/projects.css'
import Card from '../components/Cards'


const descriptions = [
    {
    "id": 1,
    "name": "nVision",
    "description": <p>A digital drag n drop vision boarding app for the modern consumer. Built in ReactJS on a Python Flask backend</p>,
    "details": <p>nVision is a digital drag n drop vision boarding application that allows users to build vision boards using images
                from a custom image search bar that implements the unSplash API, or upload images of their own. The app incorporates
                AWS s3 buckets to facilitate image storage, and is built in React on a Python Flask backend with a PostgreSQL database.
                </p>,
    "url": `${process.env.PUBLIC_URL}/images/nvision.png`,
    "tech": ["React", "JavaScript", "Python", "Flask", "CSS", "Docker", "SQL", "PostgreSQL", "SQLAlchemy"],
    "links":{
        "github": 'https://github.com/tynawilliam/nVision',
        "live": "http://nvision-app.herokuapp.com/"
    },
    "pics": [
        `${process.env.PUBLIC_URL}/images/coming-soon.jpg`,
        `${process.env.PUBLIC_URL}/images/coming-soon.jpg`,
        `${process.env.PUBLIC_URL}/images/coming-soon.jpg`,
        `${process.env.PUBLIC_URL}/images/coming-soon.jpg`
        ]
    },
    {
        "id": 2,
        "name": "Boba with Buddies",
        "description": <p>A Tea with strangers clone, built on a Vanilla JS frontend and an Express backend incorporating Google Maps API</p>,
        "details": <p>An app that facilitates making connections with new people—and enjoying tasty beverages together. Modeled after Tea With Strangers.
            The app features a JavaScript frontend on an Express backend, and incorporates Google Maps API to allow users to view
            events happening in cities around them. A PostgreSQL database stores all of our models and user information.
                </p>,
        "url": `${process.env.PUBLIC_URL}/images/boba.png`,
        "tech": ["JavaScript", "ExpressJS", "Pug", "CSS", "HTML", "PostgreSQL"],
        "links":{
            "github": 'https://github.com/jshafto/boba-with-buddies',
            "live": "http://boba-with-buddies.herokuapp.com/"
        },
        "pics": [
                `${process.env.PUBLIC_URL}/images/coming-soon.jpg`,
                `${process.env.PUBLIC_URL}/images/coming-soon.jpg`,
                `${process.env.PUBLIC_URL}/images/coming-soon.jpg`,
                `${process.env.PUBLIC_URL}/images/coming-soon.jpg`
            ]
    },
    {
        "id": 3,
        "name": "Petstagram",
        "description": <p>An Instagram clone for pets built on a React frontend and a Python Flask backend</p>,
        "details": <p>Petstagram is an instagram clone for pets, built on  a React frontend and a Python Flask backend.
            The app implements user authentication, allowing users to access "user specific information". To improve the uploading
            and image viewing experience, Petstagram uses AWS S3 buckets to store user images.
                </p>,
        "url": `${process.env.PUBLIC_URL}/images/pets.png`,
        "tech": ["React", "JavaScript", "Python", "Flask", "CSS", "Docker", "SQL", "PostgreSQL", "SQLAlchemy"],
        "links":{
            "github": 'https://github.com/johnedma/forthegram',
            "live": "https://petstagram2.herokuapp.com/"
        },
        "pics": [
            `${process.env.PUBLIC_URL}/images/coming-soon.jpg`,
            `${process.env.PUBLIC_URL}/images/coming-soon.jpg`,
            `${process.env.PUBLIC_URL}/images/coming-soon.jpg`,
            `${process.env.PUBLIC_URL}/images/coming-soon.jpg`
            ]
    },
    {
        "id": 4,
        "name": "Seabnb",
        "description": <p>An Airbnb clone for yachts and luxury sea vessels. Built on a React Redux frontend and an Express backend</p>,
        "details": <p>COMING SOON
                </p>,
        "url": `${process.env.PUBLIC_URL}/images/coming-soon.jpg`,
        "tech": ["React", "Redux", "JavaScript", "PostgreSQL"],
        "links":{
            "github": 'https://github.com/tynawilliam/nVision',
            "live": "http://nvision-app.herokuapp.com/"
        },
        "pics": [
            `${process.env.PUBLIC_URL}/images/coming-soon.jpg`,
            `${process.env.PUBLIC_URL}/images/coming-soon.jpg`,
            `${process.env.PUBLIC_URL}/images/coming-soon.jpg`,
            `${process.env.PUBLIC_URL}/images/coming-soon.jpg`
            ]
    },

]

function Projects() {
    return (
        <div id='projects' className='section projects'>
            <h1>Projects</h1>
            <div className='projects-container'>
                {descriptions.map(desc => (
                    <Card desc={desc} />
                ))}
            </div>
        </div>
    )
}

export default Projects
