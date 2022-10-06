import React from "react"
import "./Footer.css"
import {Link} from "react-router-dom"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "react-feather"

export default function Footer(){

  
  return(
    <div className="footer-container">
      <h2>Join our adventure newsletter to recieve the latest deals</h2>
      <div className="icons">
      <Twitter/>
      <Facebook/>
      <Instagram/>
      <Linkedin/>
      <Youtube/>
      </div>
      <h3>You can unsubscribe at any time</h3>
      <div >
      <input
      type="text"
      placeholder="Your Email"
      className="email"
      />
      <button className="input">Subscribe</button>
      </div>
     <div className="footer-link-wrapper">
      <div className="footer-link-items">
        <h2>
          About Us
        </h2>
        <Link to ='/'>How it works </Link>
        <Link to ='/'>Testimonials</Link>
        <Link to='/'>Investors</Link>
        <Link to='/'>Terms of Service</Link>
      </div>
      <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
      </div>
        
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      
    </div>
  )
}