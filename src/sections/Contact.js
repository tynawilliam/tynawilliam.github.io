import React from 'react';
import '../styling/contact.css';

function Contact() {
    return (
        <div id='contact' className='section contact'>
            <h1>Contact Me</h1>
            <div className='contact-form'>
                <form method='POST' action="https://mailthis.to/taelandon" encType="multipart/form-data">
                    <div className='row'>
                        <input type='text' name='name' id='name' placeholder='Your Name' />
                        <input type='email' name='_replyto' id='email' placeholder='Your Email'/>
                    </div>
                    <div>
                        <input type='text' name='_subject' placeholder='Subject'/>
                    </div>
                    <div>
                        <textarea name='message' id='message' placeholder='Message' />
                    </div>
                    <input type="hidden" name="_honeypot" value="" />
                    <input type="hidden" name="_after" value="https://tynawilliam.com/#contact" />
                    <button type='submit'>Send</button>
                </form>
                <div className='info'>
                    <div className='column'>
                        <span className='icon'><img src={`${process.env.PUBLIC_URL}/images/marker.svg`} alt='Not Found' /></span>
                        <span>Grand Rapids, Mi 49507</span>
                    </div>
                    <div className='column resume'>
                        <a href={`${process.env.PUBLIC_URL}/images/resume.pdf`} download='Tyna William Resume'>
                            <span className='icon'><img src={`${process.env.PUBLIC_URL}/images/file.svg`} alt='Not Found' /></span>
                        <span><p>Download Resume</p></span></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
