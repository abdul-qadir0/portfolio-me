import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const projectData = [
    {
      title: "Virtual Environment Setup for InfoSec Project 💻",
      description:
        "A hands-on project focused on setting up a virtual environment with Windows Server and Windows 10/11 to create a domain as part of an Information Security project. The setup includes configuring Active Directory, networking, and system security practices to simulate a corporate environment for practical InfoSec learning.",
      imageUrl: "https://github.com/abdul-qadir0/pictures/blob/main/Screenshot%202024-12-10%20175858.png?raw=true", // Replace with your project's image URL
      link: "https://medium.com/@aqjakhro0/setting-up-a-virtual-environment-creating-and-managing-a-domain-with-windows-server-2022-and-a09de5f4ab02", // Replace with your project's GitHub or live link
    },
  ];

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const visibleProjects = showMore ? projectData : projectData.slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen p-8 pt-24 flex flex-col items-center" // Added pt-24 for top padding
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-12"
      >
        My Projects 🛠️
      </motion.h1>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full"
      >
        <AnimatePresence>
          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 backdrop-blur-md"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h2>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex justify-center">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-6 rounded-full shadow-md font-semibold"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read More 📖
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {projectData.length > 2 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <motion.button
            onClick={toggleShowMore}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-8 rounded-full shadow-md font-semibold"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            {showMore ? "Show Less" : "Show More"} 📜
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Projects;
