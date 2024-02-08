import React, {useState} from 'react'
import './aboutme.css'


const AboutMe = () => {
  const [displayText, setDisplayText] = useState('');

  const handleFrontendClick = () => {
    setDisplayText(<ul>
      <li style={{fontSize: '1vw', fontFamily: 'Arial', color: 'white', textDecorationLine: 'none', cursor: 'auto'}}>React/Vite</li>
      <li style={{fontSize: '1vw', fontFamily: 'Arial', color: 'white', textDecorationLine: 'none', cursor: 'auto'}}>HTML</li>
      <li style={{fontSize: '1vw', fontFamily: 'Arial', color: 'white', textDecorationLine: 'none', cursor: 'auto'}}>CSS</li>
      <li style={{fontSize: '1vw', fontFamily: 'Arial', color: 'white', textDecorationLine: 'none', cursor: 'auto'}}>Typescript</li>
  </ul>)
    
  };

  const handleBackendClick = () => {
    setDisplayText(<ul>
      <li style={{fontSize: '1vw', fontFamily: 'Arial', color: 'white', textDecorationLine: 'none', cursor: 'auto'}}>Java/Spirng Boot</li>
      <li style={{fontSize: '1vw', fontFamily: 'Arial', color: 'white', textDecorationLine: 'none', cursor: 'auto'}}>JavaScript/Node.js</li>
      <li style={{fontSize: '1vw', fontFamily: 'Arial', color: 'white', textDecorationLine: 'none', cursor: 'auto'}}>Python</li>
      <li style={{fontSize: '1vw', fontFamily: 'Arial', color: 'white', textDecorationLine: 'none', cursor: 'auto'}}>MySQL/MariaDB/PostgreSQL</li>
      <li style={{fontSize: '1vw', fontFamily: 'Arial', color: 'white', textDecorationLine: 'none', cursor: 'auto'}}>MongoDB/NoSQL</li>
    

    </ul>)
  };

  
  const handleEducationClick = () => {
    setDisplayText(<ul>
      <li style={{fontSize: '1vw', fontFamily: 'Arial', color: 'white', textDecorationLine: 'none', cursor: 'auto'}}>STI - Stockholms Tekniska Högskola</li>
      </ul>)
  };

  return (
    <div className='about-me-stick' id='about'>
      <div className='about-me-container'>         
       <p className='About-me-rub'>About me</p>
       <p className='intro-text' >
        Greetings! It's my pleasure to introduce myself, 
        i am a passionate developer who got a passion for writeing code. 
        With a deep-seated love for problem-solving and an innate 
        ability to transform ideas into reality, 
        i am driving force in the dynamic world of software development. 
        </p>
      </div>
      <div className='about-me-nav-container'>
       <ul>
        <li className='list-button'><button className='button' onClick={handleFrontendClick}>Frontend skills</button></li>
        <li className='list-button'><button className='button' onClick={handleBackendClick}>Backend skills</button></li>
        <li className='list-button'><button className='button' onClick={handleEducationClick}>Education</button></li>
        </ul>
    </div>
    <div className='list-on-click'>{displayText}</div>
    </div>
    
  )
}

export default AboutMe
