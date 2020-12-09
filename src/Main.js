import React from 'react'
import About from './sections/About'
import Contact from './sections/Contact'
import Home from './sections/Home'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

function Main() {
    return (
        <div className='main'>
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

export default Main
