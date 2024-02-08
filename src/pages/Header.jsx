import React from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import './header.css'
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';

function Header () {
    const [text] = useTypewriter({
        words: ['Gustav Parment','Fullstack', ' Developer', '</>'],
        loop: {},
    
      })
  
      return (
        <div className='home-stick' id='home'>
        <div className='header'>
        <h1>
        <span>
            {text}
        </span>
        <Cursor/>
        </h1>
       <SideBar/>
        <NavBar/>
        </div>
        </div>
        
      );
}
export default Header
