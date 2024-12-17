import React, { useState, useRef, useEffect } from 'react';
import './Cart.css';

function Cart() {
  const [cart, setCart] = useState([]);
  const [products] = useState([
    { id: 1, name: 'Espresso', price: 5.99  },
    { id: 2, name: 'Flat white', price: 29.99 },
    { id: 3, name: 'Iced coffee', price: 9.99 },
  ]);

  // Reference for the cart section to scroll to
  const cartSectionRef = useRef(null);
  const homeSectionRef = useRef(null);

  // Scroll to the cart section when this component is mounted
  useEffect(() => {
    if (cartSectionRef.current) {
      cartSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Add item to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Remove item from the cart by productId
  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId)); // Remove only the clicked item
  };

  // Scroll to the home section
  const scrollToHome = () => {
    if (homeSectionRef.current) {
      homeSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={cartSectionRef} className="cart">
      <h2 className="cart-header" style={{paddingLeft:'300px'}}>Your Coffee Cart</h2>

      {/* Displaying products available for addition */}
      <div className="product-list">
        <h3>Featured Coffee Products</h3>
        <div className="products">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h4>{product.name}</h4>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <button className="add-to-cart" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Display the cart content */}
      <div className="cart-items">
        <h3>Your Cart</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            <ul>
              {cart.map((product) => (
                <li key={product.id} className="cart-item">
                  <span>{product.name} - ${product.price.toFixed(2)}</span>
                  <button
                    className="remove-from-cart"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="total">
              Total: <span>${cart.reduce((total, product) => total + product.price, 0).toFixed(2)}</span>
            </div>
          </div>
        )}
      </div>

      {/* Scroll to Home Button */}
      <div className="scroll-to-home">
        <button onClick={scrollToHome}>Back to Home</button>
      </div>
      <br></br>

      {/* Home Section */}
      <div ref={homeSectionRef} className="home-section">
       
        <p>Explore our handpicked selection of the finest coffee products.</p>
      </div>
    </div>
  );
}

export default Cart;
