import React from 'react'
import Navbarother from './Navbarother'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import clutch from './clutch1.webp'
import Smiliarproduct from './Smiliarproduct'

export default function Clutch() {
  return (
    <>
    <Link to="/clutch">
    <Navbarother/>
    
    <div className='cart'>
        <img src={clutch}/>
    </div>
    <div className='paraview'>
    
    <h2>Clutch Plates(5 month warranty)</h2>
    <h5>Product description</h5>
    <p>These clutches are usually made up of a stack
         of alternating friction plates and steel plates. 
         The friction plates have lugs on their outer diameters that lock them into a basket that is turned by the crankshaft. The steel plates have lugs on their inner diameters
         that lock them to the transmission input shaft.</p>
    <p id="capacity">Special price : Rs.4000</p>
    <p id="capacity">with old battery : Rs.3700</p>
 <Link to="/Cartview">   <button id="red">
      Buy Now
    </button>
    </Link>
  
    <button id="green">Add to Cart</button>

    </div>
    <br/><br/>
    <br></br>
    <br/> <br/> <br/> <br/>
    <Smiliarproduct/>
  <Footer/>

    </Link></>
   
  )
}
