import React from 'react'
import slide1 from './slide1.jpg'
import slide2 from './slide2.jpeg'
import slide3 from './slide3.webp'

export default function Show() {
  return (
    <div>    <>
    <div className='cont'>
<marquee>
  <img src={slide1}/>
    <img src={slide3}/>
   <img src={slide2}/>
       
</marquee>


    </div>
    </></div>
  )
}
