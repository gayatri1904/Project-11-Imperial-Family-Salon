import React from 'react';
import ReviewCarousel from "./ReviewCarousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../MyResources/Review.css';

export default function Review() {
  return (
    <>
    <h1 className='service-head'>Reviews</h1>
    <section class="testimonials-body">
      <div>
        <ReviewCarousel />
      </div>
    </section>
    </>
  )
}
