import React from 'react'
import Navbar from './Navbar'
import Centernav from './Centernav'
import City from './City'
import Footer from './Footer'
import Frequently from './Frequently'
import Miles from './Miles'
import Price from './Price'
import Questions from './Questions'
import Summerspice from './Summerspice'
import Curated from './curated'
import Map from './Map'
import Form from './Form'
import Footer2 from './Footer2'
import Show from './Show'


export default function Home() {
  return (
    <>
    <Navbar/>
    <Form/>
    <Centernav/>
    <City/>
    <Miles/>
    <Curated/>
    <Summerspice/>
    <Map/>
    <Show/>
    <Frequently/>
    <Questions/>
    <Price/>
    
    <Footer/>
    
    
    </>
  )
}
