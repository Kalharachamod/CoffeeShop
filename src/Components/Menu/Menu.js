import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.css';

function Menu() {
  const navigate = useNavigate(); // Hook for navigation

  const handleAddToCart = () => {
    // Scroll to top and navigate to /cart page
    window.scrollTo(0, 0); // This scrolls the page to the top first
    navigate('/cart'); // Then navigate to the cart page
  };

  return (
    <div>
      <p className="ourmenu"><b>OUR MENU</b></p>

      <div className="card-container">
        {/* Card 1 */}
        <div className="card">
          <img src="/images/product-1.png" alt="Coffee" className="card-image" />
          <p className="card-price">
            <span className="current-price">$15.99</span>
            <span className="original-price">$20.99</span>
          </p>
          <h3 className="card-title">Espresso</h3>
          <button className="card-button" onClick={handleAddToCart}>Add To Cart</button>
        </div>

        {/* Card 2 */}
        <div className="card">
          <img src="/images/product-2.png" alt="Coffee" className="card-image" />
          <p className="card-price">
            <span className="current-price">$15.99</span>
            <span className="original-price">$20.99</span>
          </p>
          <h3 className="card-title">Flat white</h3>
          <button className="card-button" onClick={handleAddToCart}>Add To Cart</button>
        </div>

        {/* Card 3 */}
        <div className="card">
          <img src="/images/product-3.png" alt="Coffee" className="card-image" />
          <p className="card-price">
            <span className="current-price">$15.99</span>
            <span className="original-price">$20.99</span>
          </p>
          <h3 className="card-title">Iced coffee</h3>
          <button className="card-button" onClick={handleAddToCart}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
