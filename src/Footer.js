import React from 'react'
import mechlogo from './gomechlogo.png'
import { Link } from 'react-router-dom'
export default function Footer() {
    const showAlert = () => {
        alert('subscribed..');
      };
        
  return (
    <>
    
  
    <div className="footer">
    <img src={mechlogo}/>
    <div className='Con-Email'>
    <h5>Phone: 9459443823</h5>
    
    <h5>Email: gomechanics123@gmail.com</h5>
    </div>
    <div className='subscribe'>
 
    <button onClick={showAlert}>subscribe</button>
    </div>
 <div className='iconss'>
    <Link to=""><i className="fa-brands fa-facebook" id="icons"></i></Link>
 <Link to=""><i className="fa-brands fa-square-twitter" id="icons"></i></Link>
 <Link to=""><i className="fa-brands fa-github" id="icons"></i></Link>
 <Link to=""><i className="fa-brands fa-instagram" id="icons"></i></Link>
 </div>
 
    
    
        <div className='content1'>
            
        <div className="content">
            <h1>About US</h1>
            <p>Terms & Conditions</p>
       <a href='#center'><p>Qur Service</p></a>
            <p>Privacy Policy</p>
            <p>Contact Us</p>
        </div>
        <div className="content">
            <h1>Get Help</h1>
         <a href='#accordionExample'><p>FAQ</p></a> 
            <p>Shipping</p>
            <p>Order Status.</p>
            <p>Return</p>
        </div>
        <div className="content">
            <h1>Popular Brands</h1>
            <p>Maruti</p>
            <p>TATA</p>
            <p>Toyota</p>
            <p>Hyundai</p>
            <p>Honda</p>
            <p>Mahindra</p>
        </div>
        <div className="content">
            <h1>Our service</h1>
            <p>Scheduled Service</p>
            <p>AC Service</p>
            <p>Denting Painting</p>
            <p>Custom Repair</p>
            <p>Cleaning & Detaling</p>
        </div>
        </div>
   </div>
    </>
  )
}
