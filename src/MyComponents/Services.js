import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import '../MyResources/Services.css';
import MediaQuery from 'react-responsive';
import Card from './Card';

export default function Services() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
    <h1 className='service-head'>Services</h1>
    <MediaQuery minDeviceWidth={1224}>
    <Carousel activeIndex={index} onSelect={handleSelect} className='service-carousel'>
      <Carousel.Item>
        <div className='card-outer'>
          <Card imgsrc={'https://media6.ppl-media.com/mediafiles/blogs/image_c6b56fafbd.png'} title={'Male Haircut'}/>
          <Card imgsrc={'https://5.imimg.com/data5/SELLER/Default/2021/12/TD/JL/GZ/132168821/01-10-2019-latest-haircut-for-girls-long-with-layers-3-500x500.png'} title={'Female Haircut'}/>
          <Card imgsrc={'https://5.imimg.com/data5/SELLER/Default/2021/12/TD/JL/GZ/132168821/01-10-2019-latest-haircut-for-girls-long-with-layers-3-500x500.png'} title={'Female Haircut'}/>
          <Card imgsrc={'https://5.imimg.com/data5/SELLER/Default/2021/12/TD/JL/GZ/132168821/01-10-2019-latest-haircut-for-girls-long-with-layers-3-500x500.png'} title={'Female Haircut'}/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='card-outer'>
          <Card imgsrc={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'} title={'Haircut'}/>
          <Card imgsrc={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'} title={'Haircut'}/>
          <Card imgsrc={'https://5.imimg.com/data5/SELLER/Default/2021/12/TD/JL/GZ/132168821/01-10-2019-latest-haircut-for-girls-long-with-layers-3-500x500.png'} title={'Female Haircut'}/>
          <Card imgsrc={'https://5.imimg.com/data5/SELLER/Default/2021/12/TD/JL/GZ/132168821/01-10-2019-latest-haircut-for-girls-long-with-layers-3-500x500.png'} title={'Female Haircut'}/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='card-outer'>
          <Card imgsrc={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'} title={'Haircut'}/>
          <Card imgsrc={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'} title={'Haircut'}/>
          <Card imgsrc={'https://5.imimg.com/data5/SELLER/Default/2021/12/TD/JL/GZ/132168821/01-10-2019-latest-haircut-for-girls-long-with-layers-3-500x500.png'} title={'Female Haircut'}/>
          <Card imgsrc={'https://5.imimg.com/data5/SELLER/Default/2021/12/TD/JL/GZ/132168821/01-10-2019-latest-haircut-for-girls-long-with-layers-3-500x500.png'} title={'Female Haircut'}/>
        </div>
      </Carousel.Item>
    </Carousel>
    </MediaQuery>
    <MediaQuery maxDeviceWidth={600}>
    <Carousel activeIndex={index} onSelect={handleSelect} className='service-carousel'>
      <Carousel.Item>
        <div className='card-outer'>
          <Card imgsrc={'https://media6.ppl-media.com/mediafiles/blogs/image_c6b56fafbd.png'} title={'Male Haircut'}/>
          <Card imgsrc={'https://5.imimg.com/data5/SELLER/Default/2021/12/TD/JL/GZ/132168821/01-10-2019-latest-haircut-for-girls-long-with-layers-3-500x500.png'} title={'Female Haircut'}/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='card-outer'>
          <Card imgsrc={'https://thumbs.dreamstime.com/b/nails-manicure-26371795.jpg'} title={'Manicure'}/>
          <Card imgsrc={'https://img.freepik.com/premium-photo/pedicure-moisturizing-cram-after-foot-rasp_79295-4791.jpg?w=2000'} title={'Pedicure'}/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='card-outer'>
          <Card imgsrc={'https://media.istockphoto.com/id/1098349892/photo/cosmetologist-using-brush-while-putting-white-clay-mask-on-male-face.jpg?s=612x612&w=0&k=20&c=Q7c3oHeLAH-TYOGTkUv3C-5neNfQkMIkrSWlCJUseJw='} title={'Male Facial'}/>
          <Card imgsrc={'https://thumbs.dreamstime.com/b/woman-facial-mask-beauty-salon-22945999.jpg'} title={'Female Facial'}/>
        </div>
      </Carousel.Item>
    </Carousel>
    </MediaQuery>
    </>
  );
}
