import React from 'react'
import { NavLink } from 'react-router-dom'
import location from './locat-removebg-preview.png'


export default function () {
  return (
    <>
    
    <nav className="center" >
    <ul>
    <a href="#center"> <li>Our Services</li></a>
    <a href="#heading"><li>curated custom service</li></a>
    <a href="#gomech"><li>Monsoon Mist</li></a>
    <a href="#map"><li>Location<img src={location}></img></li></a>
    <a href="#accordionExample"><li>Frequantly Asked Questions?</li></a>
    </ul>
</nav>

<hr></hr>
    </>
  )
}
