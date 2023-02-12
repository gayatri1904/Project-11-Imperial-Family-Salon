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
    <MediaQuery minDeviceWidth={800}>
    <Carousel activeIndex={index} onSelect={handleSelect} className='service-carousel'>
      <Carousel.Item>
        <div className='card-outer'>
        <Card imgsrc={'https://media6.ppl-media.com/mediafiles/blogs/image_c6b56fafbd.png'} title={'Male Haircut'}/>
          <Card imgsrc={'https://5.imimg.com/data5/SELLER/Default/2021/12/TD/JL/GZ/132168821/01-10-2019-latest-haircut-for-girls-long-with-layers-3-500x500.png'} title={'Female Haircut'}/>
          <Card imgsrc={'https://thumbs.dreamstime.com/b/nails-manicure-26371795.jpg'} title={'Manicure'}/>
          <Card imgsrc={'https://img.freepik.com/premium-photo/pedicure-moisturizing-cram-after-foot-rasp_79295-4791.jpg?w=2000'} title={'Pedicure'}/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='card-outer'>
        <Card imgsrc={'https://images.herzindagi.info/image/2020/May/tips-hair-smoothening-at-home.jpg'} title={'Hair Smoothning'}/>
          <Card imgsrc={'https://cdn2.stylecraze.com/wp-content/uploads/2013/09/Side-Effects-Of-Hair-Straightening-You-Should-Be-Aware-Of.jpg'} title={'Hair Straightning'}/>
          <Card imgsrc={'https://static-bebeautiful-in.unileverservices.com/everything-about-hair-rebonding_1.jpg'} title={'Hair Rebondning'}/>
          <Card imgsrc={'https://femina.wwmindia.com/content/2019/oct/hair-smoothening.jpg'} title={'Kera Smoothening'}/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='card-outer'>
        
        <Card imgsrc={'https://www.matrix.com/~/media/images/hair-color-gallery/hair-color-looks/highlights/brown-highlights/brown-highlights-1.jpg'} title={'Global Hair Colour'} />
          <Card imgsrc={'https://img.freepik.com/free-photo/hairdresser-colored-hair-her-client-hair-salon_1157-27194.jpg'} title={'Highlights'}/>
          <Card imgsrc={'https://www.southernliving.com/thmb/8APe8s5CdvG3cEU-eGKWqDTAFLc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/1-1-222914ce303e454aaec07336a52514cc.jpg'} title={'Balayage'}/>
          <Card imgsrc={'https://i.pinimg.com/236x/21/cb/0e/21cb0e65d968e1f4ee689e2491b42822.jpg'} title={'Ombre/ Sombre'}/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='card-outer'>
        <Card imgsrc={'https://img.freepik.com/free-photo/beautiful-keratin-treated-hair_23-2149332492.jpg'} title={'Keratin'}/>
          <Card imgsrc={'https://static-bebeautiful-in.unileverservices.com/Everything-you-need-to-know-about-botox-hair-treatment_2_0.jpg'} title={'Botox'}/>
          <Card imgsrc={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFgrPN1ad8_0dk4wYz8Fp4buXLtiAMxh7a6_7siECW79L3FPvdb3zvVQwWJIgcoZuIBDk&usqp=CAU'} title={'Hairfall Treatment'}/>
          <Card imgsrc={'https://images.hindustantimes.com/img/2022/08/25/550x309/Fa7k2viUUAUPvOU_1661417231202_1661417247169_1661417247169.jpg'} title={'Dandruff Treatment'}/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='card-outer'>
          <Card imgsrc={'https://media.istockphoto.com/id/1098349892/photo/cosmetologist-using-brush-while-putting-white-clay-mask-on-male-face.jpg?s=612x612&w=0&k=20&c=Q7c3oHeLAH-TYOGTkUv3C-5neNfQkMIkrSWlCJUseJw='} title={'Male Facial'}/>
          <Card imgsrc={'https://thumbs.dreamstime.com/b/woman-facial-mask-beauty-salon-22945999.jpg'} title={'Female Facial'}/>
          <Card imgsrc={'https://bepos.io/wp-content/uploads/2021/07/dd4878_382bf20644084ee3ba07991ff87a16bc_mv2.webp'} title={'Chemical Treatment'}/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='card-outer'>
        <Card imgsrc={'https://www.garnier.in/-/media/project/loreal/brand-sites/garnier/apac/in/all-article-pages/hair-care-tips/easy-4-step-hair-spa-at-home/thumbnails-6.jpg?rev=6d9cbec25e2944c8bd7f6004fff956bd'} title={'Keratin Hair Spa'}/>
          <Card imgsrc={'https://www.bodycraft.co.in/wp-content/uploads/woman-washing-head-hairsalon-scaled.jpg'} title={'Loreal Hair Spa'}/>
        <Card imgsrc={'https://i0.wp.com/thecuriousjalebi.com/wp-content/uploads/2017/07/21224179_166441913921262_7930522765486981120_n.jpg?ssl=1'} title={'Puming'}/>
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
      <Carousel.Item>
        <div className='card-outer'>
        <Card imgsrc={'https://images.herzindagi.info/image/2020/May/tips-hair-smoothening-at-home.jpg'} title={'Hair Smoothning'}/>
          <Card imgsrc={'https://cdn2.stylecraze.com/wp-content/uploads/2013/09/Side-Effects-Of-Hair-Straightening-You-Should-Be-Aware-Of.jpg'} title={'Hair Straightning'}/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='card-outer'>
      <Card imgsrc={'https://static-bebeautiful-in.unileverservices.com/everything-about-hair-rebonding_1.jpg'} title={'Hair Rebondning'}/>
          <Card imgsrc={'https://femina.wwmindia.com/content/2019/oct/hair-smoothening.jpg'} title={'Kera Smoothening'}/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='card-outer'>
      <Card imgsrc={'https://www.matrix.com/~/media/images/hair-color-gallery/hair-color-looks/highlights/brown-highlights/brown-highlights-1.jpg'} title={'Global Hair Colour'}/>
          <Card imgsrc={'https://img.freepik.com/free-photo/hairdresser-colored-hair-her-client-hair-salon_1157-27194.jpg'} title={'Highlights'}/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='card-outer'>
        <Card imgsrc={'https://www.southernliving.com/thmb/8APe8s5CdvG3cEU-eGKWqDTAFLc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/1-1-222914ce303e454aaec07336a52514cc.jpg'} title={'Balayage'}/>
          <Card imgsrc={'https://i.pinimg.com/236x/21/cb/0e/21cb0e65d968e1f4ee689e2491b42822.jpg'} title={'Ombre/ Sombre'}/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='card-outer'>
      <Card imgsrc={'https://img.freepik.com/free-photo/beautiful-keratin-treated-hair_23-2149332492.jpg'} title={'Keratin'}/>
          <Card imgsrc={'https://static-bebeautiful-in.unileverservices.com/Everything-you-need-to-know-about-botox-hair-treatment_2_0.jpg'} title={'Botox'}/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='card-outer'>
      <Card imgsrc={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFgrPN1ad8_0dk4wYz8Fp4buXLtiAMxh7a6_7siECW79L3FPvdb3zvVQwWJIgcoZuIBDk&usqp=CAU'} title={'Hairfall Treatment'}/>
          <Card imgsrc={'https://images.hindustantimes.com/img/2022/08/25/550x309/Fa7k2viUUAUPvOU_1661417231202_1661417247169_1661417247169.jpg'} title={'Dandruff Treatment'}/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='card-outer'>
        <Card imgsrc={'https://bepos.io/wp-content/uploads/2021/07/dd4878_382bf20644084ee3ba07991ff87a16bc_mv2.webp'} title={'Chemical Treatment'}/>
        <Card imgsrc={'https://www.garnier.in/-/media/project/loreal/brand-sites/garnier/apac/in/all-article-pages/hair-care-tips/easy-4-step-hair-spa-at-home/thumbnails-6.jpg?rev=6d9cbec25e2944c8bd7f6004fff956bd'} title={'Keratin Hair Spa'}/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='card-outer'>
      <Card imgsrc={'https://www.bodycraft.co.in/wp-content/uploads/woman-washing-head-hairsalon-scaled.jpg'} title={'Loreal Hair Spa'}/>
        <Card imgsrc={'https://i0.wp.com/thecuriousjalebi.com/wp-content/uploads/2017/07/21224179_166441913921262_7930522765486981120_n.jpg?ssl=1'} title={'Puming'}/>
        </div>
      </Carousel.Item>
    </Carousel>
    </MediaQuery>
    </>
  );
}
