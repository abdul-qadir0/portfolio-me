import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import NotFound from "./Pages/NotFound"; // Import the NotFound component

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />{" "}
        {/* Catch all unmatched routes */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
