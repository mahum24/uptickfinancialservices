import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Partner from "./components/Partner";
import Blog from "./components/Blog";
import ContactUs from "./components/ContactUs";
import Blogs from "./components/Blogs";
import Page404 from "./components/Page404";
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
            <Route path="/products" element={<Products />} />
            <Route path="/partner-program" element={<Partner />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/not-found" element={<Page404 />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
