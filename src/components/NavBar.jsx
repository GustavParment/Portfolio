import './navbar.css'
import React from 'react'


const NavBar = () => {
  return (
    <div className='navbar'>
    <ul className='nav-list'>
    <li><a href="/" className='nav-link'>Home</a></li>
    <li><a href="/about" className='nav-link'>About me</a></li>
    <li><a href="/port" className='nav-link'>Portfolio</a></li>
    <li><a href="/contact" className='nav-link'>Contact me</a></li>
    <li><a href="/cv" className='nav-link'>Download CV</a></li>
      </ul>
  </div>
  )
}

export default NavBar

