import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/muhammad-umer-khan-61729b260/", label: "LinkedIn" },
    { icon: FaGithub, href: "https://github.com/MuhammadUmerKhan", label: "GitHub" },
    { icon: FaInstagram, href: "https://www.instagram.com/umr.khan.0/", label: "Instagram" },
    { icon: FaFacebook, href: "https://www.facebook.com/umar.shahid.56211497", label: "Facebook" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 bg-opacity-50 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex justify-center space-x-6 mb-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="sr-only">{link.label}</span>
                <link.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </div>
          <motion.div
            className="text-center text-gray-400 text-sm"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p>&copy; {new Date().getFullYear()} Muhammad Umer Khan. All rights reserved.</p>
            <p className="mt-2">
              Built with <span className="text-red-500">&hearts;</span> using React and Tailwind CSS
            </p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

