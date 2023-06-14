import React from 'react';
import MediaQuery from 'react-responsive';
import offer1 from '../MyResources/offer.jpg';
import { Carousel } from 'react-bootstrap';
import { useState } from 'react';
import '../MyResources/Offers.css';
import ConfettiExplosion from 'react-confetti-explosion';

export default function Offers() {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const [isExploding, setIsExploding] = React.useState(false);
  const mouseOver=()=>{
    setIsExploding(true)
  }
  return (
    <div onMouseOver={mouseOver}>
      {console.log(window.screenY)}
      <center>{isExploding && <ConfettiExplosion width="500" duration={3000} particleCount={150}/>}</center>
      <MediaQuery maxDeviceWidth={600}>
      <h1 className='service-head'>Offers</h1>
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img src={offer1} className='offer' alt='image1' style={{width:"90vw",height:"600px"}} ></img>
      </Carousel.Item>
    </Carousel>
      </MediaQuery>
    </div>
  )
}
