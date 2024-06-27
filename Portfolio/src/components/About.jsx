// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg text-center max-w-2xl">
        Here is a brief introduction about myself. I am a passionate developer with skills in various technologies including React, Node.js, and more. I enjoy building visually appealing and highly functional web applications.
      </p>
    </div>
  );
};

export default About;
