import React, { Component } from 'react'
import './Navbar.css'



class Navbar extends Component{
  state={clicked:true}
  handleClick=()=>{
    this.setState({clicked:!this.state.clicked});
    console.log(this.state.clicked);
  }
render(){
  return (
    <div className='outer'>
    
    <div class="navbar-div">
    <nav className='nav1'>
      
      <a href="/">
        <div class="logo-div">
          <img loading="lazy" src="https://celebrare.in/assets/img/logo.webp" alt="company logo" srcset="" width="90" height="29"/>
        </div>
      </a>
      </nav>
      <nav className='nav2'>
      <div class="hamburger-Menu-div" onClick={this.handleClick}>
        <div class="stacks stacks-1"></div>
        <div class="stacks stacks-2"></div>
        <div class="stacks stacks-3"></div>
      </div>
      <ul class="links-list">
        <li>
          
          <div class="dropdown"><a class="wedding-invitation" id="link-list-items" href="/wedding-card.html">Wedding Invitation</a>
              <i class="fa fa-caret-down" ></i>
            
            <div class="dropdown-content">
              <a href="#">Royal invitations</a>
              <a href="#">General invitations</a>
              <a href="#">Hindu invitations</a>
              <a href="#">Muslim invitations</a>
              <a href="#">Sikh invitations</a>
              <a href="#">Sout Indian invitations</a>
              <a href="#">Buddha invitations</a>
              <a href="#">Marathi invitations</a>
              <a href="#">Bengali invitations</a>
              <a href="#">Christian invitations</a>
              <a href="#">Engagement invitations</a>
            </div>
          </div> 
        </li>
        <li>
          <a href="/video-invite.html" class="video-invite-link video-invitation">Video Invitation</a>
        </li>
      </ul>
        <select name="language-selector" id="language-selector">
          <option value="en">EN</option>
          <option value="hi">हिंदी</option>
        </select>
      <div class="login-lang-div">
        <div class="login login-btn" id="login-btn">Login</div>
        <div class="profile-img-div"></div>
      </div>

      <div id='mobile-slider' className={this.state.clicked ?"#mobile-slider" : "#mobile-slider active"}>
        <div>
          <div class="login-info-container">
            <button  class="mobile-login-btn" id="login-btn">Login</button>
          </div>
          <div className='shrinkz'>
          <a href="/wedding-card.html"><div class="mobile-link-div">
              <span class="wedding-invitaion-mobile">Wedding Invitation</span>
              
            </div></a>
          <a href="/video-invite.html"><div class="mobile-link-div">
              <span class="video-invitaion-mobile">Video Invitation</span>
            </div></a>
          <a href="/my-order.html"><div class="mobile-link-div">
              <span class="My-Orders-mobile">My Orders</span>
            </div></a>
          <a href="/draft.html"><div class="mobile-link-div">
            <span class="My-Draft-mobile">My Draft</span>
            </div></a>
          <a href="/my-wishlist.html"><div class="mobile-link-div">
              <span class="My-Wishlist-mobile">My Wishlist</span>
            </div></a>
          </div>
          
        </div>
      </div>
    
    <div id="dashboard"></div>
      </nav>

      
  </div>
  </div>)
}
  
}

export default Navbar