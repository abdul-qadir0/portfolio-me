import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/abdulqadir004/", label: "LinkedIn" },
    { icon: FaGithub, href: "https://github.com/abdulqadir-004", label: "GitHub" },
    { icon: FaInstagram, href: "https://www.instagram.com/encrypted.aq/", label: "Instagram" },
    { icon: FaFacebook, href: "https://www.facebook.com/aq.jakhro?mibextid=ZbWKwL", label: "Facebook" },
  ];

  return (
    <motion.footer
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className="bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-md shadow-lg"
    >
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex justify-center space-x-6 mb-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="sr-only">{link.label}</span>
                <link.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </div>
          <motion.div
            className="text-center text-gray-600 dark:text-gray-400 text-sm"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p>&copy; {new Date().getFullYear()} Abdul Qadir Jakhro. All rights reserved <span className="text-red-500">&hearts;</span></p>
            {/* <p className="mt-2">
              Built with <span className="text-red-500">&hearts;</span> using React
            </p> */}
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

