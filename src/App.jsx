import React from "react";
import Home from "./components/Home/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";

const App = () => {
  return (
    <div  className='font-poppins'>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h1>About Us Page</h1>} />
          <Route path="/process" element={<h1>Process Page</h1>} />
          <Route path="/contact" element={<h1>Contact Us Page</h1>} />
          <Route path="/favourite" element={<h1>Favourite Page</h1>} />
          <Route path="/shoppingcart" element={<h1>Shopping Cart Page</h1>} />
          <Route path="/faq" element={<h1>FAQ's Page</h1>} />
          <Route path="/support" element={<h1>Support Center Page</h1>} />
          <Route path="/feedback" element={<h1>Feedback Page</h1>} />
          
        </Routes>
    </div>
  );
}
export default App;