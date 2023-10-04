import React from 'react'
import mechlogo from './gomechlogo.png'
import { Link } from 'react-router-dom'
import bloglogo from './bloglogo.png'
export default function Navbarother() {
  return (
  <>
  
   <div className="navbarother">

   <img src={mechlogo}/>
   <div className = "vertical"></div>
  <div className='li'><Link to="/"><li id='login'>back</li></Link>
  <li>Spare</li>
  <li>Blog</li>
  <Link to='/Afterlogin'><li>Home</li></Link></div> 
  <div className='hr'> <hr/></div>
 
   
        </div>
       
    
    </>
  )
}
