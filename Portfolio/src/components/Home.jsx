import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';

const Home = () => {
  const circleSpring = useSpring({
    from: { opacity: 0, transform: 'translateX(50px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { tension: 200, friction: 20 },
  });

  const textSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 200, friction: 20 },
    delay: 300,
  });

  const linkSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 200, friction: 20 },
    delay: 500,
  });

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-blue-900 text-gray-100 p-8">
      <animated.div
        style={circleSpring}
        className="w-52 h-52 rounded-full overflow-hidden mb-6 md:mb-0 md:mr-8"
      >
        <img
          src="./assest/test.jpg"
          alt="Your Avatar"
          className="w-full h-full object-cover rounded-full p-4"
        />
      </animated.div>

      <animated.div style={textSpring} className="text-center p-6 bg-blue-800 rounded-lg shadow-md md:w-1/2 md:mt-8">
        <p className="text-lg mb-4 break-words">
          Hello! I'm Ananya Bundela, pursuing B.Tech CSE in AI/ML. I'm passionate about web & app development, transforming ideas into digital reality.
        </p>
      </animated.div>

      <div className="flex flex-col justify-center items-end space-y-4 md:space-y-8 mt-8 md:mt-0 md:ml-8">
        <Link to="/about" className="group">
          <animated.div
            style={linkSpring}
            className="w-60 h-32 bg-blue-700 text-gray-100 rounded-lg flex flex-col items-center justify-center shadow-md border border-gray-300 group-hover:bg-blue-800 group-hover:text-white transition p-4"
          >
            <span className="text-lg font-bold">About</span>
            <span className="text-sm">Learn more about me</span>
          </animated.div>
        </Link>
        <Link to="/contact" className="group">
          <animated.div
            style={linkSpring}
            className="w-60 h-32 bg-blue-700 text-gray-100 rounded-lg flex flex-col items-center justify-center shadow-md border border-gray-300 group-hover:bg-blue-800 group-hover:text-white transition p-4"
          >
            <span className="text-lg font-bold">Contact</span>
            <span className="text-sm">Get in touch with me</span>
          </animated.div>
        </Link>
        <Link to="/resume" className="group">
          <animated.div
            style={linkSpring}
            className="w-60 h-32 bg-blue-700 text-gray-100 rounded-lg flex flex-col items-center justify-center shadow-md border border-gray-300 group-hover:bg-blue-800 group-hover:text-white transition p-4"
          >
            <span className="text-lg font-bold">Resume</span>
            <span className="text-sm">View my resume</span>
          </animated.div>
        </Link>
        <Link to="/projects" className="group">
          <animated.div
            style={linkSpring}
            className="w-60 h-32 bg-blue-700 text-gray-100 rounded-lg flex flex-col items-center justify-center shadow-md border border-gray-300 group-hover:bg-blue-800 group-hover:text-white transition p-4"
          >
            <span className="text-lg font-bold">Projects</span>
            <span className="text-sm">Explore my projects</span>
          </animated.div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
