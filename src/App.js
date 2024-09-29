import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useThemeHook } from './GlobalComponents/ThemeProvider';
import Header from './components/Header';
import RightCart from './components/RightCart';
import AppFooter from './components/AppFooter';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

// Pages
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import ProductDetails from "./Pages/ProductDetails";
import SignIn from "./Pages/SignIn";
import Register from "./Pages/Register";
import MyAccount from "./Pages/MyAccount";
import Search from "./components/Search";
import Cardes from "./Pages/Cardes";
import Blogs from "./Pages/Blogs";
import Allproducts from "./Pages/Allproducts";
import CheakOut from "./components/CheakOut";
import Gift from "./Pages/Gift";
import GiftDetails from "./Pages/GiftDetails";
import Refund from "./Pages/Refund";
import Privacy from "./Pages/Privacy";
import Terms from "./Pages/Terms";
const App = () => {
  const [theme] = useThemeHook();
  const [cartItems, setCartItems] = useState([
    { name: 'US POLO ASSN. 1000-01 WATCH FOR MEN', price: 10 },
    { name: 'LATTAFA ANA ABIYEDH EDP UNISEX', price: 20 },
    { name: 'US POLO ASSN. 1000-01 WATCH FOR MEN', price: 10 },
    { name: 'US POLO ASSN. 1000-01 WATCH FOR MEN', price: 10 },
    { name: 'LATTAFA ANA ABIYEDH EDP UNISEX', price: 20 },
    { name: 'US POLO ASSN. 1000-01 WATCH FOR MEN', price: 10 },
    { name: 'LATTAFA ANA ABIYEDH EDP UNISEX', price: 20 },
    { name: 'US POLO ASSN. 1000-01 WATCH FOR MEN', price: 10 },
    { name: 'US POLO ASSN. 1000-01 WATCH FOR MEN', price: 10 },
    { name: 'LATTAFA ANA ABIYEDH EDP UNISEX', price: 20 },

  ]);

  // Get the current location
  const location = useLocation();
  
  return (
    <>
      <Header cartItems={cartItems} />
      <RightCart cartItems={cartItems} setCartItems={setCartItems} theme={theme} />
      <main className={theme ? 'bg-light-black' : 'bg-light'} style={{ paddingTop: '100px' }}>
        <Routes>
          <Route path="/allproducts" element={<Allproducts setCartItems={setCartItems} cartItems={cartItems} />} />
          <Route path="/cheakOut" element={<CheakOut products={cartItems} />} />
          <Route path="/" element={<Home cartItems={cartItems} />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/search" element={<Search />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cardes" element={<Cardes />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/gift" element={<Gift />} />
          <Route path="/giftDetails" element={<GiftDetails />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        {/* Conditionally render the footer */}
        {location.pathname !== '/cart' && <AppFooter />}
      </main>
    </>
  );
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
