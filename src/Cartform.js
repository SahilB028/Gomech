import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbarother from './Navbarother'
import out from './check.avif'
import Footer from './Footer'

export default function Cartform() {
  const [name,setName] = useState('')
    const [last,setLast] = useState('')
    const [user,setUser] = useState('')
    const [email,setEmail] = useState('')
    const [address,setAddress] = useState('')
    const [country,setCountry] = useState('')
    const [state,setState] = useState('')
    const [zip,setZip] = useState('')
    
    
    
    const checkout = async ()=>{
      console.log(name,last,user,email,address,country,state,zip)
      let result = await fetch('http://localhost:24806',{
      method :'post',
      body:JSON.stringify({name,last,user,email,address,state,zip}),
      headers:{
        'Content-Type' :'application/json'
      }
      })
      result = await result.json()
      console.log(result)
    }
  return (
  
    <>
    <Link to="/CartView" >
        <Navbarother/>
        <div className='containn'>
    <div className="container" id="contain">
  <main>
    <div className="py-5 text-center">
      <img className="d-block mx-auto mb-4" src={out} alt="" width="72" height="57" id="imgcheck"/>
      <h2 id='checkk'>Checkout form</h2>
      <p className="lead"></p>
    </div>

    <div className="row g-5">
      <div className="col-md-5 col-lg-4 order-md-last">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-primary" >Your cart</span>
          <span className="badge bg-primary rounded-pill">3</span>
        </h4>
        <ul className="list-group mb-3">
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Battary Luminous</h6>
              <small className="text-muted">Lorem ipsum dolor sit.</small>
            </div>
            <span className="text-muted">Rs.2500</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Delivery Chareges</h6>
              <small className="text-muted">Lorem ipsum dolor sit.</small>
            </div>
            <span className="text-muted">Rs.100</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Discount</h6>
              <small className="text-muted">Lorem ipsum dolor sit.</small>
            </div>
            <span className="text-muted">Rs. -100</span>
          </li>
        
            
          
          <li className="list-group-item d-flex justify-content-between">
            <span>Total (rupees)</span>
            <strong>Rs.2400</strong>
          </li>
        </ul>

       
      </div>
      <div className="col-md-7 col-lg-8" >
        <h4 className="mb-3">Billing address</h4>
        <form className="needs-validation" noValidate>
          <div className="row g-3">
            <div className="col-sm-6">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input type="text" className="form-control" id="firstName" placeholder="first name" value={name} onChange={(e)=>setName(e.target.value)} required/>
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div className="col-sm-6">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="lastName" placeholder="Last Name" value={last} onChange={(e)=>setName(e.target.value)} required/>
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="username" className="form-label">Username</label>
              <div className="input-group has-validation">
                <input type="text" className="form-control" id="username" placeholder="Username" value={user} onChange={(e)=>setUser(e.target.value)} required/>
              <div className="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
              <input type="email" className="form-control" id="email" placeholder="abc12@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" placeholder="Address"  value={address} onChange={(e)=>setAddress(e.target.value)}required/>
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
              <input type="text" className="form-control" id="address2" placeholder="Building No./street" value={address} onChange={(e)=>setAddress(e.target.value)}/>
            </div>

            <div className="col-md-2">
              <label htmlFor="country" className="form-label">Country</label>
              <select className="form-select" id="country" value={country} onChange={(e)=>setCountry(e.target.value)}required>
                <option value="">Choose...</option>
                <option>India</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid country.
              </div>
            </div>

            <div className="col-md-3">
              <label htmlFor="state" className="form-label">State</label>
              <select className="form-select" id="state" value={state} onChange={(e)=>setState(e.target.value)} required>
                <option value="">Choose...</option>
                <option>Himachal Pradesh</option>
                <option>Punjab</option>
                <option>Rajasthan</option>
                <option>Jammu & Kashmir </option>
                <option>Uttrakhand</option>
              </select>
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>

            <div className="col-md-4">
              <label htmlFor="pin" className="form-label">Pin Code</label>
              <input type="text" className="form-control" id="pin" placeholder="176045" value={zip} onChange={(e)=>setZip(e.target.value)} required/>
              <div className="invalid-feedback">
                Pin Code required.
              </div>
            </div>
          </div>

          <hr className="my-4"/>

          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="same-address"/>
            <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
          </div>

          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="save-info"/>
            <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
          </div>

          <hr className="my-4"/>

          <button className="w-100 btn btn-primary btn-lg" type="submit" onClick={checkout}>Order</button>
        </form>
      </div>
    </div>
  </main>

  </div>
</div>
<br/>
<br/>

</Link>



<Footer/>

    
    
    
    
    </>


  
  )
}
