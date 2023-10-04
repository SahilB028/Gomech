import React, { useState } from 'react'
import logo from './logo.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'


export default function () {
  const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const navigate = useNavigate()
    const collectData = async ()=>{
      console.log(email,password);
      let result = await fetch('http://localhost:24803',{
      method :'post',
      body:JSON.stringify({email,password}),
      headers:{
        'Content-Type' :'application/json'
      }
      })
      result = await result.json()
      console.log(result)
    
      if(result.email){
        localStorage.setItem("email",JSON.stringify(result))
        navigate('/Afterlogin')

      }
      if(result.password){
        localStorage.setItem("password",JSON.stringify(result))
        navigate('/Afterlogin')

      }
      else{
        alert("fail connection")
      }
    }
  return (
   
    
    
    <>
    <div className="main">
    <div className="navbar">
       
    <img src={logo}/>
    <ul>
 <Link to ="/"><li className="more">Home</li></Link>
<Link to={"/blog"}><li className="more">Blog</li></Link>
<Link to="/Viewproduct"><li className="more">Spare</li></Link>
<li>
<button  id ="button"className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Login</button></li>

</ul>
<div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false"  id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Login</h5>
    <button type="button" id='button1' className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <form>
<div className='loginform'>
  <div className="form-outline mb-4">
  <label className="form-label" htmlFor="form2Example1">Email address</label>
    <input type="email" id="form2Example1" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} />
    
  </div>

  <div className="form-outline mb-4" id="from-outline">
  <label className="form-label" htmlFor="form2Example2">Password</label>
    <input type="password" id="form2Example2" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} />
    
  </div>


  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
    
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
      </div>
    </div>

    <div className="col">
    
      <a href="#!">Forgot password?</a>
    </div>
  </div>

 
  <button type="button" className="btn btn-primary btn-block mb-4" id="loginbtn" onClick={collectData}>Login</button>

  
  <div className="text-center">
    <p>Not a member? <Link to="/register">Register</Link></p>
    
  </div>
  </div>
</form>
  
  
  
  
          </div>
        </div>
      </div>
  






</>
  )
}
