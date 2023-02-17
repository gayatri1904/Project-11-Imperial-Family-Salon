import React from "react";
import "../MyResources/Review.css";

const Cardtest = (props) => {
  return (
    <>
      <div class="testi-body">
        <div class="testimonials-carousel">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="testi-item">
                  <div class="testi-avatar">
                    <img src={props.imgsrc} alt={props.imgsrc} style={{borderRadius:"50%"}}/>
                  </div>
                  <div class="testimonials-text">
                    <div class="testi-name">
                      <h3 style={{fontSize:"32px"}}>{props.name}</h3>
                    </div>
                    <p style={{paddingBottom:"10px"}}>{props.msg}</p>
                    <img src="https://tse4.mm.bing.net/th?id=OIP.BHM85ldnVlRZdPPK3GYd1AHaEU&pid=Api&P=0" alt="" className="google-img"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardtest;
