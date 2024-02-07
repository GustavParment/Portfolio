import React from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import './header.css'
import SideBar from '../components/SideBar';


function Header () {
    const [text] = useTypewriter({
        words: ['Gustav Parment','Fullstack', ' Developer', '</>'],
        loop: {},
    
      })
  
      return (
        <div>
        <h1>
        <span>
            {text}
        </span>
        <Cursor/>
        </h1>
       
        <SideBar/>
        </div>
        
      );
}
export default Header
