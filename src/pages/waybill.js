import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Footer from './footer';

function Book(){
  useEffect(() => {
    document.title = 'E-Waybill - MCHA Express Delivery Services';
  }, []);

  return (
    <>
      <Navbar/>

      {/* Waybill Section Start */}
      <section className='waybill'>
        <div className='left'>
          <div className='waybill-header'>
            <h1>Create your own E-Waybill</h1>
            <p>Fill out the needed information below then click save and download button to generate your own e-waybill.</p>
          </div>
        </div>
        <div className='right'>
          <form method='post' action>
            {/* <div className='response-message success'>
              <span>Error</span>
            </div> */}
            <div className='labels'>
              <input
                type='text'
                placeholder='Sender (Full Name)'
                name='sender'
              />
              <input
                type='number'
                placeholder='Contact Number'
                name='sender_phone'
              />
            </div>
            <div className='label'>
              <input
                type='text'
                placeholder='Complete Address'
                name='sender_address'
              />
            </div>
            <div className='labels'>
              <input
                type='text'
                placeholder='Consignee (Full Name)'
                name='consignee'
              />
              <input
                type='number'
                placeholder='Contact Number'
                name='consignee phone'
              />
            </div>
            <div className='label'>
              <input
                type='text'
                placeholder='Complete Address'
                name='consignee_address'
              />
            </div>
            <div className='package-desc'>
              <h2>Description of Package</h2>
              <div className='int-box'>
                <input
                  type='radio'
                  value='medium'
                  name='size'
                />
                Medium
              </div>
              <div className='int-box'>
                <input
                  type='radio'
                  value='large'
                  name='size'
                />
                Large
              </div>
            </div>
            <div className='label'>
              <button>
                <span>Create</span>
              </button>
            </div>
          </form>
        </div>
      </section>
      {/* Waybill Section End */}

      {/* Footer Section Start */}
      <Footer/>
      {/* Footer Section End */}
    </>
  );
}

export default Book;