import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-gray-600 text-gray-300 py-6 flex-wrap">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm">
          Copyright &copy; {new Date().getFullYear()} All rights reserved | This
          template is made by{" "}
          <a
            href="https://www.linkedin.com/in/muhammad-umer-khan-61729b260/"
            className="text-pink-500 hover:underline"
          >
            Muhammad Umer Khan
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
