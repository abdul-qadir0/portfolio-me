import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gradient-to-tr from-black via-gray-900 to-gray-600 min-h-screen flex flex-col justify-center items-center p-8 animate-fadeIn">
      <div className="max-w-4xl text-gray-300">
        <h1 className="text-5xl font-extrabold text-white mb-6">Contact Me</h1>

        {/* Contact Information */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-white text-2xl mr-3" />
              <p className="text-lg text-gray-400">Karachi, Pakistan</p>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="text-white text-2xl mr-3" />
              <p className="text-lg text-gray-400">+92 3432187868</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-white text-2xl mr-3" />
              <p className="text-lg text-gray-400">
                muhammadumerk546@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center mb-8">
          <a
            href="https://www.linkedin.com/in/muhammad-umer-khan-61729b260/" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-transform duration-300 mr-4 flex items-center"
          >
            <FaLinkedin className="mr-2" />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
