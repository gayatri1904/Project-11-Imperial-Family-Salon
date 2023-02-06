import React from 'react'
import logo from '../MyResources/logo.png'
import '../MyResources/NavBar.css';
import MediaQuery from 'react-responsive';
import Navbar from 'react-bootstrap/Navbar';


export default function NavBar() {
  const scrollDown = () => {
    document.getElementById('MyForm').scrollIntoView(false);
  } 
  return (
    <>
    <Navbar bg="dark" variant="dark" style={{position:"fixed",width:"100vw",zIndex:"3"}}>
      <MediaQuery maxDeviceWidth={600}>
          <img className='nav-logo' src={logo} alt=""/>
          <h1 className='nav-name'>Imperial Family Salon</h1>
          <p className='nav-subname'>Makeover Studio</p>
          </MediaQuery>
          <MediaQuery minDeviceWidth={800}>
          <img className='nav-logo' src={logo} alt=""/>
          <h1 className='nav-name'>Imperial Family Salon & Makeover Studio</h1>
          <button className='nav-button' onClick={scrollDown}>Book Appointment</button>
          </MediaQuery>
      </Navbar>
    </>
  )
}
