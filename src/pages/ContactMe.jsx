import React from 'react'
import NavBar from '../components/NavBar'
import './contactme.css'
import { EmailComp } from './EmailComp'
import SideBar from '../components/SideBar'

const ContactMe = () => {
  return (
    <>
     <div>
      <NavBar/>
      
    <h2 className='email-me-text'>Write me an email!</h2>
        <div className="email-form"><EmailComp/></div>
        <h3 className='follow-me'>Or connect with me on Linked </h3>
        <a href="https://www.linkedin.com/in/gustav-parment-9a8393290/"><img className='in-img' src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" /></a>
        
  </div>
      
      </>
  )
}

export default ContactMe
