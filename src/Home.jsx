import React from "react"
import Herosection from './Herosection'
import Cards from './Cards'
import Footer from "./Footer"

export default function Home(){
  return(
    <div>
       <Herosection/>  
        <Cards/>
        <Footer/>
    </div>
  )
}