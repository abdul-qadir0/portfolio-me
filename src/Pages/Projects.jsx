import React, { useState } from "react";

const Projects = () => {
  const projectData = [
    // {
    //   title: "Customer Segmentation Using Clustering Models 🛍️🛒🛒",
    //   description:
    //     "The user is performing customer segmentation by clustering customer records from a grocery firm's database. This involves dividing customers into groups based on similarities to optimize their significance to the business. The segmentation will help modify products to meet the distinct needs and behaviors of different customer groups, addressing their specific concerns.",
    //   imageUrl:
    //     "https://media.istockphoto.com/id/1021543926/photo/business-recruitment-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=w49S6BunBxEo4RKn90CF9lHMC2aktZemJG1Zu97Z3s4=",
    //   link: "https://github.com/MuhammadUmerKhan/DEP/tree/main/TASK%201",
    // },
    // {
    //   title: "Chatbot for Food Ordering",
    //   description:
    //     "This project is a food ordering chatbot developed using Dialogflow and FastAPI. It enables users to interactively browse food items, place orders, track their status, and calculate prices. The chatbot integrates with a MySQL database to manage order details, ensuring a seamless experience. With secure communication via ngrok, the chatbot provides a user-friendly platform for efficient food ordering.",
    //   imageUrl:
    //     "https://media.istockphoto.com/id/1386672154/photo/using-system-ai-chatbot-in-computer-or-mobile-application-to-uses-artificial-intelligence.webp?a=1&b=1&s=612x612&w=0&k=20&c=6xp1y22QnGjuRX4EUUnTQKZj1cNpAhfYNefMZVCct9c=",
    //   link: "https://github.com/MuhammadUmerKhan/End-to-End-NLP-Project--Chatbot-",
    // },
    {
      "title": "Customer Churn Prediction with NLP Insights",
      "description": "A predictive model to identify customers at risk of churning by leveraging insights from customer feedback and interactions. Using NLP techniques, this project analyzes sentiment and extracts key themes to enhance predictive accuracy and provide actionable insights for reducing churn rates. Deployed with Streamlit for easy access to predictions and insights.",
      "imageUrl": "https://www.voxco.com/wp-content/uploads/2021/09/Everything-you-need-to-know-about-Customer-Churn1.jpg",
      "link": "https://github.com/MuhammadUmerKhan/Customer-Churn-Prediction-with-NLP-Insights"
    }
    
  ]; 

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const visibleProjects = showMore ? projectData : projectData.slice(0, 4);

  return (
    <div className="bg-gradient-to-tr from-black via-gray-900 to-gray-600 flex flex-col items-center p-8 min-h-[calc(100vh-4rem)] animate-fadeIn">
      <h1 className="text-5xl font-extrabold text-white mb-6">My Projects</h1>

      {projectData.length === 0 ? (
        <div className="flex-grow flex justify-center items-center w-full">
          <div className="bg-gradient-to-br from-yellow-500 to-orange-500 p-6 rounded-lg shadow-xl text-center text-black">
            <h2 className="text-4xl font-bold mb-2">Soon Uploaded</h2>
            <p className="text-lg">Stay tuned! Exciting projects will be added here shortly.</p>
          </div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
            {visibleProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex justify-center">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-2 px-6 rounded-full shadow-md  hover:shadow-2xl hover:scale-110 transition duration-300"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {projectData.length > 4 && (
            <div className="mt-6">
              <button
                onClick={toggleShowMore}
                className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-2 px-6 rounded-full shadow-md  hover:shadow-2xl hover:scale-110 transition duration-300"
              >
                {showMore ? "Less" : "More"}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Projects;