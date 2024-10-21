import React from "react";
import { FaDownload, FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  const skills = [
    { name: "SQL", percentage: 75 },
    { name: "Python", percentage: 90 },
    { name: "Data Visualization", percentage: 95 },
    { name: "Statistical Analysis", percentage: 85 },
    { name: "Machine Learning", percentage: 85 },
    { name: "Natural Language Processing (NLP)", percentage: 80 },
  ];

  return (
    <div className="bg-gradient-to-tr from-black via-gray-900 to-gray-600 min-h-screen flex flex-col justify-center items-center p-8 animate-fadeIn">
      <div className="max-w-4xl text-gray-300">
        <h1 className="text-5xl font-extrabold text-white mb-6">About Me</h1>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row mb-12">
          <div className="md:w-[30%] p-4 flex justify-center items-start mt-4">
            <img
              src="https://raw.githubusercontent.com/MuhammadUmerKhan/MuhammadUmerKhan/main/assests/pic/porfolio.jpg"
              alt="Muhammad Umer Khan"
              className="rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105"
            />
          </div>

          <div className="md:w-1/2 p-4">
            <h2 className="text-4xl font-bold text-white mb-4">Profile</h2>
            <p className="text-lg text-gray-400 mb-4">
              Hello! I am Muhammad Umer Khan, a driven and ambitious Data Scientist-in-the-making with a fierce passion for unraveling the insights hidden within data. I am currently pursuing a B.Sc. in Computer Science and gaining invaluable real-world experience through internships and hands-on projects.
            </p>
            <p className="text-lg text-gray-400 mb-4">
              My expertise spans across various domains including Data Analysis, Machine Learning, and Natural Language Processing (NLP). I thrive on learning new technologies and applying them to solve complex problems. With a foundation in SQL, Python, and advanced data visualization, I’m well-prepared to tackle challenges in data-driven industries.
            </p>
            <h3 className="text-2xl font-bold text-white mt-6">Domains</h3>
            <p className="text-lg text-gray-400">
              Retail, E-commerce, HR Analytics, Customer Segmentation, Natural Language Processing (NLP)
            </p>
            <h3 className="text-2xl font-bold text-white mt-6">Languages</h3>
            <p className="text-lg text-gray-400">English, Urdu</p>
            <h3 className="text-2xl font-bold text-white mt-6">BI Tools</h3>
            <p className="text-lg text-gray-400">Microsoft Power BI</p>
            <h3 className="text-2xl font-bold text-white mt-6">Technical Skills</h3>
            <p className="text-lg text-gray-400">
              Python, SQL, Spacy, NLTK, FastAPI, MySQL, Scikit-learn, Pandas, Numpy, Matplotlib, Seaborn
            </p>
            <h3 className="text-2xl font-bold text-white mt-6">Interests</h3>
            <p className="text-lg text-gray-400">
              Gym, Learning New Technologies, Web Development, Exploring Machine Learning Algorithms
            </p>
          </div>
        </div>

        {/* Education Section */}
        <h2 className="text-4xl font-bold text-white mb-6">Education</h2>
        <div className="text-lg text-gray-400 mb-8">
          <p>
            <strong>2023-Present:</strong> B.Sc. in Computer Science
            <br />
            Sindh Madressatul Islam University
            <br />
            Grade: First Class Distinction
          </p>
          <p>
            <strong>2021-2022:</strong> Higher Secondary School
            <br />
            Government College for Men
            <br />
            Grade: First Class Distinction
          </p>
        </div>

        {/* Skills Section */}
        <h2 className="text-4xl font-bold text-white mb-6">Skills</h2>
        <div className="space-y-4 mb-8">
          {skills.map((skill) => (
            <div key={skill.name}>
              <span className="text-gray-400">{skill.name}</span>
              <div className="relative pt-1">
                <div className="bg-gray-700 h-2 rounded-full w-[98%]">
                  <div
                    className={`bg-green-500 h-2 rounded-full`}
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
                <span className="text-gray-400 ml-2">{skill.percentage}%</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
        <div className="flex items-center flex-col sm:flex-row ">
          <a
            href="/path/to/your/CV.pdf" // Replace with your actual CV URL
            className="w-[50%] justify-center bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 px-6 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-transform duration-300  flex items-center "
            download
          >
            <FaDownload className="mr-2" /> Download CV
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-umer-khan-61729b260/" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="justify-center  mt-10 sm:mt-0 sm:mx-10 w-[50%] bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-transform duration-300  flex items-center "
          >
            <FaLinkedin className="mr-2 " /> LinkedIn
          </a>
          <a
            href="https://github.com/MuhammadUmerKhan" // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="justify-center mt-10 sm:mt-0 w-[50%] bg-gray-800 text-white py-3 px-6 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center "
          >
            <FaGithub className="mr-2" /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;