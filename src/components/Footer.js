import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <footer>
        <div class="footer-main">
          <div class="footer-main-div company-info">
            <img loading="lazy" src="https://celebrare.in/assets/img/logo.webp" alt="Company Logo" width="50"/>
            <p class="comp-para">
              Celebrare is a startup by Alumni of IIT Hyderabad working in the
              digital India sector to transform wedding invitations market. We
              have 3,00,000+ app downloads on play store.
            </p>
          </div>
          
          <div class="footer-main-div">
            <h2 class="Policy">Policy</h2>
            <a class="Privacy-Policy" href="/policyNew?policy=privacyPolicy">Privacy Policy</a>
            <a class="Terms-Of-Use" href="/policyNew?policy=termsofuse">Terms Of Use</a>
            <a class="cancellation" href="/policyNew?policy=returnPolicy">Return, shipping &amp; cancellation policy</a>
          </div>
          <div class="footer-main-div">
            <h2 class="Contact-info">Contact info</h2>
            <a class="About-Us" href="/aboutUsPage">About Us</a>
            <a class="Contact-Us" href="/contact-us">Contact Us</a>
            <span>+91-8005993442</span>
            <span>support@celebrare.in</span>
          </div>
          <div class="footer-main-div stay-connected">
            <h2 class="Stay-Connected">Stay Connected</h2>
            <div class="social-links">
              <a href="https://in.pinterest.com/celebrare_in/">
                <i class="fab fa-pinterest" ></i></a>
  
              <a href="https://www.facebook.com/celebrare.in">
                <i class="fab fa-facebook-square" aria-hidden="true"></i></a>
            </div> 
            <a class="googlePlayicon-div" href="https://play.google.com/store/apps/details?id=com.enjoy.celebrare">
              <i class="fab fa-google-play me-2" aria-hidden="true"></i>
              <div class="google-play-text Get-it-on">Get it on Google Play</div>
            </a>
            {/* <h2 class="qrcode-p Or-scan">Or scan QR code</h2>
            <img loading="lazy" class="qr-code" src="https://celebrare.in/assets/img/playstore-qr-code.webp" alt="google playstore" width="50"/> */}
          </div>
        </div>
        <hr></hr>
        <div class="footer-copyright">
          <p>© Celebrare 2022</p>
        </div>
      </footer>
  )
}

export default Footer