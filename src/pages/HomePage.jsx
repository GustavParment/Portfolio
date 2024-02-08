import React from 'react'
import './homepage.css'

const HomePage = () => {
return (
<div className='scroll-container'>
  <div className='homepage'>
    <img className='welcome-img' src="./images/laptopwave.png" alt="" />
      <p className='welcome-message' >Hi and welcome to my portfolio!</p>
        <p className='welcome-text'>Junior Fullstack-developer in Java,Javascript & Python </p>
    </div>
<div className='img-container'>
    <ul>
       <li><img className='program-img' src="./images/java.png" alt="" /></li>
          <li><img className='program-img' src="./images/js.png" alt="" /></li>
            <li><img className='program-img' src="./images/typescript.png" alt="" /></li>
              <li><img className='program-img' src="./images/python.png" alt="" /></li>
                <li><img className='program-img' src="./images/database.png" alt="" /></li>
              <li><img className='program-img' src="./images/mysql.png" alt="" /></li>
            <li><img className='program-img' src="./images/react.png" alt="" /></li>
          <li><img className='program-img' src="./vite.svg" alt="" /></li>
        <li><img className='program-img' src="./images/html.png" alt="" /></li>
      <li><img className='program-img' src="./images/css3.png" alt="" /></li>
    </ul>
  </div>
</div>
   
  
 )
}

export default HomePage
