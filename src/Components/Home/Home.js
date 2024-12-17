import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <img className="background" src="/images/hero.png" alt="Background" />
      <h1>
        <b>START YOUR DAY </b><br />
        <b>WITH COFFEE</b>
      </h1>

      <h2>Welcome to your coffee haven! Explore the finest brews, crafted to bring warmth, flavor,<br/>and a touch of magic to your day. Sip, savor, and stay inspired.</h2>
      <button className='shopnow'>Shop Now</button>
      

     

      
    </div>
  );
}

export default Home;
