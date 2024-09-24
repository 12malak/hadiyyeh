import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useThemeHook } from './GlobalComponents/ThemeProvider';
import Header from './components/Header';
import RightCart from './components/RightCart';
import AppFooter from './components/AppFooter';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import ProductDetails from "./Pages/ProductDetails";
import SignIn from "./Pages/SignIn";
import Register from "./Pages/Register";
import MyAccount from "./Pages/MyAccount";
import Search from "./Pages/Search";
import Cardes from "./Pages/Cardes";
import Blogs from "./Pages/Blogs";
import Allproducts from "./Pages/Allproducts";
function App() {
  const [theme] = useThemeHook();
  const [cartItems, setCartItems] = useState([
    { name: 'US POLO ASSN. 1000-01 WATCH FOR MEN', price: 10 },
    { name: 'LATTAFA ANA ABIYEDH EDP UNISEX', price: 20 },
    
]);
  return (
    <Router>
       <Header cartItems={cartItems} />
       <RightCart cartItems={cartItems} setCartItems={setCartItems} theme={theme} />
       <main className={theme ? 'bg-light-black' : 'bg-light'} style={{ paddingTop: '100px', height: '100vh' }}>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-account" element={<MyAccount />} />
         
          <Route path="/search" element={<Search />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cardes" element={<Cardes />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/allproducts" element={<Allproducts />} />
        </Routes>
        <AppFooter />
      </main>
     
    </Router>
  );
}

export default App;
