import React from 'react';
import NavBar from './NavBar.js';
import Display from './Display.js';
import Services from './Services.js';
import '../MyResources/Popup.css';
import {AiFillCloseCircle} from 'react-icons/ai';
import { useNavigate } from "react-router-dom";

export default function FeedPopup() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <>
        <NavBar/>
        <Display/>
        <Services/>
        <div className='popup-box' data-aos="fade-down" data-aos-duration="800" style={{height:"250px",bottom:"380px",marginTop:"-50%"}}>
            <AiFillCloseCircle color='red' className='close-btn' onClick={navigateToHome}/>
            <img src="https://media.tenor.com/0AVbKGY_MxMAAAAM/check-mark-verified.gif" alt="" className='book-gif'/>
            <h1 className='popup-head-text'>Thank You For Your Feedback</h1>
            <p className='popup-subtext' style={{fontSize:"1.2rem"}}>Do visit again!!</p>
        </div>
    </>
  )
}
