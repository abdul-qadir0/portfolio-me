import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-black via-gray-900 to-gray-600 py-4 sticky top-0 z-50 shadow-lg text-white">
      <div className="flex justify-between items-center px-4">
        <button
          className={`md:hidden focus:outline-none transition-all duration-300 ${
            isOpen ? "transform scale-110 text-red-400 shadow-lg" : "text-white"
          }`}
          onClick={toggleMenu}
        >
          {isOpen ? (
            <span className="text-2xl">&times;</span> // Close icon
          ) : (
            <span className="text-2xl">&#9776;</span> // Hamburger icon
          )}
        </button>
      </div>
      <nav
        className={`md:flex justify-center gap-5 ${
          isOpen ? "flex flex-col items-center mt-4" : "hidden"
        } md:block`}
      >
        {["/", "/about", "/projects", "/contact"].map((path, index) => {
          const label =
            path === "/"
              ? "Home"
              : path.charAt(1).toUpperCase() + path.slice(2);
          return (
            <Link
              key={path}
              to={path}
              className={`text-lg font-semibold transition-all duration-300 
                ${
                  location.pathname === path
                    ? "bg-gray-700 shadow-lg"
                    : "hover:bg-gray-500"
                }
                p-3 rounded mb-2 md:mb-0 transform transition-transform duration-200 ease-in-out 
                hover:scale-105 active:scale-95`}
              onClick={() => {
                setIsOpen(false); // Close menu on click
              }}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;