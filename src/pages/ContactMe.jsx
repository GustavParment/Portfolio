import './contactme.css'
import { EmailComp } from './EmailComp'
import React from 'react';



const ContactMe = () => {
  
 return (
    <>
    <div id='contact' className='contact-me-stick'>
    <p className='side-text'>Thank you for stopping by my portfolio!
                      I'm always eager to connect with like-minded individuals, 
                      potential business opportunitys, or fellow enthusiasts. If you have any questions, project ideas, 
                      or just want to discuss the exciting possibilities within developing, I'd love to hear from you.</p>
                  
     <div className='contactme'>
   <h2 className='email-me-text'>Contact me!</h2>
          <div className="email-form"><EmailComp/></div>
            <h3 className='follow-me'>Or connect with me on Linked </h3>
              <a href="https://www.linkedin.com/in/gustav-parment-9a8393290/">
                <img className='in-img' src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
                </a>
                <div className='mailme-img'>
                  <img src="./images/mailme.png" alt="" />
                  </div>
                 
                </div>
              </div>
            </>
  )
}

export default ContactMe
