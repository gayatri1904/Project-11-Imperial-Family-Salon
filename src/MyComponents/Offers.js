import React from 'react';
import MediaQuery from 'react-responsive';
import offer1 from '../MyResources/offer.jpg';
import { Carousel } from 'react-bootstrap';
import { useState } from 'react';
import '../MyResources/Offers.css';

export default function Offers() {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <MediaQuery maxDeviceWidth={600}>
      <h1 className='service-head'>Offers</h1>
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img src={offer1} className='offer' alt='image1' style={{width:"90vw",height:"70vh"}}></img>
      </Carousel.Item>
    </Carousel>
      </MediaQuery>
    </div>
  )
}
