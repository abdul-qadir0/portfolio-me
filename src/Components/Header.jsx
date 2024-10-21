import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-gradient-to-r from-black via-gray-900 to-gray-600 py-4 sticky top-0 z-50 shadow-lg text-white">
      <nav className="flex justify-center space-x-10">
        <Link
          to="/"
          className={`text-lg font-semibold hover:text-gray-400 transition-colors duration-300 ${
            location.pathname === "/" ? "underline" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`text-lg font-semibold hover:text-gray-400 transition-colors duration-300 ${
            location.pathname === "/about" ? "underline" : ""
          }`}
        >
          About
        </Link>
        <Link
          to="/projects"
          className={`text-lg font-semibold hover:text-gray-400 transition-colors duration-300 ${
            location.pathname === "/projects" ? "underline" : ""
          }`}
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className={`text-lg font-semibold hover:text-gray-400 transition-colors duration-300 ${
            location.pathname === "/contact" ? "underline" : ""
          }`}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
