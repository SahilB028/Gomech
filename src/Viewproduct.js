import React from 'react'
import { Link } from 'react-router-dom'
import Navbarother from './Navbarother'
import batt from './battries.webp'
import brak from './brake12.webp'
import light from './light1.jpg'
import glass from './glasses122.webp'
import mirror from './mirror1.webp'
import clutch from './clutch1.webp'
import alloy from './alloy.webp'
import stering from './steringcover.jpg'
import clean from './clean.webp'
import Footer from './Footer'
export default function Viewproduct() {
  return (
    <>
    <Link to="/Viewproduct">
   <Navbarother/>
   <div className='viewprod'>
    <h1>Auto Spare Parts</h1>
    <hr id='hr3'/>
    <p>View Products</p>
    <hr id='hr4'/>

   </div>
   <div className="viewss">

  <div className="viewsss">
     <div className="viewssss">
    <img src={batt}  width="100px" height="100px"/>
    <br/>
        <h5 id='batt'>Battries</h5>
        <p>Rs.2500</p>
  <Link to="/viewdetail"><button>View Product</button></Link>      
        
       
     </div>
    
               <div className="viewssss">
             <img src={light} width="100px" height="100px"/>
             <h5 id='batt'>Head light</h5>
                <p>Rs.2500</p>
                <Link to="/Light">       <button>View Product</button></Link> 
               </div>
    
          <div className="viewssss">
              <img src={brak} width="100px" height="100px"/>
              <h5 id='batt'>Brakes</h5>
             <p>Rs.3000</p>
             <Link to="/Brake">   <button>View Product</button></Link>
           
          </div>
          
               
               
  </div>
  <hr/>
  <div className="viewss">

<div className="viewsss">
   <div className="viewssss">
<img src={glass}  width="100px" height="100px"/>
<h5 id='batt'>Car Glass</h5>
  <p>Rs.3500</p>
       <Link to="/glass"><button>View Product</button></Link> 
     
   </div>
  
             <div className="viewssss">
                   <img src={mirror} width="100px" height="100px"/>
                   <h5 id='batt'>Car Mirrors</h5>
            <p>Rs.1500</p>
            <Link to="/mirror">   <button>View Product</button></Link>
           
             </div>
  
        <div className="viewssss">
            <img src={clutch} width="100px" height="100px"/>
            <h5 id='batt'>Clutch</h5>
<p>Rs.4000</p>
<Link to="/clutch"><button>View Product</button></Link>
         
        </div>
        </div>
             
             
</div>
<div className="viewss">

<div className="viewsss">
   <div className="viewssss">
  <img src={alloy}  width="100px" height="100px"/>
  <h5 id='batt'>car wheel Alloy</h5>
  <p>Rs.5000</p>
   <Link to="alloy">    <button>View Product</button></Link> 
      
     
   </div>
  
             <div className="viewssss">
            <img src={stering} width="100px" height="100px"/>
            <h5 id='batt'>Car stering Covers</h5>
            <p>Rs.1000</p>
  <Link to="/stering"><button>View Product</button></Link> 
           
             </div>
  
        <div className="viewssss">
           <img src={clean} width="100px" height="100px"/>
          
         <h5 id='batt'>Car Body cleaning Kit</h5>

           <p>Rs.1999</p>
           <Link to="/clean"> <button>View Product</button></Link>
         
        </div>
        </div>
             
             
</div>
  
  
               
  

  </div>
   
   <Footer/>
    
</Link>
    </>
  )
}
