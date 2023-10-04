
import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Router, Routes, UNSAFE_DataRouterStateContext } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Blogcenter from './Blogcenter';
import Blognews from './Blognews';
import Booking from './Booking';
import Register from './Register';
import Afterlogin from './Afterlogin';
import Viewproduct from './Viewproduct';
import Productviews from './Productviews';
import Cartform from './Cartform';
import Brake from './Brake';
import Headlight from './Headlight';
import Glass from './Glass';
import Miror from './Miror';
import Clutch from './Clutch';
import Alloy from './Alloy';
import Sterring from './Sterring';
import Cleankit from './Cleankit';
function App() {
  return (
     <> 
      <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/Afterlogin' element={<Afterlogin/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/blog' element={<Blognews/>}/>
     <Route path ='/booking' element={<Booking/>}/>
     <Route path ="/register" element={<Register/>}/>
     <Route path="/Afterlogin" element={<Afterlogin/>}/>
     <Route path='/viewproduct' element={<Viewproduct/>}/>
     <Route path='/viewdetail' element={<Productviews/>}/>
     <Route path='/Cartview' element={<Cartform/>}/>
     <Route path='/Brake' element={<Brake/>}/>
     <Route path='/light' element={<Headlight/>}/>
     <Route path='/glass' element={<Glass/>}/>
     <Route path='/mirror' element={<Miror/>}/>
     <Route path='/clutch' element={<Clutch/>}/>
     <Route path='/alloy' element={<Alloy/>}/>
     <Route path='/stering' element={<Sterring/>}/>
     <Route path='/clean' element={<Cleankit/>}/>
    </Routes>
    </>
   
  );
}

export default App;
