import React from 'react'
import Navbarother from './Navbarother'
import { Link } from 'react-router-dom'
import batt from './battries.webp'
import Footer2 from './Footer2'
import Footer from './Footer'
import Smiliarproduct from './Smiliarproduct'

export default function Productviews() {
  return (

    <>
    <Link to="/viewdetail">
    <Navbarother/>
    
    <div className='cart'>
        <img src={batt}/>
    </div>
    <div className='paraview'>
    
    <h2>Amaron(5 month warranty)</h2>
    <h5>Product description</h5>
    <p>Luminous Tubular Battery 150Ah Model : RC18000ST 5 
      Months* Warranty is one the best options for Medical Electronics, Industrial instruments, UPS systems, Emergency Lighting, Security Alarm systems and More. This battery is really versatile and can be used as a power source for many things. It is one of the best power backup sources available in the market. Well with all these features it is a great deal. This battery fits in easily beneath any sort of inverters or tables. This sort of battery capacity is sure to
       provide you backup even during the long power cuts.</p>
    
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
    <Smiliarproduct/>
  <Footer/>


    </Link>
   
    

    </>
  )
}
