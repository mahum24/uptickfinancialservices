import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import Products from './components/Products'
import Partner from './components/Partner';
const App = () => {
  return (
    <Router>
      <div className="bg-gray-100">
        <Navbar />
        <div className="w-full mb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products/>} />
            <Route path="/partner" element={<Partner/>} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;