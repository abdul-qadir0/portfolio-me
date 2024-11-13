import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 bg-opacity-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/muhammad-umer-khan-61729b260/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a href="https://github.com/MuhammadUmerKhan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <span className="sr-only">GitHub</span>
            <FaGithub className="h-6 w-6" />
          </a>
          <a href="https://www.instagram.com/umr.khan.0/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <span className="sr-only">Instagram</span>
            <FaInstagram className="h-6 w-6" />
          </a>
          <a href="https://www.facebook.com/umar.shahid.56211497" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <span className="sr-only">Facebook</span>
            <FaFacebook className="h-6 w-6" />
          </a>
        </div>
        <div className="mt-4 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Muhammad Umer Khan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;