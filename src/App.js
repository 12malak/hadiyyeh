import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useThemeHook } from './GlobalComponents/ThemeProvider';
import Header from './components/Header';
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

function App() {
  const [theme] = useThemeHook();
  
  return (
    <Router>
       <Header />
       <main className={theme ? 'bg-black' : 'bg-light-2'} style={{ paddingTop: '100px', height: '100vh' }}>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-account" element={<MyAccount />} />
         
          <Route path="/search" element={<Search />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cardes" element={<Cardes />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product-details" element={<ProductDetails />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
