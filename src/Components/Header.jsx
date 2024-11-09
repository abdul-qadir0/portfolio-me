// Header.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="bg-gradient-to-r from-gray-900 via-purple-900 to-violet-900 py-4 sticky top-0 z-50 shadow-lg text-white"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Mobile Menu Toggle Button */}
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
          
          {/* Centered Navigation for Larger Screens */}
          <nav className="hidden md:flex justify-center flex-1 gap-8">
            {menuItems.map((item) => (
              <NavLink key={item.path} {...item} />
            ))}
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden flex flex-col items-center mt-4 space-y-2"
            >
              {menuItems.map((item) => (
                <NavLink key={item.path} {...item} onClick={() => setIsOpen(false)} />
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
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
