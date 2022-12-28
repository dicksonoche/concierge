import { useRef } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import "./navbarstyle.css"



function Navbar() {
  const navRef = useRef();


  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h2>Jetvoy Concierge</h2>

      <nav ref={navRef} className="navbar">
        <a href="#">About Us</a>
        <a href="#">Destinations</a>
        <a href="#">Services</a>
        <a href="#">Testimonies</a>
        <a href="#">Contact Us</a>
        <button className='book-btn'><a href="#">Book</a></button>

        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes/>
        </button>
      </nav>

      <button className='nav-btn' onClick={showNavbar}>
        <FaBars/>
      </button>
    </header>
  )
}

export default Navbar;