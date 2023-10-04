import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Navbarother from './Navbarother'
import Light from './light1.jpg'
import Smiliarproduct from './Smiliarproduct'

export default function Headlight() {
  return (
    <>
    <Link to="/Light">
    <Navbarother/>
    
    <div className='cart'>
        <img src={Light}/>
    </div>
    <div className='paraview'>
    
    <h2>Car Head Light(1 year warranty)</h2>
    <h5>Product description</h5>
    <p>A headlamp is a lamp attached to the front of a vehicle to illuminate the road ahead. Headlamps are also often called headlights, but in the most precise usage, headlamp is the term for the device itself and headlight is the term for the beam of light produced and distributed by the device.</p>
    
    
    <p id="capacity">MRP Rs. 3500 </p>
    <p id="capacity">Special price : Rs.2500</p>
    
 <Link to="/Cartview">   <button id="red">
      Buy Now
    </button>
    </Link>
  
    <button id="green">Add to Cart</button>

    </div>
    <br/><br/>
    <Smiliarproduct/>
  <Footer/>

    </Link></>
  )
}
