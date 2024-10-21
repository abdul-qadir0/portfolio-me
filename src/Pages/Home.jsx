import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-gradient-to-tr from-black via-gray-900 to-gray-600 min-h-screen flex flex-col justify-center items-center p-8 animate-fadeIn">
      <h1 className="text-5xl font-extrabold text-white mb-6 animate-fadeIn">
        Welcome to My Portfolio
      </h1>
      <p className="text-lg text-gray-400 mb-12 animate-fadeIn delay-200">
        I am Muhammad Umer Khan, an aspiring Data Scientist.
      </p>

      {/* User Image Box */}
      <div className="md:w-[25%] p-4 flex justify-center items-start ">
      <img
        src="https://raw.githubusercontent.com/MuhammadUmerKhan/MuhammadUmerKhan/main/assests/pic/porfolio.jpg"
        alt="Muhammad Umer Khan"
        className="rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105"
      />  
      </div>

      {/* Projects Button */}
      <a
        href="/projects" // Replace with the actual path to your projects
        className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 px-6 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-transform duration-300 m-8 animate-fadeIn delay-400"
      >
        View My Projects
      </a>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-6 animate-fadeIn delay-600">
        <a
          href="https://www.linkedin.com/in/muhammad-umer-khan-61729b260/" // Replace with your LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition duration-200 transform hover:scale-110"
        >
          <FaLinkedin size={32} />
        </a>
        <a
          href="https://github.com/MuhammadUmerKhan" // Replace with your GitHub URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-600 transition duration-200 transform hover:scale-110"
        >
          <FaGithub size={32} />
        </a>
        <a
          href="https://www.instagram.com/umr.khan.0/" // Replace with your Instagram URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-700 transition duration-200 transform hover:scale-110"
        >
          <FaInstagram size={32} />
        </a>
        <a
          href="https://www.facebook.com/umar.shahid.56211497" // Replace with your Facebook URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition duration-200 transform hover:scale-110"
        >
          <FaFacebook size={32} />
        </a>
      </div>
    </div>
  );
};

export default Home;
