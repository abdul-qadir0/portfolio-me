import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  const skills = [
    { name: "SQL 🗄️", percentage: 75 },
    { name: "Python 🐍", percentage: 90 },
    { name: "Data Visualization 📊", percentage: 95 },
    { name: "Statistical Analysis 📐", percentage: 85 },
    { name: "Machine Learning 🤖", percentage: 85 },
    { name: "Natural Language Processing (NLP) 🗣️", percentage: 80 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen p-8"
    >
      <div className="max-w-6xl mx-auto text-gray-300">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-12"
        >
          About Me 
        </motion.h1>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-2xl mb-12 backdrop-blur-md"
        >
          <div className="flex flex-col md:flex-row items-center mb-8">
            <img
              src="https://raw.githubusercontent.com/MuhammadUmerKhan/MuhammadUmerKhan/main/assests/pic/porfolio.jpg"
              alt="Muhammad Umer Khan"
              className="w-48 h-48 rounded-full object-cover shadow-lg mb-4 md:mb-0 md:mr-8 transition-transform duration-300 transform hover:scale-105 ring-4 ring-purple-500 ring-opacity-50"
            />
            <div>
              <h2 className="text-3xl font-semibold mb-4">👤 Profile</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Hello! I am Muhammad Umer Khan, an aspiring Data Scientist passionate about harnessing data for insights. I’m currently pursuing a B.Sc. in Computer Science, while building real-world skills through hands-on projects and internships.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                My expertise covers <strong>Data Analysis</strong>, <strong>Machine Learning</strong>, and <strong>Natural Language Processing (NLP)</strong>. I enjoy exploring technologies and crafting solutions for complex challenges, with a strong foundation in <strong>SQL</strong>, <strong>Python</strong>, and data visualization.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2">📂 Domains</h3>
              <p className="text-gray-300">Retail, E-commerce, HR Analytics, Customer Segmentation, Natural Language Processing (NLP)</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">🗣️ Languages</h3>
              <p className="text-gray-300">English, Urdu</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">📊 BI Tools</h3>
              <p className="text-gray-300">Microsoft Power BI</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">🛠️ Technical Skills</h3>
              <p className="text-gray-300">Python, SQL, Spacy, NLTK, FastAPI, MySQL, Scikit-learn, Pandas, Numpy, Matplotlib, Seaborn</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">🌱 Interests</h3>
              <p className="text-gray-300">Gym, Learning New Technologies, Web Development, Exploring Machine Learning Algorithms</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-2xl mb-12 backdrop-blur-md"
        >
          <h2 className="text-3xl font-semibold mb-6">🎓 Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">B.Sc. in Computer Science</h3>
              <p className="text-gray-300">2023 - Present</p>
              <p className="text-gray-300">Sindh Madressatul Islam University</p>
              <p className="text-gray-300">Grade: First Class Distinction</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Higher Secondary School</h3>
              <p className="text-gray-300">2021 - 2022</p>
              <p className="text-gray-300">Government College for Men</p>
              <p className="text-gray-300">Grade: First Class Distinction</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-2xl mb-12 backdrop-blur-md"
        >
          <h2 className="text-3xl font-semibold mb-6">💻 Skills</h2>
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-gray-300">{skill.name}</span>
                  <span className="text-sm font-medium text-gray-300">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className="bg-gradient-to-r from-purple-400 to-pink-600 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1, delay: 1 }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-2xl backdrop-blur-md"
        >
          <h2 className="text-3xl font-semibold mb-6">📬 Get In Touch</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <motion.a
              href="/path/to/your/CV.pdf"
              className="w-full sm:w-auto bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 px-6 rounded-full shadow-lg flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              download
            >
              <FaDownload className="mr-2" /> Download CV
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/muhammad-umer-khan-61729b260/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin className="mr-2" /> LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/MuhammadUmerKhan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gray-700 text-white py-3 px-6 rounded-full shadow-lg flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="mr-2" /> GitHub
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
