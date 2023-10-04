import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbarother from './Navbarother'
import book1 from './book1.jpg'
import book2 from './book2.jpg'
import book4 from './book4.jpg'
import Footer2 from './Footer2'



export default function Booking() {
  
  const [name,setName] = useState('')
    const [last,setLast] = useState('')
    const [mobile,setMobile] = useState('')
    const [email,setEmail] = useState('')
    const [address,setAddress] = useState('')
    const [city,setCity] = useState('')
    const [zip,setZip] = useState('')
    const [Date,setDate] = useState('')
    const [Model,setModel]=useState('')
    
    
    const Appoint = async ()=>{
      console.log(name,last,mobile,email,address,city,zip,Date,Model)
      let result = await fetch('http://localhost:24805',{
      method :'post',
      body:JSON.stringify({name,last,mobile,email,address,city,zip,Date,Model}),
      headers:{
        'Content-Type' :'application/json'
      }
      })
      result = await result.json()
      console.log(result)
    }
  return (
  <>
  <Navbarother/>
  <div className='booking'>
  <Link to="/booking" id='books'>
  <h1> Car Service Booking Form</h1>
  <div className='background'>
  <div className='Appoint'>
    <div className='color'>
      <div className='left'>
        <h3>Customer Information</h3>
        <hr></hr>
<div className='firstname'>

<label>Name</label><br/>
<input type="text" required value={name} onChange={(e)=>setName(e.target.value)}/> 
<p id="firstpara">First</p></div>
<div className='last'>
<input type="text" required value={last} onChange={(e)=>setLast(e.target.value)}/>
<p>Last</p>
</div>

<div className='num'><label id='num'>mobile no.:</label><input type="tel" value={mobile} onChange={(e)=>setMobile(e.target.value)}/></div><br/>



<div className='mailid'><label>Email Id:</label><br/>
<input type="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
<p>example@example.com</p></div><br/>

<div className='add'>
  <p>Address:</p>
  <input type='address' value={address} onChange={(e)=>setAddress(e.target.value)}></input>
</div><br/>
<div className='city1'>
  <p>City:</p>
  <input type='address' value={city} onChange={(e)=>setCity(e.target.value)}></input>
</div>
<br/>
<div className='zip'>
  <p>Pincode/Postal</p>
<input id="zip" name="zip" type="number" value={zip} onChange={(e)=>setZip(e.target.value)}/>

</div>
<br/>
<div className='Date'><label>Enter Date</label><input type="date" min="1998-01-01" max="2001-01-01" value={Date} onChange={(e)=>setDate(e.target.value)}/></div><br/>


<div className='vehicle'>
<p>vehicle Type</p>
<select  >

<option selected id='select'>Select</option>
<option>Sedan
</option>
<option>Sports Car</option>
<option>Hatchback</option>
<option>Wagon</option>
<option>Minivan</option>
<option>Pick-up Truck</option>
<option>Hybrid/Electric</option>
<option>Other</option>
</select></div><br/>

 <div className='mod'>
  <p>Model</p>
  <input type='text' value={Model} onChange={(e)=>setModel(e.target.value)}/></div>
  
  <br/>
  <div className='servicetype'>
<p>Type of Service</p>
<select>

<option selected id='select'>Select</option>
<option selected>Select</option>
<option >All</option>
<option>Check the engine Oil</option>
<option >Oil filter replacement</option>
<option >Fuel filter replacement</option>
<option>Replace the spark plugs</option>
<option >Refill the brake fluid</option>
<option >Change the engine oil</option>
<option>Other</option>
</select>
</div>
<button id="btnbook" onClick={Appoint}>BOOK NOW</button>
</div>
</div>
<img src={book1} className='book1'/>
<img src={book2} className='book2'/>
<img src={book4} className='book4'/>
</div>
</div>
<Footer2/>


  </Link>
  </div>

 
  </>
  )
}
