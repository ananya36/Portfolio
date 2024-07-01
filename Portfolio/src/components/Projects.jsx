import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Facial Similarity Recognition Model',
      description: 'Facial Similarity Recognition System project focuses on the development and implementation of a cutting-edge facial recognition system tailored specifically for security applications. Leveraging advanced algorithms, the system swiftly analyzes input images to return the most similar picture from any dataset the model is trained on, enhancing security measures in various sectors.',
      imageUrl: 'https://miro.medium.com/v2/resize:fit:2000/1*DPNoWJ3Au35Fw58Sn2oj1w.png',
      projectUrl: 'https://example.com/facial-similarity-project',
    },
    {
      title: 'Disease Predictor System',
      description: 'NLP Disease Predictor is a model designed to revolutionize the diagnosis process by seamlessly translating symptoms into potential diseases. Leveraging the power of Natural Language Processing, our model analyzes textual symptom inputs provided by users and accurately predicts the corresponding disease or diseases, aiding healthcare professionals and individuals in making informed decisions about their health.',
      imageUrl: 'https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_776422_17123165547518811.jpg',
      projectUrl: 'https://github.com/ananya36/Disease_Predictor',
    },
    {
      title: 'QR Code Generator',
      description: 'A simple command line QR code generator created via node modules File System (Native), inquirer, qr-image',
      imageUrl: 'https://www.qrstuff.com/images/default_qrcode.png',
      projectUrl: 'https://github.com/ananya36/Disease_Predictor',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-2 md:p-2 lg:p-3 hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
            <img src={project.imageUrl} alt={project.title} className="w-full h-24 md:h-32 lg:h-40 object-cover mb-2 rounded-lg" />
            <h2 className="text-lg font-bold mb-1">{project.title}</h2>
            <p className="text-gray-700 text-xs md:text-sm lg:text-sm">{project.description}</p>
            {project.projectUrl && (
              <div className="mt-2">
                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-xs md:text-sm lg:text-sm">View Project</a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
