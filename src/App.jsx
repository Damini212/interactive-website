import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Navbar'
import Home from "./Home"
import Services from './Services'
import Products from './Products'
import SignUp from './Sign-up'

import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  

  return (
    <Router>
      <Navbar/>
    <Routes>
     <Route path="/" exact component = {Home}/>
     <Route path="/services" exact component = {Services}/>
     <Route path="/products" exact component = {Products}/>
     <Route path="/sign-up" exact component = {SignUp}/>
</Routes>
    </Router>
  )
}

export default App
