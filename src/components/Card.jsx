import React from 'react'
import './card.css'
function Card () {
    return(
        <>
        <div className='card-grid'>
        <div className="card">
            <img className="card-img" src="https://img.freepik.com/premium-photo/group-adventurers-exploring-dungeon-fantasy-concept-illustration-painting-generative-ai_743201-13485.jpg?w=1060" alt="profil picture" />
            <h2 className="card-title">Dungeon Run</h2>
            <p className="card-text">Word based dungeon run game in Java and MariaDB </p>
        </div>
        <div className="card">
            <img className="card-img" src="https://images.nightcafe.studio/jobs/n9OCSfAv0fCaRpulcBwK/n9OCSfAv0fCaRpulcBwK--1--e8z3o.jpg?tr=w-1600,c-at_max" alt="profil picture" />
            <h2 className="card-title">Dice Game</h2>
            <p className="card-text">Word based dice game in java</p>
        </div>
        <div className="card">
            <img className="card-img" src="data:image/jpeg;base64,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" alt="profil picture" />
            <h2 className="card-title">Hackathon</h2>
            <p className="card-text">STI's hackathon 2024</p>
        </div>
        <div className="card">
            <img className="card-img" src="https://images.ctfassets.net/63bmaubptoky/RPlUUZ5AQf9VSC8asPp9NQCp6_Ux7Vtfom651G08W7s/94c66b522267819e3210dce26256ba6d/Free-online-booking-system-UK-Capterra-Header2.jpg?w=1500" alt="profil picture" />
            <h2 className="card-title">Booking System</h2>
            <p className="card-text">Booking system with React,Spring Boot and MongoDB</p>
        </div>
        
        </div>
        </>
      
      )
}
export default Card;