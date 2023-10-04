import React from 'react'
import glass from './glasses122.webp'
import { Link } from 'react-router-dom'
import mirror from './mirror1.webp'
import clutch from './clutch1.webp'

export default function Smiliarproduct() {
  return (
 <>
 <div className="similar">
<h2 id="similar"> Similar Products</h2>
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
    </div>

 </>
  )
}
