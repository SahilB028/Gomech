import React from 'react'
import { Link } from 'react-router-dom'
import Navbarother from './Navbarother'
import brak from './brake12.webp'
import Footer from './Footer'
import Smiliarproduct from './Smiliarproduct'

export default function Brake() {
  return (
    <>
    <Link to="/Brake">
    <Navbarother/>
    
    <div className='cart'>
        <img src={brak}/>
    </div>
    <div className='paraview'>
    <h2>Brake system(5 month warranty)</h2>
    <h5>Product description</h5>
    <p>A brake system is designed to slow and halt the motion of vehicle. To do this, various components within the brake system must convert vehicle's moving energy into heat. This is done by using friction. Friction is the resistance to movement exerted by two objects on each other.</p>
    <p id="capacity">MRP Rs. 3000 </p>
    <p id="capacity">Special price : Rs.2500</p>
    
 <Link to="/Cartview">   <button id="red">
      Buy Now
    </button>
    </Link>
  
    <button id="green">Add to Cart</button>

    </div>
    <br/>
    <br/><br/>
    <Smiliarproduct/>
  <Footer/>

    </Link></>
  )
}
