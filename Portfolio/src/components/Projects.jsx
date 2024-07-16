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
    <div className="bg-[#070f2b] text-white min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold tracking-tight text-white text-center mb-8">Projects</h2>
      <div className="bg-[#1f1e61] p-8 rounded-lg shadow-lg w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-[#1b1a55] p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
              style={{ height: '250px' }}
            >
              <div
                className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75"
                style={{ height: '50%' }}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="mt-2 flex flex-col">
                <h3 className="text-lg font-bold">
                  <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {project.title}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
