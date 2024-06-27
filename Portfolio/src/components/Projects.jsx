// src/components/Projects.jsx
import React from 'react';

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-2xl font-bold mb-2">Project 1</h2>
          <p className="text-gray-700">Description of project 1...</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-2xl font-bold mb-2">Project 2</h2>
          <p className="text-gray-700">Description of project 2...</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-2xl font-bold mb-2">Project 3</h2>
          <p className="text-gray-700">Description of project 3...</p>
        </div>
        {/* Add more projects as needed */}
      </div>
    </div>
  );
};

export default Projects;
