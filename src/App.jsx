import React from "react";
import Home from "./components/Home/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Fruits from "./components/Fruits/Fruits.jsx";
import Dairy from "./components/Dairy/Dairy.jsx";
import Meat from "./components/Meat/Meat.jsx";
import AllProducts from "./components/AllProducts/AllProducts.jsx";
import Process from "./components/Process/Process.jsx"
import Values from "./components/Values/Values.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import WebLayout from "./components/WebLayout/WebLayout.jsx";

const App = () => {
  return (
    <div  className='font-poppins'>
     
      <Routes>
        <Route element={<WebLayout /> }>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<> <Values /><Testimonials/> </>} />
          <Route path="/process" element={<Process />} />
          <Route path="/contact" element={<h1>Contact Us Page</h1>} />
          <Route path="/favourite" element={<h1>Favourite Page</h1>} />
          <Route path="/shoppingcart" element={<h1>Shopping Cart Page</h1>} />
          <Route path="/faq" element={<h1>FAQ's Page</h1>} />
          <Route path="/support" element={<h1>Support Center Page</h1>} />
          <Route path="/feedback" element={<h1>Feedback Page</h1>} />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/dairy" element={<Dairy />} />
          <Route path="/meat" element={<Meat />} />
          <Route path="/allproducts" element={<AllProducts />} />
        </Route > 
        </Routes>
    </div>
  );
}
export default App;