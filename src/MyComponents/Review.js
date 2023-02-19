import React from 'react';
import ReviewCarousel from "./ReviewCarousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../MyResources/Review.css';

export default function Review() {
  const navToReview=()=>{
    window.location.href='https://qrs.ly/e4ejs0w';
  }
  return (
    <>
    <h1 className='review-head'>Reviews</h1>
    <div className='review-box'>
      <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png" alt="" className='g-img'/>
      <p className='rating-text'>Rating</p>
      <h1 className='rating-value'>5.0</h1>
      <img src="https://www.citypng.com/public/uploads/preview/rating-review-yellow-5-stars-png-image-11670328685efoicfrjz3.png" alt="" className='rating-star'/>
      <p className='review-count'>32 reviews</p>
      <div className='btn-div'>
        <button className='review-btn' onClick={navToReview}>Write a review</button>
      </div>
    </div>
    <section class="testimonials-body">
      <div>
        <ReviewCarousel />
      </div>
    </section>
    
    </>
  )
}
