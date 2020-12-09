import React from 'react';
import '../styling/contact.css';

function Contact() {
    return (
        <div id='contact' className='section contact'>
            <h1>Contact Me</h1>
            <div className='contact-form'>
                <form>
                    <div className='row'>
                        <input type='text' name='name' id='name' placeholder='Your Name' />
                        <input type='email' name='email' id='email' placeholder='Your Email'/>
                    </div>
                    <div>
                        <input type='text' name='subject' placeholder='Subject'/>
                    </div>
                    <div>
                        <textarea name='message' id='message' placeholder='Message' />
                    </div>
                    <button>Send</button>
                </form>
                <div className='info'>
                    <div className='column'>
                        <span className='icon'><img src={`${process.env.PUBLIC_URL}/images/marker.svg`} alt='Not Found' /></span>
                        <span>Grand Rapids, Mi 49507</span>
                    </div>
                    <div className='column'>
                        <span className='icon'><img src={`${process.env.PUBLIC_URL}/images/envelope.svg`} alt='Not Found' /></span>
                        <span>info@tynawilliam.com</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
