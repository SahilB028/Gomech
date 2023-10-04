
import React from 'react'
import { Link } from 'react-router-dom'
import Navbarother from './Navbarother'
import Blogcenter from './Blogcenter'
import part1 from './latest.jpg'
import part2 from './skoda.jpg'
import part3 from './skoda.jpg'
import part4 from './gloster.avif'
import part5 from './gypsy.jpg'
import part6 from './suv.jpg'
import part7 from './altroz.jpg'
import part8 from './exter.jpg'
import Footer from './Footer'
import Footer2 from './Footer2'
export default function Blognews() {
  return (
    <>
    <Navbarother/>
    <Blogcenter/>
    <Link to="/blog" id='blog'>
    
    <div className="blogservice">

  <div className="news">
     <div className="new">
    <img src={part1}  width="100px" height="100px"/>
        <p id='blog' >Explore the Best 2023 Car Garages under 15 Lakh in India!</p>
        
       
     </div>
    
               <div className="new">
              <img src={part2} width="100px" height="100px"/>
                <p>Skoda Octavia Discontinued Because of the Indian Mindset for SUVs?</p>
             
               </div>
    
          <div className="new">
             <img src={part3} width="100px" height="100px"/>
            <p>MG7, Can this be the Verna Killer?</p>
           
          </div>
          
               <div className="new">
                 <img src={part4} width="100px" height="100px"/>
                <p>MG Gloster Black Storm Edition Launched</p>
                 
               </div>
               
  </div>
  <hr/>
  <div className="news">
     <div className="new">
     <img src={part5}  width="100px" height="100px"/>
        <p>Indian Army to get Electrified Maruti Suzuki Gypsy!</p>
        
       
     </div>
    
               <div className="new">
               <img src={part6} width="100px" height="100px"/>
                <p  style={{textDecoration:"none"}}>Popular SUVs in India getting Major Updates!</p>
             
               </div>
    
          <div className="new">
               <img src={part7} width="100px" height="100px"/>
            <p>Tata Altroz iCNG Launched at ₹7.55 Lakhs!</p>
           
          </div>
          
               <div className="new">
              <img src={part8} width="100px" height="100px"/>
                <p>Hyundai Exter to Launch on 10 July</p>
                 
               </div>
  </div>

  </div>
  
  <Footer/>
 
      </Link>
     
      </>
      
    
  )
}
