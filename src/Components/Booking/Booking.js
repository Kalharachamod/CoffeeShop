// Booking.js
import React from 'react';
import './Booking.css';

function Booking() {
  return (
    <div className="booking-container">
      <div className="booking-content">
        <h1>Let's book a Table</h1>
        <h2>For you</h2>
        <div className="booking-form">
        <img src="/images/book.jpg" alt="Coffee beans" className="book-image" />
          <input type="text" placeholder="📞 Your Number" className="input-number" />
          <input type="number" placeholder="👤 People" className="input-people" />
          <button className="book-button">Book Table</button>
        </div>
        <p>We'll contact you to confirm your booking</p>
      </div>
      
    </div>
  );
}

export default Booking;