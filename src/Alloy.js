import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Navbarother from './Navbarother'
import alloy from './alloy.webp'
export default function Alloy() {
  return (
    <>
    <Link to="/alloy">
    <Navbarother/>
    
    <div className='cart'>
        <img src={alloy}/>
    </div>
    <div className='paraview'>
    
    <h2>Car Wheel Alloy(10 month warranty)</h2>
    <h5>Product description</h5>
    <p>In the automotive industry, alloy wheels are wheels that are made from an alloy of aluminium or magnesium. Alloys are mixtures of a metal and other elements. They generally provide greater strength over pure metals, which are usually much softer and more ductile.</p>
    
    <p id="capacity">capacity : 45AH</p>
    <p id="capacity">MRP Rs. 5500 </p>
    <p id="capacity">Special price : Rs.4500</p>
    <p id="capacity">with old battery : Rs.3700</p>
 <Link to="/Cartview">   <button id="red">
      Buy Now
    </button>
    </Link>
  
    <button id="green">Add to Cart</button>

    </div>
  <Footer/>

    </Link></>
  )
}
