import './sidebar.css'
import React from 'react'


const SideBar = () => {
  return (
    <div className='sidebar'>
    <a href="https://www.linkedin.com/in/gustav-parment-9a8393290/">
    <p className='sidebar-text'>Linkedin.com/GustavParment</p> 
    <img className='sidebar-img' src="./images/linkedin.png" alt="" />
    </a>
    <a href="https://github.com/GustavParment">
    <p className='sidebar-text'>Github.com/GustavParment</p>
    <img className='sidebar-img' src="./images/github.png" alt="" />
    </a>
    <a href="mailto:Gustav.jakob.parment@gmail.com">
    <p className='sidebar-text'>Gustav.jakob.parment@gmail.com</p>
    <img className='sidebar-img' src="https://cdn-icons-png.freepik.com/512/386/386220.png" alt="" />
    </a>
    </div>
  )
}

export default SideBar
