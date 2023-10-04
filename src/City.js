import React from 'react'
import part1 from './part1.png'
import part2 from './part2.png'
import part3 from './part3.svg'
import part4 from './part4.svg'
import part5 from './part5.svg'
import part6 from './part6.png'
import part7 from './part7.png' 
import part8 from './part8.png'
import part9 from './part9.png'
import part10 from './part10.png'
import part11 from './part11.png'
import part13 from './logo1234.png'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <>
    <div id = "center">
    <div className="city">
    <h2 >Car Service in your City</h2>
    <p> Get free pick up and drop with professional periodic car service , car repair ,wheel car service, 
      cashless insurance claim and much more in the city.</p>
      </div>
    <div className="car">
    <div className="service">

  <div className="spare">
     <div className="parts">
      <a href=''>
    <img src={part1}  width="100px" height="100px"/>
        <p>Periodic Service</p></a>
        
       
     </div>
     
               <div className="parts">
              
              <img src={part2} width="100px" height="100px"/>
                <p>AC Service & Repair</p>
             
               </div>
               
    
          <div className="parts">
          <Link to="/viewproduct">
                <img src={part3} width="100px" height="100px"/>
            <p>Batteries</p></Link>
           
          </div>
          
               <div className="parts">
              <a href='' >    <img src={part4} width="100px" height="100px"/>
                <p>Tyres & Wheel Care</p></a>
                 
               </div>
               
  </div>
  <br/>
  <div className="spare">
   <div className="parts">
     <a href='' ><img src={part5} width="100px" height="100px"/>
      <p>Denting & Painting</p></a>
     
   </div>
  
             <div className="parts">
                 <a href='' >  <img src={part6} width="100px" height="100px"/>
              <p>Detailing Service</p></a>
           
             </div>
  
        <div className="parts">
           <a href='' >   <img src={part7} width="100p" height="100px"/>
          <p>Car Spa & cleaning</p></a>
         
        </div>
        
             <div className="parts">
                <a href='' > <img src={part8} width="100p" height="100px"/>
              <p>Car Inspections</p></a>
               
             </div>      
</div>
<br/>
<div className="spare">
   <div className="parts">
     <a href='' >  <img src={part9} width="100px" height="100px"/>
      <p>Windshield & Lights</p></a>
     
   </div>
  
             <div className="parts">
               <a href='' >    <img src={part10} width="100px" height="100px"/>
              <p>Suspension & Fitments</p></a>
           
             </div>
  
        <div className="parts">
         <a href='' > <img src={part11} width="100px" height="100px"/>
          <p>Clutch & Body parts</p></a>
         
        </div>
        
             <div className="parts">
             <a href='' >  <img src={part13} width="100px" height="100px"/>
              <p>Insurance Claims</p></a>
            </div>
            </div>
            </div>
            </div>
            </div>
            <hr></hr>
            </>
 




 
  )
}
