import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Navbar'
import Home from "./Home"
import Services from './Services'
import Products from './Products'
import SignUp from './Sign-up'

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  

  return (
    <Router>
      <Navbar/>
    <Switch>
     <Route path="/" exact component = {Home}/>
     <Route path="/services" exact component = {Services}/>
     <Route path="/products" exact component = {Products}/>
     <Route path="/sign-up" exact component = {SignUp}/>
</Switch>
    </Router>
  )
}

export default App
