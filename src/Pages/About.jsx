import React, { useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaDownload, FaLinkedin, FaGithub } from "react-icons/fa";
import StarryBackground from '../Components/StarryBackground';

const About = () => {
  const skills = [
{ name: "Python 🐍", percentage: 75 },
{ name: "Prompt Design 📝", percentage: 85 },
{ name: "Active Directory 🔐", percentage: 60 },
{ name: "Windows Server 🖥️", percentage: 70 },
{ name: "DSA 🧠", percentage: 85 },
{ name: "Java ☕", percentage: 80 },
    { name: "Virtualization 🖥️", percentage: 85 },
{ name: "C 💻", percentage: 70 },
{ name: "SQL 🗄️", percentage: 70 },
{ name: "Database Management 💾", percentage: 70 },
{ name: "Networking 🌐", percentage: 60 },
  ];

  const [certificates, setCertificates] = useState([
    { title: "Google Cybersecurity Professional Certificate", issuer: "Google", image: "https://github.com/abdul-qadir0/portfolio-me/blob/main/imgs/cysMain.jpg?raw=true" },
    { title: "Foundations of Cybersecurity", issuer: "Google", image: "https://github.com/abdul-qadir0/portfolio-me/blob/main/imgs/cys.jpg?raw=true" },
    { title: "Sound th Alarm: Detection and Response", issuer: "Google", image: "https://github.com/abdul-qadir0/portfolio-me/blob/main/imgs/Alarm.jpg?raw=true" },
    { title: "AI Essentials", issuer: "Google", image: "https://github.com/abdul-qadir0/portfolio-me/blob/main/imgs/AI.jpg?raw=true" },
    { title: "Assets, Threats, and Vulnerabilities", issuer: "Google", image: "https://github.com/abdul-qadir0/portfolio-me/blob/main/imgs/Assets.jpg?raw=true" },
    { title: "Automate Cybersecurity Tasks with Python", issuer: "Google", image: "https://github.com/abdul-qadir0/portfolio-me/blob/main/imgs/Automate.jpg?raw=true" },
    { title: "Put it to Work: Prepare for Cybersecurity Jobs", issuer: "Google", image: "https://github.com/abdul-qadir0/portfolio-me/blob/main/imgs/Put.jpg?raw=true" },
    { title: "Tools of the Trade: Linux and SQL", issuer: "Google", image: "https://github.com/abdul-qadir0/portfolio-me/blob/main/imgs/Linux.jpg?raw=true" },
    { title: "Connect and Protect: Network and Network Security", issuer: "Google", image: "https://github.com/abdul-qadir0/portfolio-me/blob/main/imgs/NetworkG.jpg?raw=true" },
    { title: "Play it Safe: Manage Security Risks", issuer: "Google", image: "https://github.com/abdul-qadir0/portfolio-me/blob/main/imgs/Play.jpg?raw=true" },
    { title: "Networking Fundamentals", issuer: "Cybrary", image: "https://github.com/abdul-qadir0/pictures/blob/main/network.png?raw=true" },
    { title: "Python Certification", issuer: "Udemy", image: "https://github.com/abdul-qadir0/portfolio-me/blob/main/imgs/Python.jpg?raw=true" },
    { title: "Java Certification", issuer: "Udemy", image: "https://github.com/abdul-qadir0/portfolio-me/blob/main/imgs/Java.jpg?raw=true" },
    
  ]);

  const educationControls = useAnimation();
  const skillsControls = useAnimation();
  const educationRef = React.useRef(null);
  const skillsRef = React.useRef(null);
  const getInTouchRef = React.useRef(null);
  const educationInView = useInView(educationRef, { once: false, threshold: 0.2 });
  const skillsInView = useInView(skillsRef, { once: false, threshold: 0.2 });
  const getInTouchInView = useInView(getInTouchRef, { once: false, threshold: 0.2 });

  useEffect(() => {
    if (educationInView) {
      educationControls.start("visible");
    } else {
      educationControls.start("hidden");
    }
  }, [educationControls, educationInView]);
  useEffect(() => {
    if (skillsInView) {
      skillsControls.start("visible");
    } else {
      skillsControls.start("hidden");
    }
  }, [skillsControls, skillsInView]);
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* <StarryBackground /> */}
      <div className="flex-grow">
        <div className="max-w-8xl mx-auto text-gray-300 relative z-10 p-8 pt-24">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-12"
          >
            About Me 🙋‍♂️
          </motion.h1>

          {/* Profile section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-2xl mb-12 backdrop-blur-md"
          >
            <div className="flex flex-col md:flex-row items-center mb-8">
              <motion.img
                src="https://github.com/abdul-qadir0/portfolio-me/blob/main/imgs/ME.jpg?raw=true"
                alt="Abdul Qadir Jakhro"
                className="w-48 h-48 rounded-full object-cover shadow-lg mb-4 md:mb-0 md:mr-8 ring-4 ring-purple-500 ring-opacity-50"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              />
              <div>
                <h2 className="text-3xl font-semibold mb-4 text-left">👤 Profile</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-4 text-left">
                 Hi, I'm Abdul Qadir Jakhro, a passionate Computer Science undergrad with a strong interest in cybersecurity. I'm dedicated to enhancing digital security and protecting systems from evolving cyber threats. Currently, I'm developing my skills in red team operations, ethical hacking, and networking, with the goal of staying ahead of emerging security challenges.
</p>
<p className="text-gray-300 text-lg leading-relaxed mb-4 text-left">
    Along with my cybersecurity focus, I have a solid foundation in programming with <strong>Python</strong>, <strong>Java</strong>, <strong>C</strong>, <strong>MySQL</strong>, and <strong>MongoDB</strong>. I also have hands-on experience with <strong>Windows Server</strong>, <strong>Active Directory</strong>, <strong>Linux systems</strong>, and <strong>virtual environments</strong>. With a drive to learn and grow, I aim to contribute meaningfully to the cybersecurity field while continually expanding my technical expertise.
</p>
              </div> 
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { 
                  title: "📂 Key Interests", 
                  content: "Cybersecurity, Red Team Operations, Networking" 
                },
                { 
                  title: "🗣️ Languages", 
                  content: "English (Professional), Sindhi (Native), Urdu (Native)" 
                },
                { 
                  title: "📊 Tools", 
                  content: "Kali Linux, Hyper-V, GitHub, MySQL, MongoDB" 
                },
                // { 
                //   title: "🛠️ Technical Skills", 
                //   content: "Python, SQL, Scikit-learn, Tensorflow, Pandas, NumPy, SpaCy, NLTK" 
                // },
                { 
                  title: "🌱 Interests", 
                  content: "Gaming 💻🎮, Exploring New Technologies 💡, Cooking 🍳" 
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-gray-700 bg-opacity-50 p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-2xl font-semibold mb-2 text-purple-400">{item.title}</h3>
                  <p className="text-gray-300">{item.content}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education section */}
          <motion.div
            ref={educationRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
            className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-2xl mb-12 backdrop-blur-md"
          >
            <h2 className="text-3xl font-semibold mb-6 text-purple-400">🎓 Education</h2>
            {/* Changed to a two-column grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  degree: "Higher Secondary School Certificate (HSSC)",
                  year: "2021 - 2023",
                  institution: "Government Hyder Bux Jatoi (M) Science College Dokri",
                  grade: "First Class with Distinction",
                },
                {
                  degree: "B.Sc. in Computer Science",
                  year: "2023 - Present",
                  institution: "Sindh Madressatul Islam University",
                  grade: "First Class with Distinction",
                },
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-700 bg-opacity-50 p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-semibold text-blue-400">{edu.degree}</h3>
                  <p className="text-gray-300">{edu.year}</p>
                  <p className="text-gray-300">{edu.institution}</p>
                  <p className="text-gray-300">Grade: {edu.grade}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills section */}
          <motion.div
            ref={skillsRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
            className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-2xl mb-12 backdrop-blur-md"
          >
            <h2 className="text-3xl font-semibold mb-6 text-purple-400">💻 Skills</h2>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-gray-300">{skill.name}</span>
                    <span className="text-sm font-medium text-gray-300">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      className="bg-gradient-to-r from-blue-400 to-purple-600 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      variants={{
                        hidden: { width: 0 },
                        visible: { width: `${skill.percentage}%` },
                      }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certificates section */}
          <motion.div
            // initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
            className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-2xl mb-12 backdrop-blur-md"
          >
            <h2 className="text-3xl font-semibold mb-6 text-purple-400">🏆 Certificates</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-gray-700 p-4 rounded-lg shadow-lg w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {certificates.map((certificate, index) => (
                    <img
                      key={index}
                      src={certificate.image}
                      alt={`Certificate ${index + 1}`}
                      className="w-full h-auto rounded-lg object-cover"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          {/* Get In Touch section */}
          <motion.div
            ref={getInTouchRef}
            initial="hidden"
            animate={getInTouchInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-2xl backdrop-blur-md"
          >
            <h2 className="text-3xl font-semibold mb-6 text-purple-400"><center>📬 Get In Touch</center> </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <motion.a
                href="https://drive.google.com/file/d/1NWy95oT0sWQCNarV_I7kMfuvycnCqpyP/view?usp=drivesdk"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-full shadow-lg flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                <FaDownload className="mr-2" /> Resume 📄
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/abdulqadir004/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                <FaLinkedin className="mr-2" /> LinkedIn 🔗
              </motion.a>
              <motion.a
                href="https://github.com/abdulqadir-004"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gray-700 text-white py-3 px-6 rounded-full shadow-lg flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                <FaGithub className="mr-2" /> GitHub 🖥️
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

