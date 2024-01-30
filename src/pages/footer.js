import { Link } from 'react-router-dom'
import Logo from '../img/logo.png'

function Footer(){
  return (
    <>
      <footer>
        <div className="container">
          <div className="header-grid">
            <div className="item" data-aos='zoom-in-up' data-aos-duration='500'>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 50 50" fill="none">
                <path d="M25 0C14.6453 0 6.25 8.39531 6.25 18.75C6.25 22.8273 7.58672 26.5688 9.80859 29.6328C9.84844 29.7063 9.85469 29.7883 9.9 29.8586L22.4 48.6086C22.9797 49.4781 23.9562 50 25 50C26.0438 50 27.0203 49.4781 27.6 48.6086L40.1 29.8586C40.1461 29.7883 40.1516 29.7063 40.1914 29.6328C42.4133 26.5688 43.75 22.8273 43.75 18.75C43.75 8.39531 35.3547 0 25 0ZM25 25C21.5484 25 18.75 22.2016 18.75 18.75C18.75 15.2984 21.5484 12.5 25 12.5C28.4516 12.5 31.25 15.2984 31.25 18.75C31.25 22.2016 28.4516 25 25 25Z" fill="#F5B301"/>
              </svg>
              <div className="item-details">
                <h1>Find us</h1>
                <p>350 J.P. Rizal, Mandaluyong, 1550 Metro Manila, Philippines</p>
              </div>
            </div>
            <div className="item" data-aos='zoom-in-up' data-aos-duration='1000'>
              <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 12C19.7614 12 22 9.76142 22 7C22 4.23858 19.7614 2 17 2C14.2386 2 12 4.23858 12 7C12 7.79984 12.1878 8.55582 12.5217 9.22624C12.6105 9.4044 12.64 9.60803 12.5886 9.80031L12.2908 10.9133C12.1615 11.3965 12.6035 11.8385 13.0867 11.7092L14.1997 11.4114C14.392 11.36 14.5956 11.3895 14.7738 11.4783C15.4442 11.8122 16.2002 12 17 12Z" fill="#F5B301"/>
                <path d="M8.03759 7.31617L8.6866 8.4791C9.2723 9.52858 9.03718 10.9053 8.11471 11.8278C8.11471 11.8278 8.11471 11.8278 8.11471 11.8278C8.11459 11.8279 6.99588 12.9468 9.02451 14.9755C11.0525 17.0035 12.1714 15.8861 12.1722 15.8853C12.1722 15.8853 12.1722 15.8853 12.1722 15.8853C13.0947 14.9628 14.4714 14.7277 15.5209 15.3134L16.6838 15.9624C18.2686 16.8468 18.4557 19.0692 17.0628 20.4622C16.2258 21.2992 15.2004 21.9505 14.0669 21.9934C12.1588 22.0658 8.91828 21.5829 5.6677 18.3323C2.41713 15.0817 1.93421 11.8412 2.00655 9.93309C2.04952 8.7996 2.7008 7.77423 3.53781 6.93723C4.93076 5.54428 7.15317 5.73144 8.03759 7.31617Z" fill="#F5B301"/>
              </svg>
              <div className="item-details">
                <h1>Call us</h1>
                <p>+639-270-907-280</p>
              </div>
            </div>
            <div className="item" data-aos='zoom-in-up' data-aos-duration='1500'>
              <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.272 6.365C2 6.9 2 7.6 2 9v6c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C3.9 19 4.6 19 6 19h12c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C22 17.1 22 16.4 22 15V9c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.093C20.1 5 19.4 5 18 5H6c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093zM4.647 7h14.706a.5.5 0 0 1 .278.916l-7.075 4.732a1 1 0 0 1-1.112 0L4.369 7.916A.5.5 0 0 1 4.647 7z" fill="#F5B301"/>
              </svg>
              <div className="item-details">
                <h1>Mail us</h1>
                <p>contact@mchaexpress.com</p>
              </div>
            </div>
          </div>
          <div className="footer-grid">
            <div className="item" data-aos='fade-right' data-aos-duration='500'>
              <div className='logo'>
                <img src={Logo} alt="logo"/>
              </div>
              <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing elit,Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="item" data-aos='fade-right' data-aos-duration='1000'>
              <h1>Useful Links</h1>
              <div className='links'>
                <Link to='/'>Home</Link>
                <Link to='/book'>Book</Link>
                <Link to='/waybill'>E-Waybill</Link>
                <Link to='/contact'>Contact Us</Link>
                <Link>Track</Link>
              </div>
            </div>
            <div className="item" data-aos='fade-right' data-aos-duration='1500'>
              <h1>Subscribe</h1>
              <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
            </div>
          </div>
        </div>
      </footer>
      <div className='footer-desc'>
        <div className='container'>
          Copyright © 2018, All Right Reserved <span>MCHA Express</span>
        </div>
      </div>
    </>
  );
} 

export default Footer;