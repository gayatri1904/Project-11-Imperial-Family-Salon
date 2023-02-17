import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Cardtest from "./ReviewCard";
import Data from "./Reviewdata";
import { useState } from "react";

export default function ReviewCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
      // <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay>
        // {Data.map((val, ind) => {
        //   return (
        //     <div>
        //       <Cardtest
        //         key={ind}
        //         imgsrc={val.imgsrc}
        //         name={val.name}
        //         msg={val.msg}
        //         batch={val.batch}
        //         placed={val.placed}
        //       />
        //     </div>
            
        //   );
        // })}
      // </Carousel>
      <Carousel activeIndex={index} onSelect={handleSelect} className='review-carousel'>
      
      {Data.map((val, ind) => {
          return (
            <Carousel.Item>
              <Cardtest
                key={ind}
                imgsrc={val.imgsrc}
                name={val.name}
                msg={val.msg}
                batch={val.batch}
                placed={val.placed}
              />
            </Carousel.Item>
            
          );
        })}
      </Carousel>
  )
}

