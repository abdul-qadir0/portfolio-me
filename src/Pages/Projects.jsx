import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const projectData = [
    {
      "title": "Customer Churn Prediction with NLP Insights",
      "description": "A predictive model to identify customers at risk of churning by leveraging insights from customer feedback and interactions. Using NLP techniques, this project analyzes sentiment and extracts key themes to enhance predictive accuracy and provide actionable insights for reducing churn rates. Deployed with Streamlit for easy access to predictions and insights.",
      "imageUrl": "https://www.voxco.com/wp-content/uploads/2021/09/Everything-you-need-to-know-about-Customer-Churn1.jpg",
      "link": "https://customer-churn-prediction-with-nlp-insights-rlazeungatswsd5e4c.streamlit.app/"
    },
    {
      "title": "NLP-Powered Recommendation System",
      "description": "Developed a recommendation system that assists users in exploring relevant topics in Earth Systems, Climate Science, and Environmental Engineering. Leveraging natural language processing techniques, the system analyzes course descriptions, topics, and departments to suggest personalized learning resources. Integrating multiple recommendation approaches for a comprehensive user experience.",
      "imageUrl": "https://miro.medium.com/v2/resize:fit:1200/1*rTZvrFD258ZZwvGy7nyqDw.jpeg",
      "link": "https://nlp-powered-recommendation-system.streamlit.app/"
    }
  ];

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const visibleProjects = showMore ? projectData : projectData.slice(0, 4);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen p-8 flex flex-col items-center"
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-12"
      >
        My Projects
      </motion.h1>

      {projectData.length === 0 ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="flex-grow flex justify-center items-center w-full"
        >
          <div className="bg-gradient-to-br from-yellow-500 to-orange-500 p-8 rounded-lg shadow-xl text-center text-black">
            <h2 className="text-4xl font-bold mb-4">Coming Soon</h2>
            <p className="text-xl">Stay tuned! Exciting projects will be added here shortly.</p>
          </div>
        </motion.div>
      ) : (
        <>
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
                        className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-6 rounded-full shadow-md font-semibold"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(236, 72, 153, 0.5)" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Project
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          {projectData.length > 4 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8"
            >
              <motion.button
                onClick={toggleShowMore}
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-8 rounded-full shadow-md font-semibold"
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(236, 72, 153, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                {showMore ? "Show Less" : "Show More"}
              </motion.button>
            </motion.div>
          )}
        </>
      )}
    </motion.div>
  );
};

export default Projects;