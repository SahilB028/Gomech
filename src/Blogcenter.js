import React from 'react'
import Blogservice from './blogservice.jpg'
import { Link } from 'react-router-dom'
import Navbarother from './Navbarother'

export default function Blogcenter() {
  return (
    <>
   
    <div className='blogservice'>
   <img src={Blogservice}/>
   <iframe width="560" height="315" src="https://www.youtube.com/embed/msovHcFBE60" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
   <iframe id='ifr' width="560" height="315" src="https://www.youtube.com/embed/79LP6M9Q-eg" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe> 
   <iframe id="ifra" width="560" height="315" src="https://www.youtube.com/embed/VTDB3mKx7jM" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
   <iframe id ="ifram"width="560" height="315" src="https://www.youtube.com/embed/mYmNM8-XRP0" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
   <hr id="hr1"/><div id="latestnews">Latest Car News</div><hr id="hr2"/>
   </div>

  


    </>
  )
}
