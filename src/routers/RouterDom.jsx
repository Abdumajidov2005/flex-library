import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Footer from "../components/footer/Footer";
import Servises from "../pages/servises/Servises";

function RouterDom() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<About />} />
          <Route path="/servises" element={<Servises />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default RouterDom;
