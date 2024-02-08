import React from 'react'
import NavBar from '../components/NavBar'
import './homepage.css'


const HomePage = () => {
return (
    <div className='homepage'>
      <NavBar/>
      <div className='welcome-container'>
      <img className='welcome-img' src="./images/laptopwave.png" alt="" />
      <p className='welcome-message' >Hi and welcome to my portfolio!</p>
      <p className='welcome-text'>Junior Fullstack-developer in Java,Javascript & Python </p>
     
      </div>
        
 </div>
 )
}

export default HomePage
