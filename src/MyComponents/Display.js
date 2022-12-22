import React from 'react'
import img1 from '../MyResources/img1.jpg'
import img2 from '../MyResources/img2.jpg'
import img3 from '../MyResources/img3.jpg'
import { Carousel } from 'react-bootstrap'
import { useState } from 'react'
import '../MyResources/Display.css'

export default function Display() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    // <div className='container'>
    //     <div className='imageBody'>
    //     <img src={img1} className='imageDisplay' alt='imgage1'></img>
    //     <img src={img2} className='imageDisplay' alt='image2'></img>
    //     <img src={img3} className='imageDisplay' alt='image3'></img>
    //     </div>
    // </div>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img src={img1} className='imageDisplay' alt='imgage1'></img>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} className='imageDisplay' alt='image2'></img>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img3} className='imageDisplay' alt='image3'></img>
      </Carousel.Item>
    </Carousel>
  )
}
