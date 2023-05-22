import React from 'react'
import './Video.css'

function Video() {
  return (
    <div className='video'>
        <iframe className='ytube' width="600" height="280" 
        src="https://www.youtube.com/embed/C6N5FNhkTB8" 
        title="Celebrare Wedding Invitation Maker Tutorial"
         frameborder="2" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         allowfullscreen></iframe>
         <div class="cat-card">
      <div class="cat-card-info cat-card-info-left"></div>
      <div class="cat-card-info cat-card-info-right">
        <h2 class="easy-print">LET'S<span className='chat'> CHAT</span></h2>
        <br></br>
        {/* <p class="create-card">Create Personalized cards for the people you card about</p>
        <ul>
          <li>
            <span class="check-icon">✓</span><span class="e1"> Choose from 1000's of designs.
            add text and photos</span>
          </li>
          <li>
            <span class="check-icon">✓</span><span class="e2"> Print form your browser of
            download as PDF</span>
          </li>
          <li>
            <span class="check-icon">✓</span><span class="e3"> Send via email. text message or
            Facebook</span>
          </li>
        </ul> */}
        <p>We love talking to our users</p>
        <button class="whatsapp-contact">
          <i class="fab fa-whatsapp whatsapp-icon" aria-hidden="true"></i><span class="text-us"> Text Us</span></button>
          
      </div>
    </div>
    </div>
  )
}

export default Video