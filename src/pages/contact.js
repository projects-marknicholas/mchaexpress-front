import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Footer from './footer';

function Contact(){
  useEffect(() => {
    document.title = 'Contact - MCHA Express Delivery Services';
  }, []);

  return (
    <>
      <Navbar/>  

      {/* Contact Section Start */}
      <section className='contact'>
        <div className='left'>
          <div className='contact-header'>
            <h1>Let's get in touch!</h1>
            <p>
              We'd love to hear from you. Whether you have questions, feedback, or just want to say hello, feel free to reach out to us. Your thoughts matter, and we're here to assist you in any way we can. Use the contact information below to connect with us, and we'll get back to you as soon as possible. Looking forward to hearing from you!
            </p>
          </div>
        </div>
        <div className='right'>
          <form method='post' action>
            {/* <div className='response-message success'>
              <span>Error</span>
            </div> */}
            <div className='contact-headers'>
              <h1>Fill out the form below to get started</h1>
              <p>Let us know about your parcel and we will get back to you right away.</p>
            </div>
            <div className='label'>
              <input
                type='text'
                placeholder='Full Name'
                name='full_name'
              />
            </div>
            <div className='label'>
              <input
                type='email'
                placeholder='Email'
                name='email'
              />
            </div>
            <div className='label'>
              <input
                type='text'
                placeholder='Phone'
                name='phone'
              />
            </div>
            <div className='label'>
              <textarea
                rows='5'
                placeholder='How can we help you? (Max 500 characters)'
                maxLength='500'
                name='message'
              ></textarea>
            </div>
            <div className='label'>
              <button>
                <span>Create</span>
              </button>
            </div>
          </form>
        </div>
      </section>
      {/* Contact Section End */}


      {/* Footer Section Start */}
      <Footer/>
      {/* Footer Section End */}
    </>
  );
}

export default Contact;