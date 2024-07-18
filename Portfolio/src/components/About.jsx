import React from 'react';
import { ReactSVG } from 'react-svg';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-darkest text-lightest montserrat-custom space-y-8 p-8">
      {/* First Row */}
      <div className="flex flex-row items-center justify-center space-x-8 w-full max-w-4xl">
        <div className="w-1/2 flex justify-center">
          <div className="image-circle" style={{ backgroundImage: 'url(./assest/test.jpg)' }}></div>
        </div>
        <div className="w-1/2 flex justify-center">
          <div className="text-rectangle p-4 bg-lightest">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-lg">
              Here is a brief introduction about myself. I am a passionate developer with skills in various technologies including React, Node.js, and more. I enjoy building visually appealing and highly functional web applications.
            </p>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-row items-center justify-center space-x-8 w-full max-w-4xl">
        <div className="w-1/2 flex justify-center">
          <div className="text-rectangle p-4 bg-lightest">
            <h1 className="text-xl font-bold mb-4">About My Skills</h1>
            <p className="text-lg">
              I am skilled in frontend development with HTML, CSS, JavaScript, and React, creating responsive and dynamic web applications. On the backend, I excel in Node.js, Express, and MySQL for building robust server-side solutions. My design expertise includes using Canva and Figma to craft visually appealing interfaces. Additionally, I have experience in AI with TensorFlow and Scikit-learn, enabling me to integrate intelligent features into my projects.
            </p>
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <div className="image-circle" style={{ backgroundImage: 'url(./assest/stack-apps-layers-svgrepo-com.svg)' }}></div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="w-full max-w-4xl mt-8">
        <h2 className="text-3xl font-bold text-center mb-4">Tech Stack</h2>
        <hr className="border-lightest border-2 mb-8" />
      </div>

      {/* Third Section with 4 Divs */}
      <div className="grid grid-cols-2 gap-8 w-full max-w-4xl">
        <div className="text-rectangle p-4 bg-lighter">
          <div className="flex flex-col space-y-4">
            <div className="flex justify-center space-x-8">
              <div className="relative image-circle-small bg-lightest flex items-center justify-center">
                <ReactSVG src="./assest/react-svgrepo-com.svg" className="svg-icon z-0" />
                <div className="technology-info absolute bg-lightest p-4 rounded-lg text-sm opacity-0 transition-opacity duration-300 hover:opacity-100 z-10">
                  <p>React.js - A JavaScript library for building user interfaces, particularly single-page applications.</p>
                </div>
              </div>
              <div className="relative image-circle-small bg-lightest flex items-center justify-center">
                <ReactSVG src="./assest/node-js-svgrepo-com.svg" className="svg-icon z-0" />
                <div className="technology-info absolute bg-lightest p-4 rounded-lg text-sm opacity-0 transition-opacity duration-300 hover:opacity-100 z-10">
                  <p>Node.js - A runtime environment that allows JavaScript to be used for server-side scripting.</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-8">
              <div className="relative image-circle-small bg-lightest flex items-center justify-center">
                <ReactSVG src="./assest/nextjs-icon.svg" className="svg-icon z-0" />
                <div className="technology-info absolute bg-lightest p-4 rounded-lg text-sm opacity-0 transition-opacity duration-300 hover:opacity-100 z-10">
                  <p>Next.js - A React framework for building server-side rendered and static web applications.</p>
                </div>
              </div>
              <div className="relative image-circle-small bg-lightest flex items-center justify-center">
                <ReactSVG src="./assest/mysql-logo-svgrepo-com.svg" className="svg-icon z-0" />
                <div className="technology-info absolute bg-lightest p-4 rounded-lg text-sm opacity-0 transition-opacity duration-300 hover:opacity-100 z-10">
                  <p>MySQL - An open-source relational database management system.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-rectangle p-4 bg-lighter">
          <div className="flex flex-col space-y-4">
            <div className="flex justify-center space-x-8">
              <div className="relative image-circle-small bg-lightest flex items-center justify-center">
                <ReactSVG src="./assest/c.svg" className="svg-icon z-0" />
                <div className="technology-info absolute bg-lightest p-4 rounded-lg text-sm opacity-0 transition-opacity duration-300 hover:opacity-100 z-10">
                  <p>C - A general-purpose programming language that is extremely popular, simple, and flexible.</p>
                </div>
              </div>
              <div className="relative image-circle-small bg-lightest flex items-center justify-center">
                <ReactSVG src="./assest/Tensorflow_logo.svg" className="svg-icon z-0" />
                <div className="technology-info absolute bg-lightest p-4 rounded-lg text-sm opacity-0 transition-opacity duration-300 hover:opacity-100 z-10">
                  <p>TensorFlow - An open-source machine learning framework.</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-8">
              <div className="relative image-circle-small bg-lightest flex items-center justify-center">
                <ReactSVG src="/path-to-your-image-9.svg" className="svg-icon z-0" />
                <div className="technology-info absolute bg-lightest p-4 rounded-lg text-sm opacity-0 transition-opacity duration-300 hover:opacity-100 z-10">
                  <p>Technology 9 - Description of Technology 9.</p>
                </div>
              </div>
              <div className="relative image-circle-small bg-lightest flex items-center justify-center">
                <ReactSVG src="/path-to-your-image-10.svg" className="svg-icon z-0" />
                <div className="technology-info absolute bg-lightest p-4 rounded-lg text-sm opacity-0 transition-opacity duration-300 hover:opacity-100 z-10">
                  <p>Technology 10 - Description of Technology 10.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
