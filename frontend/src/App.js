import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import ShopCategory from "./Pages/ShopCategory";
import AddProduct from "./Pages/AddProduct";
import LoginSignup from "./Pages/LoginSignup";
import women_banner from "./Components/Assets/banner_women.png";
import men_banner from "./Components/Assets/banner_mens.png";
import kid_banner from "./Components/Assets/banner_kids.png";

export const backend_url = 'http://localhost:4000';
export const currency = '₹';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop gender="all" />} />
        <Route path="/usedcar" element={<ShopCategory  category="usedcar" />} />
        <Route path="/sellcar" element={<AddProduct/>} />
        <Route path="/newcar" element={<ShopCategory  category="newcar" />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
