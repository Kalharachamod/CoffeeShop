import React from 'react';
import Navbar from './Components/Nav Bar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import Menu from './Components/Menu/Menu'
import Products from './Components/Products/products';
import About from './Components/About/About';
import Experts from './Components/Experts/Experts';
import Reviews from './Components/Reviews/Reviews';
import Booking from './Components/Booking/Booking';

import Cart from './Components/Cart/Cart'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <Router>
          <Navbar></Navbar>
      <Home></Home>
      <br></br>
      <About></About>
      <hr></hr>
      <Menu></Menu>
      <hr></hr>
      <Products></Products>
      <Experts></Experts>
      <Reviews></Reviews>
      
      <Booking></Booking>
      
  
      

      <Routes>
       
        <Route path="/cart" element={<Cart />} /> {/* Cart page */}
      </Routes>
      <Footer></Footer>
  
   
    </Router>
  );
}

export default App;
