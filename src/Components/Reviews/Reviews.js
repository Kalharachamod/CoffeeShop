import React, { useState } from 'react';
import './Reviews.css';

const reviews = [
  {
    name: 'John Doe',
    review: 'Excellent service! Highly recommend.',
    rating: '★★★★★',
    image: '/images/review-1.jpg'
  },
  {
    name: 'Jane Smith',
    review: 'A seamless experience with great support.',
    rating: '★★★★☆',
    image: '/images/review-2.jpg'
  },
  {
    name: 'Alice Johnson',
    review: 'Good value for money. Satisfied with the service.',
    rating: '★★★★☆',
    image: '/images/review-3.jpg'
  }
];

function Reviews() {
  const [current, setCurrent] = useState(0);

  const nextReview = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="reviews-container">
      <h2 className="reviews-title" style={{paddingTop :'5650px' ,paddingLeft:'550px' ,color:'black'}}>Customer Reviews</h2>

      <br></br> <br></br> <br></br> <br></br> <br></br>
      <div className="review-card">
        <img
          src={reviews[current].image}
          alt={reviews[current].name}
          className="review-image"
        />
        <p className="review-text">"{reviews[current].review}"</p>
        <p className="review-rating">{reviews[current].rating}</p>
        <p className="review-author">- {reviews[current].name}</p>
      </div>
      <div className="review-navigation">
        <button onClick={prevReview} className="nav-button">❮</button>
        <button onClick={nextReview} className="nav-button">❯</button>
      </div>
    </div>
  );
}

export default Reviews;
