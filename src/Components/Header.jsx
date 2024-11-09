// components/Header.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-gray-900 bg-opacity-80 backdrop-blur-md py-4 sticky top-0 z-50 shadow-lg text-gray-100">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: 90 }}
              className="text-3xl"
            >
              &times;
            </motion.span>
          ) : (
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: 0 }}
              className="text-3xl"
            >
              &#9776;
            </motion.span>
          )}
        </motion.button>
        
        {/* Centered navigation */}
        <nav className="hidden md:flex justify-center items-center w-full space-x-8">
          {menuItems.map((item) => (
            <NavLink key={item.path} {...item} />
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      <motion.nav
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden w-full"
      >
        {isOpen && (
          <div className="flex flex-col items-center mt-4 space-y-2">
            {menuItems.map((item) => (
              <NavLink key={item.path} {...item} onClick={() => setIsOpen(false)} />
            ))}
          </div>
        )}
      </motion.nav>
    </header>
  );
};

const NavLink = ({ path, label, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        to={path}
        className={`text-lg font-semibold transition-all duration-300 
          ${
            isActive
              ? "bg-purple-700 text-white shadow-lg"
              : "text-gray-300 hover:text-white hover:bg-purple-600"
          }
          px-4 py-2 rounded`}
        onClick={onClick}
      >
        {label}
      </Link>
    </motion.div>
  );
};

export default Header;
