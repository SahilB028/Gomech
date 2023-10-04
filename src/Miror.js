import React from 'react'
import Navbarother from './Navbarother'
import { Link } from 'react-router-dom'
import miror from './mirror1.webp'
import Footer from './Footer'
import Smiliarproduct from './Smiliarproduct'

export default function Miror() {
  return (
    <>
    <Link to="/Mirror">
    <Navbarother/>
    
    <div className='cart'>
        <img src={miror}/>
    </div>
    <div className='paraview'>
    
    <h2>Car Side Mirrors(6 month warranty)</h2>
    <h5>Product description</h5>
    <p>A side-view mirror (or side mirror), also known as a wing mirror, is a mirror placed on the exterior of motor vehicles for the purposes of helping the driver see areas behind and to the sides of the vehicle, outside the driver's peripheral vision (in the "blind spot").</p>
    
    
    
    <p id="capacity">Special price : Rs.2000</p>
    <p id="capacity">with old battery : Rs.1500</p>
 <Link to="/Cartview">   <button id="red">
      Buy Now
    </button>
    </Link>
  
    <button id="green">Add to Cart</button>

    </div>
    <br/>
    <br/> <br/> <br/> <br/> <br/> <br/> <br/>
    <Smiliarproduct/>
  <Footer/>

    </Link></>
  )
}
