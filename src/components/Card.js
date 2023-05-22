import React from 'react'
import './Card.css'
function Card() {
  return (
    <div className='card'>
    <div className='outer'>
    <div class="hero-card">
      <img className='cardz' src='https://i.pinimg.com/originals/a4/f2/30/a4f2302e1b26be6445f3becaa9d30e42.jpg' width={400}></img>
      <img className='cardz2' src='https://images.pexels.com/photos/15313106/pexels-photo-15313106.jpeg?cs=srgb&dl=pexels-jelabill-lawas-15313106.jpg&fm=jpg' width={352}></img>
      <div class="rightside-info">
        <h1 className='card-head'>Wedding Invitation Card</h1>
        <p>
          Select your Design, Add your text and Images,<br/>Easily share this
          in PDF or get it printed
        </p>
        <button class="view-all-cards" onclick="window.location.href=https://celebrare.in/wedding-card/all.html">
         View All
        </button>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Card