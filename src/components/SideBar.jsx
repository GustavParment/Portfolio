import './sidebar.css'
import React from 'react'


const SideBar = () => {
  return (
    <div className='sidebar'>
    <a href="https://www.linkedin.com/in/gustav-parment-9a8393290/">
    <p className='sidebar-text'>linkedin.com/GustavParment</p>
    <img className='sidebar-img' src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
    </a>
    <a href="https://github.com/GustavParment">
    <p className='sidebar-text'>github.com/GustavParment</p>
    <img className='sidebar-img' src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU=s48-rw" alt="" />
    </a>
    <a href="mailto:Gustav.jakob.parment@gmail.com">
    <p className='sidebar-text'>Gustav.jakob.parment@gmail.com</p>
    <img className='sidebar-img' src="https://cdn-icons-png.freepik.com/512/386/386220.png" alt="" />
    </a>
    </div>
  )
}

export default SideBar
