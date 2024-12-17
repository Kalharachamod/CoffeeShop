import React from 'react';
import './products.css';
import { FaStar, FaShoppingCart } from 'react-icons/fa'; // Import icons from react-icons

function Products() {
  return (
    <div>
      <p className="Products"  style={{ paddingTop:'20px' ,paddingLeft:'650px'}}><b>Latest Products</b></p>

      {/* Flex Container */}
      <div className="card-container">
        {/* Card 1 */}
        <div className="card">
          <img src="/images/p1.png" alt="Coffee" className="card-image" />
          <h3 className="card-title">Patch Roast</h3>
          <div className="card-rating">
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star inactive" />
          </div>
          <p className="card-price">
            <span className="current-price">$15.99</span>
            <span className="original-price">$20.99</span>
          </p>
          <button className="card-button">
            <FaShoppingCart /> Add To Cart
          </button>
        </div>

        {/* Card 2 */}
        <div className="card">
          <img src="/images/p2.png" alt="Coffee" className="card-image" />
          <h3 className="card-title">Sacred Grounds</h3>
          <div className="card-rating">
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star inactive" />
            <FaStar className="star inactive" />
          </div>
          <p className="card-price">
            <span className="current-price">$15.99</span>
            <span className="original-price">$20.99</span>
          </p>
          <button className="card-button">
            <FaShoppingCart /> Add To Cart
          </button>
        </div>

        {/* Card 3 */}
        <div className="card">
          <img src="/images/p3.png" alt="Coffee" className="card-image" />
          <h3 className="card-title">Presto</h3>
          <div className="card-rating">
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
          </div>
          <p className="card-price">
            <span className="current-price">$15.99</span>
            <span className="original-price">$20.99</span>
          </p>
          <button className="card-button">
            <FaShoppingCart /> Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
