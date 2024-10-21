import React from "react";

const Projects = () => {
  const projectData = [
    {
      title: "Customer Segmentation Using Clustering Models 🛍️🛒🛒",
      description:
        "The user is performing customer segmentation by clustering customer records from a grocery firm's database. This involves dividing customers into groups based on similarities to optimize their significance to the business. The segmentation will help modify products to meet the distinct needs and behaviors of different customer groups, addressing their specific concerns.",
      imageUrl:
        "https://media.istockphoto.com/id/1021543926/photo/business-recruitment-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=w49S6BunBxEo4RKn90CF9lHMC2aktZemJG1Zu97Z3s4=", // Replace with your project image URL
      link: "https://github.com/MuhammadUmerKhan/DEP/tree/main/TASK%201", // Replace with the actual project link
    },
    {
      title: "Chatbot for Food Ordering",
      description:
        "This project is a food ordering chatbot developed using Dialogflow and FastAPI. It enables users to interactively browse food items, place orders, track their status, and calculate prices. The chatbot integrates with a MySQL database to manage order details, ensuring a seamless experience. With secure communication via ngrok, the chatbot provides a user-friendly platform for efficient food ordering.",
      imageUrl:
        "https://media.istockphoto.com/id/1386672154/photo/using-system-ai-chatbot-in-computer-or-mobile-application-to-uses-artificial-intelligence.webp?a=1&b=1&s=612x612&w=0&k=20&c=6xp1y22QnGjuRX4EUUnTQKZj1cNpAhfYNefMZVCct9c=", // Replace with your project image URL
      link: "https://github.com/MuhammadUmerKhan/End-to-End-NLP-Project--Chatbot-", // Replace with the actual project link
    },
  ];

  return (
    <div className="bg-gradient-to-tr from-black via-gray-900 to-gray-600 min-h-screen flex flex-col items-center p-8 animate-fadeIn">
      <h1 className="text-5xl font-extrabold text-white mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        {projectData.map((project, index) => (
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
    </div>
  );
};

export default Projects;
