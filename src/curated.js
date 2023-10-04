import React from 'react'
import brake from './brake.png'
import batt from './batt.png'
import glasses from './glasses.png'
import light from './light.png'
import tyres from './light.png'
import mirror from './mirror.png'
import clutch from './clutch.png'
import body from './body.png'
import AC from './AC.png'
import stering from './streing.png'
import Tyres from './tyres.png'
import suspension from './suspension.png'
import goconnet from './goconnect.png'
import { Link } from 'react-router-dom'

export default function () {
  return (
<>
<div id="heading">
<div className="heading"> 
  <h2>Curated Customer Service</h2>
            <div className="curated">
              
              <div className="custom">
              <Link to="/Viewproduct"><img src={batt} width="100px" height="100px"/>
                 <p>Batteries</p></Link>
                 
                
              </div>
              
                        <div className="custom">
                        <Link to="/Viewproduct">  <img src={brake} width="100px" height="100px"/>
                    
                         <p>Brake</p></Link>
                      
                        </div>
             
                   <div className="custom">
                   <Link to="/Viewproduct">    <img src={glasses} width="100px" height="100px"/>
                     <p>Glasses</p></Link>
                    
                   </div>
                   
                        <div className="custom">
                        <Link to="/Viewproduct">   <img src={light} width="100px" height="100px"/>
                         <p>Lights</p></Link>
                          
                        </div>
                        </div>
                        
                        <div className="curated">
                        <div className="custom">
                        <Link to="/Viewproduct"><img src={tyres} width="100px" height="100px"/>
                            <p>Tyres</p></Link>
                            
                           
                         </div>
                        
                        
                                   <div className="custom">
                                   <Link to="/Viewproduct">   <img src={mirror} width="100px" height="100px"/>
                                    <p>Mirror</p></Link>
                                 
                                   </div>
                        
                              <div className="custom">
                              <Link to="/Viewproduct">     <img src={clutch} width="100px" height="100px"/>
                                <p>Clutch</p></Link>
                               
                              </div>
                              
                                   <div className="custom">
                                   <Link to="/Viewproduct">   <img src={body} width="100px" height="100px"/>
                                    <p>Body Parts</p></Link>
                                     
                                    </div>
                        </div>
                        
                        
                        <div className="curated">
                          <div className="custom">
                            <a href="#"><img src={AC}width="100px" height="100px"/>
                              <p>Periodic Service</p></a>
                              
                             
                           </div>
                                                                                           
                                 <div className="custom">
                                 <Link to="/Viewproduct"><img src={stering} width="100px" height="100px"/>
                                      <p>stering & Repair</p></Link>
                                   
                                     </div>
                          
                                <div className="custom">
                                <Link to="/Viewproduct">    <img src={suspension} width="100px" height="100px"/>
                                  <p>suspension</p></Link>
                                 
                                </div>
                                
                                     <div className="custom">
                                     <Link to="/Viewproduct">  <img src={goconnet} width="100px" height="100px"/>
                                      <p>Tyres & Wheel Care</p></Link>
                                       </div>
                                     </div>
                                     </div>
                                     </div>
                                    
                                    
                                    
                                  
           
           </>
  )
}
