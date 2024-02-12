import './navbar.css'
import React from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {

const PDF = './CV.pdf'  

const downloadFileAtURL = (url) => {
  const fileName = url.split('/').pop() 
  const aTag = document.createElement('a')
  aTag.href = url
  aTag.setAttribute('download', fileName)
  document.body.appendChild(aTag);
  aTag.click();
  aTag.remove();
}
  return (
    <div className='navbar'>
      <ul className='nav-list'>
        <li><Link to="home" smooth={true} duration={2000} className='nav-link'>Home</Link></li>
        <li><Link to="about" smooth={true} duration={2000} className='nav-link' >About</Link></li>
        <li><Link to="contact" smooth={true} duration={2000} className='nav-link'>Contact</Link></li>
        <li><button onClick={() => {downloadFileAtURL(PDF)}} className='nav-link-button'>Download CV</button></li>
        
      </ul>
    </div>
  );
}

export default NavBar;

