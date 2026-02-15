import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Footer from "../components/footer/Footer";
import Courses from "../pages/courses/Courses";
import Error from "../pages/error/Error";
import Hero from "../pages/hero/Hero";

function RouterDom() {
  return (
    <div>
      <BrowserRouter>
        <header className="bg-[#49BBBD] rounded-b-[100%_20%] overflow-y-hidden">
          <Navbar />
          <Hero />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default RouterDom;
