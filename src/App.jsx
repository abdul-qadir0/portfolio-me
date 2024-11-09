// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import NotFound from "./Pages/NotFound"; // Import the NotFound component
import StarryBackground from './Components/StarryBackground';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
        <StarryBackground />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;