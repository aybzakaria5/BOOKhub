import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar/Nav'
import Footer from './Footer/Footer'


const Main = () => {
  return (
    <>

        <NavBar/>
        
        <Outlet/>

        <Footer/>
    
    
    </>
  )
}

export default Main