import React from 'react'
import Footer from './Footer'

import { Link } from 'react-router-dom'
import Navbarother from './Navbarother'
import glass from './glasses122.webp'
import Smiliarproduct from './Smiliarproduct'
export default function Glass() {
  return (
   <>
   <Link to="/glass">
    <Navbarother/>
    
    <div className='cart'>
        <img src={glass}/>
    </div>
    <div className='paraview'>
    
    <h2>Car Glasses(10 month warranty)</h2>
    <h5>Product description</h5>
    <p>What is Auto Glass? Short for automotive glass,
        
         auto glass refers to laminated and tempered glass, 
         the two types of safety glass used to manufacture windscreens and car windows. The safety glass is designed to protect the car and keep its occupants safe.</p>
    
    
    <p id="capacity">MRP Rs. 4000 </p>
    <p id="capacity">Special price : Rs.3500</p>
    
 <Link to="/Cartview">   <button id="red">
      Buy Now
    </button>
    </Link>
  
    <button id="green">Add to Cart</button>

    </div>
    <br/><br/>
    <br/><br/> <br/> <br/> <br/> <br/>
    <Smiliarproduct/>
  <Footer/>

    </Link></>
  )
}
