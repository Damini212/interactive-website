import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar(){
 
  const [click, setClick] = React.useState(false)

  function closeMobileMenu(){
    setClick(false)
  }

  function handleClick(){
    setClick(!click)
  }

  
  return(
    <div>
      <div className="navbar">
     <h1>Travel Agency</h1>
     <ul className="navbar-list">
      <li>
        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
        </Link>
      </li>
      <li> 
        <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
      </li>
      <li> 
        <Link
        
        to='/products'
        className='nav-links'
        onClick={closeMobileMenu}
                >
       Products
        </Link>
      </li>
      <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
      </ul>
     </div>
    </div>
  )
}