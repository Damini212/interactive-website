import React from "react"
import { Youtube } from "react-feather"
import "./Herosection.css"

export default function Herosection(){
  return(
    <div className="hero-section">
      <div className="hero-container">
        <h1 className="title">Adventure Awaits</h1>
        <h3 className="subtitle">What are you waiting for?</h3>
        <div className="btn">
          <div><button className="start-btn">GET STARTED</button></div>
        <div><button className="watch-btn">WATCH TRAILER  <Youtube/></button></div>
        </div>
      </div> 
    </div>
  )
}