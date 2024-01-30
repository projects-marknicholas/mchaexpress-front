import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Footer from './footer';

function Book(){
  useEffect(() => {
    document.title = 'Book - MCHA Express Delivery Services';
  }, []);

  const [data, setData] = useState({
    full_name: '',
    email_address: '',
    contact_number: '',
    complete_address: '',
    details: ''
  });

  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('http://localhost/mcha-express/website/api/v1/book/:csrfToken', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          csrfToken: 'a73f54b65f76467e9413a5c5fde2e32d1f3b4b82c7c0b0634a12bd6ca0b87dc2', 
          ...data,
        }),
      });

      const result = await response.json();

      // Handle the response accordingly
      if (response.ok) {
        console.log(result.message); // Successful response
        // Reset the form after successful submission if needed
        setData({
          full_name: '',
          email_address: '',
          contact_number: '',
          complete_address: '',
          details: '',
        });
      } else {
        console.error(result.error); // Error response
        // Handle error, display message, etc.
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Navbar/>
      {/* Book Section Start */}
      <section className='book'>
        <div className='book-bg'></div>
        <div className='container'>
          <form onSubmit={handleSubmit}>
            <h1>BOOK</h1>
            <p>Book now for effortless parcel delivery with us! Simply fill out the form, secure your slot, and leave the rest to us.</p>
            <div className='form-labels'>
              <div className={'response-message error'}>
                <span>Submitting</span>
              </div>
              <div className='labels'>
                <input
                  type='text'
                  placeholder='Full Name'
                  name='full_name'
                  value={data.full_name}
                  onChange={handleInputChange}
                />
                <input
                  type='email'
                  placeholder='Email Address'
                  name='email_address'
                  value={data.email_address}
                  onChange={handleInputChange}
                />
              </div>
              <div className='labels'>
                <input
                  type='number'
                  placeholder='Contact Number'
                  name='contact_number'
                  value={data.contact_number}
                  onChange={handleInputChange}
                />
                <input
                  type='text'
                  placeholder='Complete Address'
                  name='complete_address'
                  value={data.complete_address}
                  onChange={handleInputChange}
                />
              </div>
              <div className='label'>
                <textarea
                  rows='5'
                  placeholder='Please provide the details of your requirements...'
                  name='details'
                  value={data.details}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className='label'>
                <button type='submit'>
                  <span>Submit</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* Book Section End */}

      {/* Footer Section Start */}
      <Footer/>
      {/* Footer Section End */}
    </>
  );
}

export default Book;