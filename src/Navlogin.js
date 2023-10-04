import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'

export default function Navlogin() {
  return (
   <><div className="main">
   <div className="navbar">
      
   <img src={logo}/>
   <ul>
    <li><div className="dropdown">
  
 <Link to="/Afterlogin"><i className="fa-regular fa-user"></i></Link> 
  <div className="dropdown-content">
    <Link to={"/Afterlogin"}>Profile <i className="fa-regular fa-user" id="logout"></i></Link>
    <Link to={"/"}>Logout<i className="fa fa-sign-out" id='logout' aria-hidden="true"></i></Link>
    
  </div>
</div></li>
<Link to="/Afterlogin"><li className="more">Home</li></Link>
<Link to={"/blog"}><li className="more">Blog</li></Link>
<Link to="/spare"><li className="more">Spare</li></Link>


    </ul>
    </div>
    </div>
    
    </>
  )
}
