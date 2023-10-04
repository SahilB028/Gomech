import React from 'react'
import Footer from './Footer'
import Navbarother from './Navbarother'
import { Link } from 'react-router-dom'
import clean from './clean.webp'
import Smiliarproduct from './Smiliarproduct'
export default function Cleankit() {
  return (
    <>
    <Link to="/clean">
    <Navbarother/>
    
    <div className='cart'>
        <img src={clean}/>
    </div>
    <div className='paraview'>
    
    <h2>Car Body Cleanig Kit(5 month warranty)</h2>
    <h5>Product description</h5>
    <p>Multipurpose Usage:- The HUBTURE Foaming Car Interior Cleaner Multipurpose Foam Cleaner Spray is a 750ml cleaning solution designed for use in the car, home, and boat.
How to use: Spray the area you want to clean. Scrub the area to be cleaned Wipe the area with a microfiber cloth.
The foaming formula provides a deep clean, effectively removing dirt, grime, and other stubborn stains from a variety of surfaces, including car seats, exterior and interior surfaces, shoes, sofas, and more.
With strong decontamination capabilities, this cleaner can quickly restore surfaces to their original condition.
Package Content- 1 X Foam Cleaner 750 ML</p>
    

    
    <p id="capacity">Special price : Rs.2500</p>
    <p id="capacity">with old battery : Rs.1999</p>
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
