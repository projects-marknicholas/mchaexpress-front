// React components
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

// Images
import Logo from '../img/logo.png'

function Navbar(){

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Adjust the value based on when you want the scrolling effect to trigger
      const scrollThreshold = 10;

      setScrolled(scrollTop > scrollThreshold);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Detach the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return(
    <>
      <nav className={isScrolled ? 'nav-scroll' : ''}>
        <div className="navbar container">
          <div className="left item">
            <img src={Logo} alt='logo'/>
            <button onClick={toggleMenu}>☰</button>
          </div>
          <div className={`middle item ${isMenuOpen ? 'show-menu' : ''}`}>
            <Link 
              to='/'
            >
              Home
            </Link>
            <Link 
              to='/book'
            >
              Book
            </Link>
            <Link
              to='/waybill'
            >
              E-Waybill
            </Link>
            <Link
              to='/contact'
            >
              Contact Us
            </Link>
            <Link>Track</Link>
          </div>
          <div className={`right item ${isMenuOpen ? 'show-menu' : ''}`}>
            <Link className='btn-port'>Login</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;