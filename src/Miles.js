import React from 'react'
import miles from './miles.png'
import warranty from './warranty.png'
import access from './accessories-1.png'

export default function () {
  return (
  <>
  <div className ="gomech">
  <h2 >GoMechanic Summer Spice</h2>
  <div className="miles">
         <a href="">     <img src={miles} width="230px" height="250px"/></a>  
          <a href="">  <img src={warranty}  width="230px" height="250px"/></a>  
          <a href="">    <img src={access}  width="230px" height="250px"/></a>  
            </div>
            </div>
  <hr></hr>
  </>
  )
}
