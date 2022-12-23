import React from "react";
import { Carousel } from "react-responsive-carousel";
import Cardtest from "./ReviewCard";
import Data from "./Reviewdata";

export default function ReviewCarousel() {
  return (
      <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay>
        {Data.map((val, ind) => {
          return (
            <div>
              <Cardtest
                key={ind}
                imgsrc={val.imgsrc}
                name={val.name}
                msg={val.msg}
                batch={val.batch}
                placed={val.placed}
              />
            </div>
          );
        })}
      </Carousel>
  )
}

