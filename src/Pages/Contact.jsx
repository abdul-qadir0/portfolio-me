import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 min-h-screen flex flex-col justify-center items-center p-8"
    >
      <div className="max-w-4xl w-full">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-12"
        >
          Contact Me
        </motion.h1>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-2xl mb-8"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
          <div className="space-y-6">
            <motion.div 
              className="flex items-center"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <FaMapMarkerAlt className="text-purple-400 text-2xl mr-4" />
              <p className="text-lg text-gray-300">Karachi, Pakistan</p>
            </motion.div>
            <motion.div 
              className="flex items-center"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <FaPhoneAlt className="text-purple-400 text-2xl mr-4" />
              <p className="text-lg text-gray-300">+92 3432187868</p>
            </motion.div>
            <motion.div 
              className="flex items-center"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <FaEnvelope className="text-purple-400 text-2xl mr-4" />
              <p className="text-lg text-gray-300">muhammadumerk546@gmail.com</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center"
        >
          <motion.a
            href="https://www.linkedin.com/in/muhammad-umer-khan-61729b260/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-8 rounded-full shadow-lg flex items-center text-lg font-semibold"
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin className="mr-2" />
            Connect on LinkedIn
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;