// Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="bg-gradient-to-r from-gray-900 via-purple-900 to-violet-900 text-gray-300 py-8"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-center md:text-left mb-4 md:mb-0"
          >
            <p className="text-sm">
              &copy; {new Date().getFullYear()} All rights reserved
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center"
          >
            <p className="text-sm mr-2">Made with</p>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                transition: { repeat: Infinity, duration: 1 },
              }}
            >
              <FaHeart className="text-pink-500" />
            </motion.div>
            <p className="text-sm ml-2">by</p>
            <motion.a
              href="https://www.linkedin.com/in/muhammad-umer-khan-61729b260/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-pink-500 ml-2 font-semibold transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Muhammad Umer Khan
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;