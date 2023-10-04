import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Navbarother from './Navbarother'
import stering from './steringcover.jpg'
import Smiliarproduct from './Smiliarproduct'

export default function Sterring() {
  return (
    <>
    <Link to="/stering">
    <Navbarother/>
    
    <div className='cart'>
        <img src={stering}/>
    </div>
    <div className='paraview'>
    
    <h2>Car Stering Covers(1 year warranty)</h2>
    <h5>Product description</h5>
    <p>This is a great way of preventing damages from
         occurring and also hiding any damages to the steering wheel.
          Now, if you want to get the right steering wheel cover for you and your vehicle, there are several 
        sites online that offer you a wide range to choose from.</p>
    
    
    <p id="capacity">MRP Rs. 1500 </p>
    <p id="capacity">Special price : Rs.1000</p>
    
 <Link to="/Cartview">   <button id="red">
      Buy Now
    </button>
    </Link>
  
    <button id="green">Add to Cart</button>

    </div>
    <br/><br/>
    <br/> <br/> <br/>
    <Smiliarproduct/>
  <Footer/>

    </Link></>
  )
}
