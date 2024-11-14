import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col justify-center items-center p-8 overflow-y-auto" // Added overflow-y-auto
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
        className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6"
      >
        🌟 Welcome to My Portfolio 🌟
      </motion.h1>
      
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
        className="text-xl text-gray-300 mb-12 text-center max-w-2xl"
      >
        Hello! I'm <span className="font-semibold text-white">Muhammad Umer Khan</span> 🎓, an aspiring Data Scientist who loves transforming raw data into meaningful insights 📊. I thrive on solving complex problems with creativity and precision.
      </motion.p>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        className="w-64 h-64 rounded-full overflow-hidden shadow-2xl mb-12 ring-4 ring-purple-500 ring-opacity-50"
      >
        <img
          src="https://raw.githubusercontent.com/MuhammadUmerKhan/MuhammadUmerKhan/main/assests/pic/porfolio.jpg"
          alt="Muhammad Umer Khan"
          className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
        />
      </motion.div>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8, type: "spring" }}
        className="text-lg text-gray-400 text-center max-w-xl mb-8"
      >
        Dive into my world of data science projects and explore the ways I bring data to life through machine learning, data visualization, and more! 🚀
      </motion.p>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Link
          to="/projects"
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          🌐 View My Projects
        </Link>
        <Link
          to="/contact"
          className="bg-gray-700 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-gray-600"
        >
          ✉️ Get in Touch
        </Link>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8, type: "spring" }}
        className="flex justify-center space-x-8 mt-12"
      >
        {[
          { icon: FaLinkedin, href: "https://www.linkedin.com/in/muhammad-umer-khan-61729b260/", color: "text-blue-400" },
          { icon: FaGithub, href: "https://github.com/MuhammadUmerKhan", color: "text-gray-400" },
          { icon: FaInstagram, href: "https://www.instagram.com/umr.khan.0/", color: "text-pink-400" },
          { icon: FaFacebook, href: "https://www.facebook.com/umar.shahid.56211497", color: "text-blue-500" },
        ].map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${social.color} hover:text-white transition duration-300`}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <social.icon size={36} />
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Home;