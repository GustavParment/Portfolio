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
       <li>
          <a href="https://www.java.com/sv/">
            <img className='program-img' src="./images/java.png" alt="" />
          </a>
        </li>
            <li>
              <a href="https://nodejs.org/en">
                <img className='program-img' src="./images/node-js.png" alt="" />
                  </a>
                </li>
            <li>
              <a href="https://www.python.org/">
                  <img className='program-img' src="./images/python.png" alt="" />
                </a>
              </li>
              <li>
                <a href="https://www.mongodb.com/">
                  <img className='program-img' src="./images/database.png" alt="" />
                </a>
              </li>
              <li>
                  <a href="https://www.mysql.com/">
                    <img className='program-img' src="./images/mysql.png" alt="" />
                  </a>
                  </li>
                <li>
                  <a href="https://www.typescriptlang.org/">
                    <img className='program-img' src="./images/typescript.png" alt="" />
                  </a>
                </li>
            <li>
              <a href="https://react.dev/">
                <img className='program-img' src="./images/react.png" alt="" />
              </a>
            </li>
        <li>
          <a href="https://vitejs.dev/">
            <img className='program-img' src="./vite.svg" alt="" />
          </a>
          </li>
     </ul>
  </div>
</div>
   
  
 )
}

export default HomePage
