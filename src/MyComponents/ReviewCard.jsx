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
                      <h3 style={{fontSize:"32px "}}>{props.name}</h3>
                    </div>
                    <p>{props.msg}</p>
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
