import './navbar.css'
import React from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <div className='navbar'>
      <ul className='nav-list'>
        <li><Link to="home" smooth={true} duration={1000} className='nav-link'>Home</Link></li>
        <li><Link to="about" smooth={true} duration={1000} className='nav-link'>About</Link></li>
        <li><Link to="contact" smooth={true} duration={1000} className='nav-link'>Contact</Link></li>
        <li><Link to="cv" smooth={true} duration={500} className='nav-link'>Download CV</Link></li>
      </ul>
    </div>
  );
}

export default NavBar;

